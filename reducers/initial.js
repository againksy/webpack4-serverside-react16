let initialState = {
  runningComponent: 'InitialComponent',
  value: ''
};

export default function initial(state = initialState, action) {
  switch (action.type) {
    default:
      return {...state};
  }
}
