import React, {FC} from 'react';
import './styles/index.scss';
import circle from "../src/assets/svg/circle.svg";
import plus from "../src/assets/svg/plus.svg";
import buttonDelete from "../src/assets/svg/delete.svg";
import checkCircle from "../src/assets/svg/check-circle.svg";
import checkMark from "../src/assets/svg/check-mark.svg";

const App: FC = () => {
    return (
        <div className={'todo-wrapper'}>
            <div className={'todo-header todo-border'}>
                <img width={'20px'} height={'20px'} src={checkMark}
                     alt="check-mark"/>
                <p className={'todo-header-title'}>Todo</p>
            </div>
            <div className={'todo-inner'}>
                <div className={'todo-body todo-border'}>
                    <p>Tasks</p>
                    <ul className={'todo-list'}>
                        <li className={'todo-item'}>
                            <button className={'todo-button'}>
                                <img width={'20px'} height={'20px'} src={circle}
                                     alt="circle"/>
                            </button>
                            <input className={'todo-text'} value={'hello'} type="text"/>
                            <button className={'todo-button'}>
                                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                            </button>
                        </li>
                    </ul>
                    <div className={'todo-actions'}>
                        <button className={'todo-button todo-add'}>
                            <img src={plus} width={'20px'} height={'20px'} alt="check-circle"/>
                            <span className={'todo-add-title'}>Add item</span>
                        </button>
                    </div>
                </div>
                <div className={'todo-footer'}>
                    <div className={'todo-complete'}>
                        <p>Completed</p>
                        <button className={'todo-button'}>
                            <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                        </button>
                    </div>
                    <ul className={'todo-list'}>
                        <li className={'todo-item'}>
                            <button className={'todo-button'}>
                                <img className={'todo-add-img'} width={'20px'} height={'20px'} src={checkCircle}
                                     alt="check-circle"/>
                            </button>
                            <input className={'todo-text'} value={'hello'} type="text"/>
                            <button className={'todo-button'}>
                                <img src={buttonDelete} width={'20px'} height={'20px'} alt="button-delete"/>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
