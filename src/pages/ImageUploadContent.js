import React from 'react';
import cancel from '../img/buttons_cancel.png';
import orangeback from '../img/back.png';
import preview from '../img/preview.png';
import upload from '../img/upload.png';
import {Link} from 'react-router-dom';
import next from '../img/next-button.png';


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
                  <nav className="navbar">
                    <div><span>Type</span>
                    <span>Tags</span>
                    <span>Content</span>
                    <span>Preview</span>
                    <span>Upload</span></div>

                    <img className="cancel" src={cancel} alt="cancel"/>

                    <img className="back" src={orangeback} alt="back"/>
              
                </nav>
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
                    
                        fetch('https://tengezastudios.co.ke/wp/wp-json/wp/v2/images',{
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