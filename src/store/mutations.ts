import { fetchCustomers, fetchProducts, productsStream } from '@/BL/fetching';
import { Customer, Product } from '@/BL/models';
import { State } from './state';

export function changeSearch(state: State, criteria: string): void {
  state.searchCriteria = criteria;
}

export function loadProducts(state: State): void {
  state.isLoading = true;

  fetchProducts().then(
    (products: Product[]) => (
      (state.products = products), (state.isLoading = false)
    )
  );
}

export function loadCustomers(state: State, productId: string): void {
  const product = state.products.find(
    (product: Product) => product.id === productId
  );

  if (!product) {
    return;
  }

  state.isLoading = true;

  fetchCustomers(product.id).then(
    (customers: Customer[]) => (
      (product.customerList = customers), (state.isLoading = false)
    )
  );
}

export async function updatedProducts(state: State) {
  for await (const products of productsStream) {
    state.products = products;
  }
}
