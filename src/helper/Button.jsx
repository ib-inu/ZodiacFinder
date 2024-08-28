import styles from './Button.module.css';

function Button({ text, width = "9vw", height = "6vh", onClick }) {
    return (
        <button onClick={onClick} className={styles.btn__primary} style={{ width, height }}>
            {text}
        </button>
    );
}

export default Button;