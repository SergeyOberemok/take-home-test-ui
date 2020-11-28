import { Customer, CustomerDto, Product, ProductDto } from '@/BL/models';
import axios from 'axios';
import { State } from './state';

export function changeSearch(state: State, criteria: string): void {
  state.searchCriteria = criteria;
}

export function fetchProducts(state: State): void {
  axios
    .get<ProductDto[]>('http://localhost:9000/products')
    .then(
      ({ data }) =>
        (state.products = data.map((product) =>
          Object.assign(new Product(), product)
        ))
    );
}

export function fetchCustomers(state: State, productId: string): void {
  const product = state.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return;
  }

  axios
    .get<{ id: string; name: string; customers: CustomerDto[] }>(
      `http://localhost:9000/products/${productId}`
    )
    .then(
      ({ data }) =>
        (product.customerList = data.customers.map((customer) =>
          Object.assign(new Customer(), customer)
        ))
    );
}
