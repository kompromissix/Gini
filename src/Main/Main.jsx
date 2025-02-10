import './Main.scss';
import { useState, useRef } from "react";
import imgs from './Main_assets/IMAGE.png';
import fotka from './Main_assets/fotka.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import img from './Main_assets/img.png';
import img2 from './Main_assets/img2.png';
import img3 from './Main_assets/img3.png';
import img4 from './Main_assets/img4.png';
import img5 from './Main_assets/img5.png';
import img6 from './Main_assets/img6.png';
import { tabs } from './data';
import { ways } from './datajs';
import { albom } from './human';
import { wayss } from './Analysis';
import xxx from './Main_assets/sxx.png'
import icon1 from './Main_assets/icon1.png'
import icon2 from './Main_assets/icon2.png'
import icon3 from './Main_assets/icon3.png'
import icon4 from './Main_assets/icon4.png'
import icon5 from './Main_assets/icon5.png'
import human1 from './Main_assets/human1.png'
import human2 from './Main_assets/human2.png'
import human3 from './Main_assets/human3.png'

export default function Main() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
        }
    };

    return (
        <>
            <main>
                <section className='background1'>
                    <img src={imgs} alt="" />
                </section>

                <section className='background3'>
                    <Swiper className='img-slider' modules={[Navigation, A11y, Mousewheel, Autoplay]} loop={true} speed={1200} autoplay={{ enabled: true, delay: 0, disableOnInteraction: false }} spaceBetween={50} slidesPerView={4.5} mousewheel={{ clickable: true }}>
                        {[img, img2, img3, img4, img5, img6].map((image, index) => (
                            <SwiperSlide key={index}>
                                <img src={image} alt="" />
                            </SwiperSlide>
                        ))}
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

                <section className='background4'>
                    <div>
                        <h2>The flexibility of spreadsheets. <br />The power of automation.</h2>
                        <div className="tabs">
                            {tabs.map((tab, index) => (
                                <div key={tab.id} className={`tab ${activeIndex === index ? "active" : ""}`} onClick={() => handleTabClick(index)} >
                                {tab.label}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Swiper className='img-slider' modules={[Navigation, A11y, Mousewheel, Autoplay]} onSwiper={(swiper) => (swiperRef.current = swiper)} onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} loop={true} spaceBetween={50} slidesPerView={1} mousewheel={{ clickable: true }} >
                                {ways.map((tab, index) => (
                                    <SwiperSlide key={tab.id}>
                                        <div className='ways'>
                                            <div>
                                                <div>
                                                    <h4>{tab.h4}</h4>
                                                    <h3>{tab.h3}</h3>
                                                    <p>{tab.p}</p>
                                                    <h4>Try for free</h4>
                                                </div>
                                            </div>
                                            <img src={tab.img} alt={tab.h3} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>

                </section>
                <section className='background5'>
                    <div>
                        <h2>Join 700 companies that save time with gini</h2>
                        <div>
                            <Swiper className='img-slider' modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]} spaceBetween={50} slidesPerView={2.2} loop={true} mousewheel={{ clickable: true }}>
                                {albom.map((albom, index) =>(
                                    <SwiperSlide key={albom.id}>
                                        <div className='albom'>
                                            <div>
                                                <div>
                                                    <img src={albom.img} alt="" />
                                                    <div>
                                                        <h4>{albom.h4}</h4>
                                                        <p>{albom.p}</p>
                                                    </div>
                                        
                                                </div>
                                                <h3>{albom.h3}</h3>
                                                <p>{albom.p2}</p>
                                            </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    
                </section>
                <section className='background6'>
                    <div>
                        <h2>How to forecast business finances with gini</h2>
                        <div>
                            {wayss.map((wayss, index) =>(
                                <div key={wayss.id} className='wayss'>
                                    <img src={wayss.img} alt="" />  
                                    <h3>{wayss.h3}</h3>
                                    <p>{wayss.p}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='background7'>
                    <div>
                        <h2>Automated flows and templates for Google Sheets</h2>
                        <div className='yello_green'>
                            <p>I want to...</p>
                        </div>
                        <div className='slid'>
                            <div>
                                <div>
                                    <img src={icon1} alt="" />
                                    <p>Automate your profit & loss reporting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon2} alt="" />
                                    <p>Automate your profit & loss reporting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon3} alt="" />
                                    <p>Automate your profit & loss reporting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon4} alt="" />
                                    <p>Automate your profit & loss reporting</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={icon5} alt="" />
                                    <p>Automate your profit & loss reporting</p>
                                </div>
                            </div>
                        </div>
                        <h3>See more models and reports</h3>
                        <img src={xxx} alt="" />
                    </div>
                </section>
                <section className='background8'>
                    <div>
                       <h2>Recent articles and resources</h2>
                       <div>
                            <div>
                                <div>
                                    <img src={human1} alt="" />
                                    <h4>EPM vs. ERP: Optimize your account and finance operations</h4>
                                    <div>
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={human2} alt="" />
                                    <h4>Understanding actual budget and variance</h4>
                                    <div>
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={human3} alt="" />
                                    <h4>Top 19 small business tools that you need in 2023</h4>
                                    <div>
                                        <p>Read more</p>
                                    </div>
                                </div>
                            </div>
                       </div>
                    </div>
                </section>
            </main>
        </>
    );
}