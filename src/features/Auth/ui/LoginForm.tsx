import { FormEvent, JSX } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button";
import { FaAccusoft, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
interface LoginFormProps {
    onSubmit: () => void;
}

const LoginForm = ({onSubmit} : LoginFormProps):JSX.Element => {
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault();
        onSubmit();
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input 
                        type="email" 
                        placeholder="email" 
                        className={styles.input} 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className={styles.input} 
                    />
                    <span className={styles.passwordIcon}>👁️</span>
                </div>
                <Link to={"#"} className={styles.forgotPassword}>
                    Forget password?
                </Link>
                <Button children={"LOGIN"} />
                <div className={styles.socialLogin}>
                    <FaAccusoft className={styles.socialLogin}/>
                    <FaGoogle className={styles.socialLogin}/>
                    <FaGithub className={styles.socialLogin}/>
                    <FaFacebook className={styles.socialLogin}/>
                </div>
                <p className={styles.signUp}>
                    create Account?{' '}
                    <Link to={"#"} className={styles.signUpLink}>
                        Sign Up
                    </Link>
                </p>
            </form>
        </>
    )
};

export default LoginForm;