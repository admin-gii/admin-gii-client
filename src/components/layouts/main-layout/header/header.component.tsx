import {
  Alignment,
  Button,
  Classes,
  InputGroup,
  Menu,
  MenuItem,
  Navbar,
  NavbarGroup,
  NavbarHeading
} from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { hoc } from '@utils/hoc';
import { useHeaderProps } from './header.props';

/**
 * <Header />
 */
export const Header = hoc(useHeaderProps, () => {
  const ProfileSettingsMenu = (
    <Menu>
      <MenuItem icon='unlock' text='Chiqish' />
    </Menu>
  );
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Dashboard</NavbarHeading>
        <InputGroup leftIcon='search' placeholder='Qidirish' />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className={Classes.MINIMAL} icon='notifications' />
        <Popover2 content={ProfileSettingsMenu} placement='bottom-end'>
          <Button
            className={Classes.MINIMAL}
            icon='user'
            rightIcon='caret-down'
            text='Foydalanuvchi sozlamalari'
          />
        </Popover2>
      </NavbarGroup>
    </Navbar>
  );
});
