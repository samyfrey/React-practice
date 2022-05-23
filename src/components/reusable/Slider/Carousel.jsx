import React, { useState } from 'react'
import './Carousel.css'
import dataSlider from './dataSlider'
import ButtonSlider from './ButtonSlider'

export const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(1)
 
    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }
  const prevSlide = () => {
    if(slideIndex !== 1){
      setSlideIndex(slideIndex - 1)
      } else if(slideIndex ===1){
      setSlideIndex(dataSlider.length)
      }  
    }

  return (
    <div className="container-slider">
      {dataSlider.map((img, index) =>{
        return(
          <div className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'} key={img.id}>
            <img
            // src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
            src={img.photo}
            alt=""
            />
          </div>
        )
      })}
      <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
      <ButtonSlider moveSlider={nextSlide} direction={"next"}/>
    </div>
  )
}
