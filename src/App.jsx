import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { useAuthContext } from "./context/AuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();

  if (!authIsReady) {
    return null; // Return null while waiting for authIsReady
  }
  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <>
            {/* Authenticated routes */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            {/* Authentication routes */}
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<Navigate to="/auth" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
    //TODO----------

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/auth" element={<Auth />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
