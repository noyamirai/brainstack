type Props = {
    amount: number;
};

const TableSkeleton: React.FC<Props> = ({ amount }) => {
    return (
        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: amount }).map((_, index) => (
                        <tr key={index}>
                            <td>
                                <span className="skeleton">Item name</span>
                            </td>
                            <td>
                                <span className="skeleton">Description</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableSkeleton;
