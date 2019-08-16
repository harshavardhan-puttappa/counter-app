import { INCREMENT, DECREMENT, DELETE, RESET } from "../constants/counterConstants";
const counterReducer = (
  state = {
    counters: [{ id: 1, value: 1 }, { id: 2, value: 1 }, { id: 3, value: 1 }, { id: 4, value: 1 }]
  },
  action
) => {
  switch (action.type) {
    case INCREMENT: {
      state = {
        counters: state.counters.map(c => {
          if (c.id !== action.counter.id) return c;
          const value = c.value;
          return Object.assign({}, c, { value: value + 1 });
        })
      };
      return state;
    }

    case DECREMENT: {
      state = {
        counters: state.counters.map(c => {
          if (c.id !== action.counter.id) return c;
          const value = c.value;
          return Object.assign({}, c, { value: value - 1 });
        })
      };
      return state;
    }

    case DELETE:
      state = {
        counters: state.counters.filter(c => c.id !== action.cid)
      };
      return state;

    case RESET:
      state = {
        counters: state.counters.map(c => {
          c.value = 0;
          return c;
        })
      };
      return state;

    default:
      return state;
  }
};
export default counterReducer;
