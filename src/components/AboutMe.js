import React from 'react';
import profilePhoto from '../images/langing__profile-photo.svg';

function AboutMe() {
  return(
    <section className="about-me">
      <div className="block-with-bottom-border">
        <h2 className="section-title">Студент</h2>
      </div>
      <div className="about-me__wrapper">
        <div className="about-me__text">
          <p className="about-me__name">Виталий</p>
          <p className="about-me__occupation">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__cv">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__social">
            <li className="about-me__link">Facebook</li>
            <li className="about-me__link">Github</li>
          </ul>
        </div>
        <img className="about-me__photo" src={profilePhoto} alt="Фото профиля"></img>
      </div>
    </section>
  )

}

export default AboutMe
