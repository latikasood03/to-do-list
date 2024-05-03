/* eslint-disable no-undef */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AddListItem from "./AddListItem";
import { useState } from "react";



function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);

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

  function handleDelete() {
    setItems((items) => items.filter((item) => item.id !== deleteItem));

    setShowModal(false);
    setDeleteItem(null);
  }

  function handleShowModal(id) {
    setShowModal(true);
    setDeleteItem(id);
    console.log(deleteItem);
  }

  function handleHideModal() {
    setShowModal(false);
    setDeleteItem(null);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home items={items} onChecked={handleChecked} onDelete={handleDelete} showModal={showModal} onShowModal={handleShowModal} onHideModal={handleHideModal}/>,
    },
    {
      path: "/addListItem",
      element: <AddListItem onAddItems={handleAddItems} />,
    },
  ])

  return <RouterProvider router={router}/>
}

export default App
