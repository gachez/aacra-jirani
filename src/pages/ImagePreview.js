import React from 'react';
import cancel from '../img/buttons_cancel.png';
import orangeback from '../img/orangeback.png';
import back from '../img/buttons_back.svg';
import next from '../img/next.png';
import {Link} from 'react-router-dom';


export default class ImagePreview extends React.Component{
    state={
        btnImg: next
    }
    render(){
        const title = localStorage.getItem('title')
        const body = localStorage.getItem('body')
        const image = localStorage.getItem('image')
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
                    <Link to={"/add-image-content"}>
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    
                <Link to={"/image-content-upload"}>
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
                    }}>{title}</p>

                    {/* paragraph section */}
                    <p style={{
                        position: 'absolute',
                        top: '30.5%',
                        left: '13%',
                         width: '73.2%',
                         height: '96px',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.35,
                         letterSpacing: 'normal',
                         color: '#000000'
                    }}> {body}</p>

                        {/* images section */}
                        <section id="images-container">
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left:'13%',
                              width: '73.2%',
                              height: '550px',
                              backgroundImage: `url(${image})`,
                              backgroundRepeat: 'no-repeat',
                              backgroundSize: 'cover'
                        }}></div>

<div style={{
                            position: 'absolute',
                            top: '125%',
                            left:'13%',
                              width: '73.2%',
                              height: '550px',
                              background: 'grey'
                        }}></div>

                        </section>

                        {/* comment section */}
                        <div style={{
                            position: 'absolute',
                            top: '205%',
                            left: '13%',
                              width: '73.2%',
                              height: '459px',
                              boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.25)',
                              backgroundColor: '#ffffff'
                        }}>

                        {/* comment box */}
                        <input style={{
                            position: 'absolute',
                            top: '10.9%',
                            left: '7.5%',
                            width: '85%',
                            height: '175px',
                            border: 'solid 1px #373a3c'
                        }}/>


                       <button style={{
                           position:'absolute',
                           left: '83.5%',
                           top: '53.4%',
                           border: 'none',
                           width: '100px',
                           height: '40px',
                           backgroundColor: '#ff8d80',
                           fontFamily: 'Ubuntu',
                           fontSize: '14px',
                           fontWeight: 500,
                           fontStyle: 'normal',
                           fontStretch: 'normal',
                           lineHeight: 'normal',
                           letterSpacing: '-0.14px',
                           color: '#ffffff'
                       }}>POST</button>     
                        </div>
            </div>
        )
    }
}