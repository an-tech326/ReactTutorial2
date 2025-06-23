
import { Routes, Route } from "react-router-dom";
import { page1Routers } from "./Page1Routes";

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
    return (
        <Routes>
            {renderRouter(page1Routers)}
        </Routes>
    );
}
