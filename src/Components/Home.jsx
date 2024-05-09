/* eslint-disable react/prop-types */
import Header from "./Header"
import Footer from "./Footer"
import ListDisplay from "./ListDisplay"


function Home({items, onChecked, onDelete, showModal, onShowModal, onHideModal, onEdit, editItem, setEditItem, editText, setEditText, onCloseEdit, setItems}) {
    
    return (
        <div className="app">
            <Header />
            <ListDisplay 
                items={items} 
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
                setItems={setItems}
            />
            <Footer items={items}/>
        </div> 
    )
}

export default Home
