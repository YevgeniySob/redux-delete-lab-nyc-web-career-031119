export default function manageBand(state = {
  bands: []
}, action) {
  let index;
  let band;
  switch (action.type) {
    case 'ADD_BAND':
      console.log('ACTION:', action)
      band = {
        id: Math.random()*1000000,
        name: action.name
      };
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
      console.log('DELETE:', action)

      index = state.bands.findIndex(band => band.id === action.id);
      band = state.bands[index];

      return { ...state, bands:
        [
          ...state.bands.slice(0, index),
          ...state.bands.slice(index + 1)
        ]
      };
      // return state.bands.filter(band => band.id !== action.id)
    default:
      return state;
  }
};
