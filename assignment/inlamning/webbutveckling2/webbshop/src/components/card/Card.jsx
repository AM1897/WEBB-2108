const Card = ({name, image, price}) => {
  return(
      <>
        <article>
            <div>
                <img src={image} alt="image"/>
                <h2>{name}</h2>
                <p>{price}</p>
                <button>Köp</button>
            </div>
        </article>
      </>
  )
}
export default Card