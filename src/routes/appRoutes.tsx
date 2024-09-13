import { createBrowserRouter } from "react-router-dom";
import Contacts from "../pages/Contacts";
import ChartsAndMaps from "../pages/ChartsAndMaps";

const routes = createBrowserRouter([
  { path: "/contacts", element: <Contacts /> },
  { path: "charts-and-maps", element: <ChartsAndMaps/> },
]);

export { routes };
