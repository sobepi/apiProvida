import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './provida.css';

const Example = () => {
    const images = [
        "/img/1.jpg",
        "/img/2.jpg",
        "/img/3.jpg",
        "/img/4.jpg",
        "/img/5.jpg",
        "/img/6.jpg",
        "/img/7.jpg",
        "/img/8.jpg",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Voluntários</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Meninos do projeto</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Atividades ludiacas</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[3]})` }}>
                    <span>Brincadeiras</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[4]})` }}>
                    <span>Encontro com a Comunidade</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[5]})` }}>
                    <span>Eventos</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[6]})` }}>
                    <span>Natal 2017</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[7]})` }}>
                    <span>Pedagogas Lidiane e Wanessa</span>
                </div>
            </div>
        </Slide>
    );
};

export default Example;

/*
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'img/1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'img/2.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'img/3.jpg',
    caption: 'Slide 3'
  },
  {
    url: 'img/4.jpg',
    caption: 'Slide 4'
  },
  {
    url: 'img/5.jpg',
    caption: 'Slide 5'
  },
  {
    url: 'img/6.jpg',
    caption: 'Slide 6'
  },
  {
    url: 'img/7.jpg',
    caption: 'Slide 7'
  },
  {
    url: 'img/8.jpg',
    caption: 'Slide 8'
  },
];

const Slideshow = () => {
    return (
      <div className="each-slide-effect">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow*/