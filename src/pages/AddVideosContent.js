import React, {Component} from 'react';
import nextburnt from '../img/nextburnt.png';
import cancel from '../img/buttons_cancel.png';
import addicon from '../img/icons_add.png';
import orangeback from '../img/orangeback.png';
import {Link} from 'react-router-dom';


export default class AddVideoContent extends Component{
    state={
        btnImg: nextburnt
    }
    render(){
        return(
            <div id="parent-container">
                
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
                         color: '#8d8d8d' 
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
                <Link to={"/upload-pin"}>
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
                    <Link to={"/video-upload-tag"}>
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px',
                        cursor: 'pointer'
                    }}  />

                    </Link>
                    
                    <Link to={"/video-preview"}>
                    <img  src={this.state.btnImg} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px',
                        cursor: 'pointer'
                    }} onClick={
                        () =>{
                            localStorage.setItem('title', document.getElementById('title').value)
                            localStorage.setItem('description', document.getElementById('description').value)
                            localStorage.setItem('url', document.getElementById('videourl').value)
                        }
                    }/>

                    </Link>
                    
                    </div>
                    {/* top bar ends here */}

                    {/* title input */}
                    <input id="title" type="textbox" placeholder="Title" style={{
                        width: '76.1%',
                        height: '10%',
                        position: 'absolute',
                        top: '22.6%',
                        left: '13.4%',
                        fontFamily: 'Ubuntu',
                        fontSize: '30px',
                        fontWeight: 600,
                        fontStyle: 'normal',
                        fontStretch: 'normal',
                        lineHeight: 'normal',
                        letterSpacing: 'normal',
                        color: '#8d8d8d',
                        borderTop: 'none',
                        borderLeft: 'none',
                        borderRight: 'none'
                    }}/>

                    
            {/*  description title */}
            <p style={{
              position: 'absolute',
              top: '35.4%',
              left: '13.4%',
              fontFamily: 'Ubuntu',
              fontSize: '18px',
              fontWeight: 700,
              fontStyle: 'normal',
              fontStretch: 'normal',
              lineHeight: 1.17,
              letterSpacing: 'normal',
              color: '#373a3c'    
            }}>Description</p>
            
            {/* description input field */}
            <textarea id="description" type='textbox' placeholder="Type description here" style={{
                    position: 'absolute',
                    top: '44%',
                    left: '13.4%',  
                    width: '76.1%',
                    height: '167px',
                    border: 'solid 2px #eeedf2',
                    fontFamily: 'Ubuntu',
                    fontSize: '18px',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    lineHeight: 1.35,
                    letterSpacing: 'normal',
                    color: '#8d8d8d',
                    paddingTop: '20px',
                    paddingLeft: '15px'
                                }}></textarea>


               {/* add section box */}
               <div  id="add-section-box" style={{
                        position: 'absolute',
                        top: '80.8%',
                        left: '31.7%',
                          width: '500px',
                          height: '100px',
                          border: 'dotted 2px #ff321a',
                        marginBottom: '100px'
                    }}>
                        <img style={{
                            position: 'absolute',
                            top: '40.8%',
                            left: '37.4%',
                            cursor: 'pointer'
                        }} src={addicon} onClick={ () =>{
                            if(document.getElementById('drop-down').style.display='none'){
                                document.getElementById('drop-down').style.display='block'
                            }
                            else if(document.getElementById('drop-down').style.display='block'){
                                document.getElementById('drop-down').style.display='none'
                            }
                            else{
                                console.log('.')
                            }
                        }}/>
                         <div id="drop-down" style={{
                        position: 'absolute',
                        top: '70.8%',
                        left: '39%',
                        width: '157px',
                        height: '126px',
                        background: '#373A3C',
                        display: 'none'
                    }}>
                        <p style={{
                            
                            paddingLeft: '42px',
                            paddingTop: '10px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '13px',
                            lineHeight: '15px', 
                            color: 'white',
                            cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        cursor: 'pointer'
                        }}
                         onClick={
                             () =>{
                                 let urlText = document.createElement('input')
                                 document.getElementById('parent-container').appendChild(urlText)
                                 urlText.setAttribute('id', 'videourl')
                                 document.getElementById('videourl').style.width = '76%'
                                 document.getElementById('videourl').style.height = '80px'
                                 document.getElementById('videourl').style.position = 'absolute'
                                 document.getElementById('videourl').style.top = '75%'
                                 document.getElementById('videourl').style.left = '13.4%'
                                 document.getElementById('add-section-box').style.display = 'none'
                                 document.getElementById('videourl').style.fontSize = '30px'
                                 document.getElementById('videourl').style.paddingLeft = '15px'
                                 document.getElementById('videourl').style.fontWeight = 300
                                 document.getElementById('videourl').style.fontStyle = 'normal'
                                 document.getElementById('videourl').style.fontStretch = 'normal'
                                 document.getElementById('videourl').style.lineHeight = 1.35
                                 document.getElementById('videourl').style.letterSpacing = 'normal'
                                 document.getElementById('videourl').style.color = '#8d8d8d'
                             }
                         }   
                        >Add url</p>
                        
                          <label for="file-upload" style={{
                              
                            paddingLeft: '42px',
                            paddingTop: '10px',
                            fontFamily: 'Ubuntu',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '13px',
                            lineHeight: '15px', 
                            color: 'white',
                            cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center'
                        
                    }} id="custom-file-upload" >
                        upload video
                    </label>
                    <input id="file-upload" style={{
                        display: 'none'
                    }} type="file" onChange={this.onImageChange}  />
                    </div>
                        <p style={{
                            position: 'absolute',
                            left: '44.2%',
                            top: '23%',
                            fontFamily: 'Ubuntu',
                            fontSize: '18px',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontStretch: 'normal',
                            lineHeight: 1.17,
                            letterSpacing: 'normal',
                            color: '#ff321a'
                        }}>Add video</p>

                    </div>
            </div>

        )
    }
}