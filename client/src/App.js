import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewFeedbackPage from "./pages/NewFeedbackPage";
import SummaryPage from "./pages/SummaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/new" element={<NewFeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
