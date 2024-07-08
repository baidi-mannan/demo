const ListCard = (props)=> {

    const details= props.listDetails;
    return (

        <div className="CardContainer" style={{display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
            <div>
            <h2>{details?.name}</h2>
            <h4>{details?.address}</h4>
            <p>{details?.mealType}</p>
            </div>
            <div >
            <h3>{details?.tags?.join(',')}</h3>
            </div>


        </div>
    )
}
export default ListCard;