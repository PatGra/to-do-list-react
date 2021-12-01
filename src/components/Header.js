import './Header.scss';

const Header = (props) => {
    const titel = props.title
    return(
        <div className='Header'>
           <header>
               <h1>{props.title}</h1>
              </header> 
        </div>
    )
}

export default Header;