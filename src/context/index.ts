import { createContext, useContext } from "react";

export type Global = {
  coffee: Coffee;
  setCoffee: (coffe: Coffee) => void;
  width: string;
  setWidth: (width: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const GlobalCoffee = createContext<Global>({
  coffee: {
    id: 0,
    description: "",
    image: "",
    ingredients: [],
    title: "",
  },
  width: "",
  open: false,
  setWidth: () => {},
  setCoffee: () => {},
  setOpen: () => {},
});

export const useGlobalCoffee = () => useContext(GlobalCoffee);
