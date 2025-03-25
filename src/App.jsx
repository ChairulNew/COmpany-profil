import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import CustomNavbar from "./Components/Navbar/CustomNavbar";
import Header from "./Components/Header/Header";
import Section1 from "./Components/section/Section-1";

function App() {
  return (
    <>
      <CustomNavbar />
      <Header />
      <Section1 />
    </>
  );
}

export default App;
