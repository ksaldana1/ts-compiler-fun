import { bff } from './proto-namespaces';
import { Observable } from 'rxjs';

class Client implements bff.Inventory, bff.Users {
  private readonly API: string = 'https://localhost:5555';
  createCount = (req: bff.createCountRequest): Observable<bff.createCountResponse> => {
    return Observable.ajax({ url: `${this.API}/inventory/createCount` });
  };
}

class FirstClass implements Error {
  a: number;
  constructor() {
    this.a = 1;
  }

  logDouble() {
    console.log(this.a * 2);
  }
}
