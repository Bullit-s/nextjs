import { actionCreator } from "../common/actionCreator";
import {
  IProductsRequestParams,
  IProducts,
} from "../../../interfaces/products/IProducts";

export const ProductsActions = {
  getProducts: actionCreator.async<IProductsRequestParams, IProducts, Error>(
    "PRODUCTS/GET_PRODUCTS"
  ),
};
