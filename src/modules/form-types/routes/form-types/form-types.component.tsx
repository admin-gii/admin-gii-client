import { Button, H3 } from '@blueprintjs/core';
import { DataTable } from '@components/data-table';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useFormTypesProps } from './form-types.props';
import { FormTypesContainer } from './form-types.style';

/**
 * <FormTypes />
 */
export const FormTypes = hoc(
  useFormTypesProps,
  ({ columns, tableData, history }) => (
    <FormTypesContainer>
      <Button
        intent='primary'
        icon='add'
        onClick={() => history.push('/form-types/action?add=new')}
      >
        Qo'shish
      </Button>
      <Space height='20px' />
      <H3>Forma turlari</H3>
      <DataTable columns={columns} data={tableData} />
    </FormTypesContainer>
  )
);
