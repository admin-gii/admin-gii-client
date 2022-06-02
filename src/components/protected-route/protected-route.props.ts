import { useProfileSelector } from '@store/common';
import { ComponentType } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export type ProtectedRouteProps = {
  path: string;
  component: ComponentType<RouteComponentProps<any>> | ComponentType;
}

/**
 * <ProtectedRoute /> props
 */
export const useProtectedRouteProps = (props: ProtectedRouteProps) => {
  const profile = useProfileSelector();
  return {
    profile
  };
};
