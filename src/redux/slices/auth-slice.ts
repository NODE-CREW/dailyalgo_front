import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isLoggedIn: boolean;
  token: string | null;
};

const initialState = {
  value: {
    isLoggedIn: false,
    token: null,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (State, action: PayloadAction<string>) => {
      return {
        value: {
          isLoggedIn: true,
          token: action.payload,
        },
      };
    },
  },
});

export const { logIn } = auth.actions;
export default auth.reducer;
