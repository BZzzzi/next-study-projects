import api from "@/lib/axios";
import { ProductItemsType, ProductItemType } from "@/type/productType";
import { SizeReviewTypeItems } from "@/type/sizeReviewType";

export async function getProductItem(targetId: string) {
  const res = await api.get<ProductItemType>(`/products/${targetId}`);
  return res.data;
}

export async function getProductSearchItems(q: string) {
  const res = await api.get<ProductItemsType>(`/products/?q=${q}`);
  return res.data;
}

export async function getProductItems() {
  const res = await api.get<ProductItemsType>(`/products`);
  return res.data;
}

export async function getSizeReviewItems(targetId: string) {
  const res = await api.get<SizeReviewTypeItems>(
    `/size_reviews/?product_id=${targetId}`
  );
  return res.data;
}
