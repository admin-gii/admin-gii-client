import { Button, Classes, Menu, MenuDivider, MenuItem, Switch } from "@blueprintjs/core";
import { Popover2 } from "@blueprintjs/popover2";
import { DataTableColumnProps } from "@components/data-table/data-table.props";
import { SmallMenu } from "@styles/small-menu";

/**
 * <Users /> props
 */
export type UsersProps = {

}

export const useUsersProps = (_?: UsersProps) => {
  const tableData = new Array(15).fill({}).map((_, index) => ({
    id: index + 1,
    email: `email-${index}@test.com`,
    phone: `+998 99 987 45 ${index}`,
    firstName: `Ivan ${index}`,
    lastName: `Ivanov ${index}`,
    status : index % 2 === 0,
    role: { id: 1, name: 'Admin', slug: 'admin' }
  }));

  const columns: DataTableColumnProps[] = [
    { index: 'id', name: 'ID', sorter: () => {}, width: 55 },
    { index: 'email', name: 'E-mail', sorter: () => {} },
    { index: 'phone', name: 'Telefon', sorter: () => {} },
    { index: 'firstName', name: 'Ism', sorter: () => {} },
    { index: 'lastName', name: 'Familiya', sorter: () => {} },
    {
      index: 'status',
      name: 'Status',
      render: item => <Switch label='Holati' checked={item.status} />
    },
    {
      index: 'role',
      name: 'Role',
      render: item => item.role.name
    },
    {
      index: 'action',
      name: '',
      width: 55,
      render: item => {
        const ActionsMenu = (
          <SmallMenu>
            <Menu>
              <MenuItem text='Edit' icon='edit' />
              <MenuDivider />
              <MenuItem text='Delete' icon='trash' />
            </Menu>
          </SmallMenu>
        );
        return (
          <Popover2 content={ActionsMenu} placement='bottom-end'>
            <Button className={Classes.MINIMAL} small icon='more' />
          </Popover2>
        );
      }
    }
  ];

  return {
    tableData,
    columns
  }
};

