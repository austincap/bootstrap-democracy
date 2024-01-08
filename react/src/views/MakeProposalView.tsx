import IgntCrud from "../components/IgntCrud";
import PortfolioView from "./PortfolioView";




/*CONDITIONAL RENDERING */
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};
let content;
if (true) {
  content = <PortfolioView />;
} else {
  content = <PortfolioView />;
}


export default function MakeProposalView() {
  return (
    <div>
      <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{ width: user.imageSize, height:user.imageSize }} />
    
      <b className="proposaltitleheading">Take a legal action</b>
      <form action="">
      <label htmlFor="legalobjecttype">Choose a legal object:</label>
      <select name="legalobjecttype" id="legalobjecttypes">
        <option value="user">user</option>
        <option value="law">law</option>
        <option value="asset">asset</option>
        <option value="dispute">dispute</option>
        <option value="group">group</option>
        <option value="election">election</option>
      </select>
      <br/><br/>

      <label htmlFor="legalactiontype">Choose an action:</label>
      <select name="legalactiontype" id="legalactiontypes">
        <option value="create">create</option>
        <option value="modify">modify</option>
        <option value="vote">vote</option>
        <option value="cancel">cancel</option>
      </select>
      <br/><br/>

      <label htmlFor="amountofvotingpower">Stake some voting power:</label>
      <input type="number" min="0" step="1"/>
      <br/><br/>

      <label htmlFor="actionname">40 character or less title:</label>
      <input type="text" id="actionnametext" name="actionname"/><br/><br/>
      <label htmlFor="targetID">Target ID:</label>
      <input type="text" id="targetIDtext" name="targetID"/><br/><br/>
      <label htmlFor="recipientID">Recipient ID:</label>
      <input type="text" id="recipientIDtext" name="recipientID"/><br/><br/>

      <label htmlFor="description">Description:</label>
      <textarea id="descriptionarea" maxlength="400" name="description" rows="4" cols="50">
      Describe what you're doing in 400 characters or less if creating
      </textarea>

      </form> 
      {/* Uncomment the following component to add a form for a `modelName` -*/}
      {/* (<IgntCrud storeName="OrgRepoModule" itemName="modelName" />) */}
      {content}
    </div>
  );
}
