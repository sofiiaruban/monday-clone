import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import CategoriesContext from "./context";
import { useState } from "react";

const App = () => {
  const [categories, setCategories] = useState(null);
  const value = { categories, setCategories };
  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <HashRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/ticket" element={<TicketPage />}></Route>
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            ></Route>
          </Routes>
        </HashRouter>
      </CategoriesContext.Provider>
    </div>
  );
};

export default App;
