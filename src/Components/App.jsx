import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddListItem from "./AddListItem";
import { useState } from "react";



function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleChecked(id){
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home items={items} onChecked={handleChecked}/>,
    },
    {
      path: "/addListItem",
      element: <AddListItem onAddItems={handleAddItems} />,
    },
  ])

  return <RouterProvider router={router}/>
}

export default App
