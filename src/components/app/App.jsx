import { useEffect, lazy, Suspense } from "react";
import { useDispatch } from "react-redux/es/exports";
import { authOperations } from "redux/auth";
import { Route, Routes } from "react-router-dom";
import Container from "components/container/Container";
import { AppBar } from "components/AppBar";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";

const HomeView = lazy(() => import("views/HomeView"));
const LoginView = lazy(() => import("views/LoginView"));
const RegisterView = lazy(() => import("views/RegisterView"));
const ContactsView = lazy(() => import("views/ContactsView"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar/>

    <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route exact path="/" element={<HomeView/>}/>
        
        <Route element={<PublicRoute/>}>
          <Route path="/register" element={<RegisterView/>} exact/>
          <Route path="/login" element={<LoginView/>} exact/>
        </Route>

        <Route element={<PrivateRoute/>}>
          <Route path="/contacts" element={<ContactsView/>} exact/>
        </Route>
      </Routes>
    </Suspense>
      
    </Container>
      
  );
};
