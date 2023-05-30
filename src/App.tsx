import { Route } from "react-router-dom";
import Home from "./pages/Home/";
import { Routes } from "react-router";
import NotFound from "./pages/NotFound";
import Reminders from "./pages/Reminders";

export const App = () => {
  return (
    <Routes>
      <Route path="/" >
        <Route index element={<Home />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
