/* eslint-disable react/prop-types */
import EditItem from "./EditItem";
import ListItem from "./ListItem"
;
function ListDisplay({items, onChecked, showModal, onShowModal, onDelete, onHideModal, onEdit, editItem, setEditItem, editText, setEditText, onCloseEdit, setItems}) {
    return (
        <div className="list">
            <ul>
                {items.map((item) => (
                editItem === item.id ? (
                <EditItem 
                    item={item} 
                    onChecked={onChecked}
                    onEdit={onEdit}
                    editText={editText}
                    setEditText={setEditText}
                    onCloseEdit={onCloseEdit}
                    editItem={editItem}
                    setEditItem={setEditItem}
                    setItems={setItems}
                    key={item.id}
                />
                ) : (

                <ListItem 
                    item={item} 
                    onChecked={onChecked} 
                    onDelete={onDelete} 
                    showModal={showModal} 
                    onShowModal={onShowModal} 
                    onHideModal={onHideModal}
                    onEdit={onEdit}
                    editItem={editItem}
                    setEditItem={setEditItem}
                    editText={editText}
                    setEditText={setEditText}
                    onCloseEdit={onCloseEdit}
                    key={item.id}
                />)))}
            </ul>
        </div>
    )
}

export default ListDisplay

