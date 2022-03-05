import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

const validators = {
  email: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value.length < 5 },
    isEmail: (value) => { return !/[0-9a-z_-]*-*_*@{1}[a-z0-9-_]*-*_*\.{1}[a-z\.*]+/i.test(value) },
  },
  userName: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value.length < 2 },
    noNumbers: (value) => { return /[0-9]/.test(value) },
  },
}

function Profile(props) {
  const edit = "Редактировать";
  const logout = "Выйти из аккаунта";
  const submitButton = "Сохранить"
  const [isDisabled, setIsDisabled] = React.useState(true);
  const currentUser = React.useContext(CurrentUserContext);

  const emailRef = React.useRef();
  const usernameRef = React.useRef();

  const [formValues, setFormValues] = React.useState({
    email: currentUser.email,
    userName: currentUser.name
  });

  const [errors, setErrors] = React.useState({
    // true if error
    // false if correct
    email: {
      required: true,
      minLength: true,
      isEmail: true,
    },
    userName: {
      required: true,
      minLength: true,
      noNumbers: true,
    },
  });

  const handleInputChange = React.useCallback((evt) => {
    const { name, value } = evt.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }, [setFormValues]);


  React.useEffect(
    function validateInputs() {
      const { email, userName } = formValues;
        const emailValidationResult = Object.keys(validators.email).map(
          errorKey => {
            const errorResult = validators.email[errorKey](email);

            return { [errorKey]: errorResult }
          }
        ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {});

        const userNameValidationResult = Object.keys(validators.userName).map(
          errorKey => {
            const errorResult = validators.userName[errorKey](userName);

            return { [errorKey]: errorResult }
          }
        ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {});


        setErrors({
          email: emailValidationResult,
          userName: userNameValidationResult
        });
    }, [formValues]);

    const { email, userName } = formValues;

    const isEmailInvalid = Object.values(errors.email).some(Boolean);
    const isUsernameInvalid = Object.values(errors.userName).some(Boolean);
    const isSubmitDisabled = isEmailInvalid || isUsernameInvalid || (formValues.email==currentUser.email && formValues.userName==currentUser.name)

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onEdit({
      name: userName,
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
        <p className="profile__title">Привет, {userName}!</p>
        <form className="profile__data" onSubmit={handleSubmit}>
          <p className="profile__text profile__text_left">Имя</p>
          <input
          ref={usernameRef}
          name="userName"
          disabled={isDisabled}
          className="profile__input profile__text_right"
          value={userName}
          onChange={handleInputChange}
          />
          <p className="profile__text profile__text_left">Почта</p>
          <input
          name="email"
          disabled={isDisabled}
          className="profile__input profile__text_right"
          value={email}
          ref={emailRef}
          onChange={handleInputChange}
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
    <p className="profile__title">Привет, {userName}!</p>
    <form className="profile__data" onSubmit={handleSubmit}>
      <p className="profile__text profile__text_left">Имя</p>
      <input
        name="userName"
        disabled={isDisabled}
        className="profile__input profile__text_right"
        value={userName}
        ref={usernameRef}
        onChange={handleInputChange}
      />
      { errors.userName.required && <p className="form__error">Обязательное поле</p> }
      { errors.userName.minLength && <p className="form__error">Поле должно быть не короче 2 символов</p> }
      { errors.userName.noNumbers && <p className="form__error">Поле не может содержать цифры</p> }
      <p className="profile__text profile__text_left">Почта</p>
      <input
        name="email"
        disabled={isDisabled}
        className="profile__input profile__text_right"
        value={email}
        ref={emailRef}
        onChange={handleInputChange}
      />
      { errors.email.required && <p className="form__error">Обязательное поле</p> }
      { errors.email.minLength && <p className="form__error">Поле должно быть не короче 5 символов</p> }
      { errors.email.isEmail && <p className="form__error">Адрес электронной почты должен содержать символ "@" и постфикс доменной зоны (".ru", ".com", и т.д.)</p> }
    </form>
    <div className="profile__buttons">
      {/* <button onClick={handleSubmit} className="profile__submit-button">{submitButton}</button> */}
       <button onClick={handleSubmit} type="submit" disabled={isSubmitDisabled} className={ `${isSubmitDisabled ? 'profile__submit-button profile__submit-button_disabled': 'profile__submit-button'}` }>{submitButton}</button>
    </div>
  </section>
  )
}

export default Profile
