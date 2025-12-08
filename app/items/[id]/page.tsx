import Product from "@/components/Product";
import { getProductItem, getProductItems, getSizeReviewItems } from "@/lib/api";

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

export async function generateStaticParams() {
  const res = await getProductItems();
  const products = res.results;

  return products.map((item) => ({
    id: item.id.toString(),
  }));
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
