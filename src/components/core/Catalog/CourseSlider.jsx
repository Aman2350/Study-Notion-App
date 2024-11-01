import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import Course_Card from './Course_Card'

function CourseSlider({ Courses }) {
    return (
        <>
            {
                Courses?.length ? (
                    <Swiper
                        loop={true}
                        slidesPerView={1}
                        spaceBetween={25}
                        modules={[Pagination, Autoplay]}
                        pagination={true}
                        className='mySwiper'
                        autoplay={
                            {
                                delay: 2500,
                                disableOnInteraction: false
                            }
                        }
                        breakpoints={{
                            1024: {
                                slidesPerView: 3,
                            },
                        }}


                    >
                        {
                            Courses?.map((course, index) => (
                                <SwiperSlide key={index}>
                                    <Course_Card course={course} Height={"h-[250px]"}>
                                    </Course_Card>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper >
                ) : (
                    <p className="text-xl text-richblack-5">No Course Found</p>
                )
            }
        </>
    )
}

export default CourseSlider