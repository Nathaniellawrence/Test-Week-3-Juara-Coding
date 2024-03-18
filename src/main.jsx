import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './pages/Layout';
import Beranda from './pages/Beranda';
import About from './pages/About';
import Page404 from './pages/Page404';
import LoginForm from "./Components/LoginForm/LoginForm";
import Download from "./Components/Download/Download";
import "./index.css";

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginForm />} />
        <Route path="download" element={<Download />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
    );
    }
    ReactDOM.createRoot(document.getElementById('root')).render(
    <Router />
    )
    