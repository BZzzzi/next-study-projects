export interface SizeReviewItemType {
  id: number;
  sex: "male" | "female";
  height: number;
  size: "S" | "M" | "L" | "XL";
  fit: "small" | "good" | "big";
  productId: number;
  createdAt: string;
  updatedAt: string;
}
export interface SizeReviewTypeItems {
  count: number;
  next: string | null;
  previous: string | null;
  results: SizeReviewItemType[];
}

// 제품 리뷰 POST 보낼 때 타입
export interface SizeReviewRequest {
  sex: "male" | "female";
  height: number;
  size: "S" | "M" | "L" | "XL";
  fit: "small" | "good" | "big";
  productId: number;
}
