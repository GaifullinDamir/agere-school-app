type ButtonType = JSX.IntrinsicElements['button']['type'];

type ButtonProps = {
    text: string,
    className: string,
    type?: ButtonType
};

const Button = ({text, className, type = 'button'}: ButtonProps) => {
    return (
        <button
            className={`button ${className}`}
            type={type}
            >
            {text}
        </button>
    );
};

export default Button;