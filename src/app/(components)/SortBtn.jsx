"use client";

import { useSearchParams } from "next/navigation";

export default function SortBtn() {
  const [searchParams, setSearchParams] = useSearchParams();

  //   const sort = searchParams.get("sort");

  return (
    <>
      <label htmlFor="sort">Sort by:</label>
      <select
        name="sort"
        id="sort"
    //     value={searchParams.get("sort") || ""}
    //     onChange={handleChange}
    //   >
        <option value="def">default</option>
        <option value="asc">ascending</option>
        <option value="des">descending</option>
      </select>
    </>
  );
}
