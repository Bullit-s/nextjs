import { IAppState } from "../../store/store";

export function productsDataSelector({ products }: IAppState) {
  const { data, loadState } = products;
  return { data, loadState };
}
