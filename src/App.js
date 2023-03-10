import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle.js";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Timeline from "./pages/Timeline/Timeline.js";
import { AuthProvider } from "./contexts/auth.js";
import { UserContext } from "./contexts/user.js";
import { useState } from "react";
import HashtagSearch from "./pages/Hashtag/Hashtag.js";

function App() {

  const [user, setUser] = useState({ userName: "", pictureUrl: "" });

  return (
    <AuthProvider>
      <UserContext.Provider value={{ user, setUser }}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/hashtag/:hashtag" element={<HashtagSearch />} />
            <Route path="/timeline" element={<Timeline />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AuthProvider>
  );
}

export default App;
