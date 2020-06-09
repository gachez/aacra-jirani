import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import post from '../img/post.png';
import {Link} from 'react-router-dom';
import PDFViewer from 'pdf-viewer-reactjs'
import  axios from 'axios';

const images = [
    'sd',
    'ds'
];

class PublicationContent extends React.Component{
    state={
        publication: [],
        isLoaded: false,
        numPages: null,
        pageNumber: 1
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/publications/${parseInt(localStorage.id)}`)
        .then(res =>{
            this.setState({
                publication: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))

    }
   

    render() {
        if(this.state.isLoaded){
            console.log(this.state.publication)
            return(
                <div className="page-content">
                    <Navbar />
                    <br />
                    <br />
                    <Link to={"/publications"} className="back" ><img src={back} alt="back" /></Link>
                    <span className="content-title" dangerouslySetInnerHTML={{ __html: this.state.publication.title.rendered}}></span>
                    <br />
                    <br />
                    <p className="content-body" dangerouslySetInnerHTML={{ __html: this.state.publication.excerpt.rendered}}>
                    </p>
                    <br />
                    <small className="description-footer" dangerouslySetInnerHTML={{__html: this.state.publication.acf.author }} style={{fontSize: '11px'}}></small>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="images-container">
            
                    <PDFViewer  className="videos-frame"
                    navbarOnTop={true}
                    scale={1}
                document={{
                    url: 'https://orientationtrip2011.files.wordpress.com/2010/08/text-contemporary-african-art-since-1980-by-okwui-enwezor-chika-okeke-agulu.pdf',
                }}
            />
                   {/* <iframe 
                     width="420" 
                     height="315"
                     src=""
                     title="document viewer" 
                     className="videos-frame" ></iframe> */}
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <section className="comments-container">
                        <input placeholder="What are your thoughts on this work?" />
                        <br /><br />
                        <div></div>
                        <br />
                        <img src={post} alt="post comment"/>
                        <br />
                        <br />
                        <hr />
                        <br />
                        {
                            images.map( img => {
                                return(
                                    <>
                                        <h2 key={img} className="comment-title" >Jane Doe</h2>
                                        <p className="comments">kodpkpodwk okdpwqdpwok jodpwjq</p>
                                        <small style={{color: 'rgba(0,0,0,0.6)'}} className="comments">12th June 2020</small>
                                        <br />
                                    </>
                                )
                            })
                        }
                    </section>
                 
                   <br /><br /><br />
                   <Footer />
                </div>
            )
        }
     return null;
    }
}

export default PublicationContent;