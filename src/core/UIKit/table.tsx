import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel } from "@tanstack/react-table";
import { Icon } from "./icon";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import SortFilterComponent from "./sorting-component";
import { Guid } from 'guid-typescript';

type Props = {
    data: any[];
    columns: ExtendedColumnDef<any, any>[];
    class?: string;
    pageSize?: number;
    onRowClick?: (value: any, event?: any) => void;
}

export type ExtendedColumnDef<TData, T> = ColumnDef<TData, T> & {
    canSort?: boolean;
    filterOptions?: Filter[];
}

export type Filter = {
    value?: number;
    title: string;
}

const viewCountColumn = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 50, label: "50" },
    { value: 100, label: "100" },
];

export const Table = observer((props: Props) => {
    const [localData, setLocalData] = useState<any[]>([]);
    const [sortConfig, setSortConfig] = useState<{ columnId: string, direction: 'asc' | 'desc' } | null>(null);
    const [activeColumn, setActiveColumn] = useState<string | null>(null);
    const [pageSize, setPageSize] = useState(props.pageSize ?? 4);

    useEffect(() => {
        setLocalData(props.data.slice());
    }, [props.data]);

    const handleSort = (columnId: string, direction: 'asc' | 'desc') => {
        setSortConfig({ columnId, direction });
        const sortedData = [...localData].sort((a, b) => {
            if (direction === 'asc') {
                return a[columnId] > b[columnId] ? 1 : -1;
            }
            return a[columnId] < b[columnId] ? 1 : -1;
        });
        setLocalData(sortedData);
    };

    const handleFilter = (columnId: string, filterValues: Record<string | number, boolean>) => {
        const filteredData = props.data.filter(item => {
            return Object.entries(filterValues).every(([key, isSelected]) => {
                return isSelected || item[columnId] != key;
            });
        });
        setLocalData(filteredData);
    };

    const handleHeaderClick = (columnId: string) => {
        setActiveColumn(prev => (prev === columnId ? null : columnId));
    };

    const table = useReactTable({
        data: localData,
        columns: props.columns,
        initialState: {
            pagination: {
                pageSize: pageSize,
                pageIndex: 0,
            }
        },
        getPaginationRowModel: getPaginationRowModel(),
        getCoreRowModel: getCoreRowModel(),
        autoResetPageIndex: false,
    });

    const [switchViewCounter, setSwitchViewCounter] = useState(false);
    const [viewCount, setViewCount] = useState(props.pageSize);
    const start = table.getState().pagination.pageIndex * pageSize;
    const end = start + table.getPaginationRowModel().rows.length;
    const totalElements = localData.length;

    return (
        <>
            <table className={`w-full border border-[#EFF4FA] mt-4 ${props.class}`}>
                <thead className="bg-[#EFF4FA]">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={Guid.create().toString()} className="flex w-full">
                            {headerGroup.headers.map(header => (
                                <th
                                    className="flex items-center justify-center 2xl:text-[15px] text-[13px] font-semibold text-[#8F9BB3] mt-5 py-3 px-5 first:pl-16 last:pr-10 relative"
                                    key={Guid.create().toString()}
                                    style={{ flex: header.getSize() }}
                                >
                                    <div className="cursor-pointer flex items-center">
                                        <span onClick={() => handleHeaderClick(header.id)}>
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                        </span>
                                        {(header.column.columnDef as ExtendedColumnDef<any, any>).canSort || (header.column.columnDef as ExtendedColumnDef<any, any>).filterOptions ? (
                                            <Icon
                                                width={16}
                                                height={16}
                                                systemName={`arrow-down`}
                                                className={`transition-transform duration-300 ${activeColumn === header.id ? 'rotate-180' : ''} ml-2`}
                                            />
                                        ) : null}
                                    </div>
                                    {(activeColumn === header.id && ((header.column.columnDef as ExtendedColumnDef<any, any>).canSort || (header.column.columnDef as ExtendedColumnDef<any, any>).filterOptions?.length! > 0)) && (
                                        <SortFilterComponent
                                            column={header.column.columnDef as ExtendedColumnDef<any, any>}
                                            onSort={handleSort}
                                            onFilter={(_, filters) => handleFilter(header.id, filters)}
                                            filterOptions={(header.column.columnDef as ExtendedColumnDef<any, any>).filterOptions}
                                        />
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="bg-white">
                    {table.getPaginationRowModel().rows.map(row => (
                        <tr key={Guid.create().toString()} className="flex w-full cursor-pointer" onClick={(e) => { e.stopPropagation(); props.onRowClick && props.onRowClick(row.original, e) }}>
                            {row.getVisibleCells().map(cell => (
                                <td
                                    className="2xl:text-[14px] text-[12px] text-center py-6 px-5 first:pl-16 last:pr-10"
                                    key={Guid.create().toString()}
                                    style={{ flex: cell.column.getSize() }}
                                >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <div className="w-full pb-5 mt-5">
                    <div className="flex flex-row items-center gap-5 justify-center">

                        <span className="text-[#717171] text-[14px] flex items-center">
                            Количество элементов на странице
                        </span>

                        <div className="relative">
                            <div className="flex items-center cursor-pointer text-[#717171] flex border-b-[1px] border-[#717171]" onClick={() => setSwitchViewCounter(!switchViewCounter)}>
                                {viewCount} <Icon systemName="arrow-triangle" className={`ml-3 mb-1 ${switchViewCounter && "rotate-180"}`} />
                            </div>
                            <div className={`flex flex-col absolute bottom-[100%] right-0 px-[14px] py-[12px] bg-stone-50 rounded-lg shadow-[0_0px_15px_-3px_rgb(0_0_0_/_0.2)] z-10 ${!switchViewCounter && "hidden"}`}>
                                <div className="flex flex-col gap-1 cursor-pointer">
                                    {viewCountColumn.map((count) => (
                                        <span key={count.value} className="cursor-pointer" onClick={() => {
                                            setPageSize(count.value);
                                            setViewCount(count.value)
                                            setSwitchViewCounter(!switchViewCounter);
                                            table.setPageSize(count.value);
                                        }}>
                                            {count.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <span className="text-[#717171] text-[14px] flex justify-center">
                            {start ? start + 1 : 0}-{end} из {totalElements}
                        </span>

                        <div className="border border-gray-300 rounded-md p-2 flex items-center cursor-pointer" onClick={() => { table.getCanPreviousPage() && table.previousPage(); }}>
                            <Icon
                                width={12}
                                height={12}
                                systemName={`table-arrow${table.getCanPreviousPage() ? '-active' : ''}`}
                                className="rotate-180"
                            />
                        </div>
                        <div className="border border-gray-300 rounded-md p-2 flex items-center cursor-pointer" onClick={() => { table.getCanNextPage() && table.nextPage(); }}>
                            <Icon
                                width={12}
                                height={12}
                                systemName={`table-arrow${table.getCanNextPage() ? '-active' : ''}`}
                            />
                        </div>
                    </div>
                </div>
            </table>
        </>
    );
});
