import React from 'react'
import { useDispatch } from 'react-redux';
import { sortingFormat } from '../../features/sort/sortSlice';

function Sort() {
    const sortDispatch =useDispatch();
    function setSortType(e){
        try{

            console.log(e.target.value);
            sortDispatch(sortingFormat(e.target.value));
        }
        catch(e){
            console.log("error",e)
        }
    }
   
  return (
    <div >
            <label htmlFor='selectedSort'>Sort: </label>
            <select  id='selectedSort' onChange={(e)=>{setSortType(e)}} style={{border:"2px solid black"}}>
                <option  value="">-- Select --</option>
                <option  value="Lowest">Price:Low to high</option>
                <option value="highest">Price:high to Low</option>
                <option value="a2z">a-z</option>
                <option value="z2a">z-a</option>

            </select>
        
    </div>
  )
}

export default Sort