import { useState,useEffect } from "react";
// import { useSelector } from "react-redux";

// import Lists from "../utils/constants";
import ListCard from "./ListCard";
const Body=()=>{
    console.log("this")
    const [lists, setLists]= useState([]);
    const [filteredLists, setFilteredLists]= useState([])
    const [searchText, setSearchText]= useState("")
    const updateResults=()=>
        {
            const searchResult = lists.filter((res) => {
                return res.name.toLowerCase().includes(searchText);
              });
           setFilteredLists(searchResult);
        }

    useEffect(()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => {return res.json()})
        .then((results) => {
           setLists(results.recipes);
           setFilteredLists(results.recipes);


        });
        console.log("after")

    },[])

    return<div className="bodyContainer">
    <div className="searchContainer">
        <input type="text" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} placeholder="Search..."/>
        <button onClick={()=>{updateResults()}}>Search</button>
    </div>
    { filteredLists.length===0 ? <>No Matches</>:
    (<div className="listContainer">
        {filteredLists?.map((list)=> <ListCard key={list?.id} listDetails={list} />
        )}
    </div>)
    }
    </div>
    }
    export default Body;