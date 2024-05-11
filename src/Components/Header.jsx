import Button from "./Button";
import Logo from "./Logo";

function Header() {
    return (
            <div className="header">
                <Logo />
                <div className="list-btn">
                    <h3>Click here to add a new item to the list</h3>
                    <Button to="/add" className="btn">Add Item</Button>
                </div>
            </div>
    )
}

export default Header
