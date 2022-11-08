import styles from './frase.module.css'

function Frase(){
    return(
        <div className={styles.FraseContainer}>
            <p className={styles.FraseContent}>Este éu um componente com uma frase !</p>
        </div>
    )
}
export default Frase;