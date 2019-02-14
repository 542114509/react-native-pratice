const initialState = {
  steps: {
    
  }
}

function steps (state = initialState.steps, action) {
  switch (action.type) {
    case '1': 
      return {
        ...state,
      }

    default:
      return state
  }
}

export default steps