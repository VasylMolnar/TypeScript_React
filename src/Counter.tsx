import { ChangeEvent, FC, ReactNode, useReducer } from 'react';

interface ICounter {
  children: (num: number) => ReactNode;
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

const initialState = {
  counter: 0,
  text: '',
};

const reducer = (
  state: typeof initialState,
  action: ReducerAction
): typeof initialState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {
        ...state,
        counter: state.counter++,
      };

    case REDUCER_ACTION_TYPE.DECREMENT:
      return {
        ...state,
        counter: state.counter--,
      };

    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' };

    default:
      throw Error('Unknown action.');
  }
};

const Counter: FC<ICounter> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    //console.log(e);
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  };

  return (
    <>
      <h1>{children(state.counter)}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}
        >
          -
        </button>

        <input type="text" onChange={handleTextInput} />
        <h2>{state.text}</h2>
      </div>
    </>
  );
};
export default Counter;
