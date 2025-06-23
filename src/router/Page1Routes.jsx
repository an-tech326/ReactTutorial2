import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { DetailA } from "../Page1DetailA";
import { DetailB } from "../Page1DetailB";

export const page1Routers = [
    {
        path:"/",
        element:<Home />
    },
    {
        path:"/page1",
        element:<Page1 />,
        children:[
            {
                path: "DetailA",
                element:<DetailA/>
            },
            {
                path: "DetailB",
                element:<DetailB/>
            }
        ]
    },
    {
        path:"/page2",
        element:<Page2 />
    }
];