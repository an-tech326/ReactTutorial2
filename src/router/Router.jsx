
import { Routes, Route } from "react-router-dom";
import { page1Routers } from "../Page1";
import { page2Routers } from "../Page2";
import { HomeRoutes } from "../Home";

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
    const routes = [HomeRoutes, page1Routers, page2Routers].flat();
    return (
        <Routes>
            {renderRouter(routes)}
        </Routes>
    );
}
