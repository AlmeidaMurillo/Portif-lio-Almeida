import { useEffect, useState } from 'react';
import styles from './telainicial.module.css';
import { Menu, X, Sun, Moon } from "lucide-react";
import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import Spinner from '../../components/Spinner';
import pdvSaasImg from '../../images/MultiAlmeidaPDV.png';
import mercadoPagoImg from '../../images/MercadoPagoClone.png';

const Animated = ({ children }) => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.1 });

    return (
        <div ref={ref} className={`${styles.reveal} ${isIntersecting ? styles.visible : ''}`}>
            {children}
        </div>
    );
};



const codeSnippets = [
    'const [state, setState] = useState(initialValue);',
    'useEffect(() => { fetchData(); }, [dependency]);',
    'import React from "react"; export default Component;',
    'const handleClick = (e) => { e.preventDefault(); };',
    'return <div className="container">{children}</div>;',
    'const MyComponent = ({ props }) => { return <div>...</div>; };',
    'interface Props { id: string; onClick: () => void; }',
    'const router = useRouter(); router.push("/dashboard");',

    'const express = require("express"); const app = express();',
    'app.get("/api/users", async (req, res) => { ... });',
    'const jwt = require("jsonwebtoken"); jwt.sign(payload, secret);',
    'const bcrypt = require("bcrypt"); await bcrypt.hash(password, 10);',
    'app.use(express.json()); app.use(cors());',
    'const server = app.listen(PORT, () => console.log("Server running"));',
    'const middleware = (req, res, next) => { next(); };',
    'process.env.NODE_ENV === "production" ? ... : ...;',

    'SELECT * FROM users WHERE email = ? AND active = 1;',
    'INSERT INTO products (name, price) VALUES (?, ?);',
    'UPDATE users SET last_login = NOW() WHERE id = ?;',
    'CREATE TABLE orders (id INT PRIMARY KEY AUTO_INCREMENT);',
    'JOIN orders o ON u.id = o.user_id WHERE o.status = "completed";',
    'const connection = mysql.createConnection({ host, user, password });',
    'ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;',
    'DELETE FROM sessions WHERE expires_at < NOW();',


    'const pool = mysql.createPool({ connectionLimit: 10 });',
    'app.post("/auth/login", validateUser, generateToken);',
    'const [users, setUsers] = useState([]); useEffect(() => fetchUsers(), []);',
    'res.status(200).json({ success: true, data: results });',
    'const query = "SELECT * FROM users"; pool.query(query, callback);',
    'axios.post("/api/register", userData).then(response => ...);',

    'SELECT * FROM users WHERE email = ? AND active = 1;',
    'INSERT INTO products (name, price) VALUES (?, ?);',
    'UPDATE users SET last_login = NOW() WHERE id = ?;',
    'CREATE TABLE orders (id INT PRIMARY KEY AUTO_INCREMENT);',
    'JOIN orders o ON u.id = o.user_id WHERE o.status = "completed";',
    'const connection = mysql.createConnection({ host, user, password });',
    'ALTER TABLE users ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;',
    'DELETE FROM sessions WHERE expires_at < NOW();',
];

const getCodeColor = (text) => {
    if (text.includes('SELECT') || text.includes('INSERT') || text.includes('UPDATE') || text.includes('CREATE') || text.includes('mysql')) {
        return '#cccccc';
    } else if (text.includes('app.') || text.includes('express') || text.includes('require') || text.includes('process.env') || text.includes('jwt') || text.includes('bcrypt')) {
        return '#ffffff';
    } else if (text.includes('useState') || text.includes('useEffect') || text.includes('React') || text.includes('const [') || text.includes('return <') || text.includes('interface')) {
        return '#eeeeee';
    } else {
        return '#dddddd';
    }
};

function TelaInicial() {
    const [codeLines, setCodeLines] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "dark"
    );

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (loading) return;

        const isMobile = window.innerWidth < 768;
        const numLines = isMobile ? 8 : 18;

        const initialLines = Array.from({ length: numLines }, (_, i) => {
            const text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            return {
                id: i,
                text,
                style: {
                    left: `${Math.random() * 95}vw`,
                    opacity: 0.15 + Math.random() * 0.35,
                    color: getCodeColor(text),
                    animationDuration: `${10 + Math.random() * 10}s`,
                    animationDelay: `${Math.random() * 10}s`,
                }
            };
        });

        setCodeLines(initialLines);
    }, [loading]);

    const skills = [
        {
            category: "Frontend",
            icon: "💻",
            skills: ["React.js", "HTML", "CSS", "JavaScript", "Styled-Components"]
        },
        {
            category: "Ferramentas",
            icon: "🧰",
            skills: ["Git", "GitHub"]
        },
        {
            category: "Backend (em evolução)",
            icon: "🚀",
            skills: ["Node.js", "MySQL"]
        }
    ];

    const projects = [
        {
            title: "ERP SaaS (PDV Multiempresa)",
            status: "Em Desenvolvimento",
            description: "Sistema web de ponto de venda com dashboard administrativo e suporte multiempresa. Aplicação full stack hospedada, desenvolvida em React.js no frontend e Node.js com MySQL no backend.",
            image: pdvSaasImg,
            technologies: ["React.js", "Node.js", "MySQL", "Mercado Pago API"],
            features: [
                "Carrinho de compras inteligente",
                "Sistema de cupons e descontos",
                "Pagamento via Pix (Mercado Pago)",
                "Dashboard administrativo completo",
                "Suporte multiempresa",
                "Interface moderna e responsiva"
            ],
            githubUrlFrontend: "https://github.com/AlmeidaMurillo/MultiAlmeida-PDVSaaS",
            githubUrlBackend: "https://github.com/AlmeidaMurillo/MultiAlmeida-PDVSaaS-Backend",
            liveUrl: "https://multi-almeida-pdv-saa-s.vercel.app"
        },
        {
            title: "Clone Mercado Pago",
            status: "Concluído",
            description: "Recriação da interface do Mercado Pago com foco em layout, responsividade e experiência do usuário. Projeto full stack com React.js e Node.js.",
            note: "Apenas o frontend está hospedado devido à limitação do plano gratuito para backend.",
            image: mercadoPagoImg,
            technologies: ["React.js", "Node.js", "MySQL"],
            githubUrlFrontend: "https://github.com/AlmeidaMurillo/CloneMercadoPago",
            githubUrlBackend: "https://github.com/AlmeidaMurillo/CloneMercadoPago-Backend",
            liveUrl: "https://mercadopago-psi.vercel.app"
        }
    ];


    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <div className={styles.container}>
            <Spinner loading={loading} />
            
            {/* Overlay para fechar o menu clicando fora */}
            {menuOpen && (
                <div 
                    className={styles.menuOverlay} 
                    onClick={() => setMenuOpen(false)}
                />
            )}
            
            <header className={styles.header}>
                <div className={styles.headerContent}>
                    <a
                        href="#"
                        className={styles.logo}
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        ALMEIDA
                    </a>

                    <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
                        <button className={styles.navLink} onClick={() => { scrollToSection('sobre'); setMenuOpen(false); }}>Sobre Mim</button>
                        <button className={styles.navLink} onClick={() => { scrollToSection('habilidades'); setMenuOpen(false); }}>Habilidades</button>
                        <button className={styles.navLink} onClick={() => { scrollToSection('projetos'); setMenuOpen(false); }}>Projetos</button>
                        <button className={styles.navLink} onClick={() => { scrollToSection('contato'); setMenuOpen(false); }}>Contato</button>
                    </nav>

                    <div className={styles.headerActions}>
                        <button
                            className={styles.themeToggle}
                            onClick={toggleTheme}
                            aria-label="Alternar tema"
                        >
                            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
                        </button>

                        <button
                            className={styles.menuBtn}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </header>
            <div className={styles.backgroundContainer}>
                <div className={styles.backgroundGradient} />
                {codeLines.map(line => (
                    <div
                        key={line.id}
                        className={styles.codeLine}
                        style={line.style}
                    >
                        {line.text}
                    </div>
                ))}
                <div className={styles.overlay} />

                <div className={`${styles.techIndicator} ${styles.techIndicatorReact}`}>
                    ⚛️ ReactJs
                </div>
                <div className={`${styles.techIndicator} ${styles.techIndicatorNode}`}>
                    🟢 Node.js
                </div>
                <div className={`${styles.techIndicator} ${styles.techIndicatorMySQL}`}>
                    🗄️ MySQL
                </div>
            </div>


            <section className={styles.heroSection}>
                <div className={styles.heroContent}>
                    <div className={styles.heroGrid}>
                        <div className={styles.heroTextContent}>
                            <div className={styles.heroTitleWrapper}>
                                <h1 className={styles.heroMainTitle}>MURILLO ALMEIDA</h1>
                                <div className={styles.titleUnderline}></div>
                            </div>
                            
                            <h2 className={styles.heroSubtitle}>Desenvolvedor Front-end</h2>
                            
                            <div className={styles.techBadges}>
                                <span className={styles.techBadge}>
                                    <span className={styles.badgeIcon}>⚛️</span>
                                    React.js
                                </span>
                                <span className={styles.techBadge}>
                                    <span className={styles.badgeIcon}>🟢</span>
                                    Node.js
                                </span>
                                <span className={styles.techBadge}>
                                    <span className={styles.badgeIcon}>🗄️</span>
                                    MySQL
                                </span>
                            </div>
                            
                            <p className={styles.heroDescription}>
                                Desenvolvedor Front-end com foco na criação de interfaces modernas, performáticas e responsivas utilizando React.js. Atuo no desenvolvimento de sistemas web e possuo experiência prática em integração com backend em Node.js e banco de dados MySQL em projetos em desenvolvimento. Sou dedicado à evolução constante, prezando por código limpo, organizado e boas práticas.
                            </p>
                        </div>

                        <div className={styles.codeEditorMockup}>
                            <div className={styles.editorHeader}>
                                <div className={styles.editorButtons}>
                                    <span className={`${styles.editorBtn} ${styles.editorBtnWhite}`}></span>
                                    <span className={`${styles.editorBtn} ${styles.editorBtnGray}`}></span>
                                    <span className={`${styles.editorBtn} ${styles.editorBtnDarkGray}`}></span>
                                </div>
                                <div className={styles.editorTitle}>developer.js</div>
                            </div>
                            <div className={styles.editorBody}>
                                <div className={styles.lineNumbers}>
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>
                                    <span>9</span>
                                    <span>10</span>
                                    <span>11</span>
                                    <span>12</span>
                                    <span>13</span>
                                    <span>14</span>
                                    <span>15</span>
                                    <span>16</span>
                                    <span>17</span>
                                </div>
                                <div className={styles.editorCode}>
                                    <div><span className={styles.keyword}>function</span> <span className={styles.variable}>Developer</span>() {'{'}</div>
                                    <div>&nbsp;&nbsp;<span className={styles.keyword}>const</span> <span className={styles.variable}>info</span> = {'{'}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>name</span>: <span className={styles.string}>"Murillo Almeida"</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>role</span>: <span className={styles.string}>"Front-end"</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>location</span>: <span className={styles.string}>"São Paulo, BR"</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>skills</span>: [<span className={styles.string}>"React"</span>, <span className={styles.string}>"Node"</span>, <span className={styles.string}>"MySQL"</span>],</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>experience</span>: <span className={styles.boolean}>2</span>,</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.property}>available</span>: <span className={styles.boolean}>true</span></div>
                                    <div>&nbsp;&nbsp;{'}'};</div>
                                    <div></div>
                                    <div>&nbsp;&nbsp;<span className={styles.keyword}>return</span> (</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className={styles.keyword}>div</span> <span className={styles.property}>className</span>=<span className={styles.string}>"profile"</span>{'>'}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className={styles.keyword}>h2</span>{'>'}{'{'}<span className={styles.variable}>info</span>.<span className={styles.property}>name</span>{'}</'}<span className={styles.keyword}>h2</span>{'>'}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'<'}<span className={styles.keyword}>span</span>{'>'}{'{'}<span className={styles.variable}>info</span>.<span className={styles.property}>role</span>{'}</'}<span className={styles.keyword}>span</span>{'>'}</div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;{'</'}<span className={styles.keyword}>div</span>{'>'}</div>
                                    <div>&nbsp;&nbsp;);</div>
                                    <div>{'}'}</div>
                                    <div></div>
                                    <div><span className={styles.keyword}>export default</span> <span className={styles.variable}>Developer</span>;</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button
                            className={styles.primaryButton}
                            onClick={() => setModalOpen(true)}
                        >
                            Entre em Contato
                        </button>
                    </div>

                    <div className={styles.socialLinks}>
                        <a href="https://github.com/AlmeidaMurillo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/AlmeidaMurillo" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=almeidamurillo196@gmail.com&su=Assunto&body=Mensagem%20inicial" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.749L12 10.855l9.615-7.034h.749c.904 0 1.636.732 1.636 1.636z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <section id="sobre" className={styles.section}>
                <Animated>
                    <div className={styles.maxWidth}>
                        <h2 className={styles.sectionTitle}>Sobre Mim</h2>
                        <div className={styles.card}>
                            <div className={styles.aboutGrid}>
                                <div className={styles.aboutText}>
                                    <p className={styles.aboutParagraph}>
                                        Sou Murillo Inacio Ludovico de Almeida, desenvolvedor web de 18 anos de São Paulo, focado na criação de soluções digitais funcionais, bem estruturadas e visualmente consistentes. Minha atuação é voltada ao desenvolvimento de experiências de usuário modernas, intuitivas e responsivas.
                                    </p>

                                    <p className={styles.aboutParagraph}>
                                        Com uma base sólida em React.js, venho explorando o ecossistema full stack, atuando no desenvolvimento de sistemas web e na integração com backend em Node.js e banco de dados MySQL, incluindo um projeto atual de ERP SaaS em evolução.
                                    </p>

                                    <p className={styles.aboutParagraph}>
                                        Valorizo código limpo, organização e boas práticas de desenvolvimento, além da colaboração em equipe para entregar soluções eficientes. Busco constantemente novos desafios que contribuam para meu crescimento técnico e profissional.
                                    </p>

                                </div>
                                <div className={styles.statsGrid}>
                                    <div className={styles.statCard}>
                                        <div className={styles.statIcon}>💻</div>
                                        <div className={styles.statNumber}>2+</div>
                                        <div className={styles.statLabel}>Projetos</div>
                                    </div>
                                    <div className={styles.statCard}>
                                        <div className={styles.statIcon}>🚀</div>
                                        <div className={styles.statNumber}>2+</div>
                                        <div className={styles.statLabel}>Anos</div>
                                    </div>
                                    <div className={styles.statCard}>
                                        <div className={styles.statIcon}>🌟</div>
                                        <div className={styles.statNumber}>24/7</div>
                                        <div className={styles.statLabel}>Dedicação</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            </section>

            <section id="habilidades" className={styles.section}>
                <Animated>
                    <div className={styles.maxWidth}>
                        <h2 className={styles.sectionTitle}>Habilidades Técnicas</h2>
                        <div className={`${styles.grid} ${styles.gridCols4}`}>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillCard}>
                                    <div className={styles.skillHeader}>
                                        <span className={styles.skillIcon}>{skill.icon}</span>
                                        <h3 className={styles.skillTitle}>{skill.category}</h3>
                                    </div>
                                    <div className={styles.skillTags}>
                                        {skill.skills.map((skillName, skillIndex) => (
                                            <span key={skillIndex} className={styles.skillTag}>
                                                {skillName}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Animated>
            </section>

            <section id="projetos" className={styles.section}>
                <Animated>
                    <div className={styles.maxWidth}>
                        <h2 className={styles.sectionTitle}>Projetos em Destaque</h2>
                        <div className={`${styles.grid} ${styles.gridCols3}`}>
                            {projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    {project.image && (
                                        <div className={styles.projectImageContainer}>
                                            <img 
                                                src={project.image} 
                                                alt={project.title}
                                                className={styles.projectImage}
                                            />
                                            <div className={styles.projectImageOverlay}>
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={styles.projectViewDemo}
                                                    >
                                                        Ver Projeto ↗
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className={styles.projectContent}>
                                        <div className={styles.projectHeader}>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            {project.status && (
                                                <span className={styles.projectStatus}>{project.status}</span>
                                            )}
                                        </div>
                                        
                                        <p className={styles.projectDescription}>{project.description}</p>

                                        {project.note && (
                                            <div className={styles.projectNote}>
                                                <span className={styles.noteIcon}>ℹ️</span>
                                                <span>{project.note}</span>
                                            </div>
                                        )}

                                        {project.features && (
                                            <ul className={styles.projectFeatures}>
                                                {project.features.map((feature, featureIndex) => (
                                                    <li key={featureIndex} className={styles.projectFeatureItem}>
                                                        <span className={styles.featureIcon}>✓</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className={styles.projectTech}>
                                            {project.technologies.map((tech, techIndex) => (
                                                <span key={techIndex} className={styles.projectTechTag}>
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className={styles.projectLinks}>
                                            {project.githubUrl && (
                                                <a
                                                    href={project.githubUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.projectLink}
                                                >
                                                    <span>📄</span> Código
                                                </a>
                                            )}
                                            {project.githubUrlFrontend && (
                                                <a
                                                    href={project.githubUrlFrontend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.projectLink}
                                                >
                                                    <span>💻</span> Frontend
                                                </a>
                                            )}
                                            {project.githubUrlBackend && (
                                                <a
                                                    href={project.githubUrlBackend}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.projectLink}
                                                >
                                                    <span>⚙️</span> Backend
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`${styles.projectLink} ${styles.projectLinkDemo}`}
                                                >
                                                    <span>🚀</span> Demo ao Vivo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Animated>
            </section>

            <section id="contato" className={styles.section}>
                <Animated>
                    <div className={styles.maxWidth}>
                        <div className={styles.contactCenter}>
                            <h2 className={styles.sectionTitle}>Contatos</h2>
                            <p className={styles.contactIntro}>
                                Aberto a novas oportunidades e projetos.
                                Entre em contato para conversarmos sobre ideias, soluções e possíveis colaborações.
                            </p>
                            <div className={styles.contactCard}>
                                <div className={styles.contactGrid}>
                                    <a 
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=almeidamurillo196@gmail.com&su=Olá%20Murillo&body=Olá,%20gostaria%20de%20entrar%20em%20contato." 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.contactItem}
                                        aria-label="Enviar email para almeidamurillo196@gmail.com"
                                    >
                                        <div className={`${styles.contactIconWrapper} ${styles.emailIcon}`}>
                                            <HiOutlineMail size={28} />
                                        </div>
                                        <div className={styles.contactContent}>
                                            <h3 className={styles.contactTitle}>Email</h3>
                                            <p className={styles.contactLink}>almeidamurillo196@gmail.com</p>
                                            <span className={styles.contactHint}>Clique para enviar →</span>
                                        </div>
                                    </a>

                                    <a
                                        href="https://www.linkedin.com/in/AlmeidaMurillo"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.contactItem}
                                        aria-label="Visitar perfil no LinkedIn"
                                    >
                                        <div className={`${styles.contactIconWrapper} ${styles.linkedinIcon}`}>
                                            <BsLinkedin size={28} />
                                        </div>
                                        <div className={styles.contactContent}>
                                            <h3 className={styles.contactTitle}>LinkedIn</h3>
                                            <p className={styles.contactLink}>in/AlmeidaMurillo</p>
                                            <span className={styles.contactHint}>Conectar profissionalmente →</span>
                                        </div>
                                    </a>

                                    <a 
                                        href="https://github.com/AlmeidaMurillo" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className={styles.contactItem}
                                        aria-label="Visitar perfil no GitHub"
                                    >
                                        <div className={`${styles.contactIconWrapper} ${styles.githubIcon}`}>
                                            <BsGithub size={28} />
                                        </div>
                                        <div className={styles.contactContent}>
                                            <h3 className={styles.contactTitle}>GitHub</h3>
                                            <p className={styles.contactLink}>@AlmeidaMurillo</p>
                                            <span className={styles.contactHint}>Ver repositórios →</span>
                                        </div>
                                    </a>

                                    <a
                                        href="https://wa.me/5511970543189?text=Olá%20Murillo,%20vim%20através%20do%20seu%20portfólio!"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.contactItem}
                                        aria-label="Enviar mensagem no WhatsApp"
                                    >
                                        <div className={`${styles.contactIconWrapper} ${styles.whatsappIcon}`}>
                                            <BsWhatsapp size={28} />
                                        </div>
                                        <div className={styles.contactContent}>
                                            <h3 className={styles.contactTitle}>WhatsApp</h3>
                                            <p className={styles.contactLink}>+55 11 97054-3189</p>
                                            <span className={styles.contactHint}>Conversar agora →</span>
                                        </div>
                                    </a>
                                </div>

                                <div className={styles.availabilitySection}>
                                    <h3 className={styles.availabilityTitle}>Disponível para:</h3>
                                    <div className={styles.availabilityTags}>
                                        <span className={`${styles.availabilityTag} ${styles.availabilityTagFreelance}`}>
                                            Projetos Freelance
                                        </span>
                                        <span className={`${styles.availabilityTag} ${styles.availabilityTagConsulting}`}>
                                            Colaboração Técnica
                                        </span>
                                        <span className={`${styles.availabilityTag} ${styles.availabilityTagFulltime}`}>
                                            Oportunidades Full-time / Júnior
                                        </span>
                                        <span className={`${styles.availabilityTag} ${styles.availabilityTagMentoring}`}>
                                            Projetos Open-source
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            </section>

            <footer className={styles.footer}>
                <div className={styles.maxWidth}>
                    <p className={styles.footerText}>
                        © 2025 Almeida. Desenvolvido usando ReactJs.
                    </p>
                    <p className={styles.footerQuote}>
                        "Code is poetry written in logic" - Transformando ideias em realidade digital
                    </p>
                </div>
            </footer>

            {modalOpen && (
                <div className={styles.modalOverlay} onClick={() => setModalOpen(false)}>
                    <div
                        className={styles.modalContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className={styles.modalCloseButton}
                            onClick={() => setModalOpen(false)}
                        >
                            <X size={20} />
                        </button>

                        <h2 className={styles.modalTitle}>Contato</h2>
                        <p className={styles.modalIntro}>
                            Estou sempre aberto a novos desafios e oportunidades.
                            Entre em contato para discutirmos seu próximo projeto!
                        </p>

                        <div className={styles.contactGrid}>
                            <a 
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=almeidamurillo196@gmail.com&su=Olá%20Murillo&body=Olá,%20gostaria%20de%20entrar%20em%20contato." 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.contactItem}
                                aria-label="Enviar email para almeidamurillo196@gmail.com"
                            >
                                <div className={`${styles.contactIconWrapper} ${styles.emailIcon}`}>
                                    <HiOutlineMail size={28} />
                                </div>
                                <div className={styles.contactContent}>
                                    <h3 className={styles.contactTitle}>Email</h3>
                                    <p className={styles.contactLink}>almeidamurillo196@gmail.com</p>
                                    <span className={styles.contactHint}>Clique para enviar →</span>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/AlmeidaMurillo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactItem}
                                aria-label="Visitar perfil no LinkedIn"
                            >
                                <div className={`${styles.contactIconWrapper} ${styles.linkedinIcon}`}>
                                    <BsLinkedin size={28} />
                                </div>
                                <div className={styles.contactContent}>
                                    <h3 className={styles.contactTitle}>LinkedIn</h3>
                                    <p className={styles.contactLink}>in/AlmeidaMurillo</p>
                                    <span className={styles.contactHint}>Conectar profissionalmente →</span>
                                </div>
                            </a>

                            <a 
                                href="https://github.com/AlmeidaMurillo" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.contactItem}
                                aria-label="Visitar perfil no GitHub"
                            >
                                <div className={`${styles.contactIconWrapper} ${styles.githubIcon}`}>
                                    <BsGithub size={28} />
                                </div>
                                <div className={styles.contactContent}>
                                    <h3 className={styles.contactTitle}>GitHub</h3>
                                    <p className={styles.contactLink}>@AlmeidaMurillo</p>
                                    <span className={styles.contactHint}>Ver repositórios →</span>
                                </div>
                            </a>

                            <a
                                href="https://wa.me/5511970543189?text=Olá%20Murillo,%20vim%20através%20do%20seu%20portfólio!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.contactItem}
                                aria-label="Enviar mensagem no WhatsApp"
                            >
                                <div className={`${styles.contactIconWrapper} ${styles.whatsappIcon}`}>
                                    <BsWhatsapp size={28} />
                                </div>
                                <div className={styles.contactContent}>
                                    <h3 className={styles.contactTitle}>WhatsApp</h3>
                                    <p className={styles.contactLink}>+55 11 97054-3189</p>
                                    <span className={styles.contactHint}>Conversar agora →</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TelaInicial;