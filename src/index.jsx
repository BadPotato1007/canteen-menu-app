import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Book from "./pages/Book";
import Success from "./pages/Success"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/book" element={<Book />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);