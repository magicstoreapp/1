import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';


import * as action from './store/actions';
import MainTab from './components/MainTab';
import Toolbar from './components/Toolbar';
import Icon from './components/base/Icon';
import Layout from './components/Layout';

function App() {
    const { i18, t } = useTranslation();
    const val = useSelector(state => state.explorer);
    const dispatch = useDispatch();

    return (
        <div className="main-container">            
            <Layout />
        </div>
    )
}

export default App

/*

<MainTab />
<Toolbar />
<Icon svg={{ name: "FolderOpenIcon", size: "29", color: "#847F90" }} />
This is my first App!??

<div onClick={() => dispatch(action.toggleShowToolbar())}>
{t('File.1')}
</div>
<div className="redux-value">
    {val.isShowToolbar?"true":"false"} 
    
</div>
*/