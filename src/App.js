import Main from "./pages/main.js";
import Contact from "./pages/contact.js";
import ShopDetails from "./pages/ShopDetails.js";
import Shop from "./pages/Shop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RoutePaths, DynamicRoutes } from "./xnavigate.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main />} path={RoutePaths.ROOT} />

        <Route element={<Contact />} path={RoutePaths.CONTACT} />

        <Route
          element={<ShopDetails />}
          path={RoutePaths.SHOP_DETAILS_With_Id}
        />

        <Route element={<Shop />} path={RoutePaths.SHOP} />

        <Route element={<Login />} path={RoutePaths.LOGIN} />

        <Route element={<Register />} path={RoutePaths.REGISTER} />
      </Routes>
    </Router>
  );
}

export default App;
