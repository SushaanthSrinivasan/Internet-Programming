import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Home'
import Info from './Info'
import Interests from "./Interests";
import Journey from "./Journey";
import Academics from "./Academics";
import Events from "./Events";
import Feedback from "./Feedback";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/events" element={<Events />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;