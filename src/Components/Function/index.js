import React,{Component} from 'react';
import "./index.css";
class Pattern extends Component{
    state={
        ispattern:false,
        inp_val:"",
        pattern_val:""

    }
    change=(event)=>{
        this.setState({inp_val:event.target.value,ispattern:false})
    }
    pattern=()=>{
        const {inp_val}=this.state
        const num=parseInt(inp_val)
        
       
        let pattern ="";
    let currentCharCode = 65; 
    // ASCII code for 'A'
    for (let i = 0; i < num; i++) {
      pattern += String.fromCharCode(currentCharCode + i)+" " ;
      for (let j = 0; j < i; j++) {
        
        pattern += String.fromCharCode(currentCharCode + i)+" ";
      }
      pattern += "\n";
    }


       console.log(pattern)
        this.setState({pattern_val:pattern,ispattern:true})
    }
    
    render(){
          const {inp_val,ispattern,pattern_val}=this.state
        return (
            <div className='pattern_cont'>
                <p className='paragraph'>Enter the Number</p>
                <input className='input_width' type="text" onChange={this.change} value={inp_val} placeholder="Enter value"></input>
                <button className='check' onClick={this.pattern}>Get Pattern</button>
               {ispattern?<pre className='paragraph_1'>{pattern_val}</pre>:""}
            </div>
        );
    }
}
    
export default Pattern;