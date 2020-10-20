import { LoadState } from "../../../common/loadState";
import { IReduxState } from "../store";
import { IProducts } from "../../../interfaces/products/IProducts";

export interface IProductsState extends IReduxState {
  data: IProducts;
  loadState: LoadState;
}

export const productsInitialState: IProductsState = {
  data: {} as IProducts,
  loadState: LoadState.needLoad,
};
