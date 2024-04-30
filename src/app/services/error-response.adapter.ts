import { HttpErrorResponse } from '@angular/common/http';
import { Adapter } from './adapter';
import { ErrorResponse } from './error-response';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorResponseAdapter extends Adapter<
  HttpErrorResponse,
  ErrorResponse
> {
  adapt(response: HttpErrorResponse): ErrorResponse {
    if (
      typeof response.error === 'string' ||
      (typeof response.error === 'object' && response.error.code === undefined)
    ) {
      return {
        status: response.status,
        code: undefined,
        message: response.error.error ? response.error.error : response.message,
      };
    } else {
      return {
        status: response.status,
        code: response.error.code,
        message: response.error.message,
      };
    }
  }
}
