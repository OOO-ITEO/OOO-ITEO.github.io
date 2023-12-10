import React from "react"
import { createBrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import { MainPage } from "./main/MainPage"
import { NewProject } from "./instructions/web/newProject/NewProject"
import { App } from "./App";
import { Outlet } from 'react-router-dom'
import { InstructionForWeb } from "./instructions/web/InstructionForWeb"
import { TeamList } from "./team/TeamList"
import { InstructionForUnity } from "./instructions/unity/InstructionForUnity"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
            {
                path: "team",
                element: <TeamList />
            },
            {
                path: "instructions",
                element: <Outlet />,
                children: [
                    {
                        path: "unity",
                        element: <InstructionForUnity />,
                    },
                    {
                        path: "web",
                        element: <Outlet />,
                        children: [
                            {
                                path: "",
                                element: <InstructionForWeb />,
                            },
                            {
                                path: "new-project",
                                element: <NewProject />,
                            }
                        ],
                    },
                ],
            },
        ],
    },
])