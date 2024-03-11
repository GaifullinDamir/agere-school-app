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
            <label className='search-panel__label'>
            <input
                className='search-panel__checkbox search-panel__checkbox-free'
                type='checkbox'
                name='search-panel__checkbox-free'
                id='search-panel__checkbox-free'
                /><div>Бесплатно</div>
            </label>
            <label className='search-panel__label'>
            <input
                className='search-panel__checkbox search-panel__checkbox-certificate'
                type='checkbox'
                name='search-panel__checkbox-certificate'
                id='search-panel__checkbox-certificate'
                /><div>Сертификат</div>
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