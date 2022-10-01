import { Files, Home, Login, Messages, Settings } from '../page/index';
import {
  LOGIN_ROUTE,
  HOME_ROUTE,
  FILES_ROUTE,
  MESSAGES_ROUTE,
  SETTINGS_ROUTE,
} from "./consts";

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: Home,
  },
  {
    path: FILES_ROUTE,
    Component: Files,
  },
  {
    path: MESSAGES_ROUTE,
    Component: Messages,
  },
  {
    path: SETTINGS_ROUTE,
    Component: Settings,
  },
];