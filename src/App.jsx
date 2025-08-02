import { useState } from "react";
import Product from "./components/Product";
import { products } from "./utils/productData";

function App() {
  const [productList, setProductList] = useState([...products]);

  const categoryList = products.map((product) => product.category);

  const handleSearch = (e) => {
    const searchInput = e.target.value;
    if (!searchInput.trim()) {
      setProductList([...products]);
      return;
    }
    const searchedProducts = products.filter((pdt) =>
      pdt.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchedProducts.length === 0) {
      alert("No such product found");
    }
    console.log(searchedProducts);
    setProductList(searchedProducts);
  };

  const handleFilter = (e) => {
    const filterInput = e.target.value;
    if (filterInput === "") {
      setProductList([...products]);
      return;
    }
    const filteredList = products.filter(
      (product) => product.category === e.target.value
    );
    setProductList(filteredList);
  };

  const handleSort = (e) => {
    const sortInput = e.target.value;
    if (sortInput === "priceA") {
      setProductList([...productList].sort((a, b) => a.price - b.price));
    } else if (sortInput === "priceD") {
      setProductList([...productList].sort((a, b) => b.price - a.price));
    } else if (sortInput === "rating") {
      setProductList([...productList].sort((a, b) => b.rating - a.rating));
    }
  };

  return (
    <>
      <header className="flex flex-col md:flex-row justify-between bg-blue-500 p-5">
        <h1 className="text-4xl font-bold text-white m-1">Product List</h1>
        <div className="flex flex-col md:flex-row">
          <div className="m-1">
            <label className="text-white" htmlFor="category">
              Filter by category:
            </label>
            <select
              className="text-white border border-white rounded-full p-1 px-4 m-1"
              name="category"
              id="category"
              onChange={handleFilter}
            >
              <option className="italic text-black" value="">
                No filter
              </option>
              {categoryList.map((category, index) => (
                <option className="text-black" key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="m-1">
            <label className="text-white" htmlFor="sort">
              Sort by:
            </label>
            <select
              className="text-white border border-white rounded-full p-1 px-4 m-1"
              name="sort"
              id="sort"
              onChange={handleSort}
            >
              <option className="italic text-black" value="">
                None
              </option>
              <option className="text-black" value="priceA">
                Price: Low to High
              </option>
              <option className="text-black" value="priceD">
                Price: High to Low
              </option>
              <option className="text-black" value="rating">
                Rating
              </option>
            </select>
          </div>

          <input
            type="text"
            className="text-white border border-white rounded-full p-1 px-4 m-1"
            placeholder="Search by name"
            onChange={handleSearch}
          />
        </div>
      </header>
      <div className="container mx-auto my-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
