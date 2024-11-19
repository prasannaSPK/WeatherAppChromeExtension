//import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Cities = ({ citylist }) => {

    const [apidata, setData] = useState([]);
    const [error, setError] = useState(null);

    const [clickTrigger, setClickTrigger] = useState(false);

    const [city,setCity] = useState('');

  const handleClick = (cityName) =>{
       alert(`you clicked on ${cityName}`);
       setCity(cityName);
       setClickTrigger((prev) => !prev);

  } ;
  
  useEffect(() => {
    if(clickTrigger){
        //desired action .....
        const fetchData = async () => {
            try {
              const response = await axios.get('http://dataservice.accuweather.com/locations/v1/cities/autocomplete' , {
                  params:{
                      apikey : 'RN3LXAK3kNvLTrWSKAam2ogWyg75rqCV' ,
                      q :    city                   ,
                      //language : 'en-us'
                  }
              });
              setData(response);
            } catch (error) {
              setError(error.message);
            }
          };
          //
          fetchData();
          filterForUSAOnlyData();
          //console.log("data fetched is :" +data);
    }


    
  }, [clickTrigger]);


  const filterForUSAOnlyData=()=>{
    console.log("welcome 2 data " ,apidata)
    
//const jsondata = {data};
    if(apidata.data!=undefined){
        const filteredData = apidata.data.filter((item) => 
            //console.log(item)
            item.Country.ID === "US" && item.Country.LocalizedName === "United States"
          );
          filteredData.filter(item=> console.log("key of each city is :" + item.Key + "city name is: " + item.LocalizedName))
          console.log("filtered data is " + filteredData);
    }

  }


  return (
    <div>
       {citylist.map((item,index)=>(
        <button key={index}  onClick={()=>handleClick(item)}>{item}</button>
       ))}
      
      <p>Welcome to Cities Component:: This is component 1.</p>
    </div>
  );
};

export default Cities;
