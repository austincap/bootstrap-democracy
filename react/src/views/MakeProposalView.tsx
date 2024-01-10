import IgntCrud from "../components/IgntCrud";
import PortfolioView from "./PortfolioView";
import React, { useState, Component, Children, cloneElement } from "react";
import { createRoot } from 'react-dom/client';
import { useForm, SubmitHandler } from "react-hook-form"
import Select from 'react-select';
import {
  InputGroup,
  Row,
  Form,
  Col,
  FormGroup,
  FormControl
} from "react-bootstrap";

/*CONDITIONAL RENDERING */
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

var currentObjectStatus = "";
var legalObjectStatus = "";
var currentActionStatus = "";
var legalActionStatus = "";

let content;
if (true) {
  content = <PortfolioView />;
} else {
  content = <PortfolioView />;
}


enum LegalObjectEnum {
  user = "user",
  law = "law",
  asset = "asset",
  dispute = "dispute",
  group = "group",
  election = "election"
}

enum LegalActionEnum {
  create = "create",
  modify = "modify",
  vote = "vote",
  cancel = "cancel" 
}

interface IFormInput {
  legalactiontype: LegalActionEnum
  legalobjecttype: LegalObjectEnum
  actionname: string
  targetID: string
  recipientID: string
  upvotes: number
  desc: string
}

function UserForm() {
  return (
    <button>I'm a button</button>
  );
}

function onLegalObjectChange(legalObjectTitle: string) {
  switch(legalObjectTitle) {
    case 'user':
      return 'bar';
    case 'law':
      return 'bar';
    case 'definition':
      return 'bar';
    case 'asset':
      return 'bar';
    case 'dispute':
      return 'bar';
    case 'group':
      return 'bar';
    case 'election':
      return 'bar';
    default:
      return 'foo';
  }
}

export default function MakeProposalView(this: any) {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(JSON.parse(JSON.stringify(data)))

  return (
  <form onSubmit={handleSubmit(onSubmit)} id="proposalForm">
    <b className="proposaltitleheading">Take a legal action</b>

    <label htmlFor="legalobjecttype">Choose a legal object:</label>
      <select {...register("legalobjecttype")} onChange={(e) => onLegalObjectChange(e.target.value)} value={this.state.value}>
        <option value="user">user</option>
        <option value="law">law</option>
        <option value="definition">definition</option>
        <option value="asset">asset</option>
        <option value="dispute">dispute</option>
        <option value="group">group</option>
        <option value="election">election</option>
      </select>
      <br/><br/>

    <label htmlFor="legalactiontype">Choose an action:</label>
      <select {...register("legalactiontype")}>
        <option value="create">create</option>
        <option value="modify">modify</option>
        <option value="vote">vote</option>
        <option value="cancel">cancel</option>
      </select>
      <br/><br/>

    <label htmlFor="upvotes">Stake some voting power:</label>
      <input {...register("upvotes")} type="number" min="0" step="1"/>
       <br/><br/>

    <label htmlFor="actionname">40 character or less title:</label>
      <input {...register("actionname")} type="text" name="actionname"/>
      <br/><br/>
    <label htmlFor="targetID">Target ID:</label>
      <input {...register("targetID")} type="text" name="targetID"/>
      <br/><br/>
    <label htmlFor="recipientID">Recipient ID:</label>
      <input {...register("recipientID")} type="text" name="recipientID"/>
      <br/><br/>

    <label htmlFor="desc">Description:</label>
      <textarea {...register("desc")} name="desc"></textarea>
      <br/><br/>

    <input type="submit" />
  </form>
  )
}

// function changeLegalObject(legalObjectTitle: string) {
//   currentObjectStatus = legalObjectTitle;
//   alert(currentObjectStatus);
// }

// function changeLegalAction(legalActionTitle: string) {
//   currentActionStatus = legalActionTitle;
//   alert(currentActionStatus);
// }
// const [text, setText] = useState('');


/*{ <label>First Name</label>
<input {...register("firstName")} />
<label>Gender Selection</label>
<select {...register("gender")}>
  <option value="female">female</option>
  <option value="male">male</option>
  <option value="other">other</option>
</select> }*/




// export default function MakeProposalView() {
//   // const root = createRoot(document.body);
//   // root.render(<App />);
//   // var propForm = document.getElementById("proposalForm");
//   // propForm.on("submit",function () {
//   //   submitProposal(propForm);
//   //   return false;
//   //  });
//   return (
//     <div>
//       <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height:user.imageSize }} />
    
//       <b className="proposaltitleheading">Take a legal action</b>
//       <form id="proposalForm">
//       <label htmlFor="legalobjecttype">Choose a legal object:</label>
//       <select value={legalObjectStatus} onChange={e=>{changeLegalObject(e.target.value)}} name="legalobjecttype">
//         <option value="user">user</option>
//         <option value="law">law</option>
//         <option value="asset">asset</option>
//         <option value="dispute">dispute</option>
//         <option value="group">group</option>
//         <option value="election">election</option>
//       </select>
//       <br/><br/>

//       <label htmlFor="legalactiontype">Choose an action:</label>
//       <select value={legalActionStatus} onChange={e=>{changeLegalAction(e.target.value)}} name="legalactiontype">
//         <option value="create">create</option>
//         <option value="modify">modify</option>
//         <option value="vote">vote</option>
//         <option value="cancel">cancel</option>
//       </select>
//       <br/><br/>

//       <label htmlFor="amountofvotingpower">Stake some voting power:</label>
//       <input type="number" name="amountofvotingpower" min="0" step="1"/>
//       <br/><br/>

//       <label htmlFor="actionname">40 character or less title:</label>
//       <input value={text} onChange={e => setText(e.target.value)} required type="text" name="actionname"/><br/><br/>
//       <label htmlFor="targetID">Target ID:</label>
//       <input type="text" name="targetID"/><br/><br/>
//       <label htmlFor="recipientID">Recipient ID:</label>
//       <input type="text" name="recipientID"/><br/><br/>

//       <label htmlFor="description">Description:</label>
//       <textarea maxlength="400" name="description" rows="4" cols="50">
//       Describe what you're doing in 400 characters or less if creating
//       </textarea>

//       <button type="submit">Submit proposal</button>

//       </form> 
//       {/* Uncomment the following component to add a form for a `modelName` -*/}
//       {/* (<IgntCrud storeName="OrgRepoModule" itemName="modelName" />) */}
//       {content}
//     </div>
//   );
// }


// class App extends Component {
  
//   render(){
//   return (
//     <ul>
//   <div>
//       <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height:user.imageSize }} />
    
//       <b className="proposaltitleheading">Take a legal action</b>
//       <form id="proposalForm">
//       <label htmlFor="legalobjecttype">Choose a legal object:</label>
//       <select value={legalObjectStatus} onChange={e=>{changeLegalObject(e.target.value)}} name="legalobjecttype">
//         <option value="user">user</option>
//         <option value="law">law</option>
//         <option value="asset">asset</option>
//         <option value="dispute">dispute</option>
//         <option value="group">group</option>
//         <option value="election">election</option>
//       </select>
//       <br/><br/>

//       <label htmlFor="legalactiontype">Choose an action:</label>
//       <select value={legalActionStatus} onChange={e=>{changeLegalAction(e.target.value)}} name="legalactiontype">
//         <option value="create">create</option>
//         <option value="modify">modify</option>
//         <option value="vote">vote</option>
//         <option value="cancel">cancel</option>
//       </select>
//       <br/><br/>

//       <label htmlFor="amountofvotingpower">Stake some voting power:</label>
//       <input type="number" name="amountofvotingpower" min="0" step="1"/>
//       <br/><br/>

//       <label htmlFor="actionname">40 character or less title:</label>
//       <input value={text} onChange={e => setText(e.target.value)} required type="text" name="actionname"/><br/><br/>
//       <label htmlFor="targetID">Target ID:</label>
//       <input type="text" name="targetID"/><br/><br/>
//       <label htmlFor="recipientID">Recipient ID:</label>
//       <input type="text" name="recipientID"/><br/><br/>

//       <label htmlFor="description">Description:</label>
//       <textarea maxlength="400" name="description" rows="4" cols="50">
//       Describe what you're doing in 400 characters or less if creating
//       </textarea>

//       <button type="submit">Submit proposal</button>

//       </form> 
//       {/* Uncomment the following component to add a form for a `modelName` -*/}
//       {/* (<IgntCrud storeName="OrgRepoModule" itemName="modelName" />) */}
//       {content}
//     </div>
//     </ul>
//   );
// }
// }

