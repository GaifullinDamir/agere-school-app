const SearchPanel = () => {
    return (
        <form className='search-panel'>
            <input
                    className='search-panel__input'
                    required
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
                <option>Популярные</option>
                <option>Дешевле</option>
                <option>Дороже</option>
            </select>
            <label className='search-panel__label'>
                <input
                    className='search-panel__checkbox-free'
                    type='checkbox'
                    name='search-panel__checkbox-free'
                    id='search-panel__checkbox-free'
                    />Бесплатно
            </label>
            <label className='search-panel__label'>
            <input
                className='search-panel__checkbox-certificate'
                type='checkbox'
                name='search-panel__checkbox-certificate'
                id='search-panel__checkbox-certificate'
                />Сертификат
            </label>
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