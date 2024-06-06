/* eslint-disable react/prop-types */
import { BsGrid, BsListUl, BsCardText } from "react-icons/bs"
import Button from "./Button"
import { useState } from "react";

function ToggleViewMode({setViewMode}) {
    const [isActive, setIsActive] = useState(false);

    function handleViewChange(mode) {
        setViewMode(mode);
        setIsActive(false);
    }

    return (
        <div className="toggle">

            <Button className="grid-btn" onClick={() => setIsActive(!isActive)}><BsGrid /></Button>
            
            {isActive &&
            <div className="view">   
                <Button onClick={() => handleViewChange("list")}><BsListUl/> <span> List View </span></Button>
                <Button onClick={() => handleViewChange("card")}><BsCardText /> <span> Card View</span></Button>
            </div>
            }
        </div>
    )
}

export default ToggleViewMode
