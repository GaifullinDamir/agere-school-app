import {moonIcon, userIcon} from "../../../shared";

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo'><span>Agere</span></div>
            <div className='header__container'>
                <ul className='header__menu'>
                    <li className='header__menu-item'>Каталог</li>
                    <li className='header__menu-item'>Обучение</li>
                    <li className='header__menu-item'>Преподавание</li>
                </ul>
                <div className='header__user-panel'>
                    <img className='header__theme-icon' src={moonIcon}/>
                    <span className='header__username'>Name Surn...</span>
                    <img className='header__userimg' src={userIcon}/>
                </div>
            </div>
        </header>
    );
};

export default Header;