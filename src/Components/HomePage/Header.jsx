import Button from "../Button";

function Header() {
    return (
            <div className="header">
                <h3>Click here to add a new item to the list</h3>
                <Button to="/addListItem" className="btn">Add Item</Button>
            </div>
    )
}

export default Header
