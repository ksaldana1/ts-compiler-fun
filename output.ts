import { bff } from './src/proto-namespaces';
import { Observable } from 'rxjs/Observable';
export class Client implements bff.Inventory, bff.Users, bff.Echo {
  constructor(private readonly API: string) {}
  createCount = (
    req: bff.createCountRequest
  ): Observable<bff.createCountResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/createCount`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.createCountResponse);
  };
  completeCount = (
    req: bff.completeCountRequest
  ): Observable<bff.completeCountResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/completeCount`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.completeCountResponse);
  };
  getCountDetails = (
    req: bff.getCountDetailsRequest
  ): Observable<bff.getCountDetailsResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/getCountDetails`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.getCountDetailsResponse);
  };
  getKitchenData = (
    req: bff.getKitchenDataRequest
  ): Observable<bff.getKitchenDataResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/getKitchenData`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.getKitchenDataResponse);
  };
  listCounts = (
    req: bff.listCountsRequest
  ): Observable<bff.listCountsResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/listCounts`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.listCountsResponse);
  };
  updateItemCounts = (
    req: bff.updateItemCountsRequest
  ): Observable<bff.updateItemCountsResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/updateItemCounts`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.updateItemCountsResponse);
  };
  impersonate = (
    req: bff.impersonateRequest
  ): Observable<bff.impersonateResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/impersonate`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.impersonateResponse);
  };
  listBusinessForImpersonator = (
    req: bff.listBusinessForImpersonatorRequest
  ): Observable<bff.listBusinessForImpersonatorResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/listBusinessForImpersonator`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.listBusinessForImpersonatorResponse);
  };
  listUsersForImpersonator = (
    req: bff.listUsersForImpersonatorRequest
  ): Observable<bff.listUsersForImpersonatorResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/listUsersForImpersonator`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.listUsersForImpersonatorResponse);
  };
  login = (req: bff.loginRequest): Observable<bff.loginResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/login`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.loginResponse);
  };
  refresh = (req: bff.refreshRequest): Observable<bff.refreshResponse> => {
    return Observable.ajax({
      url: `${this.API}/rpc/refresh`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.refreshResponse);
  };
  echo = (req: bff.blah): Observable<bff.dlah> => {
    return Observable.ajax({
      url: `${this.API}/rpc/echo`,
      method: 'POST',
      timeout: 60 * 1000,
      body: JSON.stringify(req),
      headers: {
        Accept: 'application/json',
        [`Content-Type`]: 'application/json',
      },
    }).map(r => r.response as bff.dlah);
  };
}
