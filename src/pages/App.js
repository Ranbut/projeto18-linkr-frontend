import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles.js';
import Publication from "./Publication/Publication.js";

export default function App() {
    return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/post-publication" element={ <Publication /> } />
        </Routes>
      </BrowserRouter>
    );
  }