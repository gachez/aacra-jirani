import React, {Component} from 'react'
import Navbar from '../components/Navbar';
import mastercard from '../img/mastercard.svg'
import paypal from '../img/paypal.png'
import visa from '../img/visa.svg'
import '../styles/Donate.css'
import icon_facebook from '../img/icons_facebook_white.png'
import icon_twitter from '../img/icons_twitter_white.png'
import icon_instagram from '../img/icons_instagram_white.png'
import icon_linkedin from '../img/icons_linkedin_white.png'
import Footer from '../components/Footer';


class Donate extends Component{
    render(){
        return(
            <div>
                <Navbar />
                
                {/* page title */}
                <p id="page-title">Donate</p>

                {/* copy writing paragraph */}
                <p id="copy-write" >Creative Knowledge Resources is a proud, non-profit organization. We rely on people like you to keep this website up and running. Any amount donated will be highly appreciated. 
                <br /><br />
                Should you wish to donate, please select your preffered payment option. Should you have any questions, feel free to <strong>contact us.</strong></p>

                {/* visa icon */}
                <img id="visa" src={visa} onClick={() => { window.location.href = "https://www.visa.co.ke/"}} />

                {/* mastercard icon */}
                <img id="mastercard" src={mastercard} onClick={() => { window.location.href = "https://www.mastercard.us/en-us.html"}} />

                {/* paypal icon */}
                <img id="paypal" src={paypal} onClick={() => { window.location.href = "https://www.paypal.com/"}} />

         <br />
        

{/* the footer */}
<div style={{position: 'absolute', bottom: 0, width: '100%', height: 'auto'}}>
<Footer />

</div>

            </div>
        )
    }
}

export default Donate;