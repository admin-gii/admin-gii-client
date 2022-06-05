import {
  Button,
  Classes,
  Menu,
  MenuDivider,
  MenuItem
} from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { DataTableColumnProps } from '@components/data-table/data-table.props';
import { SmallMenu } from '@styles/small-menu';
import { useHistory } from 'react-router-dom';

/**
 * <FormTypes /> props
 */
export type FormTypesProps = {};

export const useFormTypesProps = (_?: FormTypesProps) => {
  const history = useHistory();

  const tableData = new Array(15).fill({}).map((_, index) => ({
    id: index + 1,
    name: `Page-${index}`,
    slug: `page-${index}`
  }));

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

  return {
    columns,
    tableData,
    history
  };
};
