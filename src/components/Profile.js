import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Profile(props) {
  const edit = "Редактировать";
  const logout = "Выйти из аккаунта";
  const submitButton = "Сохранить"
  const [isDisabled, setIsDisabled] = React.useState(true);
  const [username, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setUserName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onEdit({
      username,
      email,
    });
    setIsDisabled(true);
  }

  function handleEdit() {
    setIsDisabled(false);
  }

  if(isDisabled) {
    return (
      <section className="profile">
          {/* <Header
            loggedIn={props.isLoggedIn}
            link="/movies"
            buttonLink="/profile"
            text="Фильмы"
            saved="Сохранённые фильмы"
            buttonText="Аккаунт"
            inactiveSavedFilmsClass="header__text_inactive"
            inactiveFilmsClass="header__text_inactive"
          /> */}
        <p className="profile__title">Привет, {username}!</p>
        <form className="profile__data" onSubmit={handleSubmit}>
          <p className="profile__text profile__text_left">Имя</p>
          <input
          name="username"
          disabled={isDisabled}
          className="profile__input profile__text_right"
          value={username}
          onChange={(evt) => setUserName(evt.target.value)}
          />
          <p className="profile__text profile__text_left">Почта</p>
          <input
          name="email"
          disabled={isDisabled}
          className="profile__input profile__text_right"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          />
        </form>
        <div className="profile__buttons">
          <button onClick={handleEdit} className="profile__edit-button">{edit}</button>
          <button onClick={props.onClick} className="profile__logout-button">{logout}</button>
        </div>
      </section>
    )
  }

  return(
    <section className="profile">
    <p className="profile__title">Привет, {username}!</p>
    <form className="profile__data" onSubmit={handleSubmit}>
      <p className="profile__text profile__text_left">Имя</p>
      <input
      name="username"
      disabled={isDisabled}
      className="profile__input profile__text_right"
      value={username}
      onChange={(evt) => setUserName(evt.target.value)}
      />
      <p className="profile__text profile__text_left">Почта</p>
      <input
      name="email"
      disabled={isDisabled}
      className="profile__input profile__text_right"
      value={email}
      onChange={(evt) => setEmail(evt.target.value)}
      />
    </form>
    <div className="profile__buttons">
      <button onClick={handleSubmit} className="profile__submit-button">{submitButton}</button>
    </div>
  </section>
  )
}

export default Profile
