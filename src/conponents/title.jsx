const Tilte=(props)=>{
    return(
        <div className="title-list" style={{backgroundColor:props.bgcolor}}>
            <h1>{props.title}</h1>
            <h2>{props.sub}  <span className="title-span">{props.span}</span>{props.end}</h2>
        </div>
    )
}
export default Tilte