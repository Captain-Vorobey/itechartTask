import react, { Component } from 'react';

const List = ({ data }) => {
    const list = data.map((item) => {
        return <ul>
            <ListItem image={item}/>
        </ul>
    });

    return (
        <li>
            { list }
        </li>
    )
}

export default List;