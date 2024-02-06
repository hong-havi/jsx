'use strict';
export default function Item(props){
    return (
        <>
            <h4>{ props.data.name } </h4>
            <span>{ props.data.price } </span>
        </>
    )

}