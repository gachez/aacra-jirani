import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import searchIcon from '../img/icons_search.png';
import navigation from '../img/nav_videos.png';
import reset from '../img/reset.png';
import next from '../img/component.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';


class Videos extends React.Component {
    state={
        filteredVideos: [],
        filteredCategory: [],
        filteredDiscussion: [],
        filteredYear: [],
        filterCategory: 'none',
        filterDiscussion: 'none',
        filterYear: 'none',
        videos: [],
        isLoaded: false,
        textBox: '',
        selectedCategory: 'Select category',
        selectedDiscussion: 'Select discussion',
        selectedYear: 'Select a year',
        defaultVideos: []
    }
 
    componentDidMount(){
     axios.get(`https://tengezastudios.co.ke/wp-ckr/wp-json/wp/v2/videos?_embed`)
     .then(res =>{
         this.setState({
             videos: res.data,
             isLoaded: true,
             defaultVideos: res.data
         })
     })
     .catch(err => console.log(err))
     this.state.videos.length > 0 ? console.log(this.state.videos) : console.log('none')
     console.log("everything got")
 
        window.localStorage.clear()
        
    }
  
 
        //get search text 
        getSearch = (e) =>{
         this.setState({
             searchText: e.target.value
         })
         console.log(this.state.searchText)
       
      }
      
          //    function that toggles dropdowns in filter section
          toggleDropdown = (val) =>{
             switch(val){
                 case 'category':
                      this.state.filterCategory === 'none' ? this.setState({filterCategory: 'block'}) : this.setState({filterCategory: 'none'})
                      break;
 
                 
                 case 'discussion': 
                      this.state.filterDiscussion === 'none' ? this.setState({filterDiscussion: 'block'}) : this.setState({filterDiscussion: 'none'})
                      break;     
  
                  case 'year': 
                      this.state.filterYear === 'none' ? this.setState({filterYear: 'block'}) : this.setState({filterYear: 'none'})
                      break;    
  
                  default: 
                      console.log('default//:case')    
             }
         }
 
                 // function that grabs value of an option and highlights it then changes state according to filter and filters the grid of images
                 onSelect = (classname, index, placeholder) =>{
                     let selectedVal = document.getElementsByClassName(classname)[index].textContent;
                     let filterCategoryArr = this.state.videos.filter( video => video.acf['discipline'].toLowerCase() === selectedVal.toLowerCase());
                     let filterYearArr = [] 
                     let filterDiscussionArr = []
                     if(true){
 
                      filterYearArr =  this.state.selectedCategory !== 'Select category' ? filterCategoryArr.filter( video => video.acf['year'] === selectedVal) : this.state.defaultVideos.filter( video => video.acf['year'] === selectedVal);
                      filterDiscussionArr =  this.state.selectedCategory !== 'Select category' ? filterDiscussionArr.filter( video => video.acf['discussion'] === selectedVal) : this.state.defaultVideos.filter( video => video.acf['discussion'] === selectedVal);                   
 
                 }                   
                    
                     if(placeholder === 'placeholder-category'){
                         //set the necessary states
                         this.setState({
                             selectedCategory: selectedVal,
                             videos: filterCategoryArr
                         });
         
                         // set the filter colors
                         document.getElementById(placeholder).style.color = '#ff321a';
                         document.getElementById('category').style.borderColor = '#ff321a';
         
                         //check if any data found and give feedback
                         if(filterCategoryArr.length < 1) {
                             alert('No Videos found in the ' + selectedVal + ' category');
                             this.setState({
                                 videos : this.state.defaultVideos,
                                 selectedCategory: 'Select a category'
                             });
                             document.getElementById('placeholder-category').style.color = '#000';
                             document.getElementById('category').style.borderColor = '#000';
                         }
                         console.log('Success: Videos found under the category')
                        
                     }
 
                     if(placeholder === 'placeholder-discussion'){
                         this.setState({
                             selectedDiscussion: selectedVal
                         });
         
                         document.getElementById(placeholder).style.color = '#ff321a';
                         document.getElementById('discussion').style.borderColor = '#ff321a';
         
                         //check if any data found and give feedback
                         if(filterDiscussionArr.length < 1) {
                           alert('No Videos found for tagged: ' + selectedVal  );
                           this.setState({
                               videos : this.state.defaultVideos,
                               selectedDiscussion: 'Select discussion'
                            });
                            document.getElementById('placeholder-discussion').style.color = '#000';
                            document.getElementById('placeholder-year').style.color = '#000';
                            document.getElementById('discussion').style.borderColor = '#000';
                            document.getElementById('discussion').style.borderColor = '#000';
                         }
                         console.log('Success videos found under the discussions filter')
                        
                     }
         
                     if(placeholder === 'placeholder-year'){
                         this.setState({
                             selectedYear: selectedVal
                         });
         
                         document.getElementById(placeholder).style.color = '#ff321a';
                         document.getElementById('year').style.borderColor = '#ff321a';
         
                         //check if any data found and give feedback
                         if(filterYearArr.length < 1) {
                           alert('No Videos found for the year: ' + selectedVal  );
                           this.setState({
                               videos : this.state.defaultVideos,
                               selectedYear: 'Select a year',
                               selectedCategory: 'Select category'
                            });
                            document.getElementById('placeholder-category').style.color = '#000';
                            document.getElementById('placeholder-year').style.color = '#000';
                            document.getElementById('year').style.borderColor = '#000';
                            document.getElementById('category').style.borderColor = '#000';
                         }
                         console.log('Success videos found under the category')
                     }
         
                   
                 }
         
         
                 //function that filters array according to searchbox text
                 onSearch = () =>{
                     this.setState({
                         filteredVideos: this.state.videos.filter(video => video.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
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
                                                <span  id="image-title">Contemporary African Art: VIDEOS</span> 
                                                <section id="images-grid">
                                                    {
                                                        this.state.videos.map( img => {
                                                            return(
                                                            <div style={{display: 'grid', margin:'30px',cursor: 'pointer'}} onClick={
                                                                () =>{
                                                                    window.location.href="/videos-content"
                                                                    localStorage.setItem('id', img.id)
                                                                }
                                                            }>
                                                            <img  src={img._embedded['wp:featuredmedia']['0'].source_url} width="300px" height="150px" alt="images thumbnail"/>
                                                            <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}}></span>    
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
                        
                                            <span id="side-title">View VIDEOS</span>
                        
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
                                            <span>Select a discussion</span>
                                            <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6 9L12 15L18 9" stroke="#FF321A" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                            <div className="dropdown-box" style={{
                                                top: '263px'
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
                                    <Link to={"/publications"}>
                                    <div className="navigation-down">
                                    <span>Contemporary African Art: PUBLICATIONS</span>
                                    <img src={next} alt="next down navigation" />
                                    </div>
                                    
                                    </Link>
                        
                                    <br />
                                    <br />
                                    <br />
                        
                                <Footer />
                                    
                                </div>
                            )
                        }
                        return(
                            <div style={{display: 'flex', height: '100vh'}}>

                            <Spinner animation="border" role="status" style={{margin: 'auto'}}>
                                <span className="sr-only">Loading...</span>
                            </Spinner>

                            </div>                        )
                     
                    }
                
                }

export default Videos;