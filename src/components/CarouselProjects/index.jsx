import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// import { AutoPlay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import './carouselProjects.css';


export const CarouselProjects = () => {
  return (
    <div className='flex flex flex-col lg:flex-row gap-5 flex-wrap md:flex-nowrap'>
      <a className="card" href='/proyectos/Mundial%20Granos%20y%20Panelas'>
        <img src="https://i.postimg.cc/524r936k/Mundial-Gy-P1-29-11zon.webp" style={{ borderRadius: '20px' }} alt="proyecto" />
        <div className='info_type_project'>
          Industrial
        </div>
        <h2>Mundial Granos y Panelas</h2>
      </a>
      <a className="card" href='/proyectos/Tronex'>
        <img src="/images/projects/tronexVitelsa.png" alt="proyecto" />
        <div className='info_type_project'>
          Industrial
        </div>
        <h2>Tronex Vitelsa</h2>
      </a>
      <a className="card" href='/proyectos/Yokomotor'>
        <img src="/images/projects/yokoMotor.png" alt="proyecto" />
        <div className='info_type_project'>
          Industrial
        </div>
        <h2>Yokomotor</h2>
      </a>
    </div>
  )
}