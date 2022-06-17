/**
 * <DataTable /> props
 */

import { Menu, MenuItem } from '@blueprintjs/core';
import {
  Cell,
  ColumnHeaderCell,
  CopyCellsMenuItem,
  IMenuContext,
  RegionCardinality,
  TableLoadingOption
} from '@blueprintjs/table';
import { ReactNode, useMemo } from 'react';

export type DataTableTexts = {
  asc: string;
  desc: string;
  copy: string;
};

export type DataTableColumnProps = {
  index: string;
  copyIndex?: string;
  name: string;
  render?: (item: any, rowIndex?: number) => ReactNode;
  sorter?: (column: DataTableColumnProps) => void;
  clipboardData?: (item: any) => any;
  width?: number;
};

export type DataTableProps = {
  columns: DataTableColumnProps[];
  loadingOptions?: TableLoadingOption;
  data: any[];
  selectionModes?: RegionCardinality[];
  tableTexts?: DataTableTexts;
  numFrozenColumns?: number;
  numFrozenRows?: number;
  contextMenu?: (context: IMenuContext) => JSX.Element;
  enableColumnReordering?: boolean;
  enableColumnResizing?: boolean;
  onColumnsReordered?: (oldIndex: number, newIndex: number, length: number) => void;
};

const defaultTexts: DataTableTexts = {
  asc: 'Sort Asc',
  desc: 'Sort Desc',
  copy: 'Copy'
};

export const useDataTableProps = ({
  data,
  tableTexts = defaultTexts,
  columns
}: DataTableProps) => {
  const numRows = useMemo(() => data.length, [data]);
  const columnWidths = useMemo(() => columns.map(column => column.width), [columns]);

  const menuRenderer = (column: DataTableColumnProps) => {
    return (
      <Menu>
        <MenuItem
          icon='sort-asc'
          onClick={column.sorter.bind(null, 'asc')}
          text={tableTexts.asc}
        />
        <MenuItem
          icon='sort-desc'
          onClick={column.sorter.bind(null, 'desc')}
          text={tableTexts.desc}
        />
      </Menu>
    );
  };

  const cellRenderer = (column: DataTableColumnProps, rowIndex: number) => {
    const item = data[rowIndex];
    return (
      <Cell>
        {column.render ? column.render(item, rowIndex) : item[column.index]}
      </Cell>
    );
  };

  const columnHeaderCellRenderer = (column: DataTableColumnProps) => {
    return (
      <ColumnHeaderCell
        name={column.name}
        menuRenderer={
          column.sorter ? menuRenderer.bind(null, column) : undefined
        }
      />
    );
  };

  const getCellClipboardData = (rowIndex: number, columnIndex: number) => {
    const item = data[rowIndex];
    const column = columns[columnIndex];

    return item[column.clipboardData ? column.clipboardData(item) : column.index];
  };

  const renderBodyContextMenu = (context: IMenuContext) => {
    return (
      <Menu>
        <CopyCellsMenuItem
          context={context}
          getCellData={getCellClipboardData}
          text={defaultTexts.copy}
        />
      </Menu>
    );
  };

  return {
    numRows,
    cellRenderer,
    columnHeaderCellRenderer,
    getCellClipboardData,
    renderBodyContextMenu,
    columnWidths
  };
};
