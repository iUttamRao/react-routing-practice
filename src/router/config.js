import { Outlet, createBrowserRouter } from "react-router-dom";
import { About, Home, Profile, User } from "../pages";
import { ABOUT, DEFAULT, PROFILE, USER } from "./keys";
import Auth from "../pages/Auth";
// import Profile from "../pages/Profile/Profile";

const router = createBrowserRouter([
    {
    path: DEFAULT,
    element : <Outlet />,
    children :[
      {
        element : <Home />,
        index: true,
      },
      {
        element : <Auth user/>, // Means Auth User={false} This will make it private routes.
        path: PROFILE,
        children : [
          {
            element : <Profile />,
            index : true,
          },
          {
          path : USER,
          element : <User />
          },
        ]
      }
    ]
  },
  {
    path:ABOUT,
    element: <About />
  },
  ]);

  export default router;