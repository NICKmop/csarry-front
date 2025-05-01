import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { Button } from "./Button";
interface NavProps {
    title: string;
}

const NavBar = ({title}: NavProps) => {
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.logo}>
                <img src="path-to-logo.png" alt="Logo" className={styles.logoImage} /> {/* Replace with your logo */}
                <span className={styles.logoText}>{title}</span>
                </div>
                <ul className={styles.navLinks}>
                <li><Link to="/about">기능연습페이지</Link></li>
                <li><Link to="/chatting">채팅기능</Link></li>
                <li><Link to="/chatbot">챗봇기능</Link></li>
                <li><Link to="/chart">차트기능</Link></li>
                <li><Link to="/mapper">지도기능</Link></li>
                <li><Button children={'🔍'} onClick={function (): void {
                        throw new Error("Function not implemented.");
                    } }/></li>
                {/* <li><Link to="/search" className={styles.searchLink}>🔍</Link></li> */}
                <li><Link to="/subscribe" className={styles.donateLink}>결제기능</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;