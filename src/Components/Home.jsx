/* eslint-disable react/prop-types */
import Header from "./Header"
import Footer from "./Footer"
import ItemDisplay from "./ItemDisplay"


function Home() {
    
    return (
        <div className="app">
            <Header />
            <ItemDisplay />
            <Footer />
        </div> 
    )
}

export default Home
