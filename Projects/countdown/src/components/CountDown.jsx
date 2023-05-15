import React,{useState} from "react"


const Count=()=>{
const [check,setCheck]=useState(null);    
const [count,setCount]=useState(20);


const start=()=>{

    if(!check){
        let inter=setInterval(()=>{
        setCount((prev)=> prev-1);
        }
        ,1000)
        return ()=>{clearInterval(inter)}
    }

}

return(
    <div>
      <h2>Count Down </h2>
      <h1>{count}</h1>
      <div>
        <button onClick={start}> Start </button>
        <button> Pause </button>
        <button> Reset </button>
      </div>


    </div>
);
}
export default Count;
