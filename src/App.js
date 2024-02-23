import "./App.css";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import CounterReducer from "./components/CounterReducer";
import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">
      {/* <CounterReducer /> */}
      <BookContextProvider>
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
