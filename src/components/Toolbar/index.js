import React from 'react'
import Icon from '../base/Icon';

function Toolbar() {
    return (
        <div className="toolbar">  
            <div className="sec">    
                <div className="svg-icon">
                    <Icon svg={{ name: "FolderOpenIcon", size: "29", color: "#847F90" }} />             
                </div>
                <Icon svg={{ name: "IconPin", size: "29", color: "#00FF00" }} />
                
                <Icon svg={{ name: "IconPaste", size: "55", color: "#847F90" }} />
                <Icon svg={{ name: "IconCut", size: "14", color: "#847F90" }} />
                <Icon svg={{ name: "FolderOpenIcon", size: "29", color: "#847F90" }} />
                <Icon svg={{ name: "IconCut", size: "14", color: "#847F90" }} />
                <Icon svg={{ name: "ExpandIcon", size: "10", color: "#FF0000" }} />
            </div>     
        </div>
    )
}

export default Toolbar
