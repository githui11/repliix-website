
import React from 'react';

const TableComparison = ({ title, items, columns }) => {
    return (
        <div className="overflow-x-auto my-8 border border-white/10 rounded-xl">
            <h3 className="text-xl font-bold bg-white/5 p-4 border-b border-white/10 text-cyan-400">
                {title}
            </h3>
            <table className="w-full text-left text-sm text-gray-300">
                <thead className="text-xs uppercase bg-white/5 text-gray-400">
                    <tr>
                        {columns.map((col, idx) => (
                            <th key={idx} scope="col" className="px-6 py-4 font-semibold">
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                    {items.map((item, rowIdx) => (
                        <tr key={rowIdx} className="hover:bg-white/5 transition-colors">
                            {Object.values(item).map((val, colIdx) => (
                                <td key={colIdx} className="px-6 py-4 whitespace-nowrap">
                                    {colIdx === 0 ? (
                                        <span className="font-medium text-white">{val}</span>
                                    ) : (
                                        val
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableComparison;
