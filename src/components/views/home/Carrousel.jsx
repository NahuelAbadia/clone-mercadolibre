import React from 'react'
import carrusel1 from '../../../assets/carrusel1.png'
import carrusel2 from '../../../assets/carrusel2.png'
import carrusel3 from '../../../assets/carrusel3.png'
import carrusel4 from '../../../assets/carrusel4.png'
import carrusel5 from '../../../assets/carrusel5.png'
import carrusel6 from '../../../assets/carrusel6.png'

const Carrousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" style={{ width: "84%" }} data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carrusel1} className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carrusel2} className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carrusel3} className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carrusel4} className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carrusel5} className="d-block " alt="..." />
        </div>
        <div className="carousel-item">
          <img src={carrusel6} className="d-block " alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carrousel