import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(5);

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return {
    prevPage,
    nextPage,
    currentPage,
    setCurrentPage,
  };
};
