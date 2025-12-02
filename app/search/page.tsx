import ProductList from "@/components/ProductList";
import SearchForm from "@/components/SearchForm";
import { getProductSearchItems } from "@/lib/api";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const { q } = await searchParams;
  const keyword = q ?? "";
  const SearchProducts = await getProductSearchItems(keyword);

  return (
    <>
      <SearchForm initialValue={q} />
      <ProductList products={SearchProducts} />
    </>
  );
}
