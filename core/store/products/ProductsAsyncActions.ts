import { SimpleThunk } from "../../../common/simpleThunk";
import { ProductsActions } from "./ProductsActions";
import { IProductsRequestParams } from "../../../interfaces/products/IProducts";
import ApiClient from "../../apiClient/apiClient";

export const ProductsAsyncActions = {
  getProducts(params: IProductsRequestParams): SimpleThunk {
    return async (dispatch, _, {}) => {
      try {
        dispatch(ProductsActions.getProducts.started(params));
        const apiClient = new ApiClient();
        const response = await apiClient.getProducts(params);
        dispatch(
          ProductsActions.getProducts.done({ params, result: response.data })
        );
      } catch (error) {
        const { message } = error;
        console.error("Error: ", message);
        dispatch(ProductsActions.getProducts.failed({ params, error }));
      }
    };
  },
};
