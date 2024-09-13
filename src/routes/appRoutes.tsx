import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../components/layouts/BaseLayout'
import Contacts from "../pages/Contacts";
import ChartsAndMaps from "../pages/ChartsAndMaps";
import { CHARTS_AND_MAPS, CONATCTS, CRAETE_CONATCT } from "../config/pathName";
import CreateContact from "../pages/CreateContact";

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
    },
    {
      path:CRAETE_CONATCT,
      element:<CreateContact/>
    }
  ]
 }
]);

export { routes };
