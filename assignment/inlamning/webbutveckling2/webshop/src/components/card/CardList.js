import CardItem from "./CardItem";


export default function CardList({dataAlbum}) {
    return (
        <>
            {
                dataAlbum.map((user, index) => {
                    return (
                        <CardItem key={index}
                                  id={dataAlbum[index].id}
                                  image={dataAlbum[index].image}
                                  name={dataAlbum[index].name}
                                  price={dataAlbum[index].price}/>
                    )
                })
            }
        </>
    )
}

