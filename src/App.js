import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {PublicRoutes} from "./Routes"
import Header from "./Pages/Components/Header/Header";
import Footer from "./Pages/Components/Footer/Footer"
import './index.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes >
          {PublicRoutes.map(route =>{
            const Page = route.component
            return <Route path={route.path} element={<Page />} />
          })}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
