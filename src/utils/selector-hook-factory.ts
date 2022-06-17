import { RootState } from '@store';
import { useSelector } from 'react-redux';

export type ValueOf<T> = T[keyof T];

export const selectorHookFactory = (module: keyof RootState) => <T>(selector: string) =>
  useSelector<RootState, T>(state =>
    selector.split('.').reduce((acc, key: keyof ValueOf<RootState>) => {
      try {
        return acc[key];
      } catch (error) {
        throw new Error('[selectorHookFactory] Invalid selector');
      }
    }, state[module])
  );
