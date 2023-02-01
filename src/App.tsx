import { Route, Routes } from "react-router-dom";
import * as P from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<P.SigninPage />} />
      <Route path="/signup" element={<P.SignupPage />} />
      <Route path="/todo" element={<P.TodoPage />} />
    </Routes>
  );
}

export default App;
