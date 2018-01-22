export namespace inventory {
  export interface Kitchen {
    id: string;
    name: string;
  }

  export interface Item {
    id: string;
    kitchen_id: number;
    name: boolean;
  }
}
