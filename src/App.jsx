import "./styles/App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./containers/Layout/Layout";
import NotFound from './pages/NotFound/NotFound'
import Home from './routes/Home/Home.jsx'
import MyOrderList from "./containers/MyOrderList/MyOrderList";

function App() {
  return (
    <BrowserRouter>
      <Layout />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/MyOrderList" element={<MyOrderList/>} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
