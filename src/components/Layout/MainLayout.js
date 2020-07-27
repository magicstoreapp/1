import React from 'react'
import H from './header'


function MainLayout(props) {
    return (
        <div className="layout">
            <H />
            <div className="b">
                <div className="bl">
                    left side
                </div>
                <div className="bc">
                    {props.children}
                </div>
                <div className="br">
                    right side
                </div>
            </div>

            <div className="f">
                <div className="f1"></div>
                <div className="f2"></div>
            </div>
        </div>
    )
}

export default MainLayout
