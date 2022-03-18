import Card from "./Card.module.css/Card";

const CardList =({ todo }) => {
    return (
        <>
            {
                todo.map((item) => {
                    return (
                        <Card key={ item.id }
                              name={item.name}
                              age={item.age}
                              todo={item.todo}
                              taskIsDone={item.taskIsDone}
                              id={item.id}
                        />
                    )
                })
            }
        </>
    )
}

export default CardList