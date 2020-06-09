import React from 'react'
import yes from '../img/yes.png'
import no from '../img/no.png'
import {Link} from 'react-router-dom'



export default class CancelConfirmation extends React.Component{
    
    render(){
        return(
            <div>
        <p style={{
            position: 'absolute',
            top: '29.4%',
            left: '29.1%',
            fontFamily: 'Ubuntu',
            fontSize: '30px',
            fontWeight: 600,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 'normal',
            letterSpacing: 'normal',
            color: '#000000'
        }}>Are you sure you want to cancel this upload?</p>

        <p style={{
            fontFamily: 'Ubuntu',
            fontSize: '18px',
            fontWeight: 500,
            fontStyle: 'normal',
            fontStretch: 'normal',
            lineHeight: 1.17,
            letterSpacing: 'normal',
            color: '#000000',
            position: 'absolute',
            top:'40.2%',
            left: '36.4%'
        }}> You will not be able to recover your content.</p>

            {/* buttons section  */}
            <Link to={"/"}>
            <img  src={yes} style={{
                position: 'absolute',
                top: '52%',
                left: '48.5%'
            }} />
            
            </Link>

            <Link to={"/"}>
            <img src={no} style={{
                position: 'absolute',
                top: '52%',
                left: '41%'
            }}/>
            
            </Link>
                    </div>
        )
    }
}