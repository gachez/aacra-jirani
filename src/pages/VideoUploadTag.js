import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import nextorange from '../img/next.png';
import nextburnt from '../img/nextburnt.png';
import cancel from '../img/buttons_cancel.png';

import orangeback from '../img/orangeback.png';
import downIcon from '../img/downiconorange.png';

import {Container, Col} from 'react-bootstrap';


const images = [
    'African games',
    'Animation',
    'Architecture', 
    'Dance',
    'Decorative arts',
    'installations',
    'painting',
    'pottery'
];

const dropDownFontStyle = {
    marginLeft: '15px',
    marginTop: '26px',
    fontFamily: 'Ubuntu',
    fontSize: '14px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#ffffff',
    cursor: 'pointer'
}

export default class VideoUploadTag extends Component{
    state={
        btnImg: nextburnt
    }
    render(){
       localStorage.clear() 
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
                         color: '#8d8d8d' 
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
                <Link to={"/"}>
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
                    <Link to={"/choose-content"}>
                    <img src={orangeback} style={{
                        position: 'absolute',
                        left: '79.5%',
                        paddingTop: '28px'
                    }}/>

                    </Link>
                    
                    <Link to={"/add-video-content"}>
                    <img id="next" src={this.state.btnImg} style={{
                        position: 'absolute',
                        left: '89%',
                        paddingTop: '28px'
                    }}/> 
                    </Link>
                   

                    </div>
                    {/* top bar ends here */}

                       {/* page title here */}
                       <span className="title">Choose tags(Videos)</span>

             <span className="content-types-category">Category</span>
                <span className="content-types-year" style={{ left: '60%' }}>Year created</span>
                <section className="tags-container">
                    {

                        images.map(img => {
                            return(
                            <div className="tags" >{img}</div>    
                            )
                        })
                    }
                </section>

                <div className="content-types-year"> Discussion</div>
                <section className="tags-container" style={{
                    position: 'absolute',
                    left: '512px'
                }}>
                    {
                         images.map(img => {
                            return(
                            <div className="tags" >{img}</div>    
                            )
                        })
                    }
                </section>
                <div className="year-created-box" 
                  style={{
                      position: 'absolute',
                      left: '60%'
                  }}
                >Year created</div>


        </div>
    )
    }
}