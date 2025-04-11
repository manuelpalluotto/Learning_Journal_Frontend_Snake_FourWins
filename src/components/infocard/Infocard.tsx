'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useUser } from "@/app/context/UserContext";

import Navbar from "../navbar/Navbar";
import Sidenav from "../sidenav/Sidenav";

import styles from "./Infocard.module.css";

import { FaTimeline } from "react-icons/fa6";
import { GiTicTacToe } from "react-icons/gi";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaChessBoard } from "react-icons/fa";


import Link from "next/link";
import { FaReact } from "react-icons/fa";
import { VscSnake } from "react-icons/vsc";


export default function Portfolio() {
    const router = useRouter();
    const [isSidenavOpen, setIsSidenavOpen] = useState<boolean>(false);

    return (
        <>
            <Navbar toggleSidenav={() => setIsSidenavOpen(!isSidenavOpen)} />
            <Sidenav isOpen={isSidenavOpen} onClose={() =>setIsSidenavOpen(false)}/>
            <div className={styles.portfolioContainer}>
                <header className={styles.portfolioHeader}>
                    <h1 className={styles.portfolioName}>Manuel Palluotto - Developer Portfolio</h1>
                </header>

                <section className={styles.aboutSection}>
                    <h2 className={styles.sectionTitle}>About</h2>
                    <p className={styles.aboutText}>
                        Willkommen auf meinem Portfolio! Ich bin ein angehender Softwareentwickler mit einem starken Fokus auf
                        Full-Stack-Entwicklung. Hier finden Sie eine Übersicht über die Projekte, die ich bereits realisieren konnte und außerdem
                        das Wissen, das ich mir dadurch aneignen konnte.
                        <br/>
                        <br/>
                        Außerdem können Sie gerne in der Navigationsleiste auf das Burger-Menü klicken, um die Seitenleiste zu öffnen und sich meine Projekte
                        direkt anzusehen!
                    </p>
                </section>

                <h2 className={styles.sectionTitle}>Technische Fähigkeiten</h2>
                <section className={styles.skillsSection}>
                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Programmiersprachen</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>JavaScript / TypeScript</li>
                            <li className={styles.skillItem}>Java / Objektorientierte Programmierung</li>
                            <li className={styles.skillItem}>HTML / CSS</li>
                            <li className={styles.skillItem}>SQL</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Frameworks & Bibliotheken</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>Java Spring Boot</li>
                            <li className={styles.skillItem}>Next.js</li>
                            <li className={styles.skillItem}>Node.js</li>
                        </ul>
                    </div>

                    <div className={styles.skillCategory}>
                        <h3 className={styles.skillCategoryTitle}>Tools</h3>
                        <ul className={styles.skillsList}>
                            <li className={styles.skillItem}>Git / GitHub</li>
                            <li className={styles.skillItem}>RESTful APIs</li>
                            <li className={styles.skillItem}>Docker</li>
                            <li className={styles.skillItem}>MySQL</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.projectsSection}>
                    <h2 className={styles.sectionTitle}>Meine Projekte</h2>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/TicTacToe" target="_blank" rel="noopener noreferrer"><GiTicTacToe size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>GitHub Repository</span>
                            </div>
                            <h3 className={styles.projectTitle}>Tic Tac Toe</h3>
                        </div>
                        <p className={styles.projectDescription}>
                            Meine erste Java-Anwendung: Realisierung des Spiels "Tic Tac Toe".
                            Statt als Konsolenanwendung wurde es mit<br />grafischer Benutzeroberfläche implementiert.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Grafische Oberfläche dank der Java Swing Bibliothek (JFrame etc.)</li>
                                <li className={styles.featureItem}>Verschachtelte For-Loops</li>
                                <li className={styles.featureItem}>Erstellen und Einsetzen eigener Methoden</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>Java, Java Swing Bibliothek</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/Projekt-Netzplan" target="_blank" rel="noopener noreferrer"><FaTimeline size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>
                                    GitHub Repository
                                </span>
                                <h3 className={styles.projectTitle}>2. Netzplanerstellung (Projektmanagement)</h3>
                            </div>
                        </div>
                        <p className={styles.projectDescription}>
                            Meine Java Anwendung zum Kalkulieren von Anfangs- und Endzeiten verschiedener Arbeitspakete, freier Puffer und Gesamtpuffer.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Ebenfalls grafische Oberfläche dank der Java Swing Bibliothek</li>
                                <li className={styles.featureItem}>Eintragen der verschiedenen Arbeitspakete mit Dauer und vorhergehenden Arbeitspaketen</li>
                                <li className={styles.featureItem}>Automatische Berechnung der spätesten und frühesten Anfangs- und Endzeitpunkte der Arbeitspakete</li>
                                <li className={styles.featureItem}>Automatische Berechnung der freien- und Gesamtpuffer</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>Java, Java Swing</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/Spring_Boot_Learning_Journal_Backend" target="_blank" rel="noopener noreferrer"><BiLogoSpringBoot size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>
                                    GitHub Repository
                                </span>
                                <h3 className={styles.projectTitle}>3. Learning Journal (Backend)</h3>
                            </div>
                        </div>
                        <p className={styles.projectDescription}>
                            Eine Java-Anwendung zum Erstellen und Abrufen verschiedener (Tagebuch-) Einträge bzw Notizen.<br /><br />
                            Dieses Repository enthält reines Backend, da für das Frontend die React-Bibliothek statt Thymeleaf benutzt wurde und deshalb<br />
                            separat gespeichert wurde.
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Kommunikation über RESTful APIs</li>
                                <li className={styles.featureItem}>Authentifizierung über JWT-Token</li>
                                <li className={styles.featureItem}>Nutzer können sich registrieren/ einloggen</li>
                                <li className={styles.featureItem}>Nutzer können Einträge abrufen, erstellen und selbst erstellte Einträge bearbeiten</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>Java, Spring Boot, Spring Security, Spring Security JWT, Spring Email, MariaDB</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <strong>Hinweis: </strong>Da die letzten drei Projekte mit React/ Next.js entwickelt wurden und diese Bibliothek typischerweise<br/>
                        in Single-Page-Applications eingesetzt wird, teilen sich diese drei Projekte ein Repository. Somit bitte nicht wundern,<br/> wenn die 
                        Verlinkung auf jeweils die gleiche Page leitet.
                    </div>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/Learning_Journal_Frontend_Snake_FourWins" target="_blank" rel="noopener noreferrer"><FaReact size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>
                                    GitHub Repository
                                </span>
                            </div>
                        </div>
                        <h3 className={styles.projectTitle}>4. Learning Journal (Frontend)</h3>
                        <div className={styles.projectDescription}>
                            Das Gegenstück zum Eintrag darüber, somit das Frontend für die Anwendung zum Erstellen und Abrufen <br />
                            von Einträgen.<br/>
                        </div>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Modulares und komponentenbasiertes UI mit React</li>
                                <li className={styles.featureItem}>State-Management mit React Hooks</li>
                                <li className={styles.featureItem}>Interaktion mit dem Backend über RESTful APIs</li>
                                <li className={styles.featureItem}>Benutzerfreundliche Oberfläche für Authentifizierung und Eintragsverwaltung</li>
                                <li className={styles.featureItem}>Styling mit CSS</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>React Next.js mit TypeScript, Axios</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/Learning_Journal_Frontend_Snake_FourWins" target="_blank" rel="noopener noreferrer"><VscSnake size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>
                                    GitHub Repository
                                </span>
                            </div>
                        </div>
                        <h3 className={styles.projectTitle}>5. Snake</h3>
                        <p className={styles.projectDescription}>
                            Ein kleines 2D-Spiel zum Kennenlernen der verschiedenen React-Hooks und Typescript. <br/>
                            <br/>
                            Der relevante Teil hierfür liegt im Repository unter src/components/snake!
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Die Schlange bewegt sich mittels Pfeiltasten</li>
                                <li className={styles.featureItem}>Sobald man den Rand oder der Schlangenkopf den Körper berührt, ist das Spiel vorbei</li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>React Next.js mit Typescript</p>
                        </div>
                    </div>

                    <div className={styles.project}>
                        <div style={{ margin: "0.2rem" }}>
                            <Link href="https://github.com/manuelpalluotto/Learning_Journal_Frontend_Snake_FourWins" target="_blank" rel="noopener noreferrer"><FaChessBoard size={100} color={"#0f0f0f"} /></Link>
                            <div className={styles.projectLink}>
                                <span style={{ backgroundColor: "var(--youtubeFont)", color: "var(--ytBackground)", fontSize: "0.8rem" }}>
                                    GitHub Repository
                                </span>
                            </div>
                        </div>
                        <h3 className={styles.projectTitle}>6. Vier Gewinnt</h3>
                        <p className={styles.projectDescription}>
                            Ein kleines 2D-Spiel zum Vertiefen der verschiedenen React-Hooks und Typescript. <br/>
                            <br/>
                            Der relevante Teil hierfür liegt im Repository unter src/components/checkfour!
                        </p>
                        <div className={styles.projectFeatures}>
                            <h4 className={styles.featuresTitle}>Zusammenfassung:</h4>
                            <ul className={styles.featuresList}>
                                <li className={styles.featureItem}>Mit A und D oder aber mit der linken und rechten Pfeiltaste kann man die <br/>
                                Spalte steuern, in die der Stein geworfen werden soll. Mit Leertaste wird der Stein dann geworfen.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.projectTech}>
                            <h4 className={styles.techTitle}>Genutzte Technologien:</h4>
                            <p className={styles.techText}>React Next.js mit Typescript</p>
                        </div>
                    </div>

                </section>

                <section className={styles.strengthsSection}>
                    <h2 className={styles.sectionTitle}>Was mich ausmacht</h2>
                    <ul className={styles.strengthsList}>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Begeisterung:</span> Softwareentwicklung ist für mich nicht nur ein Job, sondern eine Leidenschaft</li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Motivation:</span> Das Erschaffen von Anwendungen aus dem Nichts, und die Genugtuung nach dem Lösen von hartnäckigen Problemen motivieren mich</li>
                        <li className={styles.strengthItem}>
                            <span className={styles.strengthHighlight}>Teamwork:</span> Kommunikation und Teamchemie sind nicht nur wichtig für reibungsloses Teamwork, sondern sorgen dafür, dass<br/>
                                                                                         Arbeit etwas ist worauf man sich freuen kann
                        </li>
                    </ul>
                </section>

                <section className={styles.contactSection}>
                    <h2 className={styles.sectionTitle}>Kontakt</h2>
                    <ul className={styles.contactList}>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>GitHub:</span>
                            <a href="https://github.com/manuelpalluotto" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                                github.com/manuelpalluotto
                            </a>
                        </li>
                        <li className={styles.contactItem}>
                            <span className={styles.contactLabel}>Email:</span>
                            <span className={styles.contactText}>palluottomanuel@gmail.com</span>
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