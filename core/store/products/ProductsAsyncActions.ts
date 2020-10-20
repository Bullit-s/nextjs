import { SimpleThunk } from "../../../common/simpleThunk";
import { ProductsActions } from "./ProductsActions";
import {
  IProductsRequestParams,
  IProducts,
} from "../../../interfaces/products/IProducts";

export const ProductsAsyncActions = {
  getProducts(params: IProductsRequestParams): SimpleThunk {
    return async (dispatch, _, {}) => {
      try {
        const result = { properties: { cnt: "1" } } as IProducts;
        dispatch(ProductsActions.getProducts.started(params));
        dispatch(ProductsActions.getProducts.done({ params, result }));
      } catch (error) {
        const { message } = error;
        console.error("Error: ", message);
        dispatch(ProductsActions.getProducts.failed({ params, error }));
      }
    };
  },
};
