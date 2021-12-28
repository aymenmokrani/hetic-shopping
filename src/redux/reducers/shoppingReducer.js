import products from "../../utils/products";

export default function (
  state = { wishList: [], cart: [], products: products },
  action
) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, isWished: true }
            : product
        ),
        wishList: [...state.wishList, action.payload],
      };
    case "REMOVE_FROM_WISHLIST":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, isWished: false }
            : product
        ),
        wishList: [
          ...state.wishList.filter((product) => product != action.payload),
        ],
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: state.cart.find((el) => el.product.id === action.payload.id)
          ? state.cart.map((el) =>
              el.product.id === action.payload.id
                ? {
                    ...el,
                    quantity: el.quantity + action.quantity,
                  }
                : el
            )
          : [
              ...state.cart,
              { product: action.payload, quantity: action.quantity },
            ],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart:
          action.payload.quantity > 1
            ? state.cart.map((el) =>
                el.product.id === action.payload.product.id
                  ? { ...el, quantity: el.quantity - 1 }
                  : el
              )
            : [...state.cart.filter((item) => item != action.payload)],
        // state.cart.find(
        //   (el) =>
        //     el.product.id === action.payload.product.id &&
        //     action.payload.quantity > 1
        // )
        //   ? state.cart.map((el) =>
        //       el.product.id === action.payload.id
        //         ? { ...el, quantity: el.quantity - 1 }
        //         : el
        //     )
        //   : [...state.cart.filter((item) => item != action.payload)],
      };
    default:
      return { ...state };
  }
}
