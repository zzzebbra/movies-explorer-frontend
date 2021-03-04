import React from 'react';

function AboutProject() {
  return(
  <section className="about-project">
    <div className="block-with-bottom-border">
      <h2 className="section-title">О проекте</h2>
    </div>
    <div className="about-project__descpiption">
      <div >
        <p className="about-project__descpiption-title">Дипломный проект включал 5 этапов</p>
        <p className="about-project__descpiption-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
      </div>
      <div >
        <p className="about-project__descpiption-title">На выполнение диплома ушло 5 недель</p>
        <p className="about-project__descpiption-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
    </div>
    <div className="about-project__graphic">
      <div className="about-project__duration-front">
        <p className="about-project__duration-text">1 неделя</p>
      </div>
      <div className="about-project__duration-back">
        <p className="about-project__duration-text">4 недели</p>
      </div>
      <div className="about-project__interlinear-back">
        <p className="about-project__interlinear-text">Back-end</p>
      </div>
      <div className="about-project__interlinear-front">
        <p className="about-project__interlinear-text">Front-end</p>
      </div>
    </div>
  </section>
  )
}

export default AboutProject
