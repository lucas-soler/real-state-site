"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react";

export const SessionContext = createContext({} as SessionContextProps);

interface SessionContextProps {
  wishList: String[];
  setWishList: Dispatch<SetStateAction<String[]>>;
}

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [wishList, setWishList] = useState<String[]>([]);

  useEffect(() => {
    if (wishList.length > 0) {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  }, [wishList]);

  useEffect(() => {
    if (localStorage.getItem("wishList")) {
      setWishList(JSON.parse(localStorage.getItem("wishList")!));
    }
  }, []);

  return (
    <SessionContext.Provider value={{ wishList, setWishList }}>
      {children}
    </SessionContext.Provider>
  );
}
