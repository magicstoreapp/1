import React from 'react'
import Menu from './Menu'
import Tab from './Tab'
import { useSelector, useDispatch } from 'react-redux';
import * as action from '../../../../store/actions';
import Icon from '../../../base/Icon';

function Hm() {
    const val = useSelector(state => state.explorer);
    const dispatch = useDispatch();
    return (
        <div className="hm">

           <Menu />
           <Tab />
           <div className="tabmenu-space"></div>
           <div 
                className="tabmenu-toggle"
                onClick={() => dispatch(action.toggleShowToolbar())}
           >
                <Icon svg={{ name: val.isShowToolbar?"IconAngleUp":"IconAngleDown", size: "16", color: "#847F90" }} />
           </div>
            
        </div>
    )
}

export default Hm

/*

                */