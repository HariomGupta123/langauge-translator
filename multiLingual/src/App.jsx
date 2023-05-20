import { useEffect, useState } from "react";
import "./App.css"
import axios from "axios"

const App=()=>{
  const [options,setOption]=useState([]);
  const [to,setTo]=useState("english");
  const [from,setFrom]=useState("hindi");
  
      

 
    

useEffect(()=>{
   {/*axios.get('https://libretranslate.com/languages',
    {headers:{"Accept": "application/json,text/*;q=0.99"}}).then(res=>{
      console.log(res);
     setOption( res.data);
    })*/}
     const fetch = async () => {
       const res = await axios.get("https://libretranslate.com/languages", {
         headers: { accept: "application/json" },
       });
       console.log(await res.data);

       setOption(res.data);
     };
fetch();
  
  
},[]);
{
  /*curl -X 'GET' \
  'https://libretranslate.com/languages' \
  -H 'accept: application/json' */
}

  return (
    <>
      <h1>multilingaul</h1>
      <div className="select">
        <div>
        from({from}):
          <select onChange={(e)=>{setFrom(e.target.value)}}>
            {options.map((opt) => {
              return (
                <option value={opt.code} key={opt.code}>
                  {opt.name}
                </option>
              );
            })}
          </select>
        </div>
        <div>
        to({to}):
          <select onChange={(e)=>{setTo(e.target.value)}}>
            {options.map((opt) => {
              return (
                <option value={opt.code} key={opt.code}>
                  {opt.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div>
        <textarea rows={4} cols={40}></textarea>
        <textarea rows={4} cols={40}></textarea>
      </div>
    </>
  );
}
export default App;