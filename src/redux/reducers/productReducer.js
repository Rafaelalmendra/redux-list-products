import { ActionsTypes } from "../contants/action-types";

const initalState = {
  products: [],
};

export const productReducer = (state = initalState, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const seletedProductReducer = (state = {}, {type, payload}) => {
  switch (type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return {...state, ...payload };
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};