import React from 'react'
import Icon from '../../../base/Icon'

function Menu() {
    return (
        <ul className="hm">
            <li>
                File
                <ul class="dropdown">
                    <li>
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div>sdjfhskjg lkgjdfgdfjg </div>
                    </li>
                    <li>
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div>Open window power shell</div>
                    </li>
                    <li>
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div>Options</div>
                    </li>
                    <hr />
                    <li>
                        <Icon svg={{ name: "IconPin", size: "15", color: "#00FF00" }} />
                        <div>Help</div>
                    </li>
                    <li>
                    <Icon svg={{ name: "CloseIcon", size: "15", color: "#FF0000" }} />
                        <div>Close</div>
                    </li>
                </ul>
            </li>
            
        </ul>
    )
}

export default Menu
