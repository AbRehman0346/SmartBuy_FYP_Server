import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ImgCarousel_1 from '../../img/pic.jpg'
import ImgCarousel_2 from '../../img/img1.jpg'

function ControlledCarousel() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  var carouselImageStyle = {
    height: '410px',
    width: '100%',
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={ImgCarousel_1} style={carouselImageStyle} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src={ImgCarousel_2} style={carouselImageStyle} />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  )
}

export default ControlledCarousel
