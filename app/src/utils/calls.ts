import { v4 as uuid4 } from "uuid";
import { parseNearAmount } from "near-api-js/lib/utils/format";

// const GAS = 100000000000000;

export function createProduct(product: any) {
  product.id = uuid4();
  product.price = parseNearAmount(product.price + "");
  return window.contract.setProduct({ product });
}

export function getListItems() {
  return window.contract.getItems();
}

// export async function buyProduct({ id, price }) {
//   await window.contract.buyProduct({ productId: id }, GAS, price);
// }