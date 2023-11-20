import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserInfo } from "src/types/user";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isLoggedIn: boolean;
  token: string | null;
  userInfo: UserInfo | null;
};

const initialState = {
  value: {
    isLoggedIn: false,
    token: null,
    userInfo: null,
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
          userInfo: State.value.userInfo,
        },
      };
    },
    setUserInfo: (State, action: PayloadAction<UserInfo>) => {
      return {
        value: {
          isLoggedIn: true,
          token: State.value.token,
          userInfo: action.payload,
        },
      };
    },
  },
});

export const { logIn, setUserInfo } = auth.actions;
export default auth.reducer;
