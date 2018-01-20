import { Observable } from 'rxjs';
import { bff } from './src/proto-namespaces';

class Client implements bff.Inventory, bff.Users {
  createCount = (req: bff.createCountRequest): Observable<bff.createCountResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/createCount` });
  };
  completeCount = (
    req: bff.completeCountRequest
  ): Observable<bff.completeCountResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/completeCount` });
  };
  getCountDetails = (
    req: bff.getCountDetailsRequest
  ): Observable<bff.getCountDetailsResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/getCountDetails` });
  };
  getKitchenData = (
    req: bff.getKitchenDataRequest
  ): Observable<bff.getKitchenDataResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/getKitchenData` });
  };
  listCounts = (req: bff.listCountsRequest): Observable<bff.listCountsResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/listCounts` });
  };
  updateItemCounts = (
    req: bff.updateItemCountsRequest
  ): Observable<bff.updateItemCountsResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/updateItemCounts` });
  };
  impersonate = (req: bff.impersonateRequest): Observable<bff.impersonateResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/impersonate` });
  };
  listBusinessForImpersonator = (
    req: bff.listBusinessForImpersonatorRequest
  ): Observable<bff.listBusinessForImpersonatorResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/listBusinessForImpersonator` });
  };
  listUsersForImpersonator = (
    req: bff.listUsersForImpersonatorRequest
  ): Observable<bff.listUsersForImpersonatorResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/listUsersForImpersonator` });
  };
  login = (req: bff.loginRequest): Observable<bff.loginResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/login` });
  };
  refresh = (req: bff.refreshRequest): Observable<bff.refreshResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/refresh` });
  };
}
