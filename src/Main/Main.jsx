import './Main.scss'
import imgs from './Main_assets/IMAGE.png'
import fotka from './Main_assets/fotka.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation,  A11y, Mousewheel, Autoplay } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import img from './Main_assets/img.png'
import img2 from './Main_assets/img2.png'
import img3 from './Main_assets/img3.png'
import img4 from './Main_assets/img4.png'
import img5 from './Main_assets/img5.png'
import img6 from './Main_assets/img6.png'

export default function Main(){
    return(
        <>
            <main>
                <section className='background1'>
                    <img src={imgs} alt="" />
                </section>
                <section className='background3'>
                    <Swiper   Swiper className='img-slider' modules={[Navigation, A11y, Mousewheel, Autoplay]} loop={true}  speed={1200} autoplay={{enabled: true, delay: 0, disableOnInteraction: false}} spaceBetween={50} slidesPerView={4.5}  mousewheel = {{clickable:true}}>
                        <SwiperSlide>
                            <img src={img} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img4} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img5} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={img6} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className='background2'>
                    <div>
                        <div>
                            <h2>Your finances in sync</h2>
                            <p>gini syncs spreadsheets with Xero & Quickbooks so founders, finance teams, accountants and investors stay in financial harmony.</p>
                        </div>
                        <img src={fotka} alt="" />
                    </div>
                </section>
            </main>
        </>
    )
}