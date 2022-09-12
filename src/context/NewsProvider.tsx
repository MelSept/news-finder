import { useState, useEffect, createContext, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const NewsContext = createContext<>();

const NewsProvider = ({ children }: Props) => {
  return <NewsContext.Provider value={{}}>{children}</NewsContext.Provider>;
};

export { NewsProvider };

export default NewsContext;
