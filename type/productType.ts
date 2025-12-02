export interface ProductItemType {
  id: number; // 상품 고유 ID
  name: string; // 상품 이름
  englishName: string; // 상품 영어 이름
  brand: string; // 브랜드명
  productCode: string; // 상품 코드
  price: number; // 정가
  salePrice: number; // 할인 가격
  starRating: number; // 평균 별점 (0~5)
  starRatingCount: number; // 별점 참여 수
  likeCount: number; // 좋아요 수
  point: number; // 적립 포인트
  imgUrl: string; // 이미지 URL
  createdAt: string; // ISO timestamp (string으로 옴)
  updatedAt: string; // ISO timestamp
}

export interface ProductItemsType {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProductItemType[];
}
