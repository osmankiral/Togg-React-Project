import React from 'react'
import styles from './Find.module.css'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import Card from './Card'


const Find = () => {
  return (
    <div className={styles.find}>
        <div className={styles.heading}>
            <h1>Find your color</h1>
            <div className={styles.text_bg}>
                <p>
                    <span>Explore the Turkey's electric car</span>
                </p>
            </div>
        </div>
        <div className={styles.slider_container}>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={5}
                navigation
                breakpoints={{
                    340: {
                        width: 200,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 1,
                    },
                    1040: {
                        width: 1040,
                        slidesPerView: 3,
                    },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Card image='https://arabam-blog.mncdn.com/wp-content/uploads/2022/10/Anadolu.png' make='Anadolu'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://arabam-blog.mncdn.com/wp-content/uploads/2022/10/gemlik.jpg' make='Gemlik'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://arabam-blog.mncdn.com/wp-content/uploads/2022/10/oltu.png' make='Oltu'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://arabam-blog.mncdn.com/wp-content/uploads/2022/10/kula.jpg' make='Kula'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://arabam-blog.mncdn.com/wp-content/uploads/2022/10/kapadokya.png' make='Kapadokya'/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card image='https://im.haberturk.com/2022/10/29/3534062_1627da909035ce10e63820e00963275e_640x640.jpg' make='Pamukkale'/>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  )
}

export default Find