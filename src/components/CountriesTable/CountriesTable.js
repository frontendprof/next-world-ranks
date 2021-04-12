
import { useState } from 'react';
import KeyboardArrowDownRoundedIcon from '@material-ui/icons/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@material-ui/icons/KeyboardArrowUpRounded';
import styles from "./CountriesTable.module.css";


const orderBy=(countries,value,direction)=>{

    if(direction==="asc"){
        return [...countries].sort((a,b)=>(a[value]>b[value]?1:-1))
    }

    if(direction==="desc"){
        return [...countries].sort((a,b)=>(a[value]<b[value]?1:-1))
    }

    return countries

    // At the end, you can change countries name
}

const SortArrow=({direction})=>{
    if(!direction){
        return <></>
    }

    if(direction==="desc"){
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRoundedIcon color="inherit"/>
            </div>
        )
    }

    else{
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRoundedIcon color="inherit"/>
            </div>
        )
    }
}

const CountriesTable=({countries})=>{
    const [direction,setDirection]=useState();
    const [value,setValue]=useState();


    const orderedCountries=orderBy(countries,value,direction)

    const switchDirection=()=>{
        if(!direction){
            setDirection("desc")
        }else if(direction==="desc"){
            setDirection("asc")
        }else{
            setDirection(null)
        }
    }

    const setValueAndDirection=value=>{
        switchDirection();
        setValue(value)
    }
    return(
        <div>
            <div className={styles.heading}>

                <button className={styles.heading_name} onClick={()=>setValueAndDirection("name")}>
                    <div>Name</div>
                    
                    <SortArrow direction={direction}/>

                </button>

                <button className={styles.heading_population} onClick={()=>setValueAndDirection("population")}>
                    <div>Population</div>

                    <SortArrow direction={direction}/>

                </button>


            </div>

            {orderedCountries.map(c=>(
                <div className={styles.row} key={c.name}>
                    <div className={styles.name}>{c.name}</div>
                    <div className={styles.population}>{c.population}</div>
                </div>
            ))}
        </div>
    )
}

export default CountriesTable;