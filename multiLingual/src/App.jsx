import { useEffect, useState } from "react";
import "./App.css"
import axios, { Axios } from "axios"

const App=()=>{
  const [options,setOption]=useState([]);
  const [to,setTo]=useState("hi");
  const [from,setFrom]=useState("en");
  const [input,setInput]=useState();
    const [output, setOutput] = useState('');

  const traslate= async ()=>{
    {
      /*curl -X POST "https://libretranslate.org/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&format=text&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
       */
    }
    const params=new URLSearchParams();
    params.append('q',input);
     params.append('source',from);
     params.append('target', to);
     params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    
const respect=await  axios.post(
        "https://libretranslate.org/translate",params,
        {
          q: input,
          source: from,
          target: to,
          api_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          }
        }
      )
      
        console.log(respect.data)
        setOutput(respect.data.translatedText);
      
  }

 
    

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
          <select
            onChange={(e) => {
              setFrom(e.target.value);
            }}
          >
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
          <select
            onChange={(e) => {
              setTo(e.target.value);
            }}
          >
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
        <textarea
          rows={4}
          cols={40}
          onInput={(e) => {
            setInput(e.target.value);
          }}
        ></textarea>
        <textarea rows={4} cols={40} value={output}>
       
          {output}
        </textarea>
      </div>
      <div>
        <button
          onClick={(e) => {
            traslate();
          }}
        >
          translate
        </button>
      </div>
    </>
  );
}
export default App;