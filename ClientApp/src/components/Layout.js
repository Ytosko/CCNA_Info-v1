import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { footer } from './footer';
import './NavMenu.css';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"/>
                <NavMenu />
                <Container>
                    {this.props.children}
                </Container>
                <footer id="footer">
                    <div class="footer-top">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-3 footer-about wow fadeInUp animated" styles="visibility: visible; animation-name: fadeInUp;">
                                    <h3>About CCNA Info v1</h3>
                                    <br />
                                    <p>
                                        This website is createb by Saiki sarkar for deliver you your CCNA password with full privicy.
		        			        </p>
                                    <p>Ytosko Inc.</p>
                                </div>
                                <div class="col-md-4 offset-md-1 footer-contact wow fadeInDown animated" styles="visibility: visible; animation-name: fadeInDown;">
                                    <h3>Contact</h3>
                                    <br />
                                    <p><i class="fa fa-id-badge" aria-hidden="true"></i> Saiki Sarkar</p>
                                    <p><i class="fa fa-phone" aria-hidden="true"></i> Phone: (880) 1715 319802</p>
                                    <p><i class="fa fa-envelope" aria-hidden="true"></i> Email: <a href="mailto:ytosko@hotmail.com">ytosko@hotmail.com</a></p>
                                    <p><i class="fa fa-skype" aria-hidden="true"></i> Skype: ytosko</p>
                                </div>
                                <div class="col-md-4 footer-links wow fadeInUp animated" styles="visibility: visible; animation-name: fadeInUp;">
                                    <div class="row">
                                        <div class="col">
                                            <h3>Ask for help</h3>
                                        </div>
                                    </div>
                                    <br />
                                    <div class="row">
                                       
                                        <div class="col-md-6">
                                            <p><span class="fa fa-facebook-square"/> <a class="scroll-link" href="https://fb.com/ytosko">Saiki Sarkar</a></p>
                                            <p><i class="fa fa-twitter-square" aria-hidden="true"></i> <a href="https://twitter.com/Yes2Sk0">Saiki Sarkar</a></p>
                                            <p><i class="fa fa-whatsapp" aria-hidden="true"></i> <a href="https://wa.me/8801715319802">Saiki Sarkar</a></p>
                                            <p><i class="fa fa-skype" aria-hidden="true"></i> <a href="skype:ytosko?chat">Saiki Sarkar</a></p>
                                        </div>
                                        <div class="col-md-6">
                                            <p><i class="fa fa-telegram" aria-hidden="true"></i> <a href="https://t.me/Ytosko">Saiki Sarkar</a></p>
                                            <p><i class="fa fa-user" aria-hidden="true"></i> <a href="https://sites.google.com/view/ytosko">Saiki Sarkar</a></p>
                                            <p><i class="fa fa-video-camera" aria-hidden="true"></i> <a href="https://zoom.us/j/96697727352?pwd=WTRKeDg2Tm9vT1ZFRlZBZU1sWGFkQT09">Saiki Sarkars</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
