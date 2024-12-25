import { createSlice } from "@reduxjs/toolkit";
import { ElementTypes, LayoutTypes } from "../@types/Element.types";

export interface StateType {
  layoutElements: LayoutTypes[];
  formElements: ElementTypes[];
}
const state: StateType = {
  formElements: [],
  layoutElements: [],
};

const elementReducer = createSlice({
  initialState: state,
  name: "elements",
  reducers: {
    // form elements
    add_formElements: (state, action) => {
      state.formElements = [...state.formElements, action.payload];
    },
    update_formElements: (state, action) => {
     state.formElements = state.formElements.map((element) =>
      element.id === action.payload.id
        ? { ...element, name: action.payload.name }
        : element
    );
    },
    delete_formElements: (state, action) => {
      state.formElements = state.formElements.filter(
        (element) => element.id !== action.payload.id
      );
    },

    // layout elements
    add_layoutElements: (state, action) => {
      state.layoutElements = [...state.layoutElements, action.payload];
    },
    update_layoutElements: (state, action) => {
     state.layoutElements = state.layoutElements.map((element) =>
      element.id === action.payload.id
        ? { ...element, name: action.payload.name }
        : element
    );
    },
    delete_layoutElements: (state, action) => {
      state.layoutElements = state.layoutElements.filter(
        (element) => element.id !== action.payload.id
      );
    },
  },
});

export const {
  add_formElements,
  add_layoutElements,
  delete_formElements,
  delete_layoutElements,
  update_formElements,
  update_layoutElements,
} = elementReducer.actions;

export default elementReducer.reducer; // export the reducer for store configuration
