import { combineReducers, Reducer } from "redux";
import { productsReducer } from "./products/ProductsReducer";
import { IAppState } from "./store";

export type Reducers<T> = {
  [P in keyof T]: Reducer<T[P]>;
};

export function createMainReduce(): Reducer<IAppState> {
  const _reducers: Reducers<IAppState> = {
    products: productsReducer,
  };

  return combineReducers(_reducers);
}
