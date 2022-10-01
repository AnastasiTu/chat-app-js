import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes";
import { LOGIN_ROUTE, HOME_ROUTE } from "./consts";

export default function Navigation() {
  const user = true;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={HOME_ROUTE} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
}
