import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import AppContext from "./context/AppContext";
import NotFound from './pages/NotFound/NotFound'
import Home from './routes/Home/Home.jsx'

function App() {
  return (
    <AppContext.Provider>
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
