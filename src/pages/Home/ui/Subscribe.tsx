import { Link } from "react-router-dom";
import styles from "./Subscribe.module.css";
export const SubscribePage = () => {
    const tiers = [
        {
        title: 'Tier 1',
        price: '0.3 ETH',
        benefits: [
            '3 Drops from The Whitelist (Season 1)',
            'Access to Community Prize Pools',
            'Voting Rights for Future Pools, Drops and artist Collaborations',
            'Early Mint access (Higher Chance of a legendary item)',
            'Launchpad Access',
            '"Elixir" air drop',
            'Access to "The Inner Circle"',
            'Yield Farming access and yield farming prize pool',
            'Partnered projects Whitelist Spots',
        ],
        borderColor: '#ff4d4d', // Pink border for Tier 1
        },
        {
        title: 'Tier 2',
        price: '0.4 ETH',
        benefits: [
            '3 Drops from The Whitelist (Season 1)',
            'Access to Community Prize Pools',
            'Voting Rights for Future Pools, Drops and artist Collaborations',
            'Early Mint access (Higher Chance of a legendary item)',
            'Launchpad Access',
            '"Elixir" air drop',
            'Access to "The Inner Circle"',
            'Yield Farming access and yield farming prize pool',
            'Partnered projects Whitelist Spots',
        ],
        borderColor: '#4d94ff', // Blue border for Tier 2
        },
        {
        title: 'Tier 3 (The Inner Circle)',
        price: '0.6 ETH',
        benefits: [
            '3 Drops from The Whitelist (Season 1)',
            'Access to Community Prize Pools',
            'Voting Rights for Future Pools, Drops and artist Collaborations',
            'Early Mint access (Higher Chance of a legendary item)',
            'Launchpad Access',
            '"Elixir" air drop',
            'Access to "The Inner Circle"',
            'Yield Farming access and yield farming prize pool',
            'Partnered projects Whitelist Spots',
        ],
        borderColor: '#ffd700', // Gold border for Tier 3
        },
    ];

    return (
        <div className={styles.container}>
        {/* Navigation Bar */}
        <nav className={styles.nav}>
            <div className={styles.logo}>
            <span className={styles.logoText}>W</span> {/* Replace with your logo */}
            </div>
            <ul className={styles.navLinks}>
            <li><Link to="/prize-pool">Prize pool</Link></li>
            <li><Link to="/subscribe">Subscribe</Link></li>
            <li><Link to="/roadmap">Roadmap</Link></li>
            <li><Link to="/upcoming-drops">Upcoming Drops</Link></li>
            <li><Link to="/meet-the-team">Meet the Team</Link></li>
            <li><Link to="/wallet" className={styles.walletLink}>Wallet</Link></li>
            </ul>
        </nav>

        {/* Subscription Section */}
        <section className={styles.subscribeSection}>
            <h1 className={styles.title}>Subscribe</h1>
            <p className={styles.subtitle}>
            Join The Whitelist by choosing your perfect option below
            </p>
            <div className={styles.tiers}>
            {tiers.map((tier, index) => (
                <div
                key={index}
                className={styles.tierCard}
                style={{ borderTop: `4px solid ${tier.borderColor}` }}
                >
                <h2 className={styles.tierTitle}>{tier.title}</h2>
                <p className={styles.tierPrice}>{tier.price}</p>
                <ul className={styles.benefitsList}>
                    {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                        <span className={styles.checkmark}>✔</span> {benefit}
                    </li>
                    ))}
                </ul>
                </div>
            ))}
            </div>
        </section>

        {/* Additional Content Section (Appears on Scroll) */}
        <section className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>Why Subscribe?</h2>
            <p className={styles.sectionDescription}>
            Subscribing to one of our tiers grants you exclusive access to The Whitelist, community benefits, and more.
            Choose the tier that best suits your needs and join our community today!
            </p>
            <Link to="/learn-more" className={styles.learnMoreButton}>Learn More</Link>
        </section>

        {/* Add more sections as needed */}
        <section className={styles.contentSection}>
            <h2 className={styles.sectionTitle}>FAQs</h2>
            <p className={styles.sectionDescription}>
            Have questions about our subscription tiers? Check out our frequently asked questions to learn more about the
            benefits and how to get started.
            </p>
            <Link to="/faqs" className={styles.learnMoreButton}>View FAQs</Link>
        </section>
        </div>
    );
};