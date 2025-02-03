import './Header.scss'
import logo from './Header_assets/IMAGE.png'

export default function Header(){
    return(
        <>
            <header>
                <nav>
                    <div>
                        <img src={logo} alt="" />
                        <div>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>Resources</p>
                            <div className='div_yellow'>
                                <p>Log in</p>
                            </div>
                            <div className='div_black'> 
                                <p>Try for free</p>
                            </div>
                        </div>
                    </div>
                </nav>
                <div>
                    <h1>Financial Automation for Startups and SMEs</h1>
                    <h2>A single platform to automate your book-keeping, reporting and forecasting.</h2>
                    <div>
                        <p>Try for free</p>
                    </div>
                    <p>No credit card required. Full feature access.</p>
                </div>
            </header>
        </>
    )
}