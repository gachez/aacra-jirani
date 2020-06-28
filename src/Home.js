import React from 'react';
import './styles/Home.css';
import {Container, Col, Row} from 'react-bootstrap';
import logo from './img/logo.png';
import sublogo from './img/sublogo.png';
import searchIcon from './img/icons_search.png';
import navigation from './img/nav-home.png';
import imagestitle from './img/images-title.png';
import thumbnail from './img/afrique.jpg';
import reset from './img/reset.png';
import next from './img/component.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import axios from 'axios';
import {Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const categories = [
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
]

class Home extends React.Component{

    state={
        filteredImages: [],
        filteredCategory: [],
        filteredYear: [],
        filterBoxConfirmation: false,
        filterCategory: 'none',
        filterYear: 'none',
        menuDisplay: 'none',
        images: [],
        isLoaded: false,
        textBox: '',
        selectedCategory: 'Select category',
        selectedYear: 'Select a year',
        defaultImages: [],
        searchText: '',
        subtitle: 'none',
        subtitle2: 'none'
     }
 
     componentDidMount(){
         axios.get(`https://tengezastudios.co.ke/aacra/wp-json/wp/v2/images?_embed`)
         .then(res =>{
             this.setState({
                 images: res.data,
                 isLoaded: true,
                 defaultImages: res.data
             })
         })
         .catch(err => console.log(err))
         this.state.images.length > 0 ? console.log(this.state.images) : console.log('none')
         console.log("everything got")
     
         window.localStorage.clear()
 
     }
 
        //get search text 
        getSearch = (e) =>{
         this.setState({
             searchText: e.target.value,
             subtitle: 'block'
         })
         console.log(this.state.searchText)
       
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
 
     // function that grabs value of an option and highlights it then changes state according to filter and filters the grid of images
  
 
 
         //function that filters array according to searchbox text
         onSearch = () =>{
             this.setState({
                 filteredImages: this.state.images.filter(image => image.title.rendered.toLowerCase().indexOf(this.state.textBox.toLowerCase()) >= 0)
             });
 
             console.log(this.state.filteredImages)
         }
  
 
         //function to filter array according to filters chosen
         // onFilterSelect = (selector, index) =>{
         //     let value = document.getElementsByClassName(selector)[index].textContent;
 
         //     this.setState({
         //         filteredCategory: this.state.images.filter(image => image.acf['category'].toLowerCase() === value.toLowerCase()),
         //         filterBoxConfirmation: true
         //     });
         // }
        
         resetFilters = () => {
           window.location.reload()
         }

        

    render(){
        if(this.state.isLoaded){
            console.log(this.state.images);


            return (
                <div>
        
                    <header id="logo-section">
                        <img id="logo" src={logo} height="74.24px" alt="African art critical resources"/>
                        <div id="sub-logo"><img src={sublogo} alt="framing your artistic experience"/></div>
                    </header>
                    <Navbar />
                    <br />
                    <Container id="body-section" fluid >
                        <Row>
                            <Col xs={1} id="first-column">
                                <img src={navigation} alt="navigation side" id="nav-side"/>
                            </Col>
                            <Col xs={8} id="second-column" >
                                <img src={imagestitle} alt="images title" id="image-title" />
                                <br />
            <p className="sub-title" style={{display: this.state.subtitle}}>Showing results for "<strong style={{fontSize: '16px', color: 'red'}}>{this.state.searchText}</strong>" </p>
                                     <p className="sub-title" style={{display: this.state.subtitle2}}>Showing results for "<strong style={{fontSize: '16px', color: 'red'}}>{this.state.selectedCategory}</strong>" for year "<strong>{this.state.selectedYear === "Select a year" ? "" : this.state.selectedYear}</strong>"</p>

                                <section id="images-grid">
                                    {
                                        this.state.searchText.length < 1 ?
                                        this.state.images.map( img => {
                                          return(
                                            <div style={{display: 'grid', margin:'30px', cursor: 'pointer'}} onClick={
                                              () =>{
                                                  window.location.href="/images-content"
                                                  localStorage.setItem('id', img.id)
                                              }
                                          }>
                                            <img  src={img._embedded['wp:featuredmedia']['0'].source_url} style={{
                                                height: '200px'
                                            }} width="200px" height="200px" alt="images thumbnail"/>
                                            <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}}></span>    
                                              </div>  
                                          )
                                      }) :
                                      
                                      this.state.images.filter( thumb => {
                                          return(
                                          thumb.title.rendered.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
                                      )}).map( img => {
                                          return(
                                              <div style={{display: 'grid', margin:'30px', cursor: 'pointer'}} onClick={
                                                () =>{
                                                    window.location.href="/images-content"
                                                    localStorage.setItem('id', img.id)
                                                }
                                            }>
                                              <img  src={img._embedded['wp:featuredmedia']['0'].source_url} style={{
                                                  height: '200px'
                                              }} width="200px" height="200px" alt="images thumbnail"/>
                                              <span style={{padding: '10px', fontSize: '12px'}} dangerouslySetInnerHTML={{__html: img.title.rendered}}></span>    
                                                </div>  
                                            )
                                      })
                                    }
                                                     
                                </section>
                            </Col>
                            <Col id="third-column">
        
                              <div id="search-input">
                                  <input style={{position: 'absolute', right: '50px', borderBottom: 'solid 1px black',width: '200px'}} placeholder="Search title, artist" type="textbox" onChange={this.getSearch}/>
                                  <img id="searchIcon" src={searchIcon} width="18px" height="18px" />
                              </div>
        
                              <svg id="side-title" width="112" height="15" viewBox="0 0 112 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.058 14C4.158 12.056 3.288 10.022 2.448 7.898C1.62 5.774 0.846 3.65 0.126 1.526H2.628C2.916 2.366 3.21 3.224 3.51 4.1C3.81 4.976 4.11 5.84 4.41 6.692C4.71 7.532 5.01 8.348 5.31 9.14C5.61 9.932 5.904 10.658 6.192 11.318C6.468 10.658 6.756 9.938 7.056 9.158C7.356 8.366 7.656 7.544 7.956 6.692C8.268 5.84 8.574 4.976 8.874 4.1C9.174 3.224 9.462 2.366 9.738 1.526H12.168C11.436 3.65 10.656 5.774 9.828 7.898C9 10.022 8.136 12.056 7.236 14H5.058ZM15.8691 14H13.6911V4.586H15.8691V14ZM16.1031 1.832C16.1031 2.24 15.9711 2.564 15.7071 2.804C15.4431 3.044 15.1311 3.164 14.7711 3.164C14.3991 3.164 14.0811 3.044 13.8171 2.804C13.5531 2.564 13.4211 2.24 13.4211 1.832C13.4211 1.412 13.5531 1.082 13.8171 0.842C14.0811 0.601999 14.3991 0.481999 14.7711 0.481999C15.1311 0.481999 15.4431 0.601999 15.7071 0.842C15.9711 1.082 16.1031 1.412 16.1031 1.832ZM18.1257 9.338C18.1257 8.51 18.2457 7.784 18.4857 7.16C18.7377 6.536 19.0677 6.02 19.4757 5.612C19.8837 5.192 20.3517 4.88 20.8797 4.676C21.4077 4.46 21.9477 4.352 22.4997 4.352C23.7957 4.352 24.8037 4.754 25.5237 5.558C26.2557 6.362 26.6217 7.562 26.6217 9.158C26.6217 9.278 26.6157 9.416 26.6037 9.572C26.6037 9.716 26.5977 9.848 26.5857 9.968H20.3757C20.4357 10.724 20.6997 11.312 21.1677 11.732C21.6477 12.14 22.3377 12.344 23.2377 12.344C23.7657 12.344 24.2457 12.296 24.6777 12.2C25.1217 12.104 25.4697 12.002 25.7217 11.894L26.0097 13.676C25.8897 13.736 25.7217 13.802 25.5057 13.874C25.3017 13.934 25.0617 13.988 24.7857 14.036C24.5217 14.096 24.2337 14.144 23.9217 14.18C23.6097 14.216 23.2917 14.234 22.9677 14.234C22.1397 14.234 21.4197 14.114 20.8077 13.874C20.1957 13.622 19.6917 13.28 19.2957 12.848C18.8997 12.404 18.6057 11.888 18.4137 11.3C18.2217 10.7 18.1257 10.046 18.1257 9.338ZM24.4437 8.366C24.4437 8.066 24.4017 7.784 24.3177 7.52C24.2337 7.244 24.1077 7.01 23.9397 6.818C23.7837 6.614 23.5857 6.458 23.3457 6.35C23.1177 6.23 22.8417 6.17 22.5177 6.17C22.1817 6.17 21.8877 6.236 21.6357 6.368C21.3837 6.488 21.1677 6.65 20.9877 6.854C20.8197 7.058 20.6877 7.292 20.5917 7.556C20.4957 7.82 20.4297 8.09 20.3937 8.366H24.4437ZM34.5469 8.078C34.2709 9.134 33.9709 10.166 33.6469 11.174C33.3349 12.17 33.0229 13.112 32.7109 14H30.9289C30.6889 13.448 30.4369 12.818 30.1729 12.11C29.9089 11.402 29.6449 10.646 29.3809 9.842C29.1169 9.038 28.8529 8.192 28.5889 7.304C28.3249 6.416 28.0669 5.51 27.8149 4.586H30.1189C30.2269 5.09 30.3529 5.636 30.4969 6.224C30.6409 6.8 30.7909 7.394 30.9469 8.006C31.1029 8.606 31.2649 9.194 31.4329 9.77C31.6009 10.346 31.7689 10.874 31.9369 11.354C32.1169 10.802 32.2909 10.232 32.4589 9.644C32.6389 9.056 32.8069 8.468 32.9629 7.88C33.1189 7.292 33.2629 6.722 33.3949 6.17C33.5389 5.606 33.6649 5.078 33.7729 4.586H35.4469C35.5549 5.078 35.6749 5.606 35.8069 6.17C35.9389 6.722 36.0769 7.292 36.2209 7.88C36.3769 8.468 36.5389 9.056 36.7069 9.644C36.8869 10.232 37.0669 10.802 37.2469 11.354C37.4029 10.874 37.5649 10.346 37.7329 9.77C37.9009 9.194 38.0629 8.606 38.2189 8.006C38.3869 7.394 38.5429 6.8 38.6869 6.224C38.8309 5.636 38.9569 5.09 39.0649 4.586H41.3149C41.0629 5.51 40.8049 6.416 40.5409 7.304C40.2769 8.192 40.0129 9.038 39.7489 9.842C39.4849 10.646 39.2209 11.402 38.9569 12.11C38.6929 12.818 38.4349 13.448 38.1829 14H36.4189C36.1069 13.112 35.7829 12.17 35.4469 11.174C35.1229 10.166 34.8229 9.134 34.5469 8.078ZM47.285 1.526H49.553V14H47.285V1.526ZM55.2589 1.526C55.5229 1.982 55.8169 2.54 56.1409 3.2C56.4649 3.86 56.7949 4.556 57.1309 5.288C57.4669 6.008 57.7969 6.746 58.1209 7.502C58.4569 8.246 58.7629 8.936 59.0389 9.572C59.3149 8.936 59.6149 8.246 59.9389 7.502C60.2629 6.746 60.5929 6.008 60.9289 5.288C61.2649 4.556 61.5949 3.86 61.9189 3.2C62.2429 2.54 62.5369 1.982 62.8009 1.526H64.8529C64.9609 2.438 65.0629 3.41 65.1589 4.442C65.2549 5.462 65.3389 6.512 65.4109 7.592C65.4949 8.66 65.5669 9.74 65.6269 10.832C65.6989 11.912 65.7589 12.968 65.8069 14H63.5749C63.5269 12.548 63.4669 11.054 63.3949 9.518C63.3349 7.982 63.2389 6.494 63.1069 5.054C62.9749 5.33 62.8189 5.66 62.6389 6.044C62.4589 6.428 62.2669 6.848 62.0629 7.304C61.8589 7.748 61.6489 8.21 61.4329 8.69C61.2289 9.17 61.0249 9.638 60.8209 10.094C60.6289 10.538 60.4489 10.958 60.2809 11.354C60.1129 11.738 59.9689 12.068 59.8489 12.344H58.1569C58.0369 12.068 57.8929 11.732 57.7249 11.336C57.5569 10.94 57.3709 10.52 57.1669 10.076C56.9749 9.62 56.7709 9.152 56.5549 8.672C56.3509 8.192 56.1469 7.73 55.9429 7.286C55.7389 6.842 55.5469 6.428 55.3669 6.044C55.1869 5.648 55.0309 5.318 54.8989 5.054C54.7669 6.494 54.6649 7.982 54.5929 9.518C54.5329 11.054 54.4789 12.548 54.4309 14H52.1989C52.2469 12.968 52.3009 11.9 52.3609 10.796C52.4329 9.692 52.5049 8.6 52.5769 7.52C52.6609 6.428 52.7509 5.372 52.8469 4.352C52.9429 3.332 53.0449 2.39 53.1529 1.526H55.2589ZM76.7291 14C76.5611 13.508 76.3871 13.022 76.2071 12.542C76.0271 12.062 75.8531 11.57 75.6851 11.066H70.4291C70.2611 11.57 70.0871 12.068 69.9071 12.56C69.7391 13.04 69.5711 13.52 69.4031 14H67.0451C67.5131 12.668 67.9571 11.438 68.3771 10.31C68.7971 9.182 69.2051 8.114 69.6011 7.106C70.0091 6.098 70.4111 5.138 70.8071 4.226C71.2031 3.314 71.6111 2.414 72.0311 1.526H74.1731C74.5931 2.414 75.0011 3.314 75.3971 4.226C75.7931 5.138 76.1891 6.098 76.5851 7.106C76.9931 8.114 77.4071 9.182 77.8271 10.31C78.2591 11.438 78.7091 12.668 79.1771 14H76.7291ZM73.0571 3.938C72.7811 4.574 72.4631 5.348 72.1031 6.26C71.7551 7.172 71.3891 8.162 71.0051 9.23H75.1091C74.7251 8.162 74.3531 7.166 73.9931 6.242C73.6331 5.318 73.3211 4.55 73.0571 3.938ZM86.2869 3.236C85.0029 3.236 84.0189 3.638 83.3349 4.442C82.6629 5.234 82.3269 6.338 82.3269 7.754C82.3269 8.426 82.4049 9.044 82.5609 9.608C82.7289 10.16 82.9689 10.634 83.2809 11.03C83.6049 11.426 84.0009 11.738 84.4689 11.966C84.9489 12.182 85.5069 12.29 86.1429 12.29C86.5389 12.29 86.8809 12.278 87.1689 12.254C87.4569 12.218 87.6849 12.176 87.8529 12.128V7.646H90.1209V13.64C89.8089 13.76 89.2809 13.892 88.5369 14.036C87.7929 14.18 86.9349 14.252 85.9629 14.252C85.0629 14.252 84.2409 14.108 83.4969 13.82C82.7529 13.532 82.1169 13.112 81.5889 12.56C81.0729 12.008 80.6709 11.33 80.3829 10.526C80.0949 9.722 79.9509 8.798 79.9509 7.754C79.9509 6.71 80.1069 5.786 80.4189 4.982C80.7429 4.178 81.1809 3.5 81.7329 2.948C82.2849 2.384 82.9329 1.958 83.6769 1.67C84.4209 1.382 85.2129 1.238 86.0529 1.238C86.6289 1.238 87.1389 1.28 87.5829 1.364C88.0389 1.436 88.4289 1.52 88.7529 1.616C89.0769 1.712 89.3409 1.814 89.5449 1.922C89.7609 2.03 89.9109 2.108 89.9949 2.156L89.3109 4.01C88.9509 3.794 88.5009 3.614 87.9609 3.47C87.4329 3.314 86.8749 3.236 86.2869 3.236ZM92.742 14V1.526H100.752V3.452H95.01V6.53H100.122V8.42H95.01V12.074H101.184V14H92.742ZM106.313 12.308C107.129 12.308 107.723 12.17 108.095 11.894C108.467 11.618 108.653 11.228 108.653 10.724C108.653 10.424 108.587 10.166 108.455 9.95C108.335 9.734 108.155 9.542 107.915 9.374C107.687 9.194 107.405 9.032 107.069 8.888C106.733 8.732 106.349 8.582 105.917 8.438C105.485 8.282 105.065 8.114 104.657 7.934C104.261 7.742 103.907 7.508 103.595 7.232C103.295 6.956 103.049 6.626 102.857 6.242C102.677 5.858 102.587 5.396 102.587 4.856C102.587 3.728 102.977 2.846 103.757 2.21C104.537 1.562 105.599 1.238 106.943 1.238C107.723 1.238 108.413 1.328 109.013 1.508C109.625 1.676 110.105 1.862 110.453 2.066L109.751 3.902C109.343 3.674 108.893 3.5 108.401 3.38C107.921 3.26 107.423 3.2 106.907 3.2C106.295 3.2 105.815 3.326 105.467 3.578C105.131 3.83 104.963 4.184 104.963 4.64C104.963 4.916 105.017 5.156 105.125 5.36C105.245 5.552 105.407 5.726 105.611 5.882C105.827 6.038 106.073 6.182 106.349 6.314C106.637 6.446 106.949 6.572 107.285 6.692C107.873 6.908 108.395 7.13 108.851 7.358C109.319 7.574 109.709 7.838 110.021 8.15C110.345 8.45 110.591 8.81 110.759 9.23C110.927 9.638 111.011 10.136 111.011 10.724C111.011 11.852 110.609 12.728 109.805 13.352C109.013 13.964 107.849 14.27 106.313 14.27C105.797 14.27 105.323 14.234 104.891 14.162C104.471 14.102 104.093 14.024 103.757 13.928C103.433 13.832 103.151 13.736 102.911 13.64C102.671 13.532 102.479 13.436 102.335 13.352L103.001 11.498C103.325 11.678 103.763 11.858 104.315 12.038C104.867 12.218 105.533 12.308 106.313 12.308Z" fill="#FF321A"/>
                            </svg>
        
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '138px',
                                 right: '50px'
                            }}
                            onClick={() => {this.toggleDropdown('category')}}
                            >
                               <span className="category-select">{this.state.selectedCategory}</span>
                               <svg width="20" height="20" className="iconDown"  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '183px',
                                display: this.state.filterCategory,

                            }}> {
                                categories.map((category, index) => {
                                
                                
                                    return(  <span className="category-span" key={index} onClick={

                                        
                                        () => {
                                            
                                            this.setState({
                                                selectedCategory: document.getElementsByClassName('category-span')[index].textContent,
                                                filterCategory: 'none',
                                                subtitle2: 'block',
                                                images: this.state.images.filter(image => image.acf['category'].toLowerCase().includes(document.getElementsByClassName('category-span')[index].textContent.toLowerCase()))
                                            })

                                            document.getElementsByClassName('category-select')[0].style.color="#FF321A"

                                }} style={{width: '100%'}}>{category}</span>)
                                })

                                }
                            </div>
                            <br />
                            <div className="category-box" style={{
                                 position: 'absolute',
                                 top: '218px',
                                 right: '50px'
                              }}
                              
                            onClick={() => {this.toggleDropdown('year')}}
                              >
                               <span className="year-select">{this.state.selectedYear}</span>
                               <svg width="20" height="20" className="iconDown" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="#FF321A" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="dropdown-box" style={{
                                top: '263px',
                                display: this.state.filterYear
                            }}
                            >    
                            {

                                years.map((year, index) => {
                                return(  <span key={index} className="year-span" onClick={() => {
                                    this.setState({
                                        selectedYear: document.getElementsByClassName('year-span')[index].textContent,
                                        filterYear: 'none',
                                        images: this.state.images.filter(image => image.acf['year'] === document.getElementsByClassName('year-span')[index].textContent)
                                    })

                                    document.getElementsByClassName('year-select')[0].style.color="#FF321A"
                                }
                            }
                             style={{width: '100%'}}>{year}</span>)
                                })
                                }
                            </div>
                            <br />
                            
                            <img src={reset} alt="reset here" id="reset" onClick={() => {
                                document.getElementsByClassName('sub-title')[1].style.display="none";

                                document.getElementsByClassName('category-select')[0].style.color="#000";

                                document.getElementsByClassName('year-select')[0].style.color="#000";

                                this.setState({
                                  images: this.state.defaultImages,
                                  selectedCategory: 'Select a category',
                                  selectedYear: "Select a year"
                                })
                            }} />
        
                            </Col>
                        </Row>
                    </Container>
                    <br /><br /><br /><br />
                    <br /><br /><br />
                    
                    <Link to={"/videos"}>
                        <div className="navigation-down">
                        <span>Contemporary African Art: VIDEOS</span>
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

export default Home;