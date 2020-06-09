import React, {Component} from 'react';
import nextburnt from '../img/nextburnt.png';
import cancel from '../img/buttons_cancel.png';
import addicon from '../img/icons_add.png';
import orangeback from '../img/orangeback.png';
import {Link} from 'react-router-dom';
import NavbarUpload from '../components/NavbarUpload';


export default class AddImageContent extends Component{
    state={
        btnImg: nextburnt,
        topPositionSection: '',
        topPositionImage: '',
        imageUrl: [],
        imageUrl2: [],
        imagesArr: []
    }

    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
           if(this.state.imageUrl.length < 1){
            
          this.setState({
            imageUrl: URL.createObjectURL(event.target.files[0]),
            imagesArr: document.getElementById('file-upload').files
          })
           }
           else{
               this.setState({
                   imageUrl2: URL.createObjectURL(event.target.files[0])
               })
           }
        }
       }
    render(){
        console.log(this.state.imagesArr)
        
        
        return(
            <div id="parent-container" style={{
        
            }}>
                
                    {/* top bar on page */}
                    <NavbarUpload />
                    {/* top bar ends here */}
                    <br />
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

                    {/* add section box */}
                    <div id="add-section-box" style={{
                        position: 'absolute',
                        top: '40.8%',
                        left: '31.7%',
                        
                          width: '500px',
                          height: '100px',
                          border: 'dotted 2px #ff321a'
                        
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
                        }}>Add section</p>

                         {/* dropdown menu on add section click */}
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
                        textAlign: 'center'
                        }} onClick={
                            () =>{
                                if(document.getElementById('image').style.display == 'block'){
                                    alert('Kindly add body text before an image(s)')
                                }
                                else{
                                    
                                    
                                 let bodyText = document.createElement('textarea')
                                 document.getElementById('parent-container').appendChild(bodyText)
                                 bodyText.setAttribute('id', 'body-text')
                                 document.getElementById('body-text').style.position = 'absolute'
                                 document.getElementById('body-text').style.top = '40.8%'
                                 document.getElementById('body-text').style.minHeight = '100px'
                                 document.getElementById('body-text').style.width = '76.1%'
                                 document.getElementById('body-text').style.fontFamily = 'Ubuntu'
                                 document.getElementById('body-text').style.fontSize = '18px'
                                 document.getElementById('body-text').style.fontWeight = 300
                                 document.getElementById('body-text').style.fontStyle = 'normal'
                                 document.getElementById('body-text').style.fontStretch = 'normal'
                                 document.getElementById('body-text').style.lineHeight = 1.35
                                 document.getElementById('body-text').style.letterSpacing = 'normal'
                                 document.getElementById('body-text').style.color = '#8d8d8d'
                                 document.getElementById('body-text').style.left = '13.4%'
                                 document.getElementById('add-section-box').style.top = '60%'
                                
                                }

                            }
                        }>Body text</p>
                        
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
                        image
                    </label>
                    <input id="file-upload" style={{
                        display: 'none'
                    }} type="file" onChange={this.onImageChange} onClick = {
                        () =>{
                            if(document.getElementById('body-text') !== null){
                                
                            document.getElementById('add-section-box').style.top = '135%'
                            document.getElementById('image').style.display='block'
                            
                            }
                            else if(document.getElementById('image').display == 'block'){
                                document.getElementById('add-section-box').style.top = '190%'
                                document.getElementById('image2').style.display = 'block'
                            }                                             
                            else{
                                
                            alert('Kindly add a description for the images')       
                            document.getElementById('file-upload').type = ''
                            document.getElementById('image').style.display = 'none'
                     
                            }   }
                    } multiple/>
                    </div>

                    </div>
                    <div className = "images-container" style={{
                        display: 'grid'
                    }}>
                    <div id = "image"  style={{
                        position: 'absolute',
                        top: '60%',
                        left: '13.4%',
                        width: '76.1%',
                        height: '500px',
                        border: 'none',
                        display: 'none',
                        backgroundImage: `url(${this.state.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>

                    <div id = "image2"  style={{
                        position: 'absolute',
                        top: '130%',
                        left: '13.4%',
                        width: '76.1%',
                        height: '500px',
                        border: 'none',
                        display: 'none',
                        backgroundImage: `url(${this.state.imageUrl2})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center'
                    }}></div>

                    </div>
                    
            </div>
        )
    }
}