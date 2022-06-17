import {
  Button,
  Classes,
  Menu,
  MenuDivider,
  MenuItem
} from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { DataTableColumnProps } from '@components/data-table/data-table.props';
import { rolesActions, useRolesList } from '@roles/store';
import { useAppDispatch } from '@store';
import { SmallMenu } from '@styles/small-menu';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
/**
 * <Roles /> props
 */
export type RolesProps = {};

export const useRolesProps = (_?: RolesProps) => {
  const history = useHistory()
  const dispatch = useAppDispatch();
  const roles = useRolesList()

  const columns: DataTableColumnProps[] = [
    { index: 'id', name: 'ID', sorter: () => {}, width: 55 },
    { index: 'name', name: 'Nomi', sorter: () => {} },
    { index: 'slug', name: 'Slag', sorter: () => {} },
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

  useEffect(() => {
    dispatch(rolesActions.fetchRoles())
  }, [dispatch])

  return {
    tableData: roles,
    columns,
    history
  };
};
