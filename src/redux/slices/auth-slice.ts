import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserInfo } from "src/types/user";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  isLogIn: boolean;
  token: string | null;
  userInfo: UserInfo | null;
};

const initialState = {
  value: {
    isLogIn: false,
    token: null,
    userInfo: null,
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogIn: (State, action: PayloadAction<string>) => {
      return {
        value: {
          isLogIn: true,
          token: action.payload,
          userInfo: State.value.userInfo,
        },
      };
    },
    setLogOut: () => {
      return {
        value: {
          isLogIn: false,
          token: null,
          userInfo: null,
        },
      };
    },
    setUserInfo: (State, action: PayloadAction<UserInfo>) => {
      return {
        value: {
          isLogIn: true,
          token: State.value.token,
          userInfo: {
            ...State.value.userInfo,
            ...action.payload,
          },
        },
      };
    },
  },
});

export const { setLogIn, setUserInfo, setLogOut } = auth.actions;
export default auth.reducer;
