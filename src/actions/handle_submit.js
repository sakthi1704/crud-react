export const HANDLESUBMIT = 'submitValue';

export default function handleChange(value) {
  let arrayItm =[];
  console.log(arrayItm);
  // arrayItm.push(this.props.changeInputValue) ;
  return {
    type: HANDLESUBMIT,
    payload: {
        submitInputValue1: arrayItm.push(value)
    }

  };

}
