import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "src/redux/store";
import { logIn } from "src/redux/slices/auth-slice";
import { requestSignIn } from "./api";

export const apiRequestSignIn = (id: string, password: string, successHandler: any) => {
  requestSignIn(id, password)
    .then((res) => {
      successHandler(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
