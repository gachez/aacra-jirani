import React, {Component} from 'react'
import Navbar from '../components/Navbar';
import icon_facebook from '../img/icons_facebook_white.png'
import icon_twitter from '../img/icons_twitter_white.png'
import icon_instagram from '../img/icons_instagram_white.png'
import icon_linkedin from '../img/icons_linkedin_white.png'
import Footer from '../components/Footer';


class Contact extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                
                {/* page title */}
                <p style={{
                      position: 'absolute',
                      top: '22.7%',
                      left:'9.5%',
                      height: '35px',
                      fontFamily: 'Ubuntu',
                      fontSize: '30px',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontStretch: 'normal',
                      lineHeight: 'normal',
                      letterSpacing: 'normal',
                      color: '#373a3c'
                }}>Feel free to reach out</p>

                <p style={{
                    position: 'absolute',
                    top: '40.3%',
                    left: '9.5%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.17,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>
                    Email address
                </p>

                <p style={{
                    position: 'absolute',
                    top: '44%',
                    left: '9.5%',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.35,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                  
                }}>info@ckr.za</p>


                
        {/* the footer */}
        <div style={{position: 'absolute', bottom: 0, width: '100%', height: 'auto'}}>
        <Footer />

        </div>

            </div>
        )
    }
}

export default Contact;