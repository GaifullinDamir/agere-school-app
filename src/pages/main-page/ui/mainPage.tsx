import {Header, SearchPanel} from "../../../widgets";

const MainPage = () => {
    return (
        <>
            <Header/>
            <main className="mainPage">
                <div className='container'>
                    <SearchPanel/>
                </div>
            </main>
        </>
        
    );
};

export default MainPage;