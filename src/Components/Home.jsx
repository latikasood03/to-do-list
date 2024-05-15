/* eslint-disable react/prop-types */
import Header from "./Header"
import Footer from "./Footer"
import ListDisplay from "./ListDisplay"


function Home() {
    
    return (
        <div className="app">
            <Header />
            <ListDisplay />
            <Footer />
        </div> 
    )
}

export default Home
