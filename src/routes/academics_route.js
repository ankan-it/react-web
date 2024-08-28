import {ProtectedRoute} from "./Auth";


import Dashboard from '../views/Dashboard';
import Table from "../views/Table";
import Programme from "../views/Academics/Master/Batch/programme"




export const academics_route=[                
    {
        path: "/academics",
        title: "Dashboard",
        key: "academics.dashboard",
        // icon:"mdi mdi-laptop",
        style: {height:"500px !important"},
        element:<ProtectedRoute element={<Dashboard />} />
    },
    {
        path: "master",
        title: "Master",
        key: "academics.master",
        // icon:"mdi mdi-arrow-right-bold",
        // element:<ProtectedRoute element={ <Table />} />,
        children:[
            {
                path: "batch",
                // element:<ProtectedRoute element={<Dashboard />} />,
                title: "batch",
                key: "academics.master.batch",
                icon: "mdi mdi-arrow-right-bold",
                children:[
                    {
                        path: "programme",
                        title: "Programme",
                        key: "academics.master.batch.programme",
                        icon:"mdi mdi-arrow-right",
                        element:<ProtectedRoute element={<Programme />} />
                    },
                    {
                        path: "Batch",
                        title: "batch",
                        icon:"mdi mdi-arrow-right",
                        key: "academics.master.batch.batch",
                        element:<ProtectedRoute element={<Dashboard />} />
                    }
                ]
            },
            {
                path: "exam",
                element:<ProtectedRoute element={<Dashboard />} />,
                title: "exam",
                icon:"mdi mdi-laptop",
                key: "academics.master.exam",
                
            }
        ]
    }
];
