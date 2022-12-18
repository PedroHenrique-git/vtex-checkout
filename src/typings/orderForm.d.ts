interface CustomData {
  customApps: {
    id: string;
    major: numbe;
    fields: Record<string, string>;
  };
}

interface AssemblyOptions {
  added: {
    item: Item;
    composition: {
      id: string;
      minQuantity: number;
      maxQuantity: number;
      initialQuantity: number;
      priceTable: number;
      seller: string;
    };
    normalizedQuantity: number;
    choiceType: string;
    extraQuantity: number;
  }[];
  removed: {
    initialQuantity: number;
    removedQuantity: number;
    name: string;
  }[];
  parentPrice: number;
}

interface Address {
  addressId: string;
  cacheId: string;
  id: string;
  userId: string;
  receiverName: string;
  complement: string;
  neighborhood: string;
  country: string;
  state: string;
  number: string;
  street: string;
  geoCoordinates: number[];
  postalCode: string;
  city: string;
  reference: string;
  addressName: string;
  addressType: string;
}

interface Item {
  id: string;
  name: string;
  detailUrl: string;
  imageUrl: string;
  skuName: string;
  productRefId: string;
  quantity: number;
  uniqueId: string;
  productId: string;
  refId: string;
  ean: string;
  priceValidUntil: string;
  price: number;
  tax: number;
  listPrice: number;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  parentItemIndex: number;
  parentAssemblyBinding: string;
  additionalInfo: {
    brandName: string;
  };
  assemblyOptions: AssemblyOptions;
  seller: string;
  cartIndex: number;
  productCategoryIds: string;
  productCategories: Record<string, string>;
  measurementUnit: string;
  sellingPriceWithAssemblies: number;
  unitMultiplier: number;
  canHaveAttachment: boolean;
  priceDefinition: {
    calculatedSellingPrice: number;
    sellingPrices: {
      quantity: number;
      value: number;
    }[];
    total: number;
  };
  priceTags: {
    identifier: string;
    isPercentual: boolean;
    name: string;
    rawValue: float;
    value: number;
  }[];
}

interface Totalizer {
  id: string;
  name: string;
  value: number;
}

interface ProfileData {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  isCorporate: boolean;
  corporateDocument: string;
  corporateName: string;
  corporatePhone: string;
  document: string;
  documentType: string;
  stateInscription: string;
  tradeName: string;
}

interface Seller {
  id: string;
  name: string;
}

interface ShippingData {
  address: Address;
  availableAddresses: Address;
  selectedAddresses: Address;
}

interface StorePreferencesData {
  countryCode: string;
  currencyCode: string;
  timeZone: string;
  currencyFormatInfo: {
    currencyDecimalDigits: number;
    currencyDecimalSeparator: string;
    currencyGroupSeparator: string;
    startsWithCurrencySymbol: boolean;
  };
  currencySymbol: string;
}

interface ClientPreferencesData {
  locale: string;
  optinNewsletter: boolean;
}

interface OrderForm {
  orderFormId: string;
  customData: CustomData;
  value: number;
  items: Item[];
  salesChannel: string;
  loggedIn: boolean;
  isCheckedIn: boolean;
  storeId: string;
  allowManualPrice: boolean;
  canEditData: boolean;
  userProfileId: string;
  userType: string;
  ignoreProfileData: boolean;
  totalizers: Totalizer[];
  clientProfileData: ProfileData;
  sellers: Seller[];
  shippingData: ShippingData;
  storePreferencesData: StorePreferencesData;
  userType: string;
  clientPreferencesData: ClientPreferencesData;
}
