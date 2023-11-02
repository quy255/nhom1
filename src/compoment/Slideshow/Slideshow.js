import Carousel from 'react-bootstrap/Carousel';
import Slide from "./Show.json"
import "./Slideshow.css"

function slideshow() {
  return (
    <Carousel data-bs-theme="dark">
        {Slide.map((items,index) => (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={items.img}
          alt={items.name}
        />
        <Carousel.Caption>
          <h5 className='slide'>{items.name}</h5>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default slideshow