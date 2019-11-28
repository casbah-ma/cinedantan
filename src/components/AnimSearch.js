import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../lotties/Mohit_Saini.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

export default function Animation() {
    return (
        <Lottie options={defaultOptions}
              height={400}
              width={400}/>
    )
}