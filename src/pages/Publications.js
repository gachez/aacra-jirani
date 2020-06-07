import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import searchIcon from '../img/icons_search.png';
import navigation from '../img/nav_publications.png';
import thumbnail from '../img/afrique.jpg';
import reset from '../img/reset.png';
import next from '../img/component.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';

const images = [
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp',
    'dkopweokp'
];

class Publications extends React.Component {
    state = {
        publications: [],
        filteredPublications: [],
        filteredCategory: [],
        filteredYear: [],
        filterCategory: 'none',
        filterYear: 'none',
        isLoaded: false,
        textBox: '',
        selectedCategory: 'Select category',
        selectedYear: 'Select a year',
        defaultPublications: []
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/publications?_embed`)
        .then(res =>{
            this.setState({
                publications: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
        this.state.publications.length > 0 ? console.log(this.state.publications) : console.log('none')
        console.log("everything got")
    
           window.localStorage.clear()
       }

    //    function that toggles dropdowns in filter section
       toggleDropdown = (val) =>{
        switch(val){
            case 'category':
                 this.state.filterCategory === 'none' ? this.setState({filterCategory: 'block'}) : this.setState({filterCategory: 'none'})
                 break;

             case 'year': 
                 this.state.filterYear === 'none' ? this.setState({filterYear: 'block'}) : this.setState({filterYear: 'none'})
                 break;    

             default: 
                 console.log('default//:case')    
        }
    }
    

    //function that filters array according to searchbox text
    onSearch = () =>{
        this.setState({
        filteredPublications: this.state.publications.filter(publication => publication.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
        });
    }

    render(){
        if(this.state.isLoaded){
            return (
                <div>
                <Navbar />
                    <br />
                    <Container id="body-section" fluid >
                        <Row>
                            <Col xs={1} id="first-column">
                                <img src={navigation} alt="navigation side" id="nav-side"/>
                            </Col>
                            <Col xs={8} id="second-column" >
                                <span  id="image-title">Contemporary African Art: PUBLICATIONS</span> 
                                <section id="images-grid">
                                    {
                                          this.state.publications.map( img => {
                                            return(
                                              <div style={{display: 'grid', margin:'30px'}} onClick={
                                                () =>{
                                                    window.location.href="/publication-content"
                                                    localStorage.setItem('id', img.id)
                                                }
                                              }>
                                              <img  src={img._embedded['wp:featuredmedia']['0'].source_url} width="300px" height="192px" alt="images thumbnail"/>
                                              <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}} ></span>    
                                                </div>  
                                            )
                                        })         
                                    }
                                                     
                                </section>
                            </Col>
                            <Col id="third-column">
        
                              <div id="search-input">
                                  <input style={{position: 'absolute', right: '50px', borderBottom: 'solid 1px black',width: '200px'}} placeholder="Search title, artist" type="textbox"/>
                                  <img id="searchIcon" src={searchIcon} width="18px" height="18px" />
                              </div>
        
                            <span id="side-title" style={{right: '80px'}}>View PUBLICATIONS</span>
        
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '138px',
                                 right: '50px'
                            }}>
                               <span>Select a category</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '183px'
                            }}>
                                <span>Decorative arts</span>
                                <span>Decorative arts</span>
                                <span>Decorative arts</span>
                                <span>Decorative arts</span>
                                <span>Decorative arts</span>
                            </div>
                            
                            <br />
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '218px',
                                 right: '50px'
                              }}>
                               <span>Select a format</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '263px'
                            }}>
                                <span>PDF</span>
                                <span>EPUB</span>
                            </div>
                            <br />
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '298px',
                                 right: '50px'
                            }}>
                               <span>Select a year</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '343px'
                            }}>
                                <span>2020</span>
                                <span>2019</span>
                                <span>2018</span>
                                <span>2017</span>
                                <span>2016</span>
                                <span>2015</span>                    </div>
                            <img src={reset} alt="reset here" id="reset" />
        
                            </Col>
                        </Row>
                    </Container>
                    <br /><br /><br /><br />
                    <br /><br /><br />
                    
                    <div className="navigation-down">
                      <span>Contemporary African Art: IMAGES</span>
                      <img src={next} alt="next down navigation" />
                    </div>
        
                    <br />
                    <br />
                    <br />
        
                  <Footer />
                    
                </div>
            )
        }
       return null;
    }
   
}

export default Publications;