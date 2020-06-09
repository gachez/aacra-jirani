import React from 'react';
import '../styles/Home.css';
import '../styles/ChooseContent.css';
import cancel from '../img/buttons_cancel.png';
import back from '../img/back.png';
import next from '../img/next-button.png';
import placeholder from '../img/placeholder_image.png';
import placeholderVideo from '../img/placeholder_video.png';
import placeholderPublication from '../img/placeholder_publication.png';
import {Container, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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

const years = [
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014
];

class ChooseTags extends React.Component{
    state={
        filterYear: 'none',
        selectedYear: 'Year created'
    }
   

     //    function that toggles dropdowns in filter section
     toggleDropdown = (val) =>{
        switch(val){
            case 'category':
                 this.state.filterCategory === 'none' ? this.setState({filterCategory: 'grid'}) : this.setState({filterCategory: 'none'})
                 break;

             case 'year': 
                 this.state.filterYear === 'none' ? this.setState({filterYear: 'grid'}) : this.setState({filterYear: 'none'})
                 break;    

             default: 
                 console.log('default//:case')    
        }
    }


    render(){
        localStorage.clear()
        return(
            <div>
                <nav className="navbar">
                    <div><span>Type</span>
                    <span>Tags</span>
                    <span>Content</span>
                    <span>Preview</span>
                    <span>Upload</span></div>

                    <img className="cancel" src={cancel} alt="cancel"/>

                    <img className="back" src={back} alt="back"/>

                   <Link to="/add-image-content"  className="next"><img  src={next} alt="next"/></Link> 
                </nav>

                <span className="title">Choose tags</span>

                <span className="content-types-category">Category</span>
                <span className="content-types-year">Year created</span>
                <section className="tags-container">
                    {

                        images.map((img, index) => {
                            return(
                            <div className="tags" onClick={
                                () => {
                                    localStorage.setItem('category', document.getElementsByClassName('tags')[index].innerText)
                                    document.getElementsByClassName('tags')[index].style.background="#FF321A"
                                    document.getElementsByClassName('tags')[index].style.color="#FFF"
                                }
                            } >{img}</div>    
                            )
                        })
                    }
                </section>

                <div className="year-created-box" onClick={() => {
                    this.toggleDropdown('year')
                }}>{this.state.selectedYear}
                
                <div className="dropdown-box" style={{
                                left: 0,
                                top: '100%',
                                display: this.state.filterYear
                            }}
                            >    
                            {

                                years.map((year, index) => {
                                return(  <span key={index} className="year-span" onClick={() => {
                                    this.setState({
                                        selectedYear: document.getElementsByClassName('year-span')[index].textContent,
                                        filterYear: 'none',
                                    })
                                }
                            }
                             style={{width: '100%'}}>{year}</span>)
                                })
                                }
                            </div>
                             </div>

        
            </div>
        )
    }
}

export default ChooseTags;