import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Header from '../components/Header';
import Footer from '../components/footer';
import PageProgress from 'react-page-progress';
import ScrollToTop  from'react-scroll-up';



const IMAGES =
[{
        src: "https://images.unsplash.com/photo-1512577494243-76d15311b357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80",
        thumbnail: "https://images.unsplash.com/photo-1512577494243-76d15311b357?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1176&q=80",
        thumbnailWidth: 400,
        thumbnailHeight: 300,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        thumbnail: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=9400",
        thumbnail: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
    src: "https://images.pexels.com/photos/39303/mango-tropical-fruit-juicy-sweet-39303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/39303/mango-tropical-fruit-juicy-sweet-39303.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/2170351/pexels-photo-2170351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/2170351/pexels-photo-2170351.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail: "https://images.pexels.com/photos/6320/smartphone-vintage-technology-music.jpg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail: "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.unsplash.com/photo-1500241770736-a3f62bbc8717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500241770736-a3f62bbc8717?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.unsplash.com/photo-1513271795982-53a8a135acc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=961&q=80",
    thumbnail: "https://images.unsplash.com/photo-1513271795982-53a8a135acc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=961&q=80",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail: "https://images.pexels.com/photos/164504/pexels-photo-164504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},

{
    src: "https://images.pexels.com/photos/1051746/pexels-photo-1051746.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnail: "https://images.pexels.com/photos/1051746/pexels-photo-1051746.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},
{
    src: "https://images.pexels.com/photos/2132186/pexels-photo-2132186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnail: "https://images.pexels.com/photos/2132186/pexels-photo-2132186.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    thumbnailWidth: 320,
    thumbnailHeight: 212
},




]
 class Marketplace extends React.Component{
  render()
  { 
      return(
          <div><Header/>
          
          <PageProgress color={'red'} height={3}/>
          <div className="container">

<Gallery images={IMAGES}/>,
       

          </div>

          <Footer/>
          <ScrollToTop  className="colorchang"showUnder={160}>
       <span><img src="https://i.ya-webdesign.com/images/arrow-keys-png-image-1.png" width="30"height="30"/></span>
        </ScrollToTop>
          </div>
      )


  }


 }
  export default Marketplace;


