import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import back from '../img/buttons_back.png';
import '../styles/ImagesContent.css';
import post from '../img/post.png';
import {Link} from 'react-router-dom';
import PDFViewer from 'pdf-viewer-reactjs'
import  axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';


const images = [
];

class PublicationContent extends React.Component{
    state={
        publication: [],
        isLoaded: false,
        numPages: null,
        pageNumber: 1
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/publications/${parseInt(localStorage.id)}`)
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

            const { numPages, pageNumber } = this.state;
            return(
                <div className="page-content">
                    <Navbar />
                    <br />
                    <br />
                    <Link to={"/publications"}  style={{position: 'absolute',left: '50px'}} ><img src={back} alt="back" /></Link>
                    <span className="content-title" dangerouslySetInnerHTML={{ __html: this.state.publication.title.rendered}}></span>
                    <br />
                    <br />
                    <p className="content-body" dangerouslySetInnerHTML={{ __html: this.state.publication.excerpt.rendered}}>
                    </p>
                    <br />
                    <b className="description-footer" dangerouslySetInnerHTML={{__html: this.state.publication.acf.author }} style={{fontSize: '11px'}}></b>
                    <b className="description-footer-2" dangerouslySetInnerHTML={{__html: this.state.publication.acf.publisher }} style={{fontSize: '11px'}}></b>
                    <b className="description-footer-3" dangerouslySetInnerHTML={{__html: this.state.publication.acf.volume }} style={{fontSize: '11px'}}></b>
                    <br />
                    <br />
                    <br />
                    <br /> 
                    <br />
                    <br />
                    <br />
                    <div className="images-container">
            
                   <iframe 
                     title="document viewer" src={this.state.publication.acf.src} 
                     width="80%" height="650px" ></iframe>
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
        return (
            <div style={{display: 'flex', height: '100vh'}}>
     
             <Spinner animation="border" role="status" style={{margin: 'auto'}}>
                 <span className="sr-only">Loading...</span>
                 </Spinner>
            </div>);
    }
}

export default PublicationContent;