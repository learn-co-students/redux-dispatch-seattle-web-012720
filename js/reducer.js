function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action){
  state = changeState(state, action);
  render();
  return state
}

let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}

changeState(state, action)
dispatch({type: 'INCREASE_COUNT'})

function render(){
  document.body.textContent = state.count
}
 
render()