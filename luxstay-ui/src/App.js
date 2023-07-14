import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "~/components/Page/Home";
import Contact from "~/components/Page/Contact";
import DefaultLayout from "~/components/Layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <Home />
              </DefaultLayout>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <DefaultLayout>
                <Contact />
              </DefaultLayout>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
