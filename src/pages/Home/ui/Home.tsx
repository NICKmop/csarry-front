import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../../../shared/ui/NavBar"
export const HomePage = () => {
    return (
        <div className={styles.container}>
            {/* Navigation Bar */}
            <NavBar title="기능 연습 페이지"/>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>TITLE</h1>
                <p className={styles.heroDescription}>
                    TITLE 그냥 내용
                </p>
                <Link to="/support" className={styles.supportButton}>Support Our Parks</Link>
                </div>
            </section>

            {/* Additional Content Section (Appears on Scroll) */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>정보 더보기</h2>
                <p className={styles.sectionDescription}>
                정보 더보기 서브 내용
                </p>
                <Link to="/learn-more" className={styles.learnMoreButton}>Learn More</Link>
            </section>

            {/* Add more sections as needed */}
            <section className={styles.contentSection}>
                <h2 className={styles.sectionTitle}>정보 더보기 2</h2>
                <p className={styles.sectionDescription}>
                정보 더보기 서브 내용 2
                </p>
                <Link to="/get-involved" className={styles.learnMoreButton}>Get Involved</Link>
            </section>
        </div>
    );
};