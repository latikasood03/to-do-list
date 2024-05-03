/* eslint-disable react/prop-types */
import Button from "./Button";

function DeleteConfirmationModal({onDelete, onHideModal}) {

    return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>Confirm Delete</h2>
          <p>Are you sure you want to delete this item from the list?</p>
          <div className="modal-actions">
            <Button onClick={onDelete} className="btn">Delete</Button>
            <Button onClick={onHideModal} className="btn">Cancel</Button>
          </div>
        </div>
      </div>
     </div>
    );
  }

  export default DeleteConfirmationModal