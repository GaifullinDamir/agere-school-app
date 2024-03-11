import {useState} from 'react';

type CheckboxProps = {
    text: string
}

const Checkbox = ({text}: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
    <div className='checkbox'>
        <label className='checkbox__label'>
            <input
                className='checkbox__input'
                type="checkbox"
                onChange={() => {
                setIsChecked(!isChecked);
                }}
            />
            <span
                className={`checkbox__span ${isChecked ? 'checkbox__span_active' : ''}`}
                aria-hidden="true"
            />
            {text}
        </label>
    </div>
  );
};

export default Checkbox;