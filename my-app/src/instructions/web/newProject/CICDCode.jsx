import React from "react"

export const CICDCode = ({repo_name: repo_name}) => {
    return <pre>
        <code className="yml">

        </code>
{
    `
    name: PROD

    on: 
    push:
        branches:
        - main

    jobs:
    
        ci-cd:
            name: СI/CD
            runs-on: ubuntu-latest
            steps:

                - name: Получение репозитория проекта на виртуальную машину
                uses: actions/checkout@v4

                - name: Установка node
                uses: actions/setup-node@v3

                - name: Установка пакетов npm
                run: cd ${repo_name} && npm i

                - name: Сборка проекта
                run: cd ${repo_name} && npm run build

                - name: Подготовка папки front
                run: mv ./${repo_name}/build ./front
    
                - name: Деплой билда на сервер
                uses: appleboy/scp-action@v0.1.4
                with:
                    host: \${{ vars.HOST_PROD }}
                    username: \${{ secrets.USERNAME_PROD }}
                    key: \${{ secrets.ID_RSA_PROD }}
                    source: ./front
                    target: /app/${repo_name}/
    `
}
    </pre>
}