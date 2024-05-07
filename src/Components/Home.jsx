/* eslint-disable react/prop-types */
import Header from "./Header"
import Footer from "./Footer"
import ListDisplay from "./ListDisplay"


function Home({items, onChecked, onDelete, showModal, onShowModal, onHideModal, onEdit, editItem, setEditItem, editText, setEditText}) {
    
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
            />
            <Footer items={items}/>
        </div> 
    )
}

export default Home
