import { ICategories } from "../category/ICategory";
import { IElementCnt } from "../IElementCnt";
import { IElementData } from "../IElementData";
import { IElementId } from "../IElementId";
import { IElementIdName } from "../IElementIdName";
import { IElementValue } from "../IElementValue";
import { IPages } from "../IPages";

// export interface IState {
//   productLoader: boolean;
//   productsLoader: boolean;
//   params: ProductsRequestParams;
//   productList: ProductsResponse;
//   productInfo: IProductInfo;
// }

export interface IProductsRequestParams {
  pages: IProductPages;
  products: IProductRequestParams;
  order: string;
}

export interface IProductsResponse {
  retval: IElementValue;
  retdesc?: IElementValue;
  categories: ICategories; //путь к выбранной категории
  seller: IElementId;
  pages: IPages; // параметры страниц
  subcategories: {};
  products: IProducts; //параметры списка товаров
}

export interface IProductInfo {
  id: string; //идентификатор товара
  id_prev: string; //идентификатор предыдущего товара в категории
  id_next: string; //идентификатор следующего товара в категории
  name: string; //название товара
  price: string; //цена
  currency: string; //валюта
  is_available: number; //доступность товара для покупки
  url: string; //URL товара
  info: string; //описание товара
  add_info: string; //дополнительная информация о товаре
  discounts: [IDiscount];
  release_date: string; //дата релиза товара
  agency_fee: string; //размер агентского вознаграждения
  agency_sum: string; //размер агентского вознаграждения
  agency_id: string; //ID агента
  prices: any; //параметры стоимости товара
  payment_methods: { [methodName: string]: [string, string] }; //способы оплаты
  prices_unit: any; //цена уникального товара с нефиксированной ценой
  preview_imgs: any; //параметры изображений предварительного просмотра
  sale_info: any; //информация о скидке
  breadCrumbs: IElementIdName[];
}

export interface IProducts {
  properties: IElementCnt; //атрибут cnt-количество страниц
  order: IElementValue; //
  currency: IElementValue; //
  product: IProduct[] | IProduct;
}

export interface IProduct {
  properties: IImageInfo; //параметры товара
  id: IElementValue; //идентификатор товара
  name: IElementData; //название товара
  info: IElementData; //описание товара
  price: IElementValue; //стоимость товара
  base_price: IElementValue; //цена в базовой валюте, установленной продавцом
  base_currency: IElementValue; // базовая валюта
  price_rub: IElementValue; //
  price_usd: IElementValue; //
  price_eur: IElementValue; //
  price_uah: IElementValue; //
  partner_comiss: IElementValue; //партнерское вознаграждение %
  collection: IElementValue; //вид содержимого товара digi | pins | unit | book | soft
  in_stock: IElementValue; //доступность товара
  num_in_stock: IElementValue; //доступное для оплаты количество единиц товара
  has_discount: IElementValue; //скидка постоянным покупателям
  id_present: IElementValue; // ID товара-подарка
}

export interface IProductPages {
  num: number; //Активная страница(По умолчанию 1)
  rows: number; //Количество товара на странице, целое число (max. 200)
}

export interface IProductRequestParams {
  order: string; //Сортировка
  // 	name - сортировка по названию,
  // nameDESC - сортировка по названию (обрат.),
  // price - сортировка по цене,
  // priceDESC - сортировка по цене (обрат.)
  currency: string; //USD, RUR, EUR или UAH
}

interface IImageInfo {
  img: string;
  icon: string;
  //   	атрибут img - наличие/отсутствие (yes/no) картинки предварительного просмотра
  // атрибут icon - наличие знака "скидка" (sale), "новинка" (new), "популярный товар" (top
}

interface IDiscount {
  summa: string;
  percent: string;
}
