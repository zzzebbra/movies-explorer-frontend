import React from 'react';
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const validators = {
  userName: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value.length < 2 },
    noNumbers: (value) => { return /[0-9]/.test(value) },
  },
  email: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value.length < 5 },
    isEmail: (value) => { return !/[0-9a-z_-]*-*_*@{1}[a-z0-9-_]*-*_*\.{1}[a-z\.*]+/i.test(value) },
  },
  password: {
    required: (value) => { return value === '' },
    minLength: (value) => { return value.length < 8 },
  }
}

function Register(props) {
  const nameRef = React.useRef();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [formValues, setFormValues] = React.useState({
    userName: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    // true if error
    // false if correct
    userName: {
      required: true,
      minLength: true,
      noNumbers: true,
    },
    email: {
      required: true,
      minLength: true,
      isEmail: true,
    },
    password: {
      required: true,
      minLength: true,
    }
  });

  const handleInputChange = React.useCallback((evt) => {
    const { name, value } = evt.target;
    setFormValues(prevState => ({ ...prevState, [name]: value }));
  }, [setFormValues]);

  React.useEffect(function validateInputs() {
    const { userName, email, password } = formValues;

    const userNameValidationResult = Object.keys(validators.userName).map(
      errorKey => {
        const errorResult = validators.userName[errorKey](userName);

        return { [errorKey]: errorResult }
      }
    ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {} );

    const emailValidationResult = Object.keys(validators.email).map(
      errorKey => {
        const errorResult = validators.email[errorKey](email);

        return { [errorKey]: errorResult }
      }
    ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {} );

    const passwordValidationResult = Object.keys(validators.password).map(
      errorKey => {
        const errorResult = validators.password[errorKey](password);

        return { [errorKey]: errorResult }
      }
    ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {} );

    setErrors({
      userName: userNameValidationResult,
      email: emailValidationResult,
      password: passwordValidationResult
    });

  }, [formValues, setErrors]);

  const { userName, email, password } = formValues;

  const isUserNameInvalid = Object.values(errors.userName).some(Boolean);
  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isSubmitDisabled = isUserNameInvalid || isEmailInvalid || isPasswordInvalid;

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit({
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <section className="register">
      <Link to="/"><img className="logo" src={logo} alt="Логотип"/></Link>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">{props.title}</h1>
        <p className="form__input-text">Имя</p>
        <input
          className="form__input"
          ref={nameRef}
          type="text"
          name="userName"
          onChange={handleInputChange}
          value={userName}
          required
        />
        { errors.userName.required && <p className="form__error">Обязательное поле</p> }
        { errors.userName.minLength && <p className="form__error">Поле должно быть не короче 2 символов</p> }
        { errors.userName.noNumbers && <p className="form__error">Поле не может содержать цифры</p> }
        <p className="form__input-text">E-mail</p>
        <input
          className="form__input"
          ref={emailRef}
          type="email"
          name="email"
          onChange={handleInputChange}
          value={email}
          required
        />
        { errors.email.required && <p className="form__error">Обязательное поле</p> }
        { errors.email.minLength && <p className="form__error">Поле должно быть не короче 5 символов</p> }
        { errors.email.isEmail && <p className="form__error">Адрес электронной почты должен содержать символ "@" и постфикс доменной зоны (".ru", ".com", и т.д.)</p> }
        <p className="form__input-text">Пароль</p>
        <input
          className="form__input"
          ref={passwordRef}
          type="password"
          name="password"
          onChange={handleInputChange}
          value={password}
          required
        />
        { errors.password.required && <p className="form__error">Обязательное поле</p> }
        { errors.password.minLength && <p className="form__error">Поле должно быть не короче 8 символов</p> }
        <button disabled={isSubmitDisabled} className={ `${isSubmitDisabled ? 'form__submit-button form__submit-button_disabled': 'form__submit-button'}` }>{props.button}</button>
        <p className="form__text">{props.text}<Link to={props.link} className="form__link">{props.link_text}</Link></p>
      </form>

    </section>
  )
}

export default Register
