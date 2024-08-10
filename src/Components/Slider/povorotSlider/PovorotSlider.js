import React, { useState } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import joker from '../../../img/Slider/sliderSvg/axe_fdiiebbx43fo.svg';
import boo from '../../../img/Slider/sliderSvg/boo_bbixqf37nv44.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s from './PovorotSlider.module.css';
import img1 from '../../../img/Slider/PovorotPhoto/povorot1.PNG';
import img2 from '../../../img/Slider/PovorotPhoto/povorot2.PNG';
import img3 from '../../../img/Slider/PovorotPhoto/povorot3.PNG';
import img4 from '../../../img/Slider/PovorotPhoto/povorot4.PNG';

const images = [img1, img2, img3, img4];
const comments = [
  {
    name: 'Елизавета',
    date: '14.05.2023',
    comment: 'Были первый раз. Очень понравилось, было очень атмосферно, все остались под впечатлением)',
    grade: "4.9",
  },
  {
    name: 'Глеб',
    date: '14.05.2023',
    comment: 'Чучуть побольше надо топором махать',
    grade: "4.6",
  },
  {
    name: 'Нікіта',
    date: '08.05.2023',
    comment: 'Дуже атмосферний і класний квест, були у перший раз, усім рекомендую)',
    grade: "4.8",
  },
  {
    name: 'Евгений',
    date: '13.03.2023',
    comment:
      'Квест интересный, но в двоем лучше не идти будет скучновато, если идти то большой компанией, всем советую',
    grade: "5",
  },
  {
    name: 'Андрій',
    date: '26.07.2023',
    comment:
      'Дуже круто, були на цьому квесті вперше. Було досить цікаво і лячно, так що всім бажаю спробувати хоч раз ;)',
    grade: "4.4",
  },
  {
    name: 'Данил',
    date: '17.02.2023',
    comment:
      "Очень классно всем советую будет страшно",
    grade: "5",
  },
];

const videoList = [
 
];


Modal.setAppElement('#root');

export default function PovorotSimpleSlider() {
  const [modalType, setModalType] = useState(null); // State to track which modal to open
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = (type, index = 0) => {
    setCurrentSlide(index);
    setModalType(type);
    document.body.classList.add('no-scroll'); // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setModalType(null);
    document.body.classList.remove('no-scroll'); // Re-enable scrolling when modal is closed
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentSlide,
    afterChange: current => setCurrentSlide(current),
  };

  return (
    <div>
      <div className={s.sliderSection}>
        <img src={joker} alt="" className={s.advantagesImg} />
        <div>
          <h2 className={s.sliderTitle}>Наша робота — дарувати вам емоції.</h2>{' '}
          <br />
          <div className={s.buttonContainer}>
            <button className={s.button} onClick={() => openModal('photos')}>
              Фото
            </button>
            <button className={s.button} onClick={() => openModal('comments')}>
              Вiдгуки
            </button>
            <button className={s.button} onClick={() => openModal('other')}>
            Відео-відгуки
            </button>
          </div>
        </div>
        <img src={boo} alt="" className={s.advantagesImg} />
      </div>

      <Modal
        isOpen={modalType === 'photos'}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <Slider className={s.slider} {...settings}>
          {images.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`Slide ${index}`}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </Slider>
      </Modal>

      <Modal
        isOpen={modalType === 'comments'}
        onRequestClose={closeModal}
        contentLabel="Comments Modal"
        className={s.modal}
        overlayClassName={s.overlay}
      >
        <Slider className={s.slider} {...settings}>
          {comments.map((comment, index) => (
            <div key={index}>
              <div className={s.commentSlide}>
                <div className={s.commentInfo}>
                  <h4 className={s.commentName}>{comment.name}</h4>
                  <p className={s.commentDate}>{comment.date}</p>
                </div>
                <div className={s.commentBox}>
                  <p className={s.commentText}>{comment.comment}</p>
                </div>
                <div className={s.commentFooter}>
                  <p className={s.commentConfirm}>Пiдтверджено грою</p>
                  <p className={s.commentTop}>
                    Вiдмiтка:
                    <span className={s.commentSpan}>{comment.grade}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Modal>

      <Modal
        isOpen={modalType === 'other'}
        onRequestClose={closeModal}
        contentLabel="Other Modal"
        className={s.modal}
        overlayClassName={s.overlay}
      >
       <Slider {...settings} className={s.slider}>
        {videoList.map((video, index) => (
          <div key={index}>
            <iframe
              className={s.video}
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube video ${index}`}
            />
          </div>
        ))}
        </Slider>
      </Modal>
    </div>
  );
}