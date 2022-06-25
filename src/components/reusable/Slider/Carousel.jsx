import React, { useState } from 'react'
import './Carousel.css'
import dataSlider from './dataSlider'
import ButtonSlider from './ButtonSlider'

export const Carousel = () => {

  const [slideIndex, setSlideIndex] = useState(1)
  const dataLength = dataSlider.length
  const nextSlide = () => {
    setSlideIndex(slideIndex !== dataLength ? slideIndex + 1 : 1)
      // if(slideIndex !== dataSlider.length){
      //     setSlideIndex(slideIndex + 1)
      // } 
      // else if (slideIndex === dataSlider.length){
      //     setSlideIndex(1)
      // }
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
        let checkClass = slideIndex === index + 1? 'slide active-anim' : 'slide'
        // console.log('checkclass is', checkClass);
        // console.log('index is', index, 'slideIndex is', slideIndex);
        return(
          <div className={checkClass} key={img.id}>
            <img
            // src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`}
            src={img.photo}
            alt={img.title}
            />
          </div>
        )
      })}
      <ButtonSlider moveSlide={nextSlide} direction={"next"}/>
      <ButtonSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
  )
}
