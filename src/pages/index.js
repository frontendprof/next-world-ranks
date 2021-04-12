
import {useState} from "react";

import Layout from "../components/Layout/Layout";
import SearchInput from '../components/SearchInput/SearchInput';
import CountriesTable from "../components/CountriesTable/CountriesTable";
import styles from '../styles/Home.module.css'

export default function Home({countries}) {
  console.log(countries);

  const [keyword,setKeyword]=useState("")
  

  const filteredCountries=countries.filter(con=>(
    con.name.toLowerCase().includes(keyword) ||
    con.region.toLowerCase().includes(keyword) ||
    con.subregion.toLowerCase().includes(keyword)
  ))

  const onInputChange=(e)=>{
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }

  return(
    <Layout>
      <div className={styles.counts}>Found {countries.length} countries</div>
      <SearchInput placeholder="Filter by name, region or subregion" onChange={onInputChange}/>

      <CountriesTable countries={filteredCountries}/>
    </Layout>
  )
}


export const getStaticProps=async()=>{

  const res=await fetch("https://restcountries.eu/rest/v2/all");
  const countries=await res.json();

  return{
    props:{
      countries,
    }
  }
}