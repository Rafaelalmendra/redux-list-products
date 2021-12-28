import { ActionsTypes } from "../contants/action-types"

export const setProducts = (products) => {
  return {
    type: ActionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionsTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProducts = (products) => {
  return {
    type: ActionsTypes.REMOVE_SELECTED_PRODUCT,
  };
};