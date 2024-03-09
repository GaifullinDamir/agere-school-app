import {Header, SearchPanel} from "../../../widgets";

const MainPage = () => {
    return (
        <>
            <Header/>
            <div className='container'>
                <main className="mainPage">
                    <SearchPanel/>
                </main>
            </div>
        </>
        
    );
};

export default MainPage;