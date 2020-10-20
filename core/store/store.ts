import { createStore, applyMiddleware, AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { LoadState } from "../../common/loadState";
import { IProductsState } from "./products/ProductsState";
import { createMainReduce } from "./reducers";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

export interface IReduxState {
  error?: Error;
  loadState?: LoadState;
}

export interface IAppState {
  products?: IProductsState;
}

const reducers = createMainReduce();

const reducer = (state: IAppState | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.count.count)  nextState.count.count = state.count.count // preserve count value on client side navigation
    return nextState;
  } else {
    return reducers(state, action);
  }
};

export interface IExtraArguments {}

function makeStore() {
  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunkMiddleware.withExtraArgument<IExtraArguments>({}))
    )
  );
}

export const wrapper = createWrapper<IAppState>(makeStore);
