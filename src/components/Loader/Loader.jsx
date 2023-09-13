import styles from './loader.module.css';
export default function Loader() {
    return (
        <main className={styles.main}>
            <div className={styles["lds-roller"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </main>
    )
};  
