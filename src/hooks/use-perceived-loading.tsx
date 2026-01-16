import { useEffect, useRef, useState } from "react";

const usePerceivedLoading = (
    isLoading: boolean,
    isError?: boolean,
    delay = 300,
    onFinish?: () => void
) => {
    const [visible, setVisible] = useState(false);
    const lastLoadingTime = useRef<number | null>(null);
    const prevLoading = useRef<boolean>(false);

    useEffect(() => {
        let timer: ReturnType<typeof setTimeout>;

        const loadingStarted = isLoading && !prevLoading.current;
        const loadingEnded = !isLoading && prevLoading.current;

        if (loadingStarted) {
            setVisible(true);
            lastLoadingTime.current = Date.now();
        }

        // if loading just ended (success OR error)
        if (loadingEnded) {
            const elapsed = lastLoadingTime.current
                ? Date.now() - lastLoadingTime.current
                : 0;
            const remaining = Math.max(delay - elapsed, 0);

            timer = setTimeout(() => {
                setVisible(false);
                onFinish?.();
            }, remaining);
        }

        // if an error occurs while not currently loading (rare edge case)
        if (!isLoading && isError && !prevLoading.current) {
            // ensure we clear visibility if something failed before loading toggled properly
            setVisible(false);
        }

        prevLoading.current = isLoading;

        return () => clearTimeout(timer);
    }, [isLoading, isError, delay, onFinish]);

    return visible;
};

export default usePerceivedLoading;
