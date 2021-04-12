
import styles from "./CountriesTable.module.css"

const CountriesTable=({countries})=>{
    return(
        <div>
            <div className={styles.heading}>

                <button className={styles.heading_name}>
                    <div>Name</div>
                </button>

                <button className={styles.heading_population}>
                    <div>Population</div>
                </button>

            </div>

            {countries.map(c=>(
                <div className={styles.row} key={c.name}>
                    <div className={styles.name}>{c.name}</div>
                    <div className={styles.population}>{c.population}</div>
                </div>
            ))}
        </div>
    )
}

export default CountriesTable;