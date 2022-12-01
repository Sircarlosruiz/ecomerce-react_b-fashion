import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import AppContext from "./context/AppContext";
import NotFound from './pages/NotFound/NotFound'
import Home from './routes/Home/Home.jsx'
import useInitialState from "./hooks/useInitialState";

function App() {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
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
