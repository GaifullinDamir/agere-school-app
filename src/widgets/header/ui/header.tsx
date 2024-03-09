import {moonIcon, userIcon} from "../../../shared";

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'><span>Agere</span></div>
            <ul className='header__menu'>
                <li className='header__menu-item'>Каталог</li>
                <li className='header__menu-item'>Обучение</li>
                <li className='header__menu-item'>Преподавание</li>
            </ul>
            <img className='header__theme-icon' src={moonIcon}/>
            <div className='header__user'>
                <span className='header__username'>Name Surname</span>
                <img className='header__userimg' src={userIcon}/>
            </div>
        </header>
    );
};

export default Header;