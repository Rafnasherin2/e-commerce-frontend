import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import { ArrowBackIos, ArrowForwardIos, Edit, Delete } from "@mui/icons-material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EditProductForm from "./EditProductForm";

function Sellers() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Define fetchProducts function
  const fetchProducts = async () => {
    try {
      const categoryId = "67b9dbd8558b16c9267f4ee2"; // category ID
      const response = await axios.get(
        `https://e-commerce-backend-xo61.onrender.com/api/products/category/${categoryId}`
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sellers:", error);
      setLoading(false);
    }
  };

  //  Fetch products on mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = (updatedProduct) => {
    if (updatedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === updatedProduct._id ? updatedProduct : product
        )
      );
    }
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleDeleteProduct = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`https://e-commerce-backend-xo61.onrender.com/api/products/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="mt-10">
      <h1 className="text-center font-extrabold text-5xl p-15">TOP SELLERS</h1>

      <div className="relative mx-auto px-4 max-w-[90%]">
        <Slider {...carouselSettings}>
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onEdit={handleEditProduct}
                onDelete={handleDeleteProduct}
              />
            ))
          ) : (
            <p className="text-center">Loading products...</p>
          )}
        </Slider>
      </div>

      {/*  Edit Modal */}
      {isModalOpen && editingProduct && (
        <EditProductForm 
          product={editingProduct} 
          onClose={handleCloseModal} 
          refreshProducts={fetchProducts} 
        />
      )}
    </div>
  );
}

const ProductCard = ({ product, onEdit, onDelete }) => (
  <div className="relative flex flex-col justify-between w-[300px] h-[380px] p-4 shadow-lg rounded-lg bg-white mx-6">
    
    {/* Cloudinary Image Support */}
    <img 
      src={product.images?.[0]} 
      alt={product.name} 
      className="w-full h-[250px] object-contain rounded-lg shadow-md"
    />

    {/* Product Info */}
    <div className="mt-2 w-full flex-grow">
      <h6 className="font-bold text-md">{product.name}</h6>
      <div className="flex items-center gap-2 mt-1">
        <Rating name="read-only" value={product.rating || 4.5} precision={0.5} readOnly />
        <span className="text-gray-500 text-sm">{product.rating || 4.5}/5</span>
      </div>
      <div className="flex items-center gap-3 mt-1">
        <p className="font-bold text-lg">${product.price}</p>
        {product.oldPrice && <p className="text-[#95919199] line-through font-bold">${product.oldPrice}</p>}
      </div>
    </div>

    {/* Edit & Delete Icons */}
    <div className="absolute bottom-3 right-3 flex gap-2">
      <button onClick={() => onEdit(product)} className="text-yellow-500 hover:text-yellow-700">
        <Edit fontSize="small" />
      </button>
      <button onClick={() => onDelete(product._id)} className="text-red-500 hover:text-red-700">
        <Delete fontSize="small" />
      </button>
    </div>
  </div>
);

//  Carousel Settings (Same as Arrivals)
const carouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    { breakpoint: 1280, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

//  Custom Arrow Buttons
function CustomPrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-[-30px] top-[45%] -translate-y-1/2 
                 cursor-pointer z-10 bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <ArrowBackIos className="text-gray-500 hover:text-black" />
    </div>
  );
}

function CustomNextArrow({ onClick }) {
  return (
    <div
      className="absolute right-[-40px] top-[45%] -translate-y-1/2 
                 cursor-pointer z-10 bg-white p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <ArrowForwardIos className="text-gray-500 hover:text-black" />
    </div>
  );
}

export default Sellers;
