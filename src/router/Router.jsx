
import { Routes, Route } from "react-router-dom";
import { page1Routers } from "../Page1";
import { page2Routers } from "../Page2";
import { HomeRoutes } from "../Home";
import { page404Routers } from "../page404";

const renderRouter = (list) =>
    list.map(({ path, element, children, index }, i) => (
        <Route
            key={path ?? i}
            path={path}
            element={element}
            index={index}>
            {children && renderRouter(children)}
        </Route>
    ));

export const Router = () => {
    const routes = [HomeRoutes, page1Routers, page2Routers,page404Routers].flat();
    return (
        <Routes>
            {renderRouter(routes)}
        </Routes>
    );
}
