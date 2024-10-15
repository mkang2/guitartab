import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Header from "./header.js";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          {/* Setup the Router Switch and Routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
