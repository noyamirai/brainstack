type Props = {
    blok: {
        table: {
            thead: [{ value: string }];
            tbody: [{ body: { value: string }[] }];
        };
    };
};

const DataTable: React.FC<Props> = ({ blok }) => {
    return (
        <>
            <div className="table-wrapper">
                <table className="table">
                    <thead>
                        <tr>
                            {blok.table.thead.map((header, index) => (
                                <th key={index}>{header.value}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {blok.table.tbody.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.body.map((cell, cellIndex) => (
                                    <td key={cellIndex}>{cell.value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DataTable;
