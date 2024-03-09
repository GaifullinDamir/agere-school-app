type MenuItem = {
    text: string
};

type DropDownProps = {
    menuItems: MenuItem[];
    isOpen: boolean
}

const DropDown = ({menuItems, isOpen}: DropDownProps) => {

    return (
        <ul className={`dropdown ${isOpen ? 'dropdown_hidden' : ''}`} >
            {menuItems.map((item, i) => {
                return <li
                    key={i}
                    className='dropdown__item'
                    >
                    {item.text}
                </li>
            })}
        </ul>
    );
};

export default DropDown;