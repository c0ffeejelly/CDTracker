import { Routes, Route } from 'react-router-dom';
import AlbumList from './AlbumList';

const App = () => {
    return (
    <>
        <Routes>
            <Route path="/" element={<AlbumList />} />
        </Routes>
    </>
    )
}

export default App;
