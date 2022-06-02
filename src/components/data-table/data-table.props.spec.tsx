import { renderHook } from '@testing-library/react-hooks';
import { useDataTableProps } from './data-table.props';
import { dataTableMockProps } from './data-table.stories';

describe('DataTable', () => {
  test('data-table props hook properties', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { result } = renderHook(() => useDataTableProps(dataTableMockProps));
  });
})
