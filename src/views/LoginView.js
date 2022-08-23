import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

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

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

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