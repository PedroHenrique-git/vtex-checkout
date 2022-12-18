declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.graphql';
declare module '*.gql';

interface Checkout {
  orderForm: OrderForm;
  getOrderForm(): Promise<OrderForm>;
  addToCart(
    _items: Items[],
    _expectedOrderFormSections: string[] | null = null,
    _salesChannel = '1',
  ): Promise<OrderForm>;
  updateItems(
    _items: Items[],
    _expectedOrderFormSections: string[] | null = null,
    _splitItem = false,
  ): Promise<OrderForm>;
  removeItems(
    _items: Items[],
    _expectedOrderFormSections: string[] | null = null,
    _splitItem = false,
  ): Promise<OrderForm>;
  removeAllItems(
    _expectedOrderFormSections: string[] | null = null,
  ): Promise<OrderForm>;
  calculateShipping(_address: Address): Promise<OrderForm>;
  getAddressInformation(_address: Address): Promise<Address>;
  getProfileByEmail(
    _email: string,
    _salesChannel: string = '1',
  ): Promise<OrderForm>;
  orderFormId: string;
}

interface Vtexjs {
  checkout: Checkout;
}

interface Window extends Window {
  vtexjs: Vtexjs;
}
