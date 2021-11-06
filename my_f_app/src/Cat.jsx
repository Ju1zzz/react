import React, {useState} from 'react'

const Cat = () => {
    const [catUrl, setCarUrl] = useState(null)
    const [isLoading, SetIsLoading] = useState(false)
    const getCat = async () =>{
    SetIsLoading(true);
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await response.json();
      setCarUrl(data[0].url);
      SetIsLoading(false)
    }
    
    return (
       <div>
        <button onClick = {getCat}>Update</button> 
        <div>
         {catUrl && <img src={catUrl} width='400'/>} 
         {!catUrl && <p>Picture isn't loaded yet</p>}
         {isLoading &&<p>Picture is loading...</p>}
        </div>
        
        {/* ложные - false null undefined 0 пустая строка nun */}

        </div> 
    )
        
    
}

export default Cat
