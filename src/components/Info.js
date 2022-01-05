
function Info({data}){

    const{name, mail, author} = data

    return(
        <div>
            <h3>{name}</h3>
            <h3>{author}</h3>
            <h3>{mail}</h3>
            
        </div>
    )
}

export default Info