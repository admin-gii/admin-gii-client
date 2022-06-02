import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DataTable } from './data-table.component';
import '@styles/index.css';
import { DataTableProps } from './data-table.props';
import { Popover2 } from '@blueprintjs/popover2';
import { Button, Classes, Menu, MenuDivider, MenuItem } from '@blueprintjs/core';
import { SmallMenu } from '@styles/small-menu';

const calculateAge = (year: string) => {
  const date = new Date(year);
  const now = new Date();
  return now.getFullYear() - date.getFullYear();
};

export const dataTableMockProps: DataTableProps = {
  columns: [
    { index: 'id', name: 'ID', sorter: () => {}, width: 55 },
    { index: 'name', name: 'Name', sorter: () => {} },
    {
      index: 'age',
      name: 'Age',
      render: item => calculateAge(item.year),
      clipboardData: item => calculateAge(item.year)
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
  ],
  data: new Array(15).fill({}).map((_, index) => ({
    id: index + 1,
    name: `John-${index}`,
    year: `19${index < 10 ? `0${index}` : index}-02-02`
  }))
};

export default {
  title: 'Common/DataTable',
  component: DataTable
} as ComponentMeta<typeof DataTable>;

const Template: ComponentStory<typeof DataTable> = args => (
  <DataTable {...args} />
);

export const DataTableInitial = Template.bind({});
DataTableInitial.args = dataTableMockProps;
