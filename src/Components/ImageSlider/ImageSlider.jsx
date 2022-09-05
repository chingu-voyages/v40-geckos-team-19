import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import images from './images'
import './ImageSlider.css'
import {AiOutlineHeart} from 'react-icons/ai'


const ImageSlider = () => {
  const [width, setWidth] = useState(0)
  const slider = useRef()

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
  }, [])

  return (
    <motion.div ref={slider} className='slider'>
        <motion.h2 
        animate={{ x: 0 }}
        className='heading'>Newly Added</motion.h2>
        <motion.div 
        drag='x' 
        dragConstraints={{ right: 0, left: -width }}
        className='inner-slider'>
            {images.map((info,index) => (
                <motion.div className='item' key={index}>
                    <img src={info.img} alt="" className='item-img' />
                    <div className='desc'>
                        <p>@{info.name}</p>
                        <button className='heart-icon'>
                            <AiOutlineHeart />
                        </button>
                    </div>
                </motion.div>
            ))}
        </motion.div>
        <motion.h2 
        animate={{ x: 0 }} 
        className='heading'>Most Liked</motion.h2>
        <motion.div 
        drag='x' 
        dragConstraints={{ right: 0, left: -width }}
        className='inner-slider'>
            {images.map((info,index) => (
                <motion.div className='item' key={index}>
                    <img src={info.img} alt="" />
                    <div className='desc'>
                        <p>@{info.name}</p>
                        <button className='heart-icon'>
                            <AiOutlineHeart />
                        </button>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}

export default ImageSlider