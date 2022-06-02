import { hoc } from '@utils/hoc';
import { useDashboardProps } from './dashboard.props';
import { DashboardContainer } from './dashboard.style';

/**
 * <Dashboard />
 */
export const Dashboard = hoc(useDashboardProps, () => (
  <DashboardContainer>
    Boshqaruv paneli
  </DashboardContainer>
));
