/* eslint-disable react/prop-types */
import Header from "./Header"
import Footer from "./Footer"
import ListDisplay from "./ListDisplay"

function Home({items, onChecked}) {
    
    return (
        <div className="app">
            <Header />
            <ListDisplay items={items} onChecked={onChecked}/>
            <Footer items={items}/>
        </div> 
    )
}

export default Home
