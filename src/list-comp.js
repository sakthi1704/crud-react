import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import EditIcon from '@material-ui/icons/ModeEdit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import handleChangeAction from './actions/handle_change';
import handleSubmitAction from './actions/handle_submit';

class ListComp extends Component {
  // code to display list of values from input box [todo]

  constructor(props) {
    super(props);
  }
  render(){
    const arrayItm1 =[this.props.submitInputValue];
    console.log(arrayItm1);
    return(
      <div>
<ul>
{arrayItm1.map((item, i) =>{
  <li> {item} </li>
  console.log({item})
 })}
</ul>
        </div>
    );
  }
}
function mapStateToProps(state) {

  console.log('list ', state.todo);
  return {
    changeInputValue: state.todo,
    submitInputValue: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleChangeAction,
    handleSubmitAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListComp);
