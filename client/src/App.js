import React, { Fragment } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Not_Found from './Components/Not_Found/Not_Found';
import Canceled_Page from './Pages/Canceled_Page';
import Completed_Page from './Pages/Completed_Page';
import Create_Page from './Pages/Create_Page';
import DashBoard_Page from './Pages/DashBoard_Page';
import Forget_Pass from './Pages/Forget_Pass';
import Login_Page from './Pages/Login_Page';
import New_Page from './Pages/New_Page';
import Profile_Page from './Pages/Profile_Page';
import Progress_Page from './Pages/Progress_Page';
import Registration_Page from './Pages/Registration_Page';

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
          <Routes>
            <Route exact path='/' element= {<DashBoard_Page/>} />
            <Route exact path='/canceled' element= {<Canceled_Page/>} />
            <Route exact path='/completed' element= {<Completed_Page/>} />
            <Route exact path='/create' element= {<Create_Page/>} />
            <Route exact path='/forgetPass' element= {<Forget_Pass/>} />
            <Route exact path='/login' element= {<Login_Page/>} />
            <Route exact path='/new' element= {<New_Page/>} />
            <Route exact path='/profile' element= {<Profile_Page/>} />
            <Route exact path='/progress' element= {<Progress_Page/>} />
            <Route exact path='/register' element= {<Registration_Page/>} /> 
            <Route path='*' element= {<Not_Found/>} /> 
          </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;