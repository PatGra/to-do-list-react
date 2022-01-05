import './Footer.scss'
import Info from './Info'
import { Routes, Route, NavLink } from 'react-router-dom';

const Footer = () => {
    const info =[
        {name:'Max Mustermann',
        mail:'MaxMusterman@gmail.com'},

        {author:'Max Mustermann',
        mail:'MaxMusterman@gmail.com'},
    ]

    return(
        <div className='Footer'>
          {/*  <NavLink to='/contact' className='Contact'>contact</NavLink>
            <NavLink to='/imprint' className='Imprint'>imprint</NavLink>
            <a className='Source' href="https://de.freepik.com/vektoren/buch">image source</a>
            
     <Routes>
      <Route path='/contact' element={<Info data={info[0]}/>} />
      <Route path='/imprint' element={<Info data={info[1]}/>} />
    </Routes>*/}
        </div>
    )
}

export default Footer;