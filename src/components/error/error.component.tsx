import { hoc } from '@utils/hoc';
import { useErrorProps } from './error.props';
import { ErrorContainer } from './error.style';

/**
 * <Error />
 */
export const Error = hoc(useErrorProps, ({status, text}) => (
  <ErrorContainer>
    <h1>{status}</h1>
    <p>{text}</p>
  </ErrorContainer>
));
