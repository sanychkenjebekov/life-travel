import React from 'react';
import Kazi from "../../components/Kazi";

const ONas = () => {
    return (
        <div id='oNas'>
            <div className="container">
                <div className="oNas">
                    <h1>О нас</h1>
                    <div className="oNas--about">
                    <div className="oNas--about__title">
                        <p> <i>Life Travel</i> - это туристическое агентство,
                            которое предлагает различные
                            виды туров и походов для тех, кто хочет увидеть мир
                            и насладиться природой. Мы организуем экскурсии, походы в горы
                            и путешествия по разным уголкам Кыргызстана.</p>
                    </div>
                    <div className="oNas--about__title">
                        <p> <i>Life Travel</i>  стремится создать туры и походы, которые подходят для
                            всех возрастов и уровней физической подготовки, так что каждый
                            может насладиться путешествием. Мы убеждены, что путешествие - это
                            не только способ узнать мир, но и возможность научиться новым вещам,
                            расширить кругозор и провести время с друзьями и близкими.</p>
                    </div>
                </div>
                    <div className="oNas--client">
                        <div className="oNas--client__title">
                            <h4>460</h4>
                            <p>Путишественников уже с нами</p>
                        </div>
                        <div className="oNas--client__title">
                            <h4>65%</h4>
                            <p>Наших клиентов приходят повторно</p>
                        </div>
                        <div className="oNas--client__title">
                            <h4>17</h4>
                            <p>Необычных локаций</p>
                        </div>
                    </div>
<Kazi/>
                </div>
            </div>
        </div>
    );
};

export default ONas;