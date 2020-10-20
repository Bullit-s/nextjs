import { actionCreator } from "../common/actionCreator";
import {
  IProductsRequestParams,
  IProductsResponse,
} from "../../../interfaces/products/IProducts";

export const ProductsActions = {
  getProducts: actionCreator.async<
    IProductsRequestParams,
    IProductsResponse,
    Error
  >("PRODUCTS/GET_PRODUCTS"),
};
