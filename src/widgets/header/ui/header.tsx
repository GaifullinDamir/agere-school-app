import {useState} from "react";
import {moonIcon, userIcon} from "../../../shared";
import {DropDown} from "../../dropdown";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = [
        {text: 'Профиль'},
        {text: 'Настройки'},
        {text: 'Что нового?'},
        {text: 'Уведомления'},
        {text: 'Выход'}
    ];

    ['Профиль', 'Настройки', 'Что нового?', 'Уведомления', 'Выход']
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
                    <img
                        className='header__userimg'
                        src={userIcon}
                        onClick={() => setIsOpen(!isOpen)}/>
                </div>
                <DropDown menuItems={menuItems} isOpen={isOpen}/>
            </div>
        </header>
    );
};

export default Header;