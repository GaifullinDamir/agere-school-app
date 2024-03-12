import {useState} from 'react';

type CheckboxProps = {
    className?: string
    text: string,
    name?: string,
    id?: string
}

const Checkbox = ({className, text, name, id}: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
    <div className={`checkbox ${className}`}>
        <label className='checkbox__label'>
            <input
                className='checkbox__input'
                type="checkbox"
                name={name}
                id={id}
                onChange={() => {
                setIsChecked(!isChecked);
                }}
            />
            <span
                className={`checkbox__span ${isChecked ? 'checkbox__span_active' : ''}`}
                aria-hidden="true"
            />
            <div className='checkbox__text'>{text}</div>
        </label>
    </div>
  );
};

export default Checkbox;