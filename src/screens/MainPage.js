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
        <Link className="logo" to="/">
          Galera
        </Link>
        <div className="reg-log-container">
          <Link to="/login">Log In</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
      <header>
        <img src="https://imgtr.ee/images/2023/05/05/aZ83R.png" alt="logo" />
        <h1>IT job searching website #1 in Ukraine</h1>
        <h3 className="typing-txt">
          <span class="type">
            <span> We will find the right job for you!</span>
          </span>
        </h3>
        <div>
          <Link to="/vacancies">See vacancy catalog &#x2192;</Link>
        </div>
      </header>
      <section className="small-about-section">
        <p>
          We are a team of IT professionals. Our goal is to help people find
          their dream job in the IT industry. We created this website to help
          job seekers and employers connect with each other and make it easy to
          find jobs and talent.
        </p>
        <h3>Our partners</h3>
        <ul>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/a6rL1.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/am2JX.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/amw6V.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/am1Fl.png"
              alt="company"
            />
          </li>
          <li>
            <img
              src="https://imgtr.ee/images/2023/05/05/ambU3.png"
              alt="company"
            />
          </li>
        </ul>
      </section>
      <div className="horizontal-line-big"></div>
      <section className="website-features">
        <h2>Why you should choose us?</h2>
        <div className="features-container">
          <div>
            <h3>
              <i class="fa-solid fa-circle-check"></i> Only verified vacancies
            </h3>
            <p>
              Each job is vetted to ensure that it is real and suitable for
              applicants. This helps the user save time and make sure they are
              applying for a real job opportunity.
            </p>
          </div>
          <div>
            <h3>
              <i class="fa-solid fa-magnifying-glass"></i> Fast and simple
              search
            </h3>
            <p>
              Thanks to a simple and clear search interface, users can quickly
              find the necessary information about vacancies and decide on
              further actions.
            </p>
          </div>
          <div>
            <h3>
              <i class="fa-solid fa-list"></i> Personalized recommendations
            </h3>
            <p>
              Our algorithm analyzes a user's profile, qualifications, and
              preferences to offer only those jobs that best fit his needs.
            </p>
          </div>
        </div>
      </section>
      <div className="horizontal-line-big"></div>
      <section className="sliders-section">
        <div className="sliders">
          <h2>Our reviews</h2>
          <div className="sliders-items">
            <Carousel responsive={responsive}>
              <div className="slider-card">
                <img draggable="false" src="https://imgtr.ee/images/2023/05/05/axkUX.jpg"></img>
                <h3>Dmitry Chumak</h3>
                <p></p>
              </div>
              <div>
                <img draggable="false" src="https://imgtr.ee/images/2023/05/05/axnTV.jpg"></img>
                <h3>Lina Stepanenko</h3>
                <p></p>
              </div>
              <div>
                <img draggable="false" src="https://imgtr.ee/images/2023/05/05/axysl.jpg"></img>
                <p>Hello1</p>
              </div>
              <div>
                <img draggable="false" src="https://imgtr.ee/images/2023/05/05/ax8M3.jpg"></img>
                <p>Hello1</p>
              </div>
            </Carousel>
          </div>
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

        <div>
          <p>&copy; 2023 Имя компании. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainPage;
