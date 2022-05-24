import "./App.css";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import axios from "axios";

import DeviceDetector from "device-detector-js";
import { async } from "@firebase/util";
const deviceDetector = new DeviceDetector();
const userAgent = window.navigator.userAgent;
const device = deviceDetector.parse(userAgent);

var iHeight = window.screen.height;
var iWidth = window.screen.width;
function iPhoneVersion() {
  if (iWidth === 414 && iHeight === 896) {
    return "Xmax-Xr";
  } else if (iWidth === 375 && iHeight === 812) {
    return "X-Xs";
  } else if (iWidth === 320 && iHeight === 480) {
    return "4";
  } else if (iWidth === 375 && iHeight === 667) {
    return "6";
  } else if (iWidth === 414 && iHeight === 736) {
    return "6+";
  } else if (iWidth === 320 && iHeight === 568) {
    return "5";
  } else if (iHeight <= 480) {
    return "2-3";
  } else if (iWidth === 390 && iHeight === 844) return "12 pro - 13 pro";
  else {
    return "PC";
  }
}

const firebaseConfig = {
  apiKey: "AIzaSyCmOMqas3l4ZQl-vDKqYckxVDuNWUH7lQY",
  authDomain: "pashaspy-2e1c0.firebaseapp.com",
  projectId: "pashaspy-2e1c0",
  storageBucket: "pashaspy-2e1c0.appspot.com",
  messagingSenderId: "896680599500",
  appId: "1:896680599500:web:aa9f2b3ea7c70d0a90c769",
  measurementId: "G-LQ92C4FWG7",
};

const app = initializeApp(firebaseConfig);

function writeUserData({
  os,
  phone,
  device_height,
  device_width,
  possible_model,
  id,
}) {
  const db = getDatabase();
  const date = new Date();
  set(ref(db, "visitors/" + `"vpn-${id}__${date.toString()}`), {
    os,
    phone,
    device_height,
    device_width,
    possible_model,
  });
}

