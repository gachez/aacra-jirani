import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import buttons_cancel from '../img/buttons_cancel.png';
import buttons_normal from '../img/buttons_normal.png';
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';

class UploadPin extends Component{
    render(){
        return(
            <React.Fragment>

                <Navbar />
                
                {/* page title */}
                <p style={{
                    position: 'absolute',
                    top: '23.1%',
                    left: '46.4%',
                    fontFamily: 'Ubuntu',
                    fontSize: '30px',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 'normal',
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>Upload</p>

                 {/* description on the upload page */}
                 <p style={{
                    position: 'absolute',
                    top: '34.3%',
                    left: '27.7%',
                    width: '45.7%',
                    height: '96px',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',                   
                    letterSpacing: 'normal',
                    color: '#373a3c',
                    fontStretch: 'normal',
                    lineHeight: '30px'
                }}>

                To upload content to this website, you need to be granted access through a one-time &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; link sent by the admin. 
<br /><br /> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;
To request for the link, please contact the admin 
                </p>

               <br /><br /><br />
               <div style={{position: 'absolute', bottom: 0, width: '100%', height: 'auto'}}>
<Footer />

</div> 
            </React.Fragment>
        )
    }
}

export default UploadPin;
