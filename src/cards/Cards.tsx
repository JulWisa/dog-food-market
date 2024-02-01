import React from 'react';

function Cards(props: any) {
    return <div className="cards content__cards">{props.children}</div>
    ;
}

export default Cards;
