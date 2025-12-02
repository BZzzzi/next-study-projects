import SearchForm from "@/components/SearchForm";
import ProductPage from "./items/page";

export default function Home() {
  return (
    <div>
      <SearchForm />
      <ProductPage />
    </div>
  );
}
