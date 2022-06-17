import { useProfileSelector } from "@store/common";

/**
 * <Header /> props
 */
export type HeaderProps = {

}

export const useHeaderProps = (_?: HeaderProps) => {
  const profile = useProfileSelector()

  return {
    profile
  }
};

