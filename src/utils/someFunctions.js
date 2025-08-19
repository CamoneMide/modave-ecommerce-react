import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { allProducts } from "../constants";

export function getPageArray(totalItems, itemsPerPage) {
  // If there are no items, there are no pages.
  if (totalItems <= 0) {
    return [];
  }

  // Calculate the total number of pages required.
  // We use Math.ceil() to round up, ensuring the last page
  // is included even if it's not a full page.
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create an array to hold the page numbers.
  const pageArray = [];

  // Loop from 1 up to the total number of pages and populate the array.
  for (let i = 1; i <= totalPages; i++) {
    pageArray.push(i);
  }

  // Return the final array of page numbers.
  return pageArray;
}

export function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export const addProductToCart = (productId, setCart) => {
  // Find the product in allProducts
  const productToAdd = allProducts.find((product) => product.id === productId);

  if (productToAdd) {
    // Add to cart
    setCart((prevCart) => {
      // Check if product already exists in cart
      const existingItem = prevCart.find((item) => item.id === productId);

      const newCart = existingItem
        ? prevCart.map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...productToAdd, quantity: 1 }];

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });

    toast.success(`${productToAdd.name} added to cart!`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  } else {
    toast.error("Product not found!", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
  }
};

export const removeProductFromCart = (productId, setCart) => {
  setCart((prevCart) => {
    // Filter out the product to remove
    const newCart = prevCart.filter((item) => item.id !== productId);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(newCart));

    return newCart;
  });

  toast.success("Product removed from cart!", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
  });
};