function App() {
  const [vpn, setVpn] = useState("");

  useEffect(() => {
    axios
      .get("https://geolocation-db.com/json/")
      .then((res) => setVpn(res.data.IPv4));
  }, []);

  useEffect(() => {
    vpn &&
      writeUserData({
        os: device.os,
        phone: device.device,
        device_height: `${iHeight} (${iHeight / 96} inch)`,
        device_width: `${iWidth} (${iWidth / 96} inch)`,
        possible_model: iPhoneVersion(),
        id: vpn.replace(/\./g, ""),
      });
  }, [vpn]);

  return (
    <div className="App">
      <div className="maine">
        <a name="intro__form"></a>
        <section className="intro">
          <div className="wreaper">
            <div className="title">
              <h1 className="intro-title">
                Подборка видео ресурсов для изучения программирования (фронтенд)
              </h1>
              <p className="intro-subtitle">
                Изучение программирования всегда дает множество преимуществ. Для
                веб-мастеров наличие базовых навыков программирования может
                значительно облегчить процесс управления сайтом. Более того, вы
                можете меньше зависеть от разработчиков при создании и
                реализации проектов, что в конечном итоге снизит затраты. Для
                тех, кто ищет работу или меняет профессию, разработка может
                открыть двери в различные сферы программирования, многие из
                которых пользуются большим спросом. В наши дни обучение
                программированию очень доступно. Тонны бесплатных ресурсов,
                независимо от того, хотите ли вы освоить новый язык
                программирования или в полной мере освоить старый.
              </p>
            </div>
          </div>
          <div className="intro-bg"></div>
        </section>
        <section className="Prefecture">
          <div className="Prefecture-wreap">
            <h2 className="PlacesToVisit-title">Лучшие курсы на Udemy</h2>
            <div className="Prefecture1">
              <div className="Prefecture-text">
                <h3 className="Prefecture-title">
                  Полный курс по JavaScript + React - с нуля до результата (Иван
                  Петриченко)
                </h3>
                <p className="Prefecture-item">
                  Этот курс направлен на подробное изучение JavaScript без воды,
                  но главное - немедленное применение его на практике. Это
                  значит, что вы получите материал для работы и мы вместе будем
                  создавать реальные проекты шаг за шагом. Вторая часть курса -
                  это изучение самой популярной библиотеки на основе JavaScript
                  - React.js со всеми необходимыми технологиями (в том числе и
                  Redux)
                </p>
                <div className="link-wrap link-wrap1">
                  <a
                    href="https://www.udemy.com/course/javascript_full"
                    className="card-link"
                  >
                    ПЕРЕЙТИ НА РЕСУРС
                  </a>
                  <img
                    className="prefecture__img"
                    src={require("./img/svg/benefits_icons/Shape.svg")}
                    alt=""
                  />
                </div>
              </div>
              <div className="Prefecture-img">
                <a href="https://www.udemy.com/course/javascript_full">
                  <img
                    className="Prefecture-img-picture"
                    src={require("./img/jpg/ivan.jpg")}
                  />
                </a>
              </div>
            </div>
            <div className="Prefecture2">
              <div className="Prefecture-text">
                <h3 className="Prefecture-title">
                  React Native с нуля на практике [2021]
                </h3>
                <p className="Prefecture-item">
                  В этом курсе вы познакомитесь с основами фреймворка и сделаете
                  на практике ваше первое кроссплатформенное мобильное
                  приложение (под iOs и Android) используя всю мощь фреймворков
                  React Native и Expo. Вы научитесь работать с расположением
                  элементов, использовать красивые иконки, запрашивать
                  разрешение и получать текущую геопозицию устройства, получать
                  и обрабатывать данные через API. Если это ваше первое
                  знакомство с фреймворком React Native, то вы в правильном
                  месте. По-сути вам нужно только немного знать JavaScript и
                  уметь работать с фреймворков React и все - вам не нужно знать
                  Java, Kotlin, Objective C или Swift. И в результате вы
                  получите красивое и легкое кроссплатформенное приложение,
                  которое вы сможете протестировать на своем смартфоне и
                  показать своим друзьям!
                </p>
                <div className="link-wrap link-wrap2">
                  <a
                    href="https://www.udemy.com/course/react-native-basics-2021/"
                    className="card-link"
                  >
                    ПЕРЕЙТИ НА РЕСУРС
                  </a>
                  <a href="https://www.udemy.com/course/react-native-basics-2021/">
                    <img
                      className="prefecture__img"
                      src={require("./img/svg/benefits_icons/Shape.svg")}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="Prefecture-img">
                <img
                  className="Prefecture-img-picture"
                  src={require("./img/jpg/native.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <a name="places"></a>
        </section>

        <section className="PlacesToVisit">
          <h2 className="PlacesToVisit-title">Лучшие курсы на YouTube</h2>
          <div className="places-wrap">
            <div className="place">
              <div className="place-img">
                <iframe
                  width="100%"
                  height="320px"
                  src="https://www.youtube.com/embed/yJcCKuxfb2o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="place-Panel">
                <h4 className="panel-title">Фрілансер по життю</h4>
              </div>

              <div className="place-text">
                <p>
                  БЕСПЛАТНЫЙ курс по верстке сайтов. Верстка сайтов с нуля.
                  Выпуски будут выходить в виде уроков по HTML CSS JS. #обучение
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=yJcCKuxfb2o&list=PLM6XATa8CAG7DDIBjNVd78Fv5Ueo930IV">
                <button className="place-button">ПЕРЕЙТИ НА КАНАЛ</button>
              </a>
            </div>
            <div className="place">
              <div className="place-img">
                <iframe
                  width="100%"
                  height="320px"
                  src="https://www.youtube.com/embed/TisGtkOPh24"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="place-Panel">
                <h4 className="panel-title">От 0 до 1</h4>
              </div>
              <div className="place-text">
                Контент по верстке сложного пакета, используя сборку на gulp 4 и
                препроцессор scss. Макет нарисован в figma, дизайнер постарался
                с интерактивными... элементами, так что нам будет что делать и
                над чем подумать. Велком и приятного просмотра.
              </div>
              <a href="https://www.youtube.com/watch?v=TisGtkOPh24&list=PLN2KCaMlZNdBEtr55AmjP_67lo8jWoCqt">
                <button className="place-button">ПЕРЕЙТИ НА КАНАЛ</button>
              </a>
            </div>
            <div className="place">
              <div className="place-img">
                <iframe
                  width="100%"
                  height="320px"
                  src="https://www.youtube.com/embed/JgIG6d3JsZs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="place-Panel">
                <h4 className="panel-title">Гоша Дударь</h4>
              </div>
              <div className="place-text">
                <p>
                  Изучение одного из самых интересных и многофункциональных
                  языков программирования, а именно к языку JavaScript.
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=JgIG6d3JsZs&list=PL0lO_mIqDDFUGX9k45bZFuz1ixTvUhd7b">
                <button className="place-button">ПЕРЕЙТИ НА КАНАЛ</button>
              </a>
            </div>
            <div className="place">
              <div className="place-img">
                <iframe
                  width="100%"
                  height="320px"
                  src="https://www.youtube.com/embed/au1Tb0tEe6I"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="place-Panel">
                <h4 className="panel-title">Front-end Science</h4>
              </div>
              <div className="place-text">
                <p>
                  Введение в Git — это почти всегда пошаговая инструкция, но не
                  всегда достаточно понятная. Именно сделал гайд со схемами,
                  которые сделают...
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=EujTUEN1O9k&list=PL0k-9Y7O1GweYJHN0QfrW2rUjWxrszsg_&index=3">
                <button className="place-button">ПЕРЕЙТИ НА КАНАЛ</button>
              </a>
            </div>
            <div className="place">
              <div className="place-img">
                <iframe
                  width="100%"
                  height="320px"
                  src="https://www.youtube.com/embed/3PDq09nqCTs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="place-Panel">
                <h4 className="panel-title">webDev</h4>
              </div>
              <div className="place-text">
                <p>
                  В данном видео-курсе мы с вами рассмотрим все ключевые
                  нововведения в стандарте ECMAScript 2015. Разберём
                  практические примеры
                </p>
              </div>
              <a href="https://www.youtube.com/watch?v=3PDq09nqCTs&list=PLNkWIWHIRwMGLJXugVvdK7i8UagGQNaXD">
                <button className="place-button">ПЕРЕЙТИ НА КАНАЛ</button>
              </a>
            </div>

          </div>
          <a name="video"></a>
        </section>
      </div>
    </div>
  );
}

export default App;
