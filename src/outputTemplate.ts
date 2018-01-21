import { bff } from './proto-namespaces';
import { Observable } from 'rxjs';

class Client implements bff.Inventory, bff.Users {
  private readonly API: string = 'https://localhost:5555';
  createCount = (
    req: bff.createCountRequest
  ): Observable<bff.createCountResponse> => {
    // probably pass more header settings in impl
    return Observable.ajax({ url: `${this.API}/inventory/createCount` });
  };
}
