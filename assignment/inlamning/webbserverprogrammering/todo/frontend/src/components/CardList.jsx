import Card from "./Card.module.css/Card";

const CardList =({ users }) => {
    return (
        <>
            {
                users.map((user, index) => {
                    return (
                        <Card key={ index }
                              name={user.name}
                              age={user.age}
                              todo={user.todo}/>
                    )
                })
            }
        </>
    )
}

export default CardList