/* eslint-disable no-undef */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddListItem from "./AddListItem";
import EditItem from "./EditItem";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/add",
      element: <AddListItem />,
    },
    {
      path: "/edit/:id",
      element: <EditItem />
    }
  ])

  return <RouterProvider router={router} />
}

export default App
