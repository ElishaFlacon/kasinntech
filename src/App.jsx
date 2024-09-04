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

                <div className="prize-content">
                    <div className="prize-title">
                        <h2>Призовой фонд</h2>
                        <h2>1 020 000 РУБ</h2>
                    </div>
                    <div className="prize-distribution">
                        <div className="prize-column">
                            <div className="prize-bar prize-bar-20k" data-amount="20 000"></div>
                            <div className="prize-bar prize-bar-20k" data-amount="20 000"></div>
                            <div className="prize-bar prize-bar-20k" data-amount="20 000"></div>
                            <div className="prize-bar prize-bar-20k" data-amount="20 000"></div>
                        </div>
                        <div className="prize-column">
                            <div className="prize-bar prize-bar-100k" data-amount="100 000"></div>
                            <div className="prize-bar prize-bar-100k" data-amount="100 000"></div>
                            <div className="prize-bar prize-bar-100k" data-amount="100 000"></div>
                            <div className="prize-bar prize-bar-100k" data-amount="100 000"></div>
                            <div className="prize-bar prize-bar-100k" data-amount="100 000"></div>
                        </div>
                        <div className="prize-column">
                            <div className="prize-bar prize-bar-50k" data-amount="50 000"></div>
                            <div className="prize-bar prize-bar-50k" data-amount="50 000"></div>
                            <div className="prize-bar prize-bar-50k" data-amount="50 000"></div>
                            <div className="prize-bar prize-bar-50k" data-amount="50 000"></div>
                            <div className="prize-bar prize-bar-50k" data-amount="50 000"></div>
                        </div>
                    </div>
                    <div className="prize-description">
                        <div className="prize-description-top">
                            <p className="prize-description-top-item">60 участников</p>
                            <p className="prize-description-top-item">30 команд</p>
                            <p className="prize-description-top-item">6 направлений</p>
                            <p className="prize-description-top-item">18 призёров</p>
                        </div>
                        <div className="prize-description-bot">
                            <p className="prize-description-bot-item">
                                Призовой фонд будет распределен между 3 призерами в каждой номинации
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cases-content">
                    <h2 className="cases-title">Направления кейсов</h2>
                    <div className="cases-list">
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/cases/1.svg" alt="" />
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer">

            </footer>
        </>
    )
}
