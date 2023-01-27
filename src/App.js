import Home from "../src/pages/Home/Home";
import About from "../src/pages/About/About";
import ErrorPage from "../src/pages/ErrorPage/ErrorPage";
import Location from "../src/pages/Location/Location";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RootLayout } from "./components";
import "./App.css";

function App() {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="location/:id"
            element={<Location />}
            errorElement={<ErrorPage />}
          />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </RootLayout>
    </Router>
  );
}

export default App;
