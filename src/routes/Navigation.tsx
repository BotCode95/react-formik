import {
  BrowserRouter,
  Route,
  NavLink,
  Routes
} from 'react-router-dom';

import logo from '../logo.svg';
import { 
  FormikBasicPage, 
  FormikComponents, 
  FormikYupPage, 
  FormikAbstraction, 
  RegisterPage,
  RegisterFormikPage,
  DynamicForm
} from '../pages'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive}) => isActive ? 'nav-active' : ''}>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
            </li>
            <li>
              <NavLink to="/formik-components" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstraction" className={({isActive}) => isActive ? 'nav-active' : ''}>Formik Abstraction</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({isActive}) => isActive ? 'nav-active' : ''}>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive}) => isActive ? 'nav-active' : ''}>Users</NavLink>
            </li>
            <li>
              <NavLink to="/formik-register" className={({isActive}) => isActive ? 'nav-active' : ''}>Register Formik</NavLink>
            </li>
            <li>
              <NavLink to="/dynamic-form" className={({isActive}) => isActive ? 'nav-active' : ''}>Dynamic Form</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/formik-register" element={<RegisterFormikPage/>}/>
          <Route path="/dynamic-form" element={<DynamicForm/>}/>
          <Route path="/formik-basic" element={<FormikBasicPage/>}/>
          <Route path="/formik-yup" element={<FormikYupPage/>}/>
          <Route path="/formik-components" element={<FormikComponents/>}/>
          <Route path="/formik-abstraction" element={<FormikAbstraction/>}/>
          <Route path="/users"  element={<h1>Usersv</h1>}/>
          <Route path="/"  element={<h1>Home</h1>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}