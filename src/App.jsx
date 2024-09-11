import React, { useEffect } from "react"
import Parallax from 'parallax-js'

export const App = () => {
    useEffect(() => {
        const scene1 = document.getElementById('scene-1');
        const scene2 = document.getElementById('scene-2');
        const scene3 = document.getElementById('scene-3');
        new Parallax(scene1);
        new Parallax(scene2);
        new Parallax(scene3);
    }, [])

    return (
        <>
            <div id="scene-1">
                <img
                    className="background"
                    data-depth="0.4"
                    src="image/background-3.svg"
                    alt=""
                />
            </div>

            <div id="scene-2">
                <img
                    className="background"
                    data-depth="0.4"
                    src="image/background-1.svg"
                    alt=""
                />
            </div>

            <div id="scene-3">
                <img
                    className="background"
                    data-depth="0.4"
                    src="image/background-2.svg"
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
                            <img src="image/case-1.png" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/case-2.png" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/case-3.png" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/case-4.png" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/case-5.png" alt="" />
                        </div>
                        <div className="cases-item">
                            <img src="image/case-6.png" alt="" />
                        </div>
                    </div>
                </div>

                <div class="steps-content max-app-width">
                    <h2 class="steps-title">Этапы Проведения</h2>
                    <div class="steps-list">
                        <div class="step-item">
                            <p class="step-number">1 <span>ЗАОЧНЫЙ</span></p>
                            <div class="step-info-1">
                                <div>
                                    <p class="step-dates">21 сентября - 28 сентября</p>
                                    <p class="step-description">Отборочный этап</p>
                                </div>
                                <div>
                                    <p class="step-dates">29 сентября</p>
                                    <p class="step-description">Объявление результатов отборочного этапа</p>
                                </div>
                            </div>
                        </div>
                        <div class="step-item">
                            <p class="step-number">2 <span>г. МОСКВА</span></p>
                            <div class="step-info">
                                <p class="step-dates">14 октября - 16 октября</p>
                                <p class="step-description">Образовательная программа</p>
                            </div>
                        </div>
                        <div class="step-item">
                            <p class="step-number">3 <span>г. ТЮМЕНЬ</span></p>
                            <div class="step-info">
                                <p class="step-dates">29 ноября - 5 декабря</p>
                                <p class="step-description">Заключительный этап</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="reg-block">
                    <div className="reg-block-top">
                        <a className="reg-block-top-btn" href="https://www.tyuiu.ru/" target="_blank">Положение</a>
                        <a className="reg-block-top-btn" href="https://www.tyuiu.ru/" target="_blank">Регламент</a>
                    </div>
                    <a className="reg-block-register" href="https://t.me/kaskad_it_channel" target="_blank">Регистрация</a>
                    <a className="reg-block-telegram" href="https://t.me/kaskad_it_channel" target="_blank">Telegram-Канал</a>
                    <div className="reg-block-bot">
                        <p>По всем вопросам:</p>
                        <a href="mailto:info@касиннтех.рф">info@касиннтех.рф</a>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p>© 2024 Каскад Инновационных Технологий. Все права защищены.</p>
            </footer>
        </>
    )
}
