import {st} from '@angular/core/src/render3';

export function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      console.log('stare existenta', JSON.stringify(state));
      console.log('incarcatura', action.payload);
      return {
        ...state,
      showProductCode: action.payload
      };

    default: return state;
  }
}
