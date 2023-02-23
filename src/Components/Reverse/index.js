

import React,{Component} from 'react';
import "./index.css"
class reverse extends Component{
    state={
        input_val:"",
        reverse:"",
        isrev:false

    }
    change=event=>{
        const num=(event.target.value)
    this.setState({input_val:num,isrev:false})
    
    
    }
    checkReverse=()=>{
        let {input_val}=this.state
        let stri=input_val;
let str=stri.split("")
console.log(str)
let output=[]
for (let i of str){
output=i+output
}
console.log(output)
let cha=output.split(" ")
console.log(cha)
let ma=[]
for (let j of cha){
ma=j+" "+ma
}

let sai=ma.split(" ")
console.log(sai)
let out=""
for (let i of sai){
  i=i.charAt(0).toUpperCase()+i.slice(1)
   out=out+ ' '+i
}

this.setState({reverse:out,isrev:true})




    }
    render(){
        const {input_val,reverse,isrev}=this.state
        return(
            
            <div className="armstrong_cont">
                <p className='label_sty' for="enter_text">Enter a Word:-</p>
            <input id="enter_text" className="input_width" type="text" onChange={this.change} value={input_val} placeholder="Enter value"/>
            <div className='form_cont'>
               
                <button className='check' onClick={this.checkReverse}>
                    Get Reverse
                </button>
                {isrev?<p className='paragraph'>The  value is {reverse}</p>:""}
            </div>
            </div>

        )
    }
}
export default reverse;