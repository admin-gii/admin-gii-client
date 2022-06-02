import { hoc } from '@utils/hoc';
import { useSettingsProps } from './settings.props';
import { SettingsContainer } from './settings.style';

/**
 * <Settings />
 */
export const Settings = hoc(useSettingsProps, () => (
  <SettingsContainer>
    Sozlamalar
  </SettingsContainer>
));
