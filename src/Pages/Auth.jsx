import React from 'react';
import CreateAccount from '../Authtication/Signup/CreateAccount'
import {Routes, Route} from 'react-router-dom'
import AuthHeader from '../Authtication/AuthCommon/AuthHeader';


export default function Auth() {
    return (
        <>  
      
            <Routes>
                <Route path="/createAccount" element={<CreateAccount />}></Route>
            </Routes>
        </>
    )
}





