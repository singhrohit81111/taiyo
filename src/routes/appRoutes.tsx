import { createBrowserRouter } from "react-router-dom";
import BaseLayout from '../components/layouts/BaseLayout'
import Contacts from "../pages/Contacts";
import ChartsAndMaps from "../pages/ChartsAndMaps";
import { CHARTS_AND_MAPS, CONTACTS, CRAETE_CONTACT } from "../config/pathName";
import CreateContact from "../pages/CreateContact";

const routes = createBrowserRouter([
 {
  path:'',
  element:<BaseLayout/>,
  children:[
    {
      index:true,
      path:CONTACTS,
      element:<Contacts/>
    },
    {
      path:CHARTS_AND_MAPS,
      element:<ChartsAndMaps/>
    },
    {
      path:CRAETE_CONTACT,
      element:<CreateContact/>
    }
  ]
 }
]);

export { routes };
