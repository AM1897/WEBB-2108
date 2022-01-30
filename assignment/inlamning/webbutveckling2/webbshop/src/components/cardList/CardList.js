import Card from '../card/Card'

const CardList = ({AlbumData}) => {
  return(
      <>
          {
              AlbumData.map((user, index) => {
                  return(
                      <Card key={ index }
                            id={ AlbumData[index].id }
                            name={ AlbumData[index].name }
                            image={ AlbumData[index].image }
                            price={ AlbumData[index].price }/>
                  )
              })
          }
      </>
  )
}

export default CardList