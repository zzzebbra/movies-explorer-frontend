import React from 'react';

function Tech(props) {
  return(
    <section className="tech">
      <div className="block-with-bottom-border">
        <h2 className="section-title">Технологии</h2>
      </div>
      <div className="tech__wrapper">
        <div className="tech__description">
          <p className="tech__descriprion-title">7 технологий</p>
          <p className="tech__description-text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
          <ul className="tech__tags-list">
            <li className="tech__tags-list-item">HTML</li>
            <li className="tech__tags-list-item">CSS</li>
            <li className="tech__tags-list-item">JS</li>
            <li className="tech__tags-list-item">React</li>
            <li className="tech__tags-list-item">Git</li>
            <li className="tech__tags-list-item">Express.js</li>
            <li className="tech__tags-list-item">mongoDB</li>
          </ul>
      </div>
    </section>
  )
}

export default Tech
