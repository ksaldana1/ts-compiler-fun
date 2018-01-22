export interface CallInfo {
  requestName: string;
  requestType: string;
  responseType: string;
}

export interface Map<V> {
  [key: string]: V;
}
