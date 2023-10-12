import React from 'react';

export default function Navigation(props) {
 // You can fully customize this implementation
 // including changing the JSX, CSS and React hooks
 return (
    <div class="container px-4 py-5" id="icon-grid">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 g-4 py-5">
            <div class="col d-flex align-items-start">
                <img width="100px" height="100px" src="img/icon-01.svg"/>
                    {/* <use xlink:href="#cpu-fill"></use> */}
                <div class="ps-4">
                    <h3 class="fw-bold mb-3 fs-4">Образование</h3>
                    <ul>
                        <li>Закончила Российский государственный педагогический университет им. А. И. Герцена (Институт
                            детства)</li>
                        <li>Дополнительно проходила повышение квалификации в институте практической психологии «Иматон»
                            («Психологическое сопровождение ребёнка в критические периоды развития»,
                            «Основы перинатальной психологии и психокоррекции», «Практика сказочной песочной терапии»)</li>
                    </ul>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img width="100px" height="100px" src="img/icon-02.svg"/>
                    {/* <use xlink:href="#cpu-fill"></use>
                </svg> */}
                <div class="ps-4">
                    <h3 class="fw-bold mb-3 fs-4">Дипломы</h3>
                    <ul>
                        <li>Диплом с отличием Воспитатель детей дошкольного возраста 2008 год</li>
                        <li>Диплом с отличием Бакалавр педагогики (Специализация «Детская практическая психология») 2010
                            год</li>
                        <li>Диплом с отличием Магистр Педагогики (Специализация «Методическое сопровождение в дошкольном
                            образовании») 2012 год</li>
                    </ul>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img width="100px" height="100px" src="img/icon-03.svg"/>
                    {/* <use xlink:href="#cpu-fill"></use>
                </svg> */}
                <div class="ps-4">
                    <h3 class="fw-bold mb-3 fs-4">Опыт</h3>
                    <ul><li>С 2010 года ГБДОУ Центр развития ребёнка - детский сад № 64 Калининского р-на Санкт-Петербурга</li>
                    <li>Частный Детский Досуговый Центр</li><li>Частная практика (Консультирование родителей)</li></ul>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <img width="100px" height="100px" src="img/icon-04.svg"/>
                    {/* <use xlink:href="#cpu-fill"></use>
                </svg> */}
                <div class="ps-4">
                    <h3 class="fw-bold mb-3 fs-4">Автор подкаста «Мааам, у меня вопрос...
                    </h3>
                    <p>В 2021 году вместе со своей дочерью создала&nbsp;
                    <a href="/blog/welcome" class="a-custom">подкаст</a>, 
                    в котором нахожу ответы на самые сложные детские вопросы, а также разбираюсь в причинах их возникновения.</p>
                </div>
            </div>
        </div>
    </div>
 ) 

}