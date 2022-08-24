import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import authOperations from "../redux/auth/auth-operations"
import { useSelector } from 'react-redux';
import {authSelectors} from 'redux/auth';
import { useNavigate } from 'react-router-dom';

const styles = {
    form: {
      width: 320,
    },
    label: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: 15,
    },
  };

const RegisterView = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        isLoggedIn && navigate("/")
    }, [isLoggedIn, navigate])

    const handleChange = ({ target: {name, value} }) => {
        switch (name) {
            case "name":
                return setName(value);
            case "email":
                return setEmail(value);
            case "password":
                return setPassword(value);
            default: 
                return; 
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }))
        setEmail("");
        setPassword("");
        setName("")
    }

    return (
        <div>
            <h1>
                Register Page
            </h1>

            <form 
                style={styles.form}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                 <label style={styles.label}>
                    Name
                    <input
                        type="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </label>

                <label style={styles.label}>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>

                <label style={styles.label}>
                    Password
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    );
};

export default RegisterView;