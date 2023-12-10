import React from "react"
import { Link, Outlet } from "react-router-dom"


export const InstructionForWeb = () => {
    return <div>
        <ol>
            <li><Link to={'/instructions/web/new-project/'}>Создание нового проекта</Link></li>
        </ol>
    </div>
}

