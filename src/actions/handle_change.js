export const HANDLECHANGE = 'changeValue';

export default function handleChange(value) {
  // console.log('change works');
  return {
    type: HANDLECHANGE,
    payload: {
        changeInputValue1: value
    }
  };
}
