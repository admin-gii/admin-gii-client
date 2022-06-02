import { Button, H3 } from '@blueprintjs/core';
import { DataTable } from '@components/data-table';
import { Space } from '@styles/space';
import { hoc } from '@utils/hoc';
import { useDomainsProps } from './domains.props';
import { DomainsContainer } from './domains.style';

/**
 * <Domains />
 */
export const Domains = hoc(useDomainsProps, ({ columns, tableData, history }) => (
  <DomainsContainer>
    <Button intent='primary' icon='add' onClick={() => history.push('/domains/action?add=new')}>
      Qo'shish
    </Button>
    <Space height='20px' />
    <H3>Ma'lumot turlari</H3>
    <DataTable columns={columns} data={tableData} />
  </DomainsContainer>
));
