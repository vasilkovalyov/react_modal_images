import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss'
import './SwiperComponent.scss'

export default function SimpleSwiperWithParams(props){
    const params = {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next ',
            prevEl: '.swiper-button-prev '
        },
    renderPrevButton: () => <button className="swiper-button-prev swiper-button">{'<'}</button>,
    renderNextButton: () => <button className="swiper-button-next swiper-button">{'>'}</button>,
        spaceBetween: 30
    }

    return(
        <div className="slider">
            <Swiper {...params}>
                {
                    props.slides.map((item,i) => (
                        <div key={i} className="slide">
                            <div className="image-holder">
                                <img src={item} alt=""/>
                            </div>
                        </div>
                    ))
                }
            </Swiper>
        </div>
    )
}