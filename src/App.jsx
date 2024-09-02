import React, { useEffect } from "react"
import Parallax from 'parallax-js'

export const App = () => {
    useEffect(() => {
        const scene = document.getElementById('scene');
        new Parallax(scene);
    }, [])

    return (
        <>
            <div id="scene">
                <img
                    className="background"
                    data-depth="0.4"
                    src="image/background.svg"
                    alt=""
                />
            </div>

            <header className="header">
                <div className="header-container max-app-width">
                    <div className="header-left">
                        <a href="https://www.tyuiu.ru/" target="_blank">Этапы</a>
                        <a href="https://www.tyuiu.ru/" target="_blank">Положение</a>
                        <a href="https://www.tyuiu.ru/" target="_blank">Регламент</a>
                    </div>
                    <div className="header-right">
                        <a href="https://www.tyuiu.ru/" target="_blank">Регистрация</a>
                    </div>
                </div>
            </header>

            <main className="content max-app-width">
                <div className="top-content">
                    <div className="main-logo">
                        <img src="image/logo.svg" alt="" />
                        <h1 className="logo-text">
                            Всероссийский студенческий строительный чемпионат
                        </h1>
                    </div>
                    <div className="main-description">
                        <p>
                            Каскад Инновационных Технологий*
                        </p>
                        <p>
                            Направлен на развитие навыков будущих специалистов в условиях цифровизации и внедрения инновационных технологий в строительную отрасль.
                        </p>
                    </div>

                    <div className="orgs">
                        <h2 className="orgs-title">Организаторы</h2>
                        <div className="orgs-list">
                            <div className="orgs-item">
                                <img src="image/orgs/1.svg" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/orgs/1.svg" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/orgs/1.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">

            </footer>
        </>
    )
}
