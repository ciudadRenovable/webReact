import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { AutoPlay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './carouselProjects.css';


export const CarouselProjects = () => {
  return (
    <>

      <div className='flex flex flex-col lg:flex-row gap-5 flex-wrap md:flex-nowrap'>
        <div className="card">
          <img src="/images/projects/tiendasAra.png" alt="" />
          <h2>Tiendas ARA</h2>
        </div>
        <div className="card">
          <img src="/images/projects/tronexVitelsa.png" alt="" />
          <h2>Tronex Vitelsa</h2>
        </div>
        <div className="card">
          <img src="/images/projects/yokoMotor.png" alt="" />
          <h2>Yokomotor</h2>
        </div>
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={true}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <img src="./images/project.png" alt="" />
            <h2>Proyecto 01</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor.
            </p>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </>
  )
} 