export interface ProductDto {
  id: string;
  self: string;
  name: string;
  customers: number;
}

export class Product implements ProductDto {
  id: string;
  self: string;
  name: string;
  customers: number;

  constructor() {
    this.id = '';
    this.self = '';
    this.name = '';
    this.customers = 0;
  }
}
