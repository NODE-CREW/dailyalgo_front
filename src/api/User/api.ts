import { requestSignIn } from ".";

export const apiRequestSignIn = (id: string, password: string, successHandler: any) => {
  requestSignIn(id, password)
    .then((res) => {
      successHandler(res);
    })
    .catch((err) => {
      console.log(err);
    });
};
