import { hoc } from '@utils/hoc';
import { useRolesProps } from './roles.props';
import { RolesContainer } from './roles.style';

/**
 * <Roles />
 */
export const Roles = hoc(useRolesProps, () => (
  <RolesContainer>
    Roles
  </RolesContainer>
));
