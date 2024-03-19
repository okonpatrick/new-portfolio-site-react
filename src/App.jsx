// Import necessary styles and components
import "./App.css";
//import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import Contact from "./components/Contact";
import LocalFooter from "./components/LocalFooter";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

// Define the main App component
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <LocalFooter />
    </div>
  );
}
// Export the App component as the default export
export default App;