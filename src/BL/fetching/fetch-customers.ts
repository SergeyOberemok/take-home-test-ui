import { environment } from '@/environment/environment';
import axios from 'axios';
import { Customer, CustomerDto } from '../models';

export function fetchCustomers(productId: string): Promise<Customer[]> {
  return axios
    .get<{ id: string; name: string; customers: CustomerDto[] }>(
      `${environment.api}/products/${productId}`
    )
    .then(({ data }) =>
      data.customers.map((customer) => Object.assign(new Customer(), customer))
    );
}
