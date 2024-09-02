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

            <main className="content">
                <div className="container">
                    <h1 className="large-title">Всероссийский студенческий строительный чемпионат</h1>
                    <div className="banner">
                        <img src="image/banner.svg" alt="" />
                    </div>
                    <h2 className="main-description">
                        Каскад Инновационных Технологий — это всероссийский студенческий строительный чемпионат с призовым фондом в <span className="price-pull-mark">1.020.000 рублей</span>, направленный на развитие навыков будущих специалистов в условиях цифровизации и внедрения инновационных технологий в строительную отрасль.
                    </h2>
                </div>

                <div className="container">
                    <h3 className="base-title">Организаторы</h3>
                    <div className="organizers-box">
                        <a className="organizer-box" href="https://www.tyuiu.ru/" target="_blank">
                            <img src="image/logo_tiu.png" alt="" />
                        </a>
                        <a className="organizer-box" href="https://www.metabuildum.ru/" target="_blank">
                            <img src="image/logo_mb.png" alt="" />
                        </a>
                        <a className="organizer-box" href="https://www.minstroyrf.gov.ru/" target="_blank">
                            <img src="image/logo_minstroy.svg" alt="" />
                        </a>
                    </div>
                    <h4 className="organizers-description">Чемпионат организован ФГБОУ ВО ТИУ и ООО «Метабилдум» при поддержке Минстроя РФ.</h4>
                </div>

                <div className="container">
                    <h3 className="base-title">Призовой фонд</h3>
                    <div className="pull-box">
                        <div className="pull-description">
                            <h4 className="price-pull-mark">1.020.000 рублей</h4>
                            Призовой фонд будет распределен между 3 призерами в каждой номинации. Всего будет 5 номинаций и 50 участников (10 команд).
                        </div>

                        <div className="pull-spots-box">
                            <div className="pull-spot pull-spot-3">3</div>
                            <div className="pull-spot pull-spot-1">1</div>
                            <div className="pull-spot pull-spot-2">2</div>
                        </div>
                    </div>
                    <a className="base-button" href="" target="_blank">
                        Точно хочу участвовать!
                    </a>
                </div>

                <div className="container">
                    <div className="container tg">
                        <h3 className="small-title-white">Хочешь следить за нашими новостями?</h3>
                        <h3 className="small-title-white">@KaskadIT</h3>
                        <a className="small-button-white" href="https://t.me/KaskadIT" target="_blank">Присоединиться</a>
                    </div>
                </div>
            </main>

            <footer className="footer">
                <div className="footer-info">
                    <div className="footer-quest">
                        Задать вопрос: <a href="mailto:info@championship.ru" target="_blank">info@championship.ru</a>
                    </div>
                    <div className="footer-polreg">
                        <a href="" target="_blank">Положение</a>
                        <a href="" target="_blank">Регламент</a>
                    </div>
                </div>
                <div className="footer-copyright">
                    © 2024 Каскад Инновационных Технологий. Все права защищены.
                </div>
            </footer>
        </>
    )
}
