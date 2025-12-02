export interface SizeReviewItemType {
  id: number; // 설문 고유 ID
  sex: "male" | "female"; // 성별
  height: number; // 키 (cm)
  size: "S" | "M" | "L" | "XL"; // 구매한 사이즈
  fit: "small" | "good" | "big"; // 착용감
  productId: number; // 해당 설문이 속한 상품 ID
  createdAt: string; // timestamp (ISO string)
  updatedAt: string; // timestamp
}

export interface SizeReviewTypeItems {
  count: number;
  next: string | null;
  previous: string | null;
  results: SizeReviewItemType[];
}
