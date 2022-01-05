
import './Info.scss'
import { Routes, Route, NavLink } from 'react-router-dom';

function Info({data}){

    const{mail, author} = data

    return(
        <div className='container'>
            
            <h3>{author} </h3>
            <h3>{mail} </h3>
            <NavLink className='back' style={{ color: 'white' , textDecoration: 'none', marginTop: '.5em' }}to='/' className='Home'>X</NavLink>
        </div>
    )
}

export default Info