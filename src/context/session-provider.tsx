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
  recentlySeen: String[];
  setRecentlySeen: Dispatch<SetStateAction<String[]>>;
}

interface SessionProviderProps {
  children: ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [wishList, setWishList] = useState<String[]>([]);
  const [recentlySeen, setRecentlySeen] = useState<String[]>([]);

  useEffect(() => {
    if (wishList.length > 0) {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }

    if (recentlySeen.length > 0) {
      localStorage.setItem("recentlySeen", JSON.stringify(recentlySeen));
    }
  }, [wishList, recentlySeen]);

  useEffect(() => {
    if (localStorage.getItem("wishList")) {
      setWishList(JSON.parse(localStorage.getItem("wishList")!));
    }

    if (localStorage.getItem("recentlySeen")) {
      setRecentlySeen(JSON.parse(localStorage.getItem("recentlySeen")!));
    }
  }, []);

  return (
    <SessionContext.Provider
      value={{ wishList, setWishList, recentlySeen, setRecentlySeen }}
    >
      {children}
    </SessionContext.Provider>
  );
}
