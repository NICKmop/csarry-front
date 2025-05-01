import { FormEvent, JSX } from "react";
import styles from "./LoginForm.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button";
import { FaAccusoft, FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
interface SignUpFormProps {
    onSubmit: (evt:FormEvent<HTMLFormElement> ,link:string) => void;
}

const SignUpForm = ({onSubmit} : SignUpFormProps):JSX.Element => {
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(e ,"/home");
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        className={styles.input} 
                    />
                </div>
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
                <div className={styles.inputGroup}>
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        className={styles.input} 
                    />
                    <span className={styles.passwordIcon}>👁️</span>
                </div>
                <Button children={"SIGN UP"} onClick={() => console.log("sign up")} />
                <div className={styles.socialLogin}>
                    <FaAccusoft className={styles.socialLogin}/>
                    <FaGoogle className={styles.socialLogin}/>
                    <FaGithub className={styles.socialLogin}/>
                    <FaFacebook className={styles.socialLogin}/>
                </div>
            </form>
        </>
    )
};

export default SignUpForm;