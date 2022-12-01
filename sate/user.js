import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  // id: null,
  // fullName: null,
  // email: null,
  // tipo: false,
  // dni: null,
};

export const userLogin = createAction("USER_LOGIN");
export const userLogOut = createAction("USER_LOGOUT");

const userReducer = createReducer(initialState, {
  [userLogin]: (state, action) => action.payload,
  // (state = {
  //   id: action.payload.id,
  //   fullName: action.payload.fullName,
  //   email: action.payload.email,
  //   tipo: action.payload.tipo,
  //   dni: action.payload.dni,
  // }),
  [userLogOut]: (state, action) => (state = {}),
});

export default userReducer;
