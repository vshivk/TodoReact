import React, {FC} from 'react';
import Todo from './components/todo';
import './styles/index.scss';

const App: FC = () => {
    return (
        <div className={'container'}>
            <div className={'wrapper'}>
                <Todo/>
            </div>
        </div>
    );
}

export default App;
