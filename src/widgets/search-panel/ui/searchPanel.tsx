import {sortIcon} from "../../../shared";

const SearchPanel = () => {
    return (
        <form className='search-panel'>
            <input
                className='search-panel__input'
                required
                type='text' 
                name='search' 
                id='search' 
                placeholder='Название курса, автор, предмет'
                />
            <img
                className='search-panel__sort'
                src={sortIcon}/>
            
        </form>
    );
};

export default SearchPanel;