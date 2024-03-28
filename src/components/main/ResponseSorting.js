export const ResponseSorting=(sortingType="",response)=>{
    sortingType=sortingType.toLowerCase();
    // response=response.slice(0,20);
    response=[...response];
    if(sortingType==="lowest"){
        response.sort((a,b)=> a.price-b.price)
        console.log("sbskllknas", response);
        
    }
    else if(sortingType==="highest"){
        response.sort((a,b)=> b.price-a.price)

    }
    else if(sortingType==="a2z"){
        response.sort((a,b)=> (a.title>b.title)?1:-1)

    }
    else if(sortingType==="z2a"){
        response.sort((a,b)=> (b.title>a.title)?1:-1)

    }
    return response;
}
