import React from 'react';
import {ImMail3} from 'react-icons/im';
import "./index.css";
import {ImLinkedin} from 'react-icons/im';

import { FaPhoneSquare} from 'react-icons/fa';
const header = () => {
    return (
        
                 <div className="container">
        <div className="image_cont">
      
      <h1 className="heading">Sai Mallikarjuna Ponnpalli</h1>
      </div>
     <div className="para_cont">
     <p className="paragraph_1"><ImMail3 className="icon_size"/>-mallikarjunasai174@gmail.com </p>
      
     <ImLinkedin className="icon_size "/><a className="anchor_ele" rel="noreferrer" href="https://www.linkedin.com/in/sai-mallikarjuna/" target="_blank">-www.linkedin.com/in/sai-mallikarjuna</a>
      <p className="paragraph_1"><FaPhoneSquare className="icon_size"/>-:9948922146 </p></div>
      </div> 
        
    );
};

export default header;