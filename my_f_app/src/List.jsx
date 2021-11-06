import { useState } from 'react';

function List() {
    const [arr, setArr] = useState([12, 45, 67]);
    const add = () => {
        const rnd = Math.round(Math.random()*100+1);
        /*const arrCopy = [...arr];
        arrCopy.push(rnd);
        setArr(arrCopy);*/
        const arrCopy = [...arr, rnd];
        setArr(arrCopy);
    }
    return (
        <div>
            <button onClick={add}>Add</button>
            <ul>
                {arr.map((el, index) => {
                    return <li key={index}>{el}</li>
                })}

            </ul>
        </div>
    );
}

export default List;