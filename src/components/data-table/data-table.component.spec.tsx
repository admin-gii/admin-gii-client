import { customRender } from '@test-utils';
import { DataTable } from './data-table.component';
import { dataTableMockProps } from './data-table.stories';

describe('DataTable', () => {
  test('Should render DataTable component', async () => {
    const { asFragment } = customRender(
      <DataTable {...dataTableMockProps} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});