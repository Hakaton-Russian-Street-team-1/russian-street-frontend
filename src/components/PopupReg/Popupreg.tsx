import React from 'react';
import './Popupreg.css';
import { CheckBox } from '../../UI/CheckBox/CheckBox';

interface RegpopupProps {
  closePopup: () => void;
  isOpen: boolean;
}

export function Regpopup({ closePopup, isOpen }: RegpopupProps) {
  return (
    <div className={`Regpopup ${isOpen ? 'Regpopup_active' : ''}`}>
      <div className='Regpopup__content'>
        <button className='Regpopup__close' onClick={closePopup}>✕</button>
        <h2 className='Regpopup__title'>Контактные данные*</h2>
        <form className='Regpopup__form'>
          {/* Contact Information */}
          <div className='Regpopup__section'>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='surname'>Фамилия</label>
              <input type='text' id='surname' className='Regpopup__input' placeholder='Иванов' />
            </div>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='name'>Имя</label>
              <input type='text' id='name' className='Regpopup__input' placeholder='Иван' />
            </div>
            <div className='Regpopup__field Regpopup__field--medium'>
              <label className='Regpopup__label' htmlFor='patronymic'>Отчество</label>
              <input type='text' id='patronymic' className='Regpopup__input' placeholder='Иванович' />
            </div>
            <div className='Regpopup__field Regpopup__field--gender'>
              <label className='Regpopup__label' htmlFor='gender'>Пол</label>
              <select id='gender' className='Regpopup__select'>
                <option value='M'>M</option>
                <option value='F'>F</option>
              </select>
            </div>
          </div>

          <div className='Regpopup__section'>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='dob'>Дата рождения</label>
              <input type='date' id='dob' className='Regpopup__input' />
            </div>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='phone'>Номер телефона</label>
              <input type='tel' id='phone' className='Regpopup__input' placeholder='+7 923 567-89-90' />
            </div>
            <div className='Regpopup__field Regpopup__field--large'>
              <label className='Regpopup__label' htmlFor='email'>Почта</label>
              <input type='email' id='email' className='Regpopup__input' placeholder='ivan@gmail.com' />
            </div>
          </div>

          <div className='Regpopup__section'>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='city'>Город</label>
              <input type='text' id='city' className='Regpopup__input' placeholder='Москва' />
            </div>
          </div>

          <h2 className='Regpopup__title'>Паспортные данные*</h2>
          <div className='Regpopup__section'>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='passport_series'>Серия паспорта</label>
              <input type='text' id='passport_series' className='Regpopup__input' placeholder='1234' />
            </div>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='passport_number'>Номер паспорта</label>
              <input type='text' id='passport_number' className='Regpopup__input' placeholder='567890' />
            </div>
            <div className='Regpopup__field Regpopup__field--small'>
              <label className='Regpopup__label' htmlFor='issue_date'>Дата выдачи</label>
              <input type='date' id='issue_date' className='Regpopup__input' />
            </div>
            <div className='Regpopup__field Regpopup__field--large'>
              <label className='Regpopup__label' htmlFor='issued_by'>Кем выдан</label>
              <input type='text' id='issued_by' className='Regpopup__input' placeholder='ОУФМС по Московской области в г. Москва' />
            </div>
          </div>

          {/* Agreements */}
          <div className='Regpopup__agreements'>
            <div className='Regpopup__agreement'>
              <CheckBox id='agreement1' theme='black'>Я согласен с правилами и обязанностями члена ООО УКС "Улицы России"</CheckBox>
              {/* <input type='checkbox' id='agreement1' /> */}
              {/* <label htmlFor='agreement1'>Я согласен с правилами и обязанностями члена ООО УКС "Улицы России"</label> */}
            </div>
            <div className='Regpopup__agreement'>
            <CheckBox id='agreement2' theme='black'>Я согласен(на) на обработку персональных данных</CheckBox>
              {/* <input type='checkbox' id='agreement2' />
              <label htmlFor='agreement2'>Я согласен(на) на обработку персональных данных</label> */}
            </div>
          </div>

          {/* Buttons */}
          <div className='Regpopup__buttons'>
            <button type='button' className='Regpopup__button Regpopup__button--gov'>ВОЙТИ ЧЕРЕЗ ГОСУСЛУГИ</button>
            <button type='submit' className='Regpopup__button Regpopup__button--register'>ЗАРЕГИСТРИРОВАТЬСЯ</button>
          </div>
        </form>
      </div>
    </div>
  );
}
