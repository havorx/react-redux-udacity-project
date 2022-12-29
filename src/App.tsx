import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useInitialState } from "./hooks/useInitialState";
import { useEffect } from "react";
import Navbar from "./components/NavBar";
import NewQuestion from "./components/Question/NewQuestion";
import QuestionDetail from "./components/Question/QuestionDetail";
import LeaderBoard from "./components/LeaderBoard";
import { useSelector } from "react-redux";
import { RootState } from "./rootReducer";

function App() {
  const { handleInitialState } = useInitialState();
  const { data: isAuthenticated } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    handleInitialState();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<ProtectedRoute component={HomePage} />} />

          <Route path="login" element={<LoginPage />} />
          <Route
            path="new-question"
            element={<ProtectedRoute component={NewQuestion} />}
          />
          <Route
            path="questions/:questionId"
            element={<ProtectedRoute component={QuestionDetail} />}
          />
          <Route
            path="leaderboard"
            element={<ProtectedRoute component={LeaderBoard} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
