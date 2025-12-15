import styles from './Spinner.module.css';

function Spinner({ loading }){
    return (
        <div className={`${styles.spinnerOverlay} ${!loading ? styles.hidden : ''}`}>
            <div className={styles.spinnerContainer}>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
                <div className={styles.spinnerCircle}></div>
            </div>
        </div>
    );
};

export default Spinner;
