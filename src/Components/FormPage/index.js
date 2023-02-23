import React,{Component} from 'react';
import "./index.css";
class form extends Component{
    state={
        input_val:"",
        isPrime:false,
        isPrimeRes:"",
        fac_val:"",
        isFac:false,
        fibb_val:"",
        isFibb:false,
      
        isShowErr:false

    }
    checkPrime=()=>{
        const {input_val}=this.state
        const n=parseInt(input_val)
        let res
        
        if (n=== "" || n<2 ) {
            res="--Enter valid value"
           this.setState({isShowErr:true})
          }
          else if (n===2){
            res="--Prime "
          }
            else{
            
             let prime=false;
          for (let i = 2; i <n; i++) {
            if (n % i === 0) {
              prime= true;
              
            }
            if (prime===false){
                res="--Prime"
            }else{
                res="--Not a Prime Number"
            }
          }
        }
          this.setState({isPrimeRes:res,isPrime:true});
         
        };
    
    change=event=>{
        const num=(event.target.value)
    this.setState({input_val:num})
    if (num===""){
        this.setState({isFibb:false,isFac:false,isPrime:false})
        
    }else{
        this.setState({isShowErr:false})
    }
    
    }
    Fibbonaci=()=>{
        const {input_val}=this.state
       
        let n=parseInt(input_val)
       
       
        let num1=0;
        let num2=1;
        let sum;
        let  i=0;
        for (i = 0; i < n; i++) {
            sum=num1+num2;
            num1=num2;
            num2=sum;
        }
        if (n<=0 ){
            num2="Enter valid value"
        }
        this.setState({fibb_val:num2,isFibb:true}) ;
        
    }
   
   factorial=()=>{
   
    const {input_val}=this.state
    let fac=1
     if (input_val<=1 ){
         fac="Enter Valid value"
     }
    
    for (let i=2;i<=input_val;i++ ){
         fac=fac*i
    }

    this.setState({fac_val:fac,isFac:true})
   
    
   }
    render(){
        const {input_val,isPrime,isPrimeRes,fac_val,isFac,isFibb,fibb_val,isShowErr}=this.state
        return(
            <div className='form_page'>
            <label className='label_sty' for="enter_text">Enter the Number:-</label>
            <input id="enter_text" className="input_width" type="text" onChange={this.change} value={input_val} placeholder="Enter value"/>
           
          {isShowErr?<p className='para'>Enter Valid Number</p>:""}  
            <div className='form_container'>
                <div className='check_cont'>
                <button className='check' onClick={this.checkPrime}>
                    Check Prime
                </button>
                {isPrime?<p className='paragraph'>The number {input_val} is {isPrimeRes}</p>:<p className='paragraph'>The number {input_val} </p>}
                
                </div>
                <div className='check_cont'>
                <button className='check' onClick={this.factorial}>
                    Factorial value
                </button>
               
                {isFac?<p className='paragraph'>The Factorial value of {input_val} -- {fac_val} </p>:<p className="paragraph">Factorial value of {input_val} </p>}
               
                </div>
                <div className='check_cont'>
                <button className='check' onClick={this.Fibbonaci}>
                     Fibbonaci term
                </button>
                {isFibb?<p className='paragraph'>The term of {input_val} --{fibb_val}</p>:<p className='paragraph'>The term of {input_val} </p>}
               </div>
            </div>
            
        </div>
        )
    }
}


export default form;