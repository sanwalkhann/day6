import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Store from "./store";

export default function ShoppingCards() {
  const addtoCart = Store((state) => state.addtoCart);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await response.json();
        console.log(data, "data from api");
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    AOS.init();
    fetchData();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleAddToCart = (product) => {
    addtoCart(product);
    toast.success(`Product added to cart`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full p-10">
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentProducts.map((product) => (
          <div key={product.id} className="p-6 bg-white rounded-md shadow-md">
            <img
              className="w-full h-48 object-cover mb-4"
              src={product.images[0]}
              alt={product.title}
            />

            <div class="w-28 h-[35px] px-3.5 py-2.5 bg-black rounded-[60px] justify-center items-center gap-2.5 inline-flex">
              <div
                class="text-white text-base font-medium font-['Mona-Sans'] cursor-pointer"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length > productsPerPage && (
        <div className="flex mt-4 items-center justify-center">
          <button
            className="mx-1 p-2 cursor-pointer bg-gray-300 text-gray-700 rounded-md"
            onClick={handlePrev}
          >
            &lt; Prev
          </button>
          <div className="mx-1 p-2 bg-gray-700 text-white rounded-md">
            {currentPage}
          </div>
          <button
            className="mx-1 p-2 cursor-pointer bg-gray-300 text-gray-700 rounded-md"
            onClick={handleNext}
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
}
