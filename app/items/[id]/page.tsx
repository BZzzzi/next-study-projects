import Product from "@/components/Product";
import { getProductItem, getSizeReviewItems } from "@/lib/api";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductItem(id);
  return {
    title: product.name,
  };
}

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
