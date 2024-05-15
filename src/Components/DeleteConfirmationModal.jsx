/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "./Button";
import { deleteItem } from "../itemsSlice";

function DeleteConfirmationModal({ item, setShowModal }) {
  const dispatch = useDispatch();
  
  function handleDelete() {
    dispatch(deleteItem(item.id)); 
  }
    return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this item from the list?</p>
          <div className="modal-actions">
            <Button onClick={handleDelete} className="btn">Delete</Button>
            <Button onClick={() => setShowModal(false)} className="btn">Cancel</Button>          
          </div>
        </div>
      </div>
     </div>
    );
  }

  export default DeleteConfirmationModal