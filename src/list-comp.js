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
    const arrayItm =this.props.changeInputValue;
    return(
      <div>
      // {this.props.changeInputValue}
      <Table>
    <TableBody>
    {arrayItm.map((item, index) =>{
          return (
            <TableRow key={index}>
              <TableCell numeric >
              {item}
               </TableCell>
              <IconButton aria-label="Edit" onClick = { ()=>{
                this.editItem(item, index)}
              }>
   <EditIcon />
   </IconButton>
      <IconButton aria-label="Delete" onClick ={() =>{
        this.deleteItem(item,index)
       }}>
        <DeleteIcon />
      </IconButton>
            </TableRow>
          );
        })}
      </TableBody>
      </Table>
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
