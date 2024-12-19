import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import RecipeInfo from "./component/RecipeInfo";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipe/:id",
        element: <RecipeInfo />,
      },
      {
        path: "/about", 
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      }
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
