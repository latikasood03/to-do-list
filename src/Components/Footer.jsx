/* eslint-disable react/prop-types */
function Footer({items}) {
    const numItems = items.length;
    const numChecked = items.filter((item) => item.checked).length;

    return (
        <footer className="footer">
            <p>Number of items in your list: {numItems}</p>
            <p>Items checked: {numChecked}</p>
        </footer>
    )
}

export default Footer
