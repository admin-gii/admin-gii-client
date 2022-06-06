import { DataTable } from '@components/data-table';
import { Button } from '@blueprintjs/core'
import { hoc } from '@utils/hoc';
import { Space } from '@styles/space';
import { useUsersProps } from './users.props';
import { UsersContainer } from './users.style';

/**
 * <Users />
 */
export const Users = hoc(useUsersProps, ({ columns, tableData, history }) => (
  <UsersContainer>
      <Button
        intent='primary'
        icon='add'
        onClick={() => history.push('/users/action?add=new')}
      >
        Qo'shish
      </Button>
    <Space height='20px' />
    <DataTable  columns={columns} data={tableData} />
  </UsersContainer>
));
