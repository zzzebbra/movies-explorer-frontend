import React from 'react';

function Profile(props) {
  const edit = "Редактировать";
  const logout = "Выйти из аккаунта";
  const username = props.username;
  const email = props.email;

  return (
    <section className="profile">
      <p className="profile__title">Привет, {username}!</p>
      <div className="profile__data">
        <p className="profile__text profile__text_left">Имя</p>
        <p className="profile__text profile__text_right">{username}</p>
        <p className="profile__text profile__text_left">Почта</p>
        <p className="profile__text profile__text_right">{email}</p>
      </div>
      <div className="profile__buttons">
        <button className="profile__edit-button">{edit}</button>
        <button className="profile__logout-button">{logout}</button>
      </div>
    </section>
  )
}

export default Profile
