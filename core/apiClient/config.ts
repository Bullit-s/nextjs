export default {
  xml2jsConfig: {
    trim: true,
    compact: true,
    ignoreDeclaration: true,
    attributesKey: "properties",
    textKey: "value",
    cdataKey: "data",
  },
  digiseller_api: {
    products:
      "https://api.digiseller.ru/api/shop/products?format=json&transp=cors",
    categories: "https://shop.digiseller.ru/xml/shop_categories.asp",
    product_info:
      "https://api.digiseller.ru/api/products/info?format=json&transp=cors",
    last_sales: "https://shop.digiseller.ru/xml/shop_last_sales.asp",
    search_products: "https://shop.digiseller.ru/xml/shop_search.asp",
  },
};
