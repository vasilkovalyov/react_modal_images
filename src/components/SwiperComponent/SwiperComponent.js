import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/swiper.scss'

export default function SimpleSwiperWithParams(props){
    const params = {
        spaceBetween: 30
    }

    return(
        <Swiper {...params}>
            {
                props.slides.map((item,i) => (
                    <div key={i} className="slide">
                        <div className="image-holder">
                            <img src={item.urls.small} alt=""/>
                        </div>
                    </div>
                ))
            }
        </Swiper>
    )
}