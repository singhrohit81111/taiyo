import { Link, Outlet, useLocation } from "react-router-dom";
import { CHARTS_AND_MAPS, CONATCTS } from "../../config/pathName";
import { useMemo } from "react";

export default function BaseLayout() {
  const location = useLocation();

  console.log(location);

  let headerValue = useMemo(() => {
    if (location.pathname == "/") {
      return "Contacts";
    } else {
      return "Charts and Maps";
    }
  }, [location]);

  return (
    <div>
      <header className="h-[10vh] flex items-center justify-center bg-gray-400 text-white text-xl font-semibold shadow-md">
        {headerValue}
      </header>
      <main className="flex h-[90vh]">
        <aside className="flex flex-col basis-1/4 md:basis-1/5 lg:basis-1/6 p-4 bg-gray-200 text-gray-900 border-r border-gray-300">
          <Link
            to={CONATCTS}
            className="text-lg mb-4 hover:text-gray-700 transition-colors duration-200"
          >
            Contacts
          </Link>
          <Link
            to={CHARTS_AND_MAPS}
            className="text-lg hover:text-gray-700 transition-colors duration-200"
          >
            Charts and Maps
          </Link>
        </aside>
        <article className="basis-[70%] h-full">
          <Outlet />
        </article>
      </main>
    </div>
  );
}
