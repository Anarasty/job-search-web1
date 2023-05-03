import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MainPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
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
        <div>
          <Slider>
            <div className="slider-card">
              <h3>1</h3>
            </div>
            <div className="slider-card">
              <h3>2</h3>
            </div>
            <div className="slider-card">
              <h3>3</h3>
            </div>
            <div className="slider-card">
              <h3>4</h3>
            </div>
            <div className="slider-card">
              <h3>5</h3>
            </div>
            <div className="slider-card">
              <h3>6</h3>
            </div>
          </Slider>
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
