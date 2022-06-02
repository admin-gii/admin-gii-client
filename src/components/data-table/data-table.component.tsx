import { Column, SelectionModes, Table2 } from '@blueprintjs/table';
import { hoc } from '@utils/hoc';
import { useDataTableProps } from './data-table.props';
import { DataTableContainer } from './data-table.style';

const MIN_COLUMN_WIDTH = 55;
const MIN_ROW_HEIGHT = 20;

/**
 * <DataTable />
 */
export const DataTable = hoc(
  useDataTableProps,
  ({
    columns,
    numRows,
    cellRenderer,
    columnHeaderCellRenderer,
    selectionModes,
    numFrozenColumns,
    numFrozenRows,
    getCellClipboardData,
    renderBodyContextMenu,
    contextMenu,
    enableColumnReordering,
    enableColumnResizing,
    onColumnsReordered,
    columnWidths
  }) => (
    <DataTableContainer>
      <Table2
        enableColumnReordering={enableColumnReordering}
        enableColumnResizing={enableColumnResizing}
        bodyContextMenuRenderer={contextMenu || renderBodyContextMenu}
        numRows={numRows}
        selectionModes={selectionModes || SelectionModes.ROWS_ONLY}
        numFrozenColumns={numFrozenColumns}
        numFrozenRows={numFrozenRows}
        onColumnsReordered={onColumnsReordered}
        getCellClipboardData={getCellClipboardData}
        minColumnWidth={MIN_COLUMN_WIDTH}
        columnWidths={columnWidths}
        rowHeights={new Array(numRows).fill(MIN_ROW_HEIGHT)}
        minRowHeight={MIN_ROW_HEIGHT}
      >
        {columns.map(column => (
          <Column
            key={column.index}
            cellRenderer={cellRenderer.bind(null, column)}
            columnHeaderCellRenderer={columnHeaderCellRenderer.bind(
              null,
              column
            )}
          />
        ))}
      </Table2>
    </DataTableContainer>
  )
);
