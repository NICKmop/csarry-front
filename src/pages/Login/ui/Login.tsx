import LoginForm from "../../../features/Auth/ui/LoginForm";
import styles from "./Login.module.css";

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>LOGIN</h1>
                <p className={styles.subtitle}>Please enter your login and password!</p>
                <LoginForm onSubmit={() => alert("test")} />
            </div>
        </div>
    )
}
export default LoginPage;