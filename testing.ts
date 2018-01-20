class Client implements bff.Inventory, bff.Users {
    private readonly API: string = "https://localhost:5555";
    createCount = (req: bff.createCountRequest): Observable<bff.createCountResponse> => { return Observable.ajax({ url: `${this.API}/inventory/createCount` }); };
}