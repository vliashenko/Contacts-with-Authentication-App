import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {authSelectors} from 'redux/auth';
import { useEffect } from 'react';

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

const LoginView = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        isLoggedIn && navigate("/")
    }, [isLoggedIn, navigate])

    const handleChange = ({ target: {name, value} }) => {
        switch (name) {
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
        dispatch(authOperations.login({ email, password }));
        setEmail("");
        setPassword("");
    }

    return (
        <div>
            <h1>
                Login Page
            </h1>

            <form 
                style={styles.form}
                onSubmit={handleSubmit}
                autoComplete="off"
            >
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
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginView;