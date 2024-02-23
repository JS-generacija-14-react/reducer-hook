import { createContext, useReducer } from "react";
import { bookReducer } from "../reducer/bookReducer";

export const BookContext = createContext();

const defaultBooks = [
  { title: "ubiti pticu rugalicu", id: 1, author: "Harper Li" },
  { title: "nepodnosljiva lakoca React-a", id: 2, author: "Nikola Komazec" },
  { title: "ko je maznuo moj sir", id: 3, author: "Spenser Dzonson" },
];

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, defaultBooks);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {" "}
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
