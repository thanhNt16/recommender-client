import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "../../constants/ActionTypes";
import {
  NAV_STYLE,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  SET_PATH_NAME,
  THEME_TYPE,
  THEME_TYPE_DARK,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";

const initialSettings = {
  navCollapsed: true,
  navStyle: NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  themeType: THEME_TYPE_LITE,
  pathname: '',
  width: 1367,
  isDirectionRTL: false,
  locale: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us'
  }
};

const settingsReducer = (state = initialSettings, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.navCollapsed
      };
    case SET_PATH_NAME:
      return {
        ...state,
        pathname: action.pathname
      };
    case WINDOW_WIDTH:
      return {
        ...state,
        width: action.width,
      };
    case THEME_TYPE:
      return {
        ...state,
        themeType: action.themeType
      };
    case NAV_STYLE:
      return {
        ...state,
        navStyle: action.navStyle
      };
    case SWITCH_LANGUAGE:
      return {
        ...state,
        locale: action.payload,

      };
    default:
      return state;
  }
};

export default settingsReducer;
