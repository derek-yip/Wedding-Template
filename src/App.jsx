import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Detail from "./pages/Detail";
import Footer from "./global/globalJsx/Footer";
import Header from "./global/globalJsx/Header";
import ArrowTop from "./components/ArrowTop";
import PageNotFound from "./pages/pageNotFound";
// import { UseLocoScrollWithGsap, UseLocoScroll} from '../globalJs/UseLocoScroll';

function App() {
  const Layout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
      // Opening_Anime();
    }, [pathname]);

    return (
      <div>
        {/* <OpeningAnime /> */}
        <Header />
        <Outlet />
        <Footer />
        <ArrowTop />
        {/* <SmoothScroll /> */}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <PageNotFound />,
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Wedding",
          element: <Home />,
        },
        {
          path: "/Story",
          element: <Story />,
        },
        {
          path: "/Detail",
          element: <Detail />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
