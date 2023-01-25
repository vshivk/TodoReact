import React, {FC} from 'react';
import checkCircle from "../../assets/svg/check-circle.svg";
import buttonDelete from "../../assets/svg/delete.svg";

interface ITodoCompletedItemProps {
    value: string
}

const TodoCompletedItem:FC<ITodoCompletedItemProps> = ({value}) => {
    return (
        <li className={'todo-item'}>
            <div style={{display: 'flex',gap: '10px', alignItems: 'center'}}>
                <img width={'20px'} height={'20px'} src={checkCircle}
                     alt="check-circle"/>
                <p>{value}</p>
            </div>
            <button className={'todo-button'}>
                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
            </button>
        </li>
    );
};

export default TodoCompletedItem;