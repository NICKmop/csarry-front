import { FormEvent, useEffect, useState } from "react";
import LoginForm from "../../../features/Auth/ui/LoginForm";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import SignUpForm from "../../../features/Auth/ui/SignUpForm";

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    
    const [title, setTitle] = useState(isSignUp ? "SIGNUP" : "LOGIN");
    const [subtitle, setSubtitle] = useState(isSignUp ? "Please enter your information!" : "Please enter your login and password!");

    const nav = useNavigate();

    const handleOnSubmitEvent = (e: FormEvent<HTMLFormElement>, nextLink : string) => {
        e.preventDefault();
        nav(nextLink);
    }
    
    useEffect(() => {
        setTitle(isSignUp ? "SIGNUP" : "LOGIN");
        setSubtitle(
            isSignUp 
                ? "Please enter your information!" 
                : "Please enter your email and password!"
            );
    }, [isSignUp]);

    
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
                {isSignUp ? <SignUpForm onSubmit={handleOnSubmitEvent} /> : <LoginForm onSubmit={handleOnSubmitEvent} />}
                <p className={styles.signUp}>
                    {/* create Account?{' '} */}
                    {isSignUp ? "Already have an account? " : "Create Account? "}
                    <Link to={"#"} className={styles.signUpLink} onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? "Login" : "Sign Up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}
export default LoginPage;