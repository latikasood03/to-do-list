import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./HomePage/Home";
import AddListItem from "./AddItemPage/AddListItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/addListItem",
    element: <AddListItem />,
  },
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
