import { IElementCnt } from "../IElementCnt";
import { IElementValue } from "../IElementValue";
import { IPages } from "../IPages";

export interface IState {
  searchLoader: boolean;
  value: string;
  searchList: IResponse;
}

export interface IResponse {
  retval: IElementValue;
  retdesc?: IElementValue;
  pages: IPages; // параметры страниц
  products: ISearchProducts; //параметры списка товаров
}

export interface ISearchProducts {
  currency: IElementValue;
  product: [IProduct] | IProduct;
  properties: IElementCnt;
  search: IElementValue;
}

export interface IProduct {
  id: IElementValue;
  name: IElementValue;
  price: IElementValue;
}
