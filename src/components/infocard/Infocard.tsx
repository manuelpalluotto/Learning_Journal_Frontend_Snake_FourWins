'use client';
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Sidenav from "../sidenav/Sidenav";
import { useUser } from "@/app/context/UserContext";
import Head from 'next/head';
import styles from "./Infocard.module.css";
import { useRouter } from "next/navigation";

export default function Portfolio() {

    const { isLoggedIn } = useUser();
    const router = useRouter();
    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);


    useEffect(() => {
        if (!isLoggedIn) {
            router.push("/login");
        }
    }, []);

    return (
        <>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} />
            <div className={styles.portfolioContainer}>
                <header className={styles.portfolioHeader}>
                    <h1 className={styles.portfolioName}>Manuel Palluotto - Developer Portfolio</h1>
                </header>

                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>About Me</h2>
                    <p className={styles.aboutText}>
                        Willkommen auf meinem Portfolio! Ich bin ein angehender Softwareentwickler mit einem starken Fokus auf
                        Full-Stack-Entwicklung. Hier finden Sie eine Übersicht über die Projekte, die ich bereits realisieren konnte und außerdem 
                        das Wissen, das ich mir dadurch aneignen konnte.
                    </p>
                </section>

                    <h2 className={styles.sectionTitle}>Technical Skills</h2>
                <section className={styles.skillsSection}>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Languages</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>JavaScript/TypeScript</li>
                            <li className={styles.skillItem}>Java / Objektorientierte Programmierung</li>
                            <li className={styles.skillItem}>HTML/CSS</li>
                            <li className={styles.skillItem}>SQL</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Frameworks & Libraries</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>Java Spring Boot</li>
                            <li className={styles.skillItem}>Next.js</li>
                            <li className={styles.skillItem}>Node.js</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Tools & Platforms</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>Git/GitHub</li>
                            <li className={styles.skillItem}>RESTful APIs</li>
                            <li className={styles.skillItem}>Docker</li>
                            <li className={styles.skillItem}>MySQL</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.projectsSection}>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>

                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>1. AskGPT Chrome Extension</h3>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/manuelpalluotto/AskGPT-Chrome-Extension" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className={styles.projectDescription}>
                            A Chrome extension that integrates OpenAI's API to bring ChatGPT capabilities directly into your browser.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Key Features:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Direct integration with OpenAI's ChatGPT API</li>
                                <li className={styles.featureItem}>Customizable interface for user interactions</li>
                                <li className={styles.featureItem}>Context-aware assistance based on browser content</li>
                                <li className={styles.featureItem}>User-friendly popup interface</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Technologies Used:</h4>
                            <p className={styles.techText}>JavaScript, HTML/CSS, Chrome Extension API, OpenAI API</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>2. PancakeSwap Price Bot</h3>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/manuelpalluotto/PancakeSwapPriceBot" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className={styles.projectDescription}>
                            A Telegram bot that tracks and reports cryptocurrency prices from PancakeSwap, providing users with real-time price updates and notifications.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Key Features:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Real-time price tracking from PancakeSwap DEX</li>
                                <li className={styles.featureItem}>Telegram integration for instant notifications</li>
                                <li className={styles.featureItem}>Customizable alerts for price movements</li>
                                <li className={styles.featureItem}>Support for multiple tokens/pairs</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Technologies Used:</h4>
                            <p className={styles.techText}>Node.js, JavaScript, Telegram Bot API, Web3.js, PancakeSwap API</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>3. Solidity DAPP Game</h3>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/manuelpalluotto/SolidityDappGame" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className={styles.projectDescription}>
                            A decentralized application (DApp) game built on Ethereum using Solidity smart contracts with a React frontend.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Key Features:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Smart contract-based game mechanics</li>
                                <li className={styles.featureItem}>Ethereum blockchain integration</li>
                                <li className={styles.featureItem}>Interactive web interface using React</li>
                                <li className={styles.featureItem}>Metamask integration for transactions</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Technologies Used:</h4>
                            <p className={styles.techText}>Solidity, React.js, Web3.js, Ethereum, Metamask</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>4. Laravel Auth API</h3>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/manuelpalluotto/LaravelAuthApi" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className={styles.projectDescription}>
                            A robust authentication API built with Laravel, providing secure user authentication endpoints for web applications.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Key Features:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>JWT-based authentication system</li>
                                <li className={styles.featureItem}>User registration and login flows</li>
                                <li className={styles.featureItem}>Password reset functionality</li>
                                <li className={styles.featureItem}>Role-based access control</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Technologies Used:</h4>
                            <p className={styles.techText}>PHP, Laravel, JWT, MySQL, RESTful API design</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <h3 className={styles.projectTitle}>5. Spam Mail Detector</h3>
                        <div className={styles.projectLink}>
                            <a href="https://github.com/manuelpalluotto/spam-mail-detector" target="_blank" rel="noopener noreferrer">
                                GitHub Repository
                            </a>
                        </div>
                        <p className={styles.projectDescription}>
                            A machine learning model implemented to detect and filter spam emails using natural language processing techniques.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Key Features:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>ML-based spam detection algorithm</li>
                                <li className={styles.featureItem}>Email content analysis and classification</li>
                                <li className={styles.featureItem}>Feature extraction from email text</li>
                                <li className={styles.featureItem}>High accuracy classification model</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Technologies Used:</h4>
                            <p className={styles.techText}>Python, Scikit-learn, Natural Language Processing, Pandas</p>
                        </div>
                    </div>
                </section>

                <section className={styles.strengthsSection}>
                    <h2 className={styles.sectionTitle}>Professional Strengths</h2>
                    <ul className={styles.strengthsList}>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Full-Stack Development:</span> Demonstrated ability to work on both frontend and backend technologies
                        </li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Blockchain Development:</span> Experience with Ethereum, Solidity, and Web3.js for DApp development
                        </li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>API Integration:</span> Strong skills in creating and consuming RESTful APIs
                        </li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Problem Solving:</span> Creative approaches to technical challenges as evidenced in project implementations
                        </li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Continuous Learning:</span> Regular exploration of new technologies and frameworks
                        </li>
                    </ul>
                </section>

                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>Contact Information</h2>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>GitHub:</span>
                            <a href="https://github.com/manuelpalluotto" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                github.com/manuelpalluotto
                            </a>
                        </li>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>Email:</span>
                            <span className={styles.contactText}>Contact via GitHub</span>
                        </li>
                    </ul>
                </section>

                <footer className={styles.portfolioFooter}>
                    <p className={styles.footerText}>
                        Manuel Palluotto
                    </p>
                </footer>
            </div>


        </>
    );
}