import React from "react"
import { CICDCode } from "./CICDCode"


export const NewProject = () => {
    return <div>
        <h1>Создание репозитория</h1>
        <ol>
            <li>Создать репозиторий в огранизации</li>
            <li>В <b>Settings</b> репозитория:
                <ol>
                    <li>Зайти в секцию <b>Secrets and variables</b></li>
                    <li>Зайти в секцию <b>Actions</b></li>
                    <li>Зайти в секцию <b>Secrets</b></li>
                    <li>Добавить два секрета:
                        <ol>
                            <li>
                                <b>ID_RSA_PROD</b> - в который скопировать SSH ключ доступа к production серверу (приватный ключ)
                            </li>
                            <li>
                                <b>USERNAME_PROD</b> - в который скопировать имя пользователя на сервере production
                            </li>
                        </ol>
                    </li>
                    <li>Зайти в секцию <b>Variables</b></li>
                    <ol>
                        <li>Добавить переменную <b>HOST_PROD</b>, в которой указать IP аддрес сервера production</li>
                    </ol>
                </ol>
            </li>
            <li>В <b>Settings</b> организации:</li>
            <ol>
                <li>Зайти в секцию <b>Actions</b></li>
                <li>Зайти в секцию <b>General</b></li>
                <ol>
                    <li>Добавить репозиторий в список <b>Policies</b> (нажать на шестерёнку рядом с selected repositories)</li>
                    <li>Добавить репозиторий в список <b>Runners</b> (нажать на шестерёнку рядом с selected repositories)</li>
                </ol>
                <li>В корне репозитория на уровне <code>.git</code> и <code>.gitignore</code>:</li>
                <ol>
                    <li><code>npx create-react-app НАЗВАНИЕ_ПРОЕКТА</code></li>
                    <li>Создать директорию <code>.ghithub/workflow</code></li>
                    <ol>
                        <li>В ней создать файл с любым названием <code>*.yml</code></li>
                        <li>Поместить в него код следующего содержания:
                            <CICDCode repo_name={'НАЗВАНИЕ_ПРОЕКТА'}/>
                        </li>
                        <li>Заменить везде <code>НАЗВАНИЕ_ПРОЕКТА</code> на своё</li>
                    </ol>
                </ol>

            </ol>
            <li>Создать у себя локально директорию для репозитория</li>
            <li>В ней запустить <code>git init</code></li>
            <li>Переключиться на ветку <code>git checkout -b main</code></li>
            <li>Добавить удалённый репозиторий <code>git remote add origin URL</code></li>
            <li>Скачать удалённый репозитория <code>git pull origin main</code></li>
            <li>Внести изменения в репозиторий</li>
            <li>Внести отправить изменения в ветку main <code>git pull origin main</code></li>
        </ol>
    </div>
}