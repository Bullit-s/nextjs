import { ProductsActions } from "./ProductsActions";
import { Success, Failure } from "typescript-fsa";
import { newState } from "../common/newState";
import { reducerWithInitialState } from "typescript-fsa-reducers";
import { productsInitialState, IProductsState } from "./ProductsState";
import { LoadState } from "../../../common/loadState";
import {
  IProductsRequestParams,
  IProducts,
} from "../../../interfaces/products/IProducts";

function startHandler(state: IProductsState): IProductsState {
  return newState(state, {
    loadState: LoadState.refreshing,
  });
}

const failureHandler = (
  state: IProductsState,
  { error }: Failure<IProductsRequestParams, Error>
) => {
  return newState(state, {
    error: error,
    loadState: LoadState.error,
  });
};

const doneGetProductsHandler = (
  state: IProductsState,
  { result }: Success<IProductsRequestParams, IProducts>
) => {
  return newState(state, {
    data: result,
    loadState: LoadState.idle,
  });
};

export const productsReducer = reducerWithInitialState(productsInitialState)
  .case(ProductsActions.getProducts.started, startHandler)
  .case(ProductsActions.getProducts.done, doneGetProductsHandler)
  .case(ProductsActions.getProducts.failed, failureHandler)

  .build();
