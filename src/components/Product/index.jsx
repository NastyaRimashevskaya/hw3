import { useState } from 'react';
import './style.css'

export function Product(props) {
    const [color, setColor] = useState(true);
    const [del, setDel] = useState(true);

    const colorClass = color ? '' : 'green';
    const deleteClass = del ? '': 'none';

    const changeColor = () => {
        setColor((previousState) => !previousState);
      }
    const dButton = () => {
        setDel((previousState) => !previousState);
    }

    return (
        <tr className={colorClass+" "+deleteClass} onClick={changeColor} key={props.index}>
            <td>{props.name}</td>
            <td>{props.price}</td>
            <td>{props.count}</td>
            <td><img className='img1' src={props.img}></img></td>
            <td><button className='button' onClick={dButton}>DELETE</button></td>
        </tr>
    )

}