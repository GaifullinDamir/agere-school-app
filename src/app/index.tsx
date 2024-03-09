import './index.scss';
import {Route, Routes} from "react-router-dom";
import {routes} from './routes';

const App = () => {
    return (
        <Routes>
            {routes.map(({path, Component}) => {
                return <Route path={path} key={path} element={<Component/>}/>
            })}
        </Routes>
    )
}

export default App
