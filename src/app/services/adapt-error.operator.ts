import { ErrorResponseAdapter } from './error-response.adapter';
import { OperatorFunction, pipe, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Rxjs operator function, that can be used in rxjs pipe
 * 
 * Example:
 * getQuestionaire(): Observable<Questionaire> {
 *   return this.api
 *     .get<Questionaire>(this.url)
 *     .pipe(adaptError(this.errorAdapter));
 * }
 */

const adaptError: <T>(
  adapter: ErrorResponseAdapter
) => OperatorFunction<T, T> = (adapter) =>
  pipe(catchError((error) => throwError(() => adapter.adapt(error))));

export default adaptError;
