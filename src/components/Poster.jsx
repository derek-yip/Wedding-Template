import React from 'react'
import Button from './Button'
import '../scss/Poster.scss'
import { Link } from 'react-router-dom'

function Poster() {
  return (
    <div className='poster'>        
        <div className="button_wrapper">
            <div className='poster_button center_center'>
            <Link to={"/Mr"} >
                <Button width={"50vw"} content={"MR"} background_img={"/photos/Wedding18.jpg"} color='white'></Button>
            </Link>
            
            <Link to={"/Mrs"} >
                <Button width={"50vw"} content={"MRS"} background_img={"/photos/Wedding15.jpg"} color='white'></Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Poster