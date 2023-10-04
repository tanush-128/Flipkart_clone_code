import './filter.css'
import React, {useState} from 'react';
class Filter{
    id: string;
    filterName: string;
    filterOptions: string[];
    constructor(id: string, filterName:string, filterOptions: string[]){     
        this.id = id;
        this.filterName = filterName;
        this.filterOptions = filterOptions;   
    } 
}

function FilterWidget({filter}: {filter: Filter}){
    const [expanded, setExpanded] = useState(false)
    // var expanded = false;    
    
    return(
        console.log(filter.filterName),
        <div className="filter" key={filter.id} >
            <div className="filterHeader" onClick={()=>setExpanded(!expanded)} >
            <div className="filterTitle">{filter.filterName.toUpperCase()}</div>
          
      
            <div className="filterIcon" > <button type="button" >+</button></div>
            </div>
            
            <div className="filterOptions" id={'options'+filter.id} style={expanded ? {display:'block'} : {display: "none"}}>
             {filter.filterOptions.map((option) => (
                <div className="filterOption" >
               <input className='checkBox' type="checkbox" placeholder='' /> {option}</div>
            ))}
        
            </div>

          
        </div>
    );
}

export {Filter, FilterWidget}; 