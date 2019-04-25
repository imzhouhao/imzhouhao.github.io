// action types
const INIT_GAME = 'INIT_Game';
const CHANGE_LIST = 'CHANGE_LIST';
const DELETE_GAME_LISTS = 'DELETE_GAME_LISTS';

// reducer
export default function (state, action) {
  if (!state) {
    state = { 
      list: new Array(16).fill(0),
      gameLists: [],
      rank: 0  
    }
  };

  switch (action.type) {
    case INIT_GAME: 
      return { 
        list: action.list, 
        gameLists: action.gameLists, 
        rank: action.rank 
      };
    case CHANGE_LIST: 
      if (state.gameLists.length < 10) {
        return { 
          ...state,
          list: action.list, 
          gameLists: [...state.gameLists, state.list] 
        }
      } else {
        return {
          ...state, 
          list: action.list,
          gameLists: [...state.gameLists.slice(1), state.list]
        }
      }
    case DELETE_GAME_LISTS:
      if (state.gameLists.length > 0) {
        return { 
          list: state.gameLists[state.gameLists.length - 1],
          gameLists: state.gameLists.slice(0, state.gameLists.length - 1)
        }
      } else {
        return { ...state }
      }
    default: 
      return state;
  }
}

// action creators
export const initGame = () => {
  return { 
    type: INIT_GAME, 
    list: new Array(16).fill(0),
    gameLists: [],
    rank: 0
  };
}

export const changeList = (list) => {
  return {
    type: CHANGE_LIST,
    list
  }
}

export const deleteGameLists = (list) => {
  return {
    type: DELETE_GAME_LISTS
  }
}
