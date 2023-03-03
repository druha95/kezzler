export interface RequestResponse<T> {
  data: T;
}

export interface ErrorResponseData<T> {
  data: T;
}

export interface ErrorResponse <T> {
  response: ErrorResponseData<T>;
}
