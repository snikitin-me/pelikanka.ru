import React from 'react';

export default function SolveProblem(props) {
    // You can fully customize this implementation
    // including changing the JSX, CSS and React hooks
    return (
        // <!-- Services section-->
        <section id="services" class="row gx-4 justify-content-center">
            <div class="col-lg-8">
        {/* <!-- <div class="container px-4">
            <div class="row gx-4 justify-content-center">
                <div class="col-lg-8">
                    <h2>Services we offer</h2>
                    <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore,
                        expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                        laborum vel, labore ut velit dignissimos.</p>
                </div>
            </div>
        </div> --> */}
        <h1 class="mb-4" style={{'text-align': 'center'}}>Какие проблемы решаю</h1>
            <div class="accordion">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        Трудности в поведение ребёнка
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            «Плохим» поведением ребенок пытается сообщить взрослым о какой-то проблеме, которая требует решения. Моя задача помочь родителям понять 
                            истинные причины возникновения у ребенка трудностей в поведении, определить вызвано ли данное поведение возрастным кризисом и дать рекомендации, 
                            которые помогут решить имеющиеся проблемы и смогут предотвратить возникновение «плохого» поведения у ребенка в будущем.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Проблемы в обучении
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Если Ваш ребенок испытывает определенные трудности в обучении, возможно всё дело не в учителе или школьной программе, а в негативных установках с которыми ребенок сталкивается. 
                            На консультации Вы получите конкретные рекомендации, которые смогут помочь Вашему ребенку преодолеть барьеры в обучении. 
                            Интеллект и мышление детей можно направлять с помощью правильных формулировок в нужное русло.
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingAnxiety">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Тревожность ребёнка
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingAnxiety" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        Тревожность у детей может быть обусловлена различными факторами и иметь разные проявления. Важно понимать, что тревожность у детей является нормальной реакцией на стрессовые ситуации или изменения в их жизни. Однако, если тревожность становится чрезмерной или мешает ребенку нормально функционировать, может потребоваться помощь и поддержка.
                        <br/>
                        Проявления тревожности у детей могут быть разнообразными и включать следующие симптомы:
                        <ul>
                            <li>Беспокойство и нервозность</li>
                            <li>Повышенная раздражительность</li>
                            <li>Проблемы со сном, включая бессонницу или ночные кошмары</li>
                            <li>Физические симптомы, такие как головная боль, боли в животе</li>
                            <li>Отказ от питания или изменение аппетита</li>
                            <li>Повышенная чувствительность к раздражителям, таким как шум или свет</li>
                            <li>Постоянное беспокойство о своей безопасности или своих близких</li>
                            <li>Трудности с концентрацией и вниманием</li>
                            <li>Избегание ситуаций или мест, которые вызывают тревогу</li>
                        </ul>
                        Будьте поддерживающими и понимающими, и обратитесь за помощью, если тревожность ребенка начинает мешать его нормальному функционированию.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingProblems">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Проблемы в отношениях между сиблингами
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingProblems" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Сиблинги (от англ. sibling брат или сестра) - это братья и сестры, и иногда в их отношениях могут возникать различные проблемы. Сиблинги могут чувствовать ревность друг к другу, соперничать, конфликтовать. Если проблемы между сиблингами становятся серьезными и найти решение родителям самостоятельно становится сложно, то на консультации мы подробно разберём тактику поведения, которая поможет разрешить конфликты и улучшить взаимоотношения между сиблингами.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingAdaptation">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        Адаптация ребенка к детскому саду, школе
                        </button>
                    </h2>
                    <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingAdaptation" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Подскажу как наиболее эффективно помочь именно Вашему ребенку адаптироваться к детскому саду или школе. 
                            В каком возрасте лучше отдавать ребёнка в детский сад, как сделать процесс адаптации максимально мягким и комфортным для нервной системы ребенка.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingEnlightenment">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Педагогическое просвещение родителей
                        </button>
                    </h2>
                    <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingEnlightenment" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            В современном мире очень много информации по вопросам воспитания, обучения и развития ребёнка. 
                            Порой в интернете или на полках книжных магазинов можно найти советы противоречащие друг другу. 
                            У современных родителей нет свободного времени, чтобы ознакомиться с последними исследованиями в области педагогики и прочитать 
                            всю литературу по данной тематике. 
                            На консультации мы вместе с Вами разберем Ваши вопросы, связанные с воспитанием, обучением и развитием конкретного ребенка. 
                            При необходимости я подберу полезную литературу для Вас, развивающие игры, пособия для малыша и дам четкие, точные рекомендации, 
                            относительно Вашего запроса.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}