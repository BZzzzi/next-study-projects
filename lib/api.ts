import api from "@/lib/axios";
import { ProductItemsType, ProductItemType } from "@/type/productType";
import {
  SizeReviewItemType,
  SizeReviewRequest,
  SizeReviewTypeItems,
} from "@/type/sizeReviewType";

export async function getProductItem(targetId: string) {
  const res = await api.get<ProductItemType>(`/products/${targetId}`);
  return res.data;
}

export async function getProductSearchItems(q: string) {
  const res = await api.get<ProductItemsType>(`/products/?q=${q}`);
  return res.data;
}

export async function getProductItems() {
  const res = await fetch(`https://learn.codeit.kr/api/codeitmall/products/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("제품 목록 불러오기를 실패했습니다.");
  }

  const data: ProductItemsType = await res.json();
  return data;
}

export async function getSizeReviewItems(targetId: string) {
  const res = await api.get<SizeReviewTypeItems>(
    `/size_reviews/?product_id=${targetId}`
  );
  return res.data;
}

export async function postProductReviewItem(
  reviewData: SizeReviewRequest
): Promise<SizeReviewItemType> {
  const res = await fetch(
    `https://learn.codeit.kr/api/codeitmall/size_reviews/`,
    {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("제품 리뷰 저장을 실패했습니다.");
  }

  const data: SizeReviewItemType = await res.json();
  return data;
}
