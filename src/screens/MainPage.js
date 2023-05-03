import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MainPage = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="main-page-section">
      <nav>
        <Link to="/">
          <img src="logo.png" alt="logo" />
        </Link>
        <Link to="/login">Зайти</Link>
        <Link to="/register">Зарегистрироваться</Link>
      </nav>
      <header>
        <Link to="/">
          <img src="logo.png" alt="logo" />
        </Link>
        <Link to="/vacancies">Вакансии</Link>
      </header>
      <section>
        <h2>Добро пожаловать на сайт по поиску работы в Айти!</h2>
        <p>
          Мы поможем вам найти работу своей мечты в сфере информационных
          технологий.
        </p>
      </section>
      <section>
        <h2>Особенности нашего сайта</h2>
        <div>
          <h3>Большая база вакансий</h3>
          <p>
            Мы предлагаем широкий выбор вакансий в сфере IT, от малых стартапов
            до крупных корпораций.
          </p>
        </div>
        <div>
          <h3>Простой и удобный поиск</h3>
          <p>
            Наш поиск предоставляет простой и интуитивно понятный интерфейс,
            позволяющий быстро найти подходящую вакансию.
          </p>
        </div>
        <div>
          <h3>Персонализированные рекомендации</h3>
          <p>
            Мы используем алгоритмы машинного обучения, чтобы подбирать
            подходящие вакансии для каждого пользователя.
          </p>
        </div>
      </section>
      <section className="sliders">
        <h2>Отзывы наших пользователей</h2>
        <div className="sliders-items">
          <Carousel responsive={responsive}>
            <div className="slider-card">
                <img src="https://img-19.ccm2.net/8trT73OJjQ9RladAYYrlpCwEjRk=/330x330/e787e4204e42415494a35bdebd6e1068/auth-avatar/f12b4b50446675e3dbedf0a081db1957-Gabriel66335"></img>
                <p>Hello1</p>
            </div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
          </Carousel>
        </div>
      </section>
      <section>
        <h2>Платная подписка</h2>
        <div>
          <p>
            Мы предлагаем платную подписку, которая дает пользователям ряд
            преимуществ:
          </p>
          <ul>
            <li>
              Доступ к большему количеству вакансий, которые не доступны для
              обычных пользователей
            </li>
            <li>
              Возможность видеть контактные данные работодателей и связываться с
              ними напрямую
            </li>
            <li>
              Персональные рекомендации вакансий, учитывающие предпочтения и
              опыт пользователя
            </li>
            <li>
              Ранний доступ к новым вакансиям, которые только что появились на
              сайте
            </li>
            <li>
              Помощь специалистов по подбору вакансий, которые могут помочь
              пользователям найти идеальную работу
            </li>
          </ul>
          <p>
            Оформление подписки легко и быстро, просто нажмите на кнопку ниже.
          </p>
          <button>Оформить подписку</button>
        </div>
      </section>
      <footer>
        <nav>
          <ul>
            <li>
              <a href="#">Главная</a>
            </li>
            <li>
              <a href="#">Вакансии</a>
            </li>
            <li>
              <a href="#">О нас</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        <div>
          <p>&copy; 2023 Имя компании. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
