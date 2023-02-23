

import React,{Component} from 'react';
import "./index.css"
class palindrome extends Component{
    state={
        input_val:"",
        palindrome:"",
        ispalin:false

    }
    change=event=>{
        const num=(event.target.value)
    this.setState({input_val:num,ispalin:false})
    
    
    }
    checkPalindrome=()=>{
        const {input_val}=this.state
        const le=input_val.length
        const lower=input_val.toLowerCase()
        console.log(lower)
        let check=""
        let palin
        for (let i=0;i<le;i++){
            check=lower[i]+check
        }
        
        console.log(check)
        if (check===lower){
            palin="Is an Palindrome"
        }else{
            palin="Is Not an Palindrome"
        }
        this.setState({palindrome:palin,ispalin:true})
    }
    render(){
        const {input_val,palindrome,ispalin}=this.state
        return(
            
            <div className="armstrong_cont">
                <p className='label_sty' for="enter_text">Enter the Number:-</p>
            <input id="enter_text" className="input_width" type="text" onChange={this.change} value={input_val} placeholder="Enter value"/>
            <div className='form_cont'>
               
                <button className='check' onClick={this.checkPalindrome}>
                    Check Palindrome
                </button>
                {ispalin?<p className='paragraph'>The entered value ({input_val}) {palindrome}</p>:""}
            </div>
            </div>

        )
    }
}
export default palindrome;