import React from "react";
import ProductList from "../components/ProductList";
import { CatalogFilter } from "../components/CatalogFilter/CatalogFilter";

export function Catalog({
  productsList,
  handleAddProduct,
  isLoggedIn,
  search,
  setSort,
  sort,
}) {
  return (
    <div>
      <CatalogFilter productsList={productsList} setSort={setSort} />
      <ProductList
        list={productsList}
        handleAddProduct={handleAddProduct}
        isLoggedIn={isLoggedIn}
        search={search}
        sort={sort}
      />
    </div>
  );
}
