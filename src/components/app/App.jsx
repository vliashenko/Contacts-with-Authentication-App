import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { authOperations } from "redux/auth";
import { Route, Routes, Navigate} from "react-router-dom";
import HomeView from "views/HomeView";
import LoginView from "views/LoginView";
import RegisterView from "views/RegisterView";
import ContactsView from "views/ContactsView";
import Container from "components/container/Container";
import { AppBar } from "components/AppBar";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar/>

      <Routes>
        <Route exact path="/" element={<HomeView/>}/>
        <Route path="/register" element={<RegisterView/>}/>
        <Route path="/login" element={<LoginView/>}/>
        <Route path="/contacts" element={<ContactsView/>}/>
      </Routes>
    </Container>
      
  );
};
