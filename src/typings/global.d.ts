declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.graphql';
declare module '*.gql';

interface AjaxOptions {
  contentType: string;
  data: string;
  dataType: string;
  type: string;
  url: string;
}

type OrderFormSections = string[] | null;

interface Checkout {
  orderForm: OrderForm;
  getOrderForm(): Promise<OrderForm>;
  sendAttachment<T>(
    _attachmentId: string,
    _attachment: T,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  addToCart(
    _items: Pick<Item, 'id' | 'quantity' | 'seller'>[],
    _expectedOrderFormSections: OrderFormSections = null,
    _salesChannel = '1',
  ): Promise<OrderForm>;
  updateItems(
    _items: Partial<Item>[],
    _expectedOrderFormSections: OrderFormSections = null,
    _splitItem = false,
  ): Promise<OrderForm>;
  removeItems(
    _items: { index: number; quantity: number }[],
    _expectedOrderFormSections: OrderFormSections = null,
    _splitItem = false,
  ): Promise<OrderForm>;
  cloneItem(
    _itemIndex: number,
    _newItemOptions: Partial<Item>,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  removeAllItems(
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  calculateShipping(_address: Partial<Address>): Promise<OrderForm>;
  simulateShipping(
    _shippingDat: ShippingData,
    _orderFormId: string,
    _country: string,
    _expectedOrderFormSections: OrderFormSections = null,
    _salesChannel = '1',
  ): Promise<OrderForm>;
  getAddressInformation(_address: Address): Promise<Address>;
  removeAccountId(
    _accountId: string,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<void>;
  addDiscountCoupon(
    _coupon: string,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  removeDiscountCoupon(
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  removeGiftRegistry(
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  addOffering(
    _offeringId: string | number,
    _itemIndex: number,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  removeOffering(
    _offeringId: string | number,
    _itemIndex: number,
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  addItemAttachment(
    _itemIndex: number,
    _attachmentName: string,
    _content: { content: unknown },
    _expectedOrderFormSections: OrderFormSections = null,
    _splitItem = false,
  ): Promise<OrderForm>;
  removeItemAttachment(
    _itemIndex: number,
    _attachmentName: string,
    _content: { content: unknown },
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<OrderForm>;
  clearMessages(
    _expectedOrderFormSections: OrderFormSections = null,
  ): Promise<void>;
  getLogoutURL(): string;
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
