import {ProtectedRoute} from "./Auth";


import Dashboard from '../views/Dashboard';


export const academics_route=[                
    {
        path: "/academics",
        element:<ProtectedRoute element={<Dashboard />} />
    },
    {
        path: "master",
        // element:<ProtectedRoute element={ <Table />} />,
        children:[
            {
                path: "batch",
                // element:<ProtectedRoute element={<Dashboard />} />,
                children:[
                    {
                        path: "programme",
                        element:<ProtectedRoute element={<Dashboard />} />
                    }
                ]
            }
        ]
    }
];
