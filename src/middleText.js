import React from 'react';
import logo from './images/middle-ware/drive.svg'

class middleText extends React.Component {
    render() {
        return (
            <div className='auto-center'>
                <section className="middle-ware">
                    <div>
                        <div className="logo-name">
                            <h1>Easily manage projects in the company.</h1>
                        </div>
                        <p className="paragrah">A dedicated application for sharing files and folders between employees in your
                    company.</p>
                        <button className="mid-btn">
                            <ion-icon name="cloud-download-outline" className='hpña'></ion-icon>Download Now
                </button>
                    </div>

                    <div className="middleImg">
                        <img src={logo} width="60%" alt='logo' />
                    </div>
                </section>

                <section className="services">
                    <div className="servicesV1">
                        <ion-icon name="checkmark-outline" className="services-icon"></ion-icon>
                        <div className="servicesv2">
                            <h5>Free to use</h5>
                            <p>Available for download in the store</p>
                        </div>
                    </div>

                    <div className="servicesV1">
                        <ion-icon name="checkmark-outline" className="services-icon"></ion-icon>
                        <div className="servicesv2">
                            <h5>Free to use</h5>
                            <p>Available for download in the store</p>
                        </div>
                    </div>


                    <div className="servicesV1">
                        <ion-icon name="checkmark-outline" className="services-icon"></ion-icon>
                        <div className="servicesv2">
                            <h5>Free to use</h5>
                            <p>Available for download in the store</p>
                        </div>
                    </div>

                    <div className="servicesV1">
                        <ion-icon name="checkmark-outline" className="services-icon"></ion-icon>
                        <div className="servicesv2">
                            <h5>Free to use</h5>
                            <p>Available for download in the store</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default middleText;