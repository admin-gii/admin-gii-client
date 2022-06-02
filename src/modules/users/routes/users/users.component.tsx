import { DataTable } from '@components/data-table';
import { hoc } from '@utils/hoc';
import { useUsersProps } from './users.props';
import { UsersContainer } from './users.style';

/**
 * <Users />
 */
export const Users = hoc(useUsersProps, ({ columns, tableData }) => (
  <UsersContainer>
    <DataTable columns={columns} data={tableData} />
  </UsersContainer>
));
