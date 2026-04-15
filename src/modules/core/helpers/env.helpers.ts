import { ENVIRONMENTS } from "../constants/env.constants";

export const getIsProduction = () => {
  return process.env.NEXT_PUBLIC_ENV === ENVIRONMENTS.production;
};
