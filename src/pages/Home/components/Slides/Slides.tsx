import { images } from "../../../../assets/images/images"
import { motion } from 'framer-motion'
import s from './Slides.module.scss'
import { useEffect, useState } from "react"
import React from "react";
import { ListFormat } from "typescript";
export function Slides() {

  const [width, setWidth] = useState(0);
  const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  const cardImage = images.map(
    (image, index) => {
      return (
        <motion.div key={index} className={s.item}>
          <img src={image.image} alt="" />
          <div className={s.infoImage}>
            <p>{image.nameImage}</p>
            <p>{image.owner.name}</p>
          </div>
        </motion.div>
      );
    }
  )

  return (
    <div>
      <div className={s.title}>
        <p>New Featured</p>
      </div>
      <motion.div ref={carousel} className={s.carousel}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className={s.innerCarousel}>
          {cardImage}
        </motion.div>
      </motion.div>
    </div>
  )
}