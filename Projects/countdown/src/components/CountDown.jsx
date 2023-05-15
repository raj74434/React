import React,{useState} from "react"
import style from "./Count.module.css"

const Count=()=>{
const [check,setCheck]=useState(null);    
const [count,setCount]=useState(20);


const start=()=>{

    if(!check){
        let inter=setInterval(()=>{
        setCount((prev)=> prev-1);
        }
        ,1000)
        setCheck(inter);
    }

}

const pause=()=>{
    clearInterval(check)
    setCheck(null);
}
const reset=()=>{
    clearInterval(check);
    setCount(20);
    setCheck(null);
}

return(
    <div>
      <h2>Count Down </h2>
      <h1>{count}</h1>
      <div>
        <button className={style.buttons}  onClick={start}> Start </button>
        <button className={style.buttons} onClick={pause}> Pause </button>
        <button className={style.buttons} onClick={reset}> Reset </button>
      </div>


    </div>
);
}
export default Count;
