import React, {FC} from 'react';
import './styles/index.scss';
import TodoContent from "./components/todo-content/todo-content";

const App: FC = () => {
    return (
        <div className={'todo-wrapper'}>
            <TodoContent/>
        </div>
    );
}

export default App;
