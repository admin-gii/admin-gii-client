import { IconName, Menu, MenuItem } from '@blueprintjs/core';
import { hoc } from '@utils/hoc';
import { Link } from 'react-router-dom';
import { useLeftSidebarProps } from './left-sidebar.props';

export type SidebarRoute = {
  path: string;
  name: string;
  icon: IconName;
  exact?: boolean;
}

const routes: SidebarRoute[] = [
  { path: '/', name: 'Boshqaruv paneli', icon: 'home', exact: true },
  { path: '/domains', name: `Ma'lumot turlari`, icon: 'control' },
  { path: '/form-types', name: 'Forma turlari', icon: 'form' },
  { path: '/users', name: 'Foydalanuvchilar', icon: 'user' },
  { path: '/roles', name: 'Rollar', icon: 'key' },
  { path: '/settings', name: 'Sozlamalar', icon: 'settings' },
]

/**
 * <LeftSidebar />
 */
export const LeftSidebar = hoc(useLeftSidebarProps, () => (
  <Menu>
    {
      routes.map(({ path, name, icon, exact }) => (
        <Link to={path} key={name + path + icon}>
          <MenuItem tagName='div' icon={icon} text={name} />
        </Link>
      ))
    }
  </Menu>
));
