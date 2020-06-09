import React from 'react'
import home  from '../img/home.png'
import {Link} from 'react-router-dom'


export default class UploadSuccesful extends React.Component{
    render(){
        return(
            <div>
                <p style={{
                    position: 'absolute',
                    top: '37.6%',
                    left: '31.5%',
                     fontFamily:' Ubuntu',
                     fontSize: '30px',
                     fontWeight: 600,
                     fontStyle: 'normal',
                     fontStretch: 'normal',
                     lineHeight: 'normal',
                     letterSpacing: 'normal',
                     color: '#000000'
                }}>

                    Content has been uploaded successfully
                </p>
<Link to={"/"}>
<img src={home} style={{
                    position: 'absolute',
                    top: '52.5%',
                    left: '46.5%'
                }}/>
 
</Link>
            </div>
        )
    }
}