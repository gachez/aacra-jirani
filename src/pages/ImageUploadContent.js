import React from 'react';
import preview from '../img/preview.png';
import upload from '../img/upload.png';
import {Link} from 'react-router-dom';
import next from '../img/next-button.png';
import Navbar from '../components/NavbarUpload';
import cancel from '../img/buttons_cancel.png';

import orangeback from '../img/orangeback.png';


export default class ImageContentUpload extends React.Component{
    state={
        token: '',
        imageObject: {}
    }


    render(){
        const token = localStorage.getItem('token')
        const title = localStorage.getItem('title')
        const category = localStorage.getItem('category')
        const year = localStorage.getItem('year')

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
                         color: '#373a3c'  }}>Tags</p>
                    


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
                         color: '#373a3c' 
                    }}> Upload</p>

                {/* cancel icon */}
                    <Link to={"/cancel-confirmation"}>
                    <img src={cancel} style={{
                        position: 'absolute',
                        left: '77.9%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    {/* separator line vertical */}
                    <div style={{
                        width: '1px',
                        height: '40px',
                        backgroundColor:'black',
                        position: 'absolute',
                        left: '86.5%',
                        top: '35px'
                    }}></div>

                    {/* back button burnt */}
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px'
                    }}/>


                

                    </div>
                    {/* top bar ends here */}

                    {/* page title */}
                   <div style={{
                       position: 'absolute',
                       top: '25%',
                       width: '100%',
                       textAlign: 'center'
                   }}>
                   <p style={{
                      
                        display: 'inline-block',
                        fontFamily:' Ubuntu',
                        fontSize: '30px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>{title}</p>

                       </div> 
                    {/* type title goes here */}
                   
                    <div style={{
                       position: 'absolute',
                       top: '35%',
                       width: '100%',
                       textAlign: 'center'

                    }}>
                    <p style={{
                        display: 'inline-block',
                        fontFamily: 'Ubuntu',
                        fontSize: '18px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.17,
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>Type</p>

                    </div>
                    
                    {/* the type of imagery goes here */}
                   <div style={{
                       position: 'absolute',
                       top: '39.5%',
                       textAlign: 'center',
                       width: '100%'
                   }}>
                   <p style={{
                          display: 'inline-block',
                          fontFamily: 'Ubuntu',
                          fontSize: '18px',
                          fontWeight: 300,
                          fontStyle: 'normal',
                          fontStretch: 'normal',
                          lineHeight: 1.35,
                          letterSpacing: 'normal',
                          color: '#373a3c'
                    }}>Contemporary African Art</p>

                   </div>
                    
                   <div style={{
                        position:'absolute',
                        width: '100%',
                        top: '49%',
                        textAlign: 'center'
                   }}> 
                   <p style={{
                         display: 'inline-block',
                         fontFamily: 'Ubuntu',
                         fontSize: '18px',
                         fontWeight: 600,
                         fontStyle: 'normal',
                         fontStretch: 'normal',
                         lineHeight: 1.17,
                         letterSpacing: 'normal',
                         color: '#373a3c'
                    }}>Category</p>
   
                       </div> 
                    
                    <div style={{
                        position: 'absolute',
                        top: '53.5%',
                
                        textAlign: 'center',
                        width: '100%'
                    }}>
                    <p style={{
                        display: 'inline-block',
                        fontFamily: 'Ubuntu',
                        fontSize: '18px',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 1.35,
                        letterSpacing: 'normal',
                        color: '#373a3c'
                    }}>{category}</p>

                    </div>
                    

               <div style={{

                    position: 'absolute',
                    top: '61.5%',
                    textAlign: 'center',
                    width: '100%'
               }}>
               <p style={{
                    display: 'inline-block',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 600,
                    fontStyle:' normal',
                    fontStretch: 'normal',
                    lineHeight: 1.17,
                    letterSpacing: 'normal',
                    color: '#373a3c'
                }}>Year created</p>
   
                   </div>     
                
                <div style={{
                     position: 'absolute',
                     top: '66.5%',
                     textAlign: 'center',
                     width: '100%'
                }}>
                <p style={{
                     display: 'inline-block',
                     fontFamily: 'Ubuntu',
                     fontSize: '18px',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontStretch: 'normal',
                     lineHeight: 1.35,
                     letterSpacing: 'normal',
                     color: '#373a3c',
                    
                }}>{year}</p>
                
                </div>
                <Link to={"/image-preview"}>
                <img src={preview} style={{
                    position: 'absolute',
                    top: '78.7%',
                    left: '41.2%',
                    cursor: 'pointer'
                }}/>
                </Link>
                
               <Link to={"/upload-success"}>
               <img src={upload} style={{
                    position: 'absolute',
                    top: '78.7%',
                    left: '51.5%',
                    cursor: 'pointer'
                }} onClick={
                    () =>{

                        let displayImage = window.URL.createObjectURL(localStorage.getItem('image'))
                    
                        fetch('https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/images',{
                            method: "POST",
                            headers:{
                                'Content-Type': 'application/json',
                                'accept': 'application/json',
                                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVuZ2V6YXN0dWRpb3MuY28ua2VcL3dwIiwiaWF0IjoxNTY1NjkwMTM5LCJuYmYiOjE1NjU2OTAxMzksImV4cCI6MTU2NjI5NDkzOSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.uiDKDWKCOjj_lgVBqQafYax1IGVNv6yeYauR1m-fayM'
                            },
                            body:JSON.stringify({
                                title: title,
                                excerpt:  localStorage.getItem('body') ,
                                
                                fields: {
                                    "category": category,
                                    "year": year,
                                    "url": displayImage
                                },
                                status: 'draft'
                            })
                        }).then(function(response){
                            return response.json();
                        }).then(function(post){
                            console.log(post);
                        });

                        

                   
                    }
                } />
               </Link> 
            </div>
        )
    }
}