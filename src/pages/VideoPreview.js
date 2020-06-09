import React from 'react'
import cancel from '../img/buttons_cancel.png'
import orangeback from '../img/orangeback.png'
import back from '../img/buttons_back.svg'
import next from '../img/next.png'
import {Link} from 'react-router-dom'

import leftwhite from '../img/icons_left.png'
import rightwhite from '../img/icons_right.png'
import downloadicon from '../img/icons_download.png'
import download from '../img/download_text.png'
import max from '../img/icons_maximize.png'



export default class VideoPreview extends React.Component{
    state={
        btnImg: next
    }
    render(){
        return(
            <div>
                                  {/* top bar on page */}
                                  <div style={{
                          width: '100%',
                          height: '95px',
                          boxShadow: '0 3px 5px 0 rgba(0, 0, 0, 0.15)',
                          backgroundColor:' #ffffff'
                    }}>

                    <p style={{
                        position:'absolute',
                        left: '3.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Type</p>
                    
                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '6.6%',
                        top: '54px',                            
                          width: '40px',
                          height: '1px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

{/* tags tag                     */}
<p style={{
                        position:'absolute',
                        left: '10.2%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 700,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c'                    }}>Tags</p>
                    


                        {/* separation line */}
                        <div style={{
                        position: 'absolute',
                        left: '13%',
                        top: '54px',                            
                          width: '40px',
                          height: '1px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

                    <p style={{
                        position:'absolute',
                        left: '16.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c' 
                    }}> Content</p>

                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '21.1%',
                        top: '54px',                            
                          width: '40px',
                          height: '1.5px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>
 
<p style={{
                        position:'absolute',
                        left: '24.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#373a3c' 
                    }}> Preview</p>
                    
                    
                    {/* separation line */}
                    <div style={{
                        position: 'absolute',
                        left: '29.1%',
                        top: '54px',                            
                          width: '40px',
                          height: '1.5px',
                          backgroundColor:' #8d8d8d'
                        
                    }}></div>

<p style={{
                        position:'absolute',
                        left: '32.7%',
                         fontFamily: 'Ubuntu',
                         fontSize: '13px',
                         paddingTop: '25px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing: 'normal',
                         color: '#8d8d8d' 
                    }}> Upload</p>

                {/* cancel icon */}
                  <Link to={"/cancel-confirmation"}>
                  <img src={cancel} style={{
                        position: 'absolute',
                        left: '67.8%',
                        paddingTop: '28px'
                    }}/>

                  </Link> 
                    {/* separator line vertical */}
                    <div style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor:'black',
                        position: 'absolute',
                        left: '77%',
                        top: '35px'
                    }}></div>

                    {/* back button burnt */}
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px'
                    }}/>

                <Link to={"/video-content-upload"}>
                <img  src={this.state.btnImg} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px'
                    }}/>
                </Link>
                   

                    </div>
                    {/* top bar ends here */}

                    {/* back button */}
                    <img src={back} style={{
                        position: 'absolute',
                        top: '25.7%',
                        left: '3.7%'
                    }}/>

                    {/* page title here */}
                    <p style={{
                        position: 'absolute',
                        top: '20.25%',
                        left: '13%',
                         fontFamily: 'Ubuntu',
                         fontSize: '30px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 'normal',
                         letterSpacing:' normal',
                         color: '#000000'
                    }}>{localStorage.getItem('title')}</p>

                    
                        {/* synopsis title */}
                        <p style={{
                            position: 'absolute',
                            top: '33%',
                            left: '13%',
                              fontFamily: 'Ubuntu',
                              fontSize: '18px',
                              fontWeight: 700,
                              fontStyle: 'normal',
                              fontStretch: 'normal',
                              lineHeight: 1.17,
                              letterSpacing: 'normal',
                              color: 'var(--charcoal-grey)'
                        }}>Description</p>

                        <p style={{
                            position:'absolute',
                            top: '37%',
                            left: '13%',
                            width: '73.5%',
                            height: '96px',
                            fontFamily: 'Ubuntu',
                            fontSize: '18px',
                            fontWeight: 100,
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.35,
                            letterSpacing: 'normal',
                            color: 'var(--charcoal-grey)'
                          
                        }}>
                        {localStorage.getItem('description')}
                        </p>


                {/* video */}
               
                <iframe
                style={{
                    position: 'absolute',
                    top:'65%',
                    left: '13.4%',
                    backgroundColor: 'black',
                    marginBottom: '200px'
                  
                }} 
                width="72%" 
                height="550px" 
                src={localStorage.getItem('url')} 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>

                </iframe>
     
                        </div>
            
        )
    }
}
