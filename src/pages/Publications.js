import React from 'react';
import {Container, Col, Row, DropdownButton, ButtonGroup, DropdownItem} from 'react-bootstrap';
import searchIcon from '../img/icons_search.png';
import navigation from '../img/nav_publications.png';
import {Link} from 'react-router-dom';
import reset from '../img/reset.png';
import next from '../img/component.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner'

const ART = [
    'African Games',
    'Animation',
    'Music',
    'Dance',
    'Theatre',
    'Installation Art',
    'African Architecture',
    'Decorative Arts',
    'Sculpture',
    'Painting',
    'Drawing',
    'Visual Storytelling',
    'Printmaking'
];

const DESIGN = [
    'African Typography',
    'Cultural Branding',
    'Digital Illustration',
    'Online Advertising',
    'Marketing',
    'Product Design',
    'Fashion',
    'Furnishing',
    'Industrial Design',
    'Textiles',
    'Fabrics',
    'Interior',
    'Landscape Design'
];

const categories = [
{
    name: 'Art',
    children: ART
},
{
    name: 'Design',
    children: DESIGN
}
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
        defaultPublications: [],
        searchText: '',
        subtitle: 'none',
        subtitle2: 'none'
    }

    componentDidMount(){
        axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/publications?_embed`)
        .then(res =>{
            this.setState({
                publications: res.data,
                isLoaded: true,
                defaultPublications: res.data
            })
        })
        .catch(err => console.log(err))
        this.state.publications.length > 0 ? console.log(this.state.publications) : console.log('none')
        console.log("everything got")
    
           window.localStorage.clear()
       }


        //get search text 
        getSearch = (e) =>{
            this.setState({
                searchText: e.target.value,
                subtitle: 'block'
            })
          
         }

    //function that toggles dropdowns in filter section
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
    

        //function that filters array according to searchbox text
        onSearch = () =>{
            this.setState({
            filteredPublications: this.state.publications.filter(publication => publication.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
            });
        }

        resetFilters = () => {
            this.setState({
            publications: this.state.defaultPublications,
            selectedCategory: 'Select a category',
            selectedYear: "Select a year",
            subtitle2: 'none',
            filterCategory: 'none',
            filterYear: 'none'
            })
        
        }
        
        returnImagesToDefault = () => {
            this.setState({
                publications: this.state.defaultPublications,
                filterCategory: 'none',
                filterYear: 'none'
            })
            return true;
        }

        //handle filters
        filterCategory =  async (category) => {
            if(this.state.selectedCategory === 'Select category'){
                this.setState({
                    selectedCategory: category,
                    publications: this.state.publications.filter(img => img.acf['discipline'].toLowerCase() === category.toLowerCase()),
                    subtitle2: 'block',
                    filterCategory: 'none'
                });
                return 0;
            }
            await this.returnImagesToDefault();
            this.setState({
                selectedCategory: category,
                publications: this.state.publications.filter(img => img.acf['discipline'].toLowerCase() === category.toLowerCase()),
                subtitle2: 'block',
                filterCategory: 'none'
            });
            
        }

          //filter year
          filterYear = async (year) => {
            if(this.state.selectedYear === 'Select a year'){
               if(this.state.selectedCategory === 'Select category'){
                this.setState({
                    selectedYear: year,
                    publications: this.state.publications.filter(img => img.acf['year'] === year),
                    subtitle2: 'block',
                    filterYear: 'none'
                });
                return 0;
               }
               this.setState({
                selectedYear: year,
                publications: this.state.publications.filter(img => img.acf['year'] === year && img.acf['discipline'].toLowerCase() === this.state.selectedCategory.toLowerCase()),
                subtitle2: 'block',
                filterYear: 'none'
            });
            return 0;
            }

            await this.returnImagesToDefault();
            this.setState({
                selectedYear: year,
                publications: this.state.publications.filter(img => img.acf['year'] === year),
                subtitle2: 'block',
                filterYear: 'none'
            });
             }

    render(){
        if(this.state.isLoaded){
            console.log(this.state.publications)
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
                                <p className="sub-title" style={{display: this.state.subtitle}}>Showing results for "<strong style={{fontSize: '16px', color: 'red'}}>{this.state.searchText}</strong>" </p>
                                <p className="sub-title" style={{display: this.state.subtitle2}}>Showing results for "<strong style={{fontSize: '16px', color: 'red'}}>{this.state.selectedCategory}</strong>" for year "<strong>{this.state.selectedYear === "Select a year" ? "" : this.state.selectedYear}</strong>"</p>     
                                <section id="images-grid">
                                {
                                                    this.state.searchText.length < 1 ?
                                                    this.state.publications.map( img => {
                                                    return(
                                                        <div style={{display: 'grid', margin:'30px', cursor: 'pointer'}} onClick={
                                                        () =>{
                                                            window.location.href="/publication-content"
                                                            localStorage.setItem('id', img.id)
                                                        }
                                                    }>
                                                        <img  src={img._embedded['wp:featuredmedia']['0'].source_url} style={{
                                                            height: '200px',
                                                            width: '350px'                                                  
                                                        }}  alt="images thumbnail"/>
                                                        <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}}></span>    
                                                        </div>  
                                                    )
                                                }) :
                                                
                                                this.state.publications.filter( thumb => {
                                                    return(
                                                    thumb.title.rendered.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
                                                )}).map( img => {
                                                    return(
                                                        <div style={{display: 'grid', margin:'30px', cursor: 'pointer'}} onClick={
                                                            () =>{
                                                                window.location.href="/publication-content"
                                                                localStorage.setItem('id', img.id)
                                                            }
                                                        }>
                                                        <img  src={img._embedded['wp:featuredmedia']['0'].source_url} style={{
                                                            height: '200px',
                                                            width: '350px !important'
                                                        }} alt="images thumbnail"/>
                                                        <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}}></span>    
                                                            </div>  
                                                        )
                                                })
                                                }
                                                     
                                </section>
                            </Col>
                            <Col id="third-column">
        
                              <div id="search-input">
                                  <input id="search-input-box" style={{position: 'absolute', right: '50px', borderBottom: 'solid 1px black',width: '200px'}} placeholder="Search title, artist" type="textbox" onChange={this.getSearch}/>
                                  <img id="searchIcon" src={searchIcon} width="18px" height="18px" />
                                  <div id="drop-suggest-search" style={{
                                                    position: 'absolute',
                                                    right: '50px',
                                                    top: '2rem',
                                                    width: '200px',
                                                    height: 'fit-content',
                                                    backgroundColor: '#fff',
                                                    zIndex: 99,
                                                    border: 'solid 1px rgba(0,0,0,0.3)',
                                                    display: this.state.searchText.length < 1 ? 'none' : 'grid'
                                                }}>
                                                    {
                                                        this.state.publications.filter( thumb => {
                                                            return(
                                                            thumb.title.rendered.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
                                                        )}).map( (image,index) => {
                                                            return(
                                                                <p style={{ padding: '10px', cursor: 'pointer'}} id={index} dangerouslySetInnerHTML={{__html: image.title.rendered}}
                                                                    onClick={() => {
                                                                        console.log('clicked');
                                                                        document.getElementById("search-input-box").value = image.title.rendered;
                                                                        this.state.publications.filter( thumb => thumb.title.rendered.toLowerCase().indexOf(image.title.rendered.toLowerCase()) >= 0);
                                                                        document.getElementById("drop-suggest-search").style.display = "none"
                                                                    }}
                                                                ></p>
                                                            )
                                                        })
                                                    }
                                                </div>
                              </div>
        
                            <span id="side-title" style={{right: '80px'}}>View PUBLICATIONS</span>
        
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '138px',
                                 right: '50px'
                            }}
                            onClick={() => {
                                this.toggleDropdown('category')
                            }}
                            >
                               <span className="category-select" >{this.state.selectedCategory}</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '183px',
                                display: this.state.filterCategory
                            }}>
                                 {
                                categories.map((category, index) => {
                                
                                
                                   
                                    return(  
                                        <DropdownButton
                                        as={ButtonGroup}
                                        key={index}
                                        size="xs"
                                        variant="dark"
                                        style={{
                                            background: 'none', 
                                            height: '32px',
                                            marginTop:'5px',
                                            textAlign: 'left' 
                                        }}
                                        title={category.name}

                                      >
                                       {
                                           category.children.map( category => {
                                               return(
                                                   <DropdownItem className="category-span" onClick={() => {this.filterCategory(category)}}>{category}</DropdownItem>
                                               )
                                           })
                                       }
                                      </DropdownButton>
                                  )})
                                }

                            </div>
                            
                            <br />
                            <br />
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '238px',
                                 right: '50px'
                            }}
                            onClick={() => {
                                this.toggleDropdown('year')
                            }}
                            >
                               <span className="year-select">{this.state.selectedYear}</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '283px',
                                display: this.state.filterYear
                            }}>
                                                  {
                                years.map((year, index) => {
                                
                                
                                    return(  
                                    <span className="year-span" key={index} onClick={
                                        
                                        () => {
                                        this.filterYear(year)

                                }} style={{width: '100%'}}>{year}</span>)
                                })
                                }
                                              </div>
                            <img src={reset} alt="reset here" id="reset"   onClick={() => {
                                document.getElementsByClassName('sub-title')[1].style.display="none";

                                document.getElementsByClassName('category-select')[0].style.color="#000";
                                document.getElementsByClassName('year-select')[0].style.color="#000";

                                this.setState({
                                  publications: this.state.defaultPublications,
                                  selectedCategory: 'Select a category',
                                  selectedYear: "Select a year",
                                  subtitle2: 'none'
                                })
                            }} />
        
                            </Col>
                        </Row>
                    </Container>
                    <br /><br /><br /><br />
                    <br /><br /><br />
                    <Link to={"/"}>
                    <div className="navigation-down">
                      <span>Contemporary African Art: IMAGES</span>
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
       return (
       <div style={{display: 'flex', height: '100vh'}}>

            <Spinner animation="border" role="status" style={{margin: 'auto'}}>
                <span className="sr-only">Loading...</span>
                </Spinner>
       </div>);
    }
   
}

export default Publications;