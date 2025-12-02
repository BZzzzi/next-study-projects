import Product from "@/components/Product";
import { getProductItem, getSizeReviewItems } from "@/lib/api";

export default async function ProductIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = await getProductItem(id);
  const sizeReview = await getSizeReviewItems(id);

  return (
    <>
      <Product product={product} sizeReview={sizeReview} />
    </>
  );
}
