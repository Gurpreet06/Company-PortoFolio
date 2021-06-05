import React from 'react';
import logo1 from './images/pricing/free.svg'
import logo2 from './images/pricing/200.svg'
import logo3 from './images/pricing/100.svg'
import logo4 from './images/pricing/famiily.svg'


class Pricing extends React.Component {
    render() {
        return (
            <div className='auto-center'>
                <section className="pricing">
                    <div className="offerText">
                        <h2> <a href='/index.html' className="flexText">Flexible</a> Plans</h2>
                        <p className="offerP">Choose a plan that works best for your project.</p>
                    </div>
                    <div className="repairOf">
                        <div className="wrapper">
                            <div className="side-info repairOffer">
                                <div className="infOffer">
                                    <div className="NamePrice">
                                        <img className="fotosImg" src={logo1} width="46%" alt='logo' />
                                        <span>15 GB</span>
                                        <p>Free</p>
                                    </div>
                                    <p className='ofertasRepair'>Inclued</p>
                                    <ul>
                                        <li>
                                            <p>15 GB free space</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="side-info repairOffer coldif">
                                <div className="infOffer">
                                    <div className="NamePrice">
                                        <img className="fotosImg" src={logo2} width="46%" alt='logo' />
                                        <span>200 GB</span>
                                        <p>40€/month</p>
                                    </div>
                                    <p className='ofertasRepair'> Inclued</p>
                                    <ul>
                                        <li>
                                            <p>200 GB of space</p>
                                        </li>
                                        <li>
                                            <p>Help of our experts</p>
                                        </li>
                                        <li>
                                            <p>Option to add family members</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="side-info repairOffer">
                                <div className="infOffer">
                                    <div className="NamePrice">
                                        <img className="fotosImg" src={logo3} width="46%" alt='logo' />
                                        <span>100 GB</span>
                                        <p>20€/month</p>
                                    </div>
                                    <p className='ofertasRepair'> Inclued</p>
                                    <ul>
                                        <li>
                                            <p>100 GB of space</p>
                                        </li>
                                        <li>
                                            <p>Help of our experts</p>
                                        </li>
                                        <li>
                                            <p>Option to add family members</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="family-pack">
                            <div className="offerText">
                                <h2> <a href='/index.html' className="flexText">We even </a> offer you More.</h2>
                                <p className="offerP">More space, and access to direct our experts and much more, <br /> all in a
                            family pack.</p>
                            </div>

                            <div className="packs">
                                <div className="packs-div">
                                    <img src={logo4} width="40%" alt='logo' />
                                    <div>
                                        <h4>Space to create</h4>
                                        <p>Change your plan to save anything at any moment.</p>
                                    </div>
                                </div>

                                <div className="packs-div">
                                    <img src={logo4} width="40%" alt='logo' />
                                    <div>
                                        <h4>Space to create</h4>
                                        <p>Change your plan to save anything at any moment.</p>
                                    </div>
                                </div>


                                <div className="packs-div">
                                    <img src={logo4} width="40%" alt='logo' />
                                    <div>
                                        <h4>Space to create</h4>
                                        <p>Change your plan to save anything at any moment.</p>
                                    </div>
                                </div>
                                <div className="packs-div">
                                    <img src={logo4} width="40%" alt='logo' />
                                    <div>
                                        <h4>Space to create</h4>
                                        <p>Change your plan to save anything at any moment.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ContactBtn">
                            <a href='/index.html'><input type="submit" value="Contact Us" className="mid-btn" /></a> </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Pricing;