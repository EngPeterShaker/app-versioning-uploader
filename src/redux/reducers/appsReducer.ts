import { AppsState } from "../types";
import { Constants } from "../actionTypes";
const { ADDAPP, ADDVERSION } = Constants;

const initialState: AppsState = {
  appsList: {},
  files: {}
};

export default (state: AppsState = initialState, action: any) => {
  switch (action.type) {
    case ADDAPP:
      let key = action.payload.text;
      return {
        ...state,
        appsList: {
          ...state.appsList,
          [key]: state.appsList[key]
            ? state.appsList[key].includes(action.payload.version)
              ? state.appsList[key]
              : [...state.appsList[key], action.payload.version]
            : [action.payload.version]
        },
        files: {
          ...state.files,
          [`${key}v${action.payload.version}`]:
            action.payload.files.length > 0
              ? action.payload.files[0].name
              : null
        }
      };

    default:
      return state;
  }
};
