import './Footer.scss'
import logo from './Footer_assets/logo.png'
import icon from './Footer_assets/logo2.png'
import icon2 from './Footer_assets/logo3.png'
import icon3 from './Footer_assets/logo4.png'

export default function Footer(){
    return(
        <>
            <footer>
                <div>
                    <div className='footer_left'>
                        <img src={logo} alt="" />
                        <div>
                            <p>Copyright © 2023 gini</p>
                            <div>
                                <img src={icon} alt="" />
                                <img src={icon2} alt="" />
                                <img src={icon3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='footer_mid_left'>
                        <h4>Learn</h4>
                        <p>Pricing</p>
                        <p>Blog</p>
                        <p>Schedule a demo</p>
                        <p>Help Center</p>
                    </div>
                    <div className='footer_mid_right'>
                        <h4>Our company</h4>
                        <p>Privacy Policy</p>
                        <p>User Terms</p>
                        <p>Careers</p>
                    </div>
                    <div className='footer_right'>
                        <h4>Get in touch</h4>
                        <p>Contact us</p>
                        <div>
                            <h5>US: +1 512 380 1008</h5>
                            <h5>AU: +61 03 7036 8558</h5>
                            <h5>NZ: +64 9 888 8606</h5>
                        </div>
                        <h5>predict.help@gini.co</h5>
                    </div>
                </div>
            </footer>
        </>
    )
}