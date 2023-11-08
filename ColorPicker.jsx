// import React from 'react'
import {SketchPicker} from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
import CustomButton from './CustomButton'
// import Customizer from '../Pages/Customizer'

const ColorPicker = ({handleBack}) => {
  const snap = useSnapshot(state)
  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
      color={snap.color}
      disableAlpha
      onChange={(color)=>state.color = color.hex}
      />
      <CustomButton 
              type="filled"
              title="Back"
              handleClick={() => handleBack()}
              customStyles="text-xs"
        />
      
    </div>
  )
}

export default ColorPicker
