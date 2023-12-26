import React from 'react'
// import image from '../Assests/Images/image.webp'

const SectionImage = (props) => {
  return (
    <div className='image-div'>
      <img src={props.imgUrl} alt="image" />
    </div>
  )
}

export default SectionImage
