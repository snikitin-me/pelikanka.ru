import React from 'react';

function UncontrolledExample() {
  return (
    <section id="mentions" class="row gx-4 justify-content-center">
      <div class="col-lg-8">
        <h1 class="mb-4" style={{ 'text-align': 'center' }}>Отзывы</h1>

        <div id="mentionsCarousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#mentionsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#mentionsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#mentionsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div class="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>Полина Сергеевна - замечательный грамотный специалист. Такие качества как чуткость, внимательность, интуиция помогают довериться ей не только как профессионалу, но и как человеку, способному просто поддержать и успокоить!
                  Мне очень помогли консультации Полины Сергеевны. Получилось
                  найти правильное решение в не простой ситуации и даже сделать выбор!
                  Огромная Вам благодарность за Ваш труд!
                </p>
                <p><b>Юлия Воробьёва</b></p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div class="carousel-caption d-none d-md-block">
                <p>У сына были проблемы с обучением в школе. Часто отвлекался, забывал и терял вещи, я очень переживала из-за его рассеянности. Полина дала реальные советы, которые работают, порекомендовала книги и упражнения по котором мы занимались с ребёнком. Спасибо! </p>
                <p><b>Александра</b></p>
              </div>
            </div>
            <div class="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
              <div class="carousel-caption d-none d-md-block">
                <h5></h5>
                <p>Полина помогла увидеть проблему, которую я, совершенно неосознанно допускала при воспитании двоих детей. Оказалось, что просто убрав из обихода несколько моих формулировок по отношению к старшему ребенку, удалось наладить дружеские отношения между детьми. Я в шоке, что все наши проблемы были на поверхности.</p>
                <p><b>Инна Савельева</b></p>

              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#mentionsCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#mentionsCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div></section>
  );
}

export default UncontrolledExample;