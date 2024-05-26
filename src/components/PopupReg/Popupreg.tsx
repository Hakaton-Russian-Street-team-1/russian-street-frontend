import React, { useState, useEffect } from 'react';
import './Popupreg.css';
import ClosePopupBtn from '../../images/closepopupbtn.svg';
import { SuccessMessage } from './SuccessMessage';

interface RegpopupProps {
  closePopup: () => void;
  isOpen: boolean;
  openLoginPopup: () => void;
}

export function Regpopup({ closePopup, isOpen, openLoginPopup }: RegpopupProps) {
  const [formData, setFormData] = useState({
    surname: '',
    name: '',
    patronymic: '',
    phone: '',
    passport_series: '',
    passport_number: '',
    dob: '',
    email: '',
    city: 'Moscow',
    issued_by: '',
    issue_date: '',
    gender: 'М',
    agreement1: true,
    agreement2: true,
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [touchedFields, setTouchedFields] = useState<{ [key: string]: boolean }>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [devMessage, setDevMessage] = useState(false);

  useEffect(() => {
    validateForm();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [formData, closePopup]);

  const validateField = (name: string, value: string | boolean) => {
    const errors: { [key: string]: string } = { ...formErrors };

    switch (name) {
      case 'surname':
        if (!/^[А-Яа-яЁё]+$/.test(value as string)) {
          errors.surname = 'Фамилия должна содержать только кириллические буквы';
        } else {
          delete errors.surname;
        }
        break;
      case 'name':
        if (!/^[А-Яа-яЁё]+$/.test(value as string)) {
          errors.name = 'Имя должно содержать только кириллические буквы';
        } else {
          delete errors.name;
        }
        break;
      case 'patronymic':
        if ((value as string) && !/^[А-Яа-яЁё]+$/.test(value as string)) {
          errors.patronymic = 'Отчество должно содержать только кириллические буквы';
        } else {
          delete errors.patronymic;
        }
        break;
      case 'phone':
        if (!/^\+7\d{10}$/.test(value as string)) {
          errors.phone = 'Номер телефона должен начинаться с +7 и содержать 10 цифр после кода страны';
        } else {
          delete errors.phone;
        }
        break;
      case 'passport_series':
        if (!/^\d{4}$/.test(value as string)) {
          errors.passport_series = 'Серия паспорта должна содержать ровно 4 цифры';
        } else {
          delete errors.passport_series;
        }
        break;
      case 'passport_number':
        if (!/^\d{6}$/.test(value as string)) {
          errors.passport_number = 'Номер паспорта должен содержать ровно 6 цифр';
        } else {
          delete errors.passport_number;
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value as string)) {
          errors.email = 'Неверный формат электронной почты';
        } else {
          delete errors.email;
        }
        break;
      case 'issued_by':
        if (!/^[А-Яа-яЁё\s]+$/.test(value as string)) {
          errors.issued_by = 'Кем выдано должно содержать только кириллические буквы';
        } else {
          delete errors.issued_by;
        }
        break;
      case 'dob':
        if (!value) {
          errors.dob = 'Дата рождения обязательна';
        } else {
          delete errors.dob;
        }
        break;
      case 'issue_date':
        if (!value) {
          errors.issue_date = 'Дата выдачи обязательна';
        } else {
          delete errors.issue_date;
        }
        break;
      case 'agreement1':
        if (!value) {
          errors.agreement1 = 'Необходимо согласие с правами и обязанностями';
        } else {
          delete errors.agreement1;
        }
        break;
      case 'agreement2':
        if (!value) {
          errors.agreement2 = 'Необходимо согласие на обработку персональных данных';
        } else {
          delete errors.agreement2;
        }
        break;
      default:
        break;
    }

    setFormErrors(errors);
  };

  const validateForm = () => {
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key as keyof typeof formData]);
    });

    const isValid = (
      Object.keys(formErrors).length === 0 &&
      !!formData.surname &&
      !!formData.name &&
      !!formData.phone &&
      !!formData.passport_series &&
      !!formData.passport_number &&
      !!formData.dob &&
      !!formData.email &&
      !!formData.city &&
      !!formData.issued_by &&
      !!formData.issue_date &&
      formData.agreement1 &&
      formData.agreement2
    );

    setIsFormValid(isValid);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    validateField(name, newValue);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setTouchedFields((prevFields) => ({
      ...prevFields,
      [name]: true,
    }));

    validateField(name, newValue);
    validateForm();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateForm();

    if (isFormValid) {
      setIsSubmitted(true);
      console.log('Form submitted', formData);
    }
  };

  const handleGovLogin = () => {
    setDevMessage(true);
    setTimeout(() => setDevMessage(false), 3000);
  };

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closePopup();
    }
  };

  const handleLoginClick = () => {
    closePopup();
    openLoginPopup(); // Open the login popup
  };

  const handleHomeClick = () => {
    closePopup();
  };

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setFormData({
        surname: '',
        name: '',
        patronymic: '',
        phone: '',
        passport_series: '',
        passport_number: '',
        dob: '',
        email: '',
        city: 'Moscow',
        issued_by: '',
        issue_date: '',
        gender: 'М',
        agreement1: true,
        agreement2: true,
      });
    }
  }, [isOpen]);

  if (!isOpen && !isSubmitted) return null;

  return (
    <div className={`Regpopup ${isOpen ? 'Regpopup_active' : ''}`} onClick={handleClickOutside}>
      <div className='Regpopup__content'>
        <button className='Regpopup__close' onClick={closePopup}>
          <img src={ClosePopupBtn} alt='Close' />
        </button>
        {!isSubmitted ? (
          <>
            <h2 className='Regpopup__title'>Контактные данные*</h2>
            <form className='Regpopup__form' onSubmit={handleSubmit}>
              {/* Contact Information */}
              <div className='Regpopup__section'>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.surname ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='surname'>Фамилия</label>
                  <input
                    type='text'
                    id='surname'
                    name='surname'
                    className={`Regpopup__input ${formErrors.surname ? 'Regpopup__input--error' : ''}`}
                    placeholder='Иванов'
                    value={formData.surname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.surname ? (
                    <span className='Regpopup__error'>{formErrors.surname}</span>
                  ) : (
                    <span className='Regpopup__hint'>Только на кириллице</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.name ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='name'>Имя</label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className={`Regpopup__input ${formErrors.name ? 'Regpopup__input--error' : ''}`}
                    placeholder='Иван'
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.name ? (
                    <span className='Regpopup__error'>{formErrors.name}</span>
                  ) : (
                    <span className='Regpopup__hint'>Только на кириллице</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--medium ${formErrors.patronymic ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='patronymic'>Отчество</label>
                  <input
                    type='text'
                    id='patronymic'
                    name='patronymic'
                    className={`Regpopup__input ${formErrors.patronymic ? 'Regpopup__input--error' : ''}`}
                    placeholder='Иванович'
                    value={formData.patronymic}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {formErrors.patronymic ? (
                    <span className='Regpopup__error'>{formErrors.patronymic}</span>
                  ) : (
                    <span className='Regpopup__hint'>Если нет отчества, оставьте поле пустым</span>
                  )}
                </div>
                <div className='Regpopup__field Regpopup__field--gender'>
                  <label className='Regpopup__label' htmlFor='gender'>Пол</label>
                  <select
                    id='gender'
                    name='gender'
                    className='Regpopup__select'
                    value={formData.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value='М' className='Regpopup__select-value'>M</option>
                    <option value='Ж' className='Regpopup__select-value'>F</option>
                  </select>
                </div>
              </div>

              <div className='Regpopup__section'>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.dob ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='dob'>Дата рождения</label>
                  <input
                    type='date'
                    id='dob'
                    name='dob'
                    className={`Regpopup__input ${formErrors.dob ? 'Regpopup__input--error' : ''}`}
                    value={formData.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.dob ? (
                    <span className='Regpopup__error'>{formErrors.dob}</span>
                  ) : (
                    <span className='Regpopup__hint'>В формате дд.мм.гггг</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.phone ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='phone'>Номер телефона</label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    className={`Regpopup__input ${formErrors.phone ? 'Regpopup__input--error' : ''}`}
                    placeholder='+7 923 567-89-90'
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.phone ? (
                    <span className='Regpopup__error'>{formErrors.phone}</span>
                  ) : (
                    <span className='Regpopup__hint'>Только номера РФ</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--large ${formErrors.email ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='email'>Почта</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className={`Regpopup__input ${formErrors.email ? 'Regpopup__input--error' : ''}`}
                    placeholder='ivan@gmail.com'
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.email ? (
                    <span className='Regpopup__error'>{formErrors.email}</span>
                  ) : (
                    <span className='Regpopup__hint'>Пришлём код подтверждения</span>
                  )}
                </div>
              </div>

              <div className='Regpopup__section'>
                <div className={`Regpopup__field Regpopup__field--city ${formErrors.city ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='city'>Город</label>
                  <select
                    id='city'
                    name='city'
                    className='Regpopup__select'
                    value={formData.city}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  >
                    <option value='Moscow'>Москва</option>
                    <option value='Saint Petersburg'>Санкт-Петербург</option>
                    <option value='Novosibirsk'>Новосибирск</option>
                    <option value='Ekaterinburg'>Екатеринбург</option>
                    <option value='Nizhny Novgorod'>Нижний Новгород</option>
                  </select>
                  {formErrors.city ? (
                    <span className='Regpopup__error'>{formErrors.city}</span>
                  ) : (
                    <span className='Regpopup__hint'>Введите вручную или выберите из списка</span>
                  )}
                </div>
              </div>

              <h2 className='Regpopup__title'>Паспортные данные*</h2>
              <h3 className='Regpopup__subtitle'>Эта информация необходима для проверки службой безопасности</h3>
              <div className='Regpopup__section'>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.passport_series ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='passport_series'>Серия паспорта</label>
                  <input
                    type='text'
                    id='passport_series'
                    name='passport_series'
                    className={`Regpopup__input ${formErrors.passport_series ? 'Regpopup__input--error' : ''}`}
                    placeholder='1234'
                    value={formData.passport_series}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={4}
                    required
                  />
                  {formErrors.passport_series ? (
                    <span className='Regpopup__error'>{formErrors.passport_series}</span>
                  ) : (
                    <span className='Regpopup__hint'>4 цифры серии паспорта</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.passport_number ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='passport_number'>Номер паспорта</label>
                  <input
                    type='text'
                    id='passport_number'
                    name='passport_number'
                    className={`Regpopup__input ${formErrors.passport_number ? 'Regpopup__input--error' : ''}`}
                    placeholder='567890'
                    value={formData.passport_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={6}
                    required
                  />
                  {formErrors.passport_number ? (
                    <span className='Regpopup__error'>{formErrors.passport_number}</span>
                  ) : (
                    <span className='Regpopup__hint'>6 цифр номера паспорта</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--small ${formErrors.issue_date ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='issue_date'>Дата выдачи</label>
                  <input
                    type='date'
                    id='issue_date'
                    name='issue_date'
                    className={`Regpopup__input ${formErrors.issue_date ? 'Regpopup__input--error' : ''}`}
                    value={formData.issue_date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.issue_date ? (
                    <span className='Regpopup__error'>{formErrors.issue_date}</span>
                  ) : (
                    <span className='Regpopup__hint'>В формате дд.мм.гггг</span>
                  )}
                </div>
                <div className={`Regpopup__field Regpopup__field--big ${formErrors.issued_by ? 'Regpopup__field--error' : ''}`}>
                  <label className='Regpopup__label' htmlFor='issued_by'>Кем выдан</label>
                  <input
                    type='text'
                    id='issued_by'
                    name='issued_by'
                    className={`Regpopup__input ${formErrors.issued_by ? 'Regpopup__input--error' : ''}`}
                    placeholder='ОУФМС по Московской области в г. Москва'
                    value={formData.issued_by}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  {formErrors.issued_by ? (
                    <span className='Regpopup__error'>{formErrors.issued_by}</span>
                  ) : (
                    <span className='Regpopup__hint'>Только кириллица</span>
                  )}
                </div>
              </div>

              {/* Agreements */}
              <div className='Regpopup__agreements'>
                <div className='Regpopup__agreement'>
                  <input
                    type='checkbox'
                    id='agreement1'
                    name='agreement1'
                    className='Regpopup__checkbox'
                    checked={formData.agreement1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <label htmlFor='agreement1'>Я согласен с правами и обязанностями члена ООО УКС «Улицы России»</label>
                </div>
                <div className='Regpopup__agreement'>
                  <input
                    type='checkbox'
                    id='agreement2'
                    name='agreement2'
                    className='Regpopup__checkbox'
                    checked={formData.agreement2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                  />
                  <label htmlFor='agreement2'>Я согласен (на) на обработку персональных данных</label>
                </div>
              </div>

              {/* Buttons */}
              <div className='Regpopup__buttons'>
                <button type='button' className='Regpopup__button Regpopup__button--gov' onClick={handleGovLogin}>ВОЙТИ ЧЕРЕЗ ГОСУСЛУГИ</button>
                <button type='submit' className={`Regpopup__button Regpopup__button--register ${!isFormValid ? 'Regpopup__button--disabled' : ''}`} disabled={!isFormValid}>
                  ЗАРЕГИСТРИРОВАТЬСЯ
                </button>

              
              </div>
              {devMessage && <div className="Regpopup__dev-message">В разработке</div>}
              <p className='Regpopup__support'>Если у вас возникли какие‑то проблемы, обратитесь в службу поддержки support@mail.ru</p>
              
            </form>
          </>
        ) : (
          <SuccessMessage onLoginClick={handleLoginClick} onHomeClick={handleHomeClick} />
        )}
      </div>
    </div>
  );
}
