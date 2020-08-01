import React from 'react'
import Icon from '../../../base/Icon'

function Menu() {
    return (
        <ul className="hm">
            <li className="hm-menu">
                File
                <ul className="dropdown">
                    <li className="hm-menu-item">
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div className="menu-text">sdjfhskjg lkgjdfgdfjg </div>
                    </li>
                    <li className="hm-menu-item">
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div className="menu-text">Open window power shell</div>
                    </li>
                    <li className="hm-menu-item">
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div className="menu-text">Options</div>
                    </li>
                    
                    <li className="hm-menu-item">
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div className="menu-text">Help</div>
                    </li>
                    <li className="hm-menu-item">
                        <Icon svg={{ name: "CloseIcon", size: "15", color: "#FF0000" }} />
                        <div className="menu-text">Close</div>
                    </li>
                </ul>
            </li>
            
        </ul>
    )
}

export default Menu
