import React from 'react';
import Card from "./Card";

const CardList = ({robots}) => {
    throw new Error;
    return (
        <div>
            {robots.map((el) => <Card key={el.id} id={el.id} name={el.name} email={el.email}/>)}
        </div>
    )
}

export default CardList;