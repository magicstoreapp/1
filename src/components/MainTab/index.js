import React from 'react'
import TabMenu from './TabMenu'
import TabItem from './TabItem/index'
import TabToggle from './TabToggle'

function MainTab() {
    return (
        <div className="main-tab">
            <TabMenu />

            <TabItem />
            <div className="main-tab__tab-space" />
            <TabToggle />
        </div>
    )
}

export default MainTab
