import {Checkbox} from "../../../shared";

const SearchPanel = () => {
    return (
        <form className='search-panel'>
            <input
                    required
                    className='search-panel__input'
                    type='text' 
                    name='search-panel__input' 
                    id='search-panel__input' 
                    placeholder='Название курса, автор, предмет'
                    />
            <select
                className='search-panel__select' 
                id="search-panel__select" 
                name="search-panel__select"
                >
                <option className='search-panel__option'>Популярные</option>
                <option className='search-panel__option'>Дешевле</option>
                <option className='search-panel__option'>Дороже</option>
            </select>
            <Checkbox
                className='search-panel__checkbox search-panel__checkbox-free'
                text='Бесплатно' 
                name='search-panel__checkbox-free'
                id='search-panel__checkbox-free'
                />
            <Checkbox 
                className='search-panel__checkbox search-panel__checkbox-certificate'
                text='Сертификат'
                name='search-panel__checkbox-certificate'
                id='search-panel__checkbox-certificate'
                
                />
            <button
                className="search-panel__btn"
                type="submit"
                >
                Поиск
            </button>
        </form>
    );
};

export default SearchPanel;