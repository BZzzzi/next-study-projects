"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./common/Button";
import styles from "@/styles/SearchForm.module.css";

export default function SearchForm({
  initialValue,
}: {
  initialValue?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue || "");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!value) {
      router.push("/");
      return;
    }

    router.push(`search/?q=${value}`);
  }

  return (
    <>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          name="q"
          value={value}
          onChange={handleChange}
        />
        <Button className={styles.searchButton}>검색</Button>
      </form>
    </>
  );
}
