import {
  ChangeEvent,
  FC,
  ReactElement,
  ReactNode,
  createContext,
  useCallback,
  useReducer,
} from 'react';

//////////////////////////////////////////////// reducer FN ////////////////////////////////////////////////

type StateType = {
  count: number;
  text: string;
};

const initState: StateType = { count: 0, text: '' };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };
    case REDUCER_ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };
    case REDUCER_ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload ?? '' };
    default:
      throw new Error();
  }
};

//////////////////////////////////////////////////////// CREATE CounterContext //////////////////////////////////////////////////////////

const useCounterContext = (initState: StateType) => {
  //окремо винесли fn,variable ... + сюди передаємо initState для useReducer
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );

  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleTextInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }, []);

  return { state, increment, decrement, handleTextInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>; // === return { state, increment, decrement, handleTextInput };

//initContextState for CounterContext
const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => ({}),
  decrement: () => ({}),
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => ({}),
  //num:5 NOT WORK
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

interface ICounterProvider {
  children?: ReactElement | ReactElement[] | ReactNode | undefined;
}

export const CounterProvider: FC<ICounterProvider> = ({
  children,
}): ReactElement => {
  // або тут  це ("окремо винесли fn,variable ... + передаємо initState в reducer")
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      //окремо винесли fn,variable ... + передаємо initState в reducer
      {children}
    </CounterContext.Provider>
  );
};
