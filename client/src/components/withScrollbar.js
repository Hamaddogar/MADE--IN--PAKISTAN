import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

class WithScrollbar extends React.Component {
  state = { additionalTransfrom: 0 };
  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
            (this.Carousel.state.totalItems -
              this.Carousel.state.slidesToShow) +
            150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
    return (
         <div>
               <h2>Top Trends</h2>    
      <Carousel
        ssr={false}
        ref={el => (this.Carousel = el)}
        partialVisbile={false}
        customButtonGroup={<CustomSlider />}
        itemClass="slider-image-item"
        responsive={responsive}
        containerClass="carousel-container-with-scrollbar"
        additionalTransfrom={-this.state.additionalTransfrom}
        beforeChange={nextSlide => {
          if (nextSlide !== 0 && this.state.additionalTransfrom !== 150) {
            this.setState({ additionalTransfrom: 150 });
          }
          if (nextSlide === 0 && this.state.additionalTransfrom === 150) {
            this.setState({ additionalTransfrom: 0 });
          }
        }}
      >
        <div class="image-container increase-size">
          <div class="image-container-text">

          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="https://5.imimg.com/data5/DU/PQ/MY-11684180/mahindra-tractor-mounted-combine-harvester-500x500.png"
          />
        </div>
        <div class="increase-size">
          <div class="image-container-text">
         
          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
           
          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IJ4Dj2ZtTINWWsxmoy211jhrXQ9DkNhWAnWtoktpfveg_Y2Y"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
        
          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="https://images-na.ssl-images-amazon.com/images/I/51WJeT924OL._SL1118_.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
    
          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="http://doxenandhue.com/wp-content/uploads/2018/07/modular-minimalism-5-part-kit-to-create-infinite-furniture-urbanist.jpg"
          />
        </div>

        <div class="image-container increase-size">
          <div class="image-container-text">
           
          </div>
          <img
            draggable={true}
            style={{ width: "100%", height: "300px", cursor: "pointer" }}
            src="https://images.homedepot-static.com/productImages/6e013975-4d17-4b83-a429-c1b0c67b0cbd/svn/black-husky-tool-bags-gp-44449n13-64_1000.jpg"
          />
        </div>
         
      </Carousel>
     </div>
    );
  }
}

export default WithScrollbar;
