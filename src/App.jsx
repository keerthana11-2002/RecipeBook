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
import CategoryInfo from "./component/categoryInfo";
import SearchResults from "./component/SearchResults.jsx";
import AddRecipe from "./component/AddRecipe";
import Newsletter from "./component/Newsletter";

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
        path: "/:idMeal/:strMeal",
        element: <RecipeInfo />,
      },
      {
        path: "/:strCategory",
        element: <CategoryInfo />,
      },

      { path: "/search/:searchQuery", 
        element: <SearchResults /> 
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
        path: "/addRecipe",
        element: <AddRecipe />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "*",
        element: <div>404 - Page Not Found</div>,
      },
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
