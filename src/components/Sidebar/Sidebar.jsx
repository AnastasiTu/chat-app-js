import React from "react";
import home from "../../assets/img/icon/home.svg";
import messages from "../../assets/img/icon/messages.svg";
import chart from "../../assets/img/icon/chart.svg";
import gear from "../../assets/img/icon/gear.svg";
import { Link } from "react-router-dom";
import {
  HOME_ROUTE,
  FILES_ROUTE,
  MESSAGES_ROUTE,
  SETTINGS_ROUTE,
} from "../../navigation/consts";

export default function Sidebar() {
  return (
    <div className="sidebar__header">
      <div className="sidebar__navigation">
        <Link to={HOME_ROUTE}>
          <img src={home} alt="Главная" />
        </Link>
        <Link to={MESSAGES_ROUTE}>
          <img src={messages} alt="Сообщения" />
        </Link>
        <Link to={FILES_ROUTE}>
          <img src={chart} alt="Файлы и задачи" />
        </Link>
      </div>
      <div className="sidebar__settings">
        <Link to={SETTINGS_ROUTE}>
          <img src={gear} alt="Настройки" />
        </Link>
      </div>
    </div>
  );
}
