import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../components/layouts/BaseLayout'
import Contacts from "../pages/Contacts";
import ChartsAndMaps from "../pages/ChartsAndMaps";
import { CHARTS_AND_MAPS, CONATCTS } from "../config/pathName";

const routes = createBrowserRouter([
 {
  path:'',
  element:<BaseLayout/>,
  children:[
    {
      index:true,
      path:CONATCTS,
      element:<Contacts/>
    },
    {
      path:CHARTS_AND_MAPS,
      element:<ChartsAndMaps/>
    }
  ]
 }
]);

export { routes };
