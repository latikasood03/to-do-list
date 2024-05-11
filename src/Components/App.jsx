/* eslint-disable no-undef */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import AddListItem from "./AddListItem";
import EditItem from "./EditItem";

function App() {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState(null);
  const [editItem, setEditItem] = useState(null);

  useEffect(function() {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
        setItems(items);
    }
  } , []);

  useEffect(function() {
    localStorage.setItem("items", JSON.stringify(items));
  } , [items]);


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

  function handleCloseEdit() {
    setEditItem(null);
    setEditText("");
  }

  function handleDelete() {
    setItems((items) => items.filter((item) => item.id !== deleteItem));

    setShowModal(false);
    setDeleteItem(null);
  }

  function handleShowModal(id) {
    setShowModal(true);
    setDeleteItem(id);
  }

  function handleHideModal() {
    setShowModal(false);
    setDeleteItem(null);
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home 
        items={items}
        onChecked={handleChecked} 
        onDelete={handleDelete} 
        showModal={showModal} 
        onShowModal={handleShowModal} 
        onHideModal={handleHideModal}
        editItem={editItem}
        setEditItem={setEditItem}
        setItems={setItems}
        onCloseEdit={handleCloseEdit}
      />,
    },
    {
      path: "/add",
      element: <AddListItem onAddItems={handleAddItems} />,
    },
    {
      path: "/edit/:id",
      element: <EditItem items={items} setEditItem={setEditItem} setItems={setItems}/>
    }
  ])



  return <RouterProvider router={router} />
}

export default App
