import * as math from "mathjs";

const operatorsArr = ['*', '/', '+', '-']

const actions = {
  handleClear() {
    console.clear();
    return "";
  },

  addtoInputNum(state, param) {
    if ((state[state.length - 1] === '-' && param === '-') || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      return state + param;
    }
  },

  addtoInputOpr(state, param) {
    if (state === "" || (operatorsArr.includes(state[state.length - 1]) && operatorsArr.includes(param))) {
      return state;
    } else {
      return state + param;
    }
  },

  handleEqual(state) {
    if (state === "") {
      return state;
    } else {
      console.log(math.evaluate(state));
      return math.evaluate(state);
    }
  },

  handleRoot(state) {
    if (state === "") {
      return state;
    } else {
      return Math.sqrt(state);
    }
  },

  handleSquare(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 2);
    }
  },

  handleCube(state) {
    if (state === "") {
      return state;
    } else {
      return Math.pow(state, 3);
    }
  },

  handlesin(state) {
    if (state === "") {
      return state;
    } else {
      return Math.sin(state);
    }
  },

  handlecos(state) {
    if (state === "") {
      return state;
    } else {
      return Math.cos(state);
    }
  },

  handletan(state) {
    if (state === "") {
      return state;
    } else {
      return Math.tan(state);
    }
  },

  handlelog(state) {
    if (state === "") {
      return state;
    } else {
      return Math.log(state);
    }
  },

  handleround(state) {
    if (state === "") {
      return state;
    } else {
      return Math.round(state);
    }
  },


};

export default function reducer(state, action) {
  let type = action.type;
  let param = action.param;
  return actions[type](state, param);
}
