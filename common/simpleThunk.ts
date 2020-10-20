import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { IAppState } from "../core/store/store";
import { IExtraArguments } from "../core/store/store";

export type SimpleThunk = ThunkAction<
  Promise<void>,
  IAppState,
  IExtraArguments,
  Action
>;
export type SimpleDispatch = ThunkDispatch<IAppState, IExtraArguments, Action>;
