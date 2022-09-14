import 'swiper/swiper.min.css';
import './App.scss';

import Header from './components/header/header';
import Home from './components/header/home';
import About from './components/header/about';
import Logo from './assets/logo192.png';
import Header2 from './components/header/header2';
import { BrowserRouter as Router, Route , Link, Routes} from 'react-router-dom';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useState } from 'react';
let dat = "canceled";

function App() {

  const[val,setVal]=useState([]);
  const handelAdd=()=>{
    setVal([...val,{workflowname:'',id:'',utilities:'',options:'', add:[]}])
  }
  const[val2,setVal2]=useState([]);
  const handelAdd2=(inp)=>{
   setVal([...val],val[inp].add.push({workflowname2:'' , utilities2:'',options2:''}))
  }
  const handelchange=(ind)=>{
    const list=[...val];
    list.splice(ind,1);
    setVal(list);
  }                                 

  function sel(){
    document.getElementById("block2").style.cssText=("opacity:100;pointer-events:all;");
    document.getElementById("createbut").style.cssText=("opacity:100;pointer-events:all;");
    document.getElementById("canbut").style.cssText=("opacity:100;pointer-events:all;");
  }
  function inputselect(ind,nam){
    document.getElementById(ind).type=nam;
  }
  return (
    <div>
          <Header/>
    <div>
    <div className='left'>
    <img className='logo1' src={Logo} alt="loading"/>
            <ul>
                <a href="">Admin Dashboard</a><span>/</span>
                <a href="">Call Drivers</a><span>/</span>
                <li>Create Call Drivers</li>
            </ul>
            </div>
    </div>
    <div>
    <div className='main-block'>
      <section className='innersec'>
        <section className='flex' id="default-flow-but">
            <section>Create Workflow</section>
            <input type="text" className='plus' value="+" readOnly onClick={sel} />
        </section>
        <section id="block2">
          <section className='flex'>
              <section>WorkflowName</section>
             <input type="text" placeholder='Work Flow Name' className='wfname'/>
          </section>
          <section><input type="button" value="Add Nodes" className='addnodes' onClick={handelAdd}/></section>
        </section>
        {val.map((value,index) => (
          <section  key={index.toString()}>
           <section className='flex'>
           <input type="text" placeholder={index} />
           <input type="button" value="Add Nodes" className='addnodes' onClick={()=>handelAdd2(index)}/>
           <select className='select' onChange={(e) => {inputselect(index,e.target.value)}}><option value="none">Add Utilities</option><option value="radio">Radio Button</option><option value="text">Text Box</option><option value="url">Hyper Link</option><option value="vedio/mp4">Vedio</option><option value="audio/mpeg">Audio</option><option value="file">Image</option></select>
           <input type=""  id={index} className='soursel'/>
           <button className='deletebut' onClick={() => handelchange(index)}>delete</button>
           </section>
           {value.add.map((sing,ind) => (
            <section className='childnode' key={index.toString()+"a"+ind}>
              <input type="text" placeholder={index+"a"+ind}/>
           <select className='select ' onChange={(e) => inputselect(index+"a"+ind,e.target.value)}><option value="none">Add Utilities</option><option value="radio">Radio Button</option><option value="text">Text Box</option><option value="url">Hyper Link</option><option value="vedio/mp4">Vedio</option><option value="audio/mpeg">Audio</option><option value="file">Image</option></select>
           <input type=""  id={index+"a"+ind} className='soursel'/>
            </section>
           ))}
           </section>
        ))}
        </section>
    </div>
    <div>
      <center>
    <input id="createbut" className='wfbut' type="button" value="Create Workflow"/><input id="canbut" className='cancelbut' type="button" value="Cancel" />
    </center>
    </div>
    </div>
    </div>
  );
}


export default App;
