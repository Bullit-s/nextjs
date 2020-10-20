import axios, { AxiosError, AxiosResponse } from "axios";
import { IPages } from "../../interfaces/IPages";
import {
  IProductsRequestParams,
  IProductsResponse,
} from "../../interfaces/products/IProducts";
import config from "./config";
const convert = require("xml-js");

interface Options {
  method?: "get" | "post";
  headers?: {
    "Content-Type": string;
  };
  url?: string;
  xmlBodyStr?: string;
  params?: any;
}

export default class ApiClient {
  defaultOptions: Options;
  constructor() {
    this.defaultOptions = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  handleRequest(options: Options) {
    return axios.request(Object.assign(this.defaultOptions, options));
  }

  handleError(error: AxiosError) {
    // error handler based on api error response
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message);
    }

    throw new Error("Unknown Error");
  }

  async getProducts(
    params: IProductsRequestParams
  ): Promise<AxiosResponse<IProductsResponse>> {
    const {
      category_id,
      lang,
      pages: { num: page, rows },
      products: { order, currency },
    } = params;
    return this.handleRequest({
      url: config.digiseller_api.products,
      params: {
        category_id,
        seller_id: process.env.NEXT_PUBLIC_DIGISELLER_SELLER_ID,
        page,
        rows,
        order,
        currency,
        lang,
      },
    });
  }
}
