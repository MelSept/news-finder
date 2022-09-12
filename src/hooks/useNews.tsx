import { useContext } from "react";
import NewsContext, { CategoryContext } from "../context/NewsProvider";

const useNews = () => {
  return useContext(NewsContext) as CategoryContext;
};

export default useNews;
