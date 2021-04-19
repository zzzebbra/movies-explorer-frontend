import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const validators = {
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

function Login(props) {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const [formValues, setFormValues] = React.useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({
    // true if error
    // false if correct
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


  React.useEffect(
    function validateInputs() {
      const { email, password } = formValues;

      if (!formValues.email && !formValues.password) {
        setErrors({
          email: {
            required: false,
            minLength: false,
            isEmail: false,
          },
          password: {
            required: false,
            minLength: false,
          }
        })
      }
      else {
        const emailValidationResult = Object.keys(validators.email).map(
          errorKey => {
            const errorResult = validators.email[errorKey](email);

            return { [errorKey]: errorResult }
          }
        ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {});

        const passwordValidationResult = Object.keys(validators.password).map(
          errorKey => {
            const errorResult = validators.password[errorKey](password);

            return { [errorKey]: errorResult }
          }
        ).reduce((accumulator, element) => ({ ...accumulator, ...element }), {});

        setErrors({
          email: emailValidationResult,
          password: passwordValidationResult
        });
      }
    }, [formValues]);

  const { email, password } = formValues;

  const isEmailInvalid = Object.values(errors.email).some(Boolean);
  const isPasswordInvalid = Object.values(errors.password).some(Boolean);
  const isSubmitDisabled = isEmailInvalid || isPasswordInvalid || !(formValues.email && formValues.password)

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  }

  return (
    <section className="login">
      <Link to="/"><img className="logo" src={logo} alt="Логотип" /></Link>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">{props.title}</h1>
        <p className="form__input-text">E-mail</p>
        <input
          className="form__input"
          ref={emailRef}
          type="text"
          name="email"
          onChange={handleInputChange}
          value={email}
          required
        />
        {errors.email.required && <p className="form__error">Обязательное поле</p>}
        {errors.email.minLength && <p className="form__error">Поле должно быть не короче 5 символов</p>}
        {errors.email.isEmail && <p className="form__error">Адрес электронной почты должен содержать символ "@" и постфикс доменной зоны (".ru", ".com", и т.д.)</p>}
        <p className="form__input-text">Пароль</p>
        <input className="form__input"
          ref={passwordRef}
          type="password"
          name="password"
          onChange={handleInputChange}
          value={password}
          required
        />
        {errors.password.required && <p className="form__error">Обязательное поле</p>}
        {errors.password.minLength && <p className="form__error">Поле должно быть не короче 8 символов</p>}
        <button disabled={isSubmitDisabled} className={`${isSubmitDisabled ? 'form__submit-button form__submit-button_disabled' : 'form__submit-button'}`}>{props.button}</button>
        <p className="form__text">{props.text}<Link to={props.link} className="form__link">{props.link_text}</Link></p>
      </form>
    </section>
  )
}

export default Login
