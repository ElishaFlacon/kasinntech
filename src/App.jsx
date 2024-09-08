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

            <div className="top-background" />

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

            <main className="content">
                <div className="top-content max-app-width">
                    <div className="main-banner">
                        <img src="image/banner.svg" alt="" />
                    </div>
                    <div className="main-description">
                        <p>
                            Каскад Инновационных Технологий*
                        </p>
                        <p>
                            Направлен на развитие навыков будущих специалистов в условиях цифровизации и внедрения инновационных технологий в строительную отрасль.
                        </p>
                    </div>
                </div>

                <div className="krutie">
                    <div className="orgs">
                        <h2 className="orgs-title">Организаторы</h2>
                        <div className="orgs-list">
                            <div className="orgs-item">
                                <img src="image/org-1.png" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/org-2.svg" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/org-3.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="orgs">
                        <h2 className="orgs-title">Партнеры</h2>
                        <div className="orgs-list">
                            <div className="orgs-item">
                                <img src="image/partner-1.png" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/partner-2.png" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/partner-3.png" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/partner-4.png" alt="" />
                            </div>
                            <div className="orgs-item">
                                <img src="image/partner-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="prize-content max-app-width">
                    <div className="prize-title-container">
                        <h2 className="prize-title">Призовой фонд</h2>
                        <h2 className="prize-amount">1 020 000 РУБ</h2>
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
                            <p className="prize-description-top-item">
                                <span className="prize-description-top-item-blue">60</span> участников
                            </p>
                            <p className="prize-description-top-item">
                                <span className="prize-description-top-item-blue">30</span> команд
                            </p>
                            <p className="prize-description-top-item">
                                <span className="prize-description-top-item-blue">6</span> направлений
                            </p>
                            <p className="prize-description-top-item">
                                <span className="prize-description-top-item-blue">18</span> призёров
                            </p>
                        </div>
                        <div className="prize-description-bot">
                            <p className="prize-description-bot-item">
                                Призовой фонд будет распределен между 3 призерами в каждой номинации
                            </p>
                        </div>
                    </div>
                </div>

                <div className="cases-content max-app-width">
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
