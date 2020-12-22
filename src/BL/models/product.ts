import { Searchable } from '../search';
import { Customer } from './customer';

export interface ProductDto {
  id: string;
  self: string;
  name: string;
  customers: number;
}

export class Product implements ProductDto, Searchable<string> {
  id: string;
  self: string;
  name: string;
  customers: number;

  customerList: Customer[];

  constructor() {
    this.id = '';
    this.self = '';
    this.name = '';
    this.customers = 0;

    this.customerList = [];
  }

  isSatisfied(predicate: (value: string) => boolean): boolean {
    return (
      predicate(this.name) ||
      this.customerList.some((customer: Customer) =>
        customer.isSatisfied(predicate)
      )
    );
  }

  isCustomerListLoaded(): boolean {
    return this.customers > 0 && this.customerList.length > 0;
  }
}
