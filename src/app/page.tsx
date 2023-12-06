import Image from 'next/image'
import About from './component/about'
import Skills from './component/skills'
import Home from './component/home'
import Contactus from './component/contactus'

export default function home() {
  return (

    <div>

      <Home/>
       <About/>
       <Skills/>
       <Contactus/>
       
    </div>
  )
}
