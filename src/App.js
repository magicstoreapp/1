import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';


import * as action from './store/actions';

function App() {
    const { i18, t } = useTranslation();
    const val = useSelector(state => state.explorer);
    const dispatch = useDispatch();

   const myX="sdfsdf";
    return (
        <div>
            This is my first App!!122423fsdsg
            <div onClick={() => dispatch(action.toggleShowToolbar())}>
            {t('File.1')}
            </div>
            <div>
                {val.isShowToolbar?"true":"false"}
            </div>
        </div>
    )
}

export default App
