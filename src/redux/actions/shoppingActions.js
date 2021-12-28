export const addToWishList = (product) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: product,
  };
};

// Remove from Wish List
export const removeFromWishList = (product) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: product,
  };
};

export const addToCart = (product, quantity) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
    quantity: quantity,
  };
};

export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};
