import { ErrorResponseAdapter } from './error-response.adapter';
import { OperatorFunction, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const adaptError: <T>(
  adapter: ErrorResponseAdapter
) => OperatorFunction<T, T> = (adapter) =>
  pipe(catchError((error) => throwError(() => adapter.adapt(error))));

export default adaptError;
