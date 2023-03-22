import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline/Timeline.js";
import { useState } from "react";
import Context from "./contexts/auth.js";
import UserPage from "./pages/UserPage/UserPage.js";
import HashtagSearch from "./pages/Hashtag/Hashtag.js";



function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  return (
    <Context.Provider value={{ user, setUser }}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} /> 
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/hashtag/:hashtag" element={<HashtagSearch />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
