import {
  useState,
  useEffect,
  createContext,
  ReactNode,
  ChangeEvent,
} from "react";

type props = {
  children?: ReactNode;
};

type TCategory = {
  value: string;
  label: string;
};

export interface CategoryContext {
  category: TCategory;
  handleChangeCategory: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
}

const NewsContext = createContext<CategoryContext | null>(null);

const NewsProvider = ({ children }: props) => {
  const [category, setCategory] = useState("general");

  const handleChangeCategory = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setCategory(e.target.value);
  };

  return (
    <NewsContext.Provider value={{ category, handleChangeCategory }}>
      {children}
    </NewsContext.Provider>
  );
};

export { NewsProvider };

export default NewsContext;
