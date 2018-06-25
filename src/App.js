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
import ListComp from './list-comp';


let arrayItm =[];
let checkItem = false;
let currentItemIndex;

class App extends Component {
  // code to display list of values from input box [todo]
  // let arrayItm =this.props.submitInputValue;
  constructor(props) {
    super(props);
    // this.state = {value: ''};
    // const { changeInputValue } = props;
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.editItem = this.editItem.bind(this);
    // this.updatedItem = this.updatedItem.bind(this);
    // this.currentItem = this.currentItem.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  //
  handleSubmit(event) {
    // event.preventDefault();
       arrayItm.push(this.props.changeInputValue) ;
       console.log(this.props.changeInputValue);
       // this.setState({value: ""});

  }
  // updatedItem(event) {
  //   event.preventDefault();
  //   arrayItm.splice(currentItemIndex, 1, this.state.value)
  //   this.setState({value: ""});
  //   checkItem = false;
  // }
  // currentItem(item, index) {
  //   console.log("currentItem", item, index);
  // }
  // deleteItem(item, index){
  //   if (arrayItm[index] === item) {
  //     console.log(index)
  //     arrayItm.splice(index, 1);
  //   }
  //   this.setState({value: ""});
  // }
  // /* Edit Item */
  // editItem(item, index) {
  //    this.setState({value: item});
  //    checkItem = true;
  //    this.currentItem(item, index);
  //    currentItemIndex = index;
  //
  // }

  render() {
    // const enabled =
    // this.state.value !== "" && this.state.value !== undefined;

    return (
      <div className ='form-container'>
      <form>
      <Input
        placeholder="Add New Item"
        // value= {this.state.value}
        onChange={(event) => {this.props.handleChangeAction(event.target.value)}}
        // onChange={this.handleChangeAction}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
      {checkItem === false ? <Button  variant="contained" color="secondary"
      onClick={() => {this.props.handleSubmitAction(this.props.changeInputValue)}}>
               Add
            </Button> :  <Button  variant="contained" color="secondary" onClick={this.updatedItem} >
             Edit
          </Button>}
    <ListComp />
        </form>
      </div>
    );
}
}
function mapStateToProps(state) {

  console.log('Update selectLayout!!! ', state.todo);
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
