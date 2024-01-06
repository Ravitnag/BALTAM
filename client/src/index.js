import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Menu from './Menu';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RailsBaltams from './baltamsPages/RailsBaltams';
import LinesBaltams from './baltamsPages/LinesBaltams';
import ShowsBaltams from './baltamsPages/ShowsBaltams';
import ParkingBaltams from './baltamsPages/ParkingBaltams';
import Home from './baltamsPages/Home';
import NoPage from './baltamsPages/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index  element={<Home />} />
        <Route  path="linesBaltams" element={<LinesBaltams />} />
        <Route path="parkingBaltams" element={<ParkingBaltams />} />
        <Route path="showsBaltams" element={<ShowsBaltams />} />
        <Route path="railsBaltams" element={<RailsBaltams />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


