import Navbar from "./components/NavHeader/NavbarHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import Carrousel from "./components/Carrousel/Carrousel";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <Carrousel />
        </div>
      </div>
    </>
  );
}

export default App;
