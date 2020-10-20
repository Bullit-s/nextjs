import { LoadState } from "../../../common/loadState";
import { IReduxState } from "../store";
import {
  IProductsRequestParams,
  IProductsResponse,
} from "../../../interfaces/products/IProducts";

export interface IProductsState extends IReduxState {
  loadState: LoadState;
  params: IProductsRequestParams;
  data?: IProductsResponse;
}

export const productsInitialState: IProductsState = {
  loadState: LoadState.needLoad,
  params: {
    category_id: 0,
    pages: { num: 1, rows: 20 },
    products: { order: "", currency: "RUR" },
    lang: "ru-RU",
  },
};
