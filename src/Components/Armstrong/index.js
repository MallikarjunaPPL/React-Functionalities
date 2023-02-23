import React,{Component} from 'react';
import "./index.css"
class armstrong extends Component{
    state={
        input_val:"",
        armstrong:"",
        isArm:false

    }
    change=event=>{
        const num=(event.target.value)
    this.setState({input_val:num,isArm:false})
    
    
    }
    checkArmstrong=()=>{
        const {input_val}=this.state
        
        const le=input_val.length
        let arm
        let sum=0
        for (let i=0;i<le;i++){
            let n=parseInt(input_val[i])
            console.log(n)
            sum+=n**le
           
        }
        console.log(sum)
        if (sum===parseInt(input_val)){
            arm="--Is an Armstrong number"
        }else{
            arm="--Is Not an Armstrong number"
        }
        this.setState({armstrong:arm,isArm:true})
    }
    render(){
        const {input_val,armstrong,isArm}=this.state
        return(
            
            <div className="armstrong_cont">
                <p className='label_sty' for="enter_text">Enter the Number:-</p>
            <input id="enter_text" className="input_width" type="text" onChange={this.change} value={input_val} placeholder="Enter value"/>
            <div className='form_cont'>
               
                <button className='check' onClick={this.checkArmstrong}>
                    Check Armstrong
                </button>
                {isArm?<p className='paragraph'>The entered value ({input_val}) {armstrong}</p>:""}
            </div>
            </div>

        )
    }
}
export default armstrong;