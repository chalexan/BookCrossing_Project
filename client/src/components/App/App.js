// import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Nav from '../Nav/Nav'
import Registration from '../Registration/Registration';
import Login from "../Login/Login";
import Test from "../Test/Test";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ShareBook from "../ShareBook/ShareBook";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    tryAuth();
  },[]);

   async function tryAuth () {
   const preResult = await fetch('http://localhost:8080/users/auth');
   if (preResult.status === 401) return
   const result = await preResult.json();
   const login = result.login;
   const id = result.id;
   if (login) dispatch({ type: 'LOGIN', payload: login });
  }

  const { isLogin, userName } = useSelector((state) => state);
     return (
    <div>
     <BrowserRouter>
       <Nav />
       <Switch>
       <Route path='/registration'>
           <Registration />
         </Route>
         <Route path='/login'>
           <Login />
         </Route>
         <Route path='/test'>
           <Test/>
        </Route> 
         <Route path='/share'>
           <ShareBook />
         </Route>
         <Route path='/'>
           <Main />
         </Route>
       </Switch>
        {(!isLogin) ? <Redirect to={"/login"}/> : null}
        {(isLogin) ? <Redirect to={"/test"}/> : null}
       <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
