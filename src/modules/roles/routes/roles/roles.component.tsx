import { Button, H3 } from '@blueprintjs/core';
import { DataTable } from '@components/data-table';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useRolesProps } from './roles.props';
import { RolesContainer } from './roles.style';

/**
 * <Roles />
 */
export const Roles = hoc(useRolesProps, ({ columns, tableData, history }) => (
  <RolesContainer>
    <Button
      intent='primary'
      icon='add'
      onClick={() => history.push('/roles/action?add=new')}
    >
      Qo'shish
    </Button>
    <Space height='20px' />
    <H3>Rollar</H3>
    <DataTable columns={columns} data={tableData} />
  </RolesContainer>
));
