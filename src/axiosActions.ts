import { someAPI } from "./axios";

export const getSomeData = () => {
  const config = {
    headers: {
      "X-CSCAPI-KEY": "API_KEY",
    },
  };

  return someAPI
    .get(``, config)
    .then((response: any) => response)
    .catch((error: any) => error);
};
