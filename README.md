# React ToDo List

Todo-приложение на React + TypeScript с глобальным состоянием на Redux Toolkit, маршрутизацией, переключением светлой/тёмной темы и сохранением данных в `localStorage`.

Учебный проект, выполненный в рамках интенсива по React от GloAcademy. Каждый день интенсива добавлял в приложение новую технологию (см. [Этапы разработки](#этапы-разработки)).

**[Демо → barbarafromtonshaevo.github.io/react-todo-list](https://barbarafromtonshaevo.github.io/react-todo-list/)**

## Скриншоты

| Светлая тема | Тёмная тема |
| --- | --- |
| ![Светлая тема](docs/light-theme.png) | ![Тёмная тема](docs/dark-theme.png) |

## Возможности

- добавление, удаление задач и отметка выполненных;
- выполненные и невыполненные задачи выводятся в отдельных списках;
- страница со списком всех задач и страница отдельной задачи (`/list/:id`);
- переключение светлой и тёмной темы;
- задачи и выбранная тема сохраняются в `localStorage` и переживают перезагрузку страницы;
- страница 404 для несуществующих маршрутов.

## Стек

| Область | Технологии |
| --- | --- |
| UI | React 19, TypeScript |
| Состояние | Redux Toolkit, React Redux |
| Маршрутизация | React Router 7 (`createBrowserRouter`) |
| Стили | styled-components (динамические темы), SCSS / CSS Modules, styled-normalize |
| Прочее | uuid, Create React App (react-scripts 5), Testing Library |

## Запуск локально

Требуется Node.js и npm.

```bash
git clone https://github.com/BarbaraFromTonshaevo/react-todo-list.git
cd react-todo-list
npm install
npm start
```

Приложение откроется на [http://localhost:3000/react-todo-list](http://localhost:3000/react-todo-list).

### Скрипты

| Команда | Описание |
| --- | --- |
| `npm start` | dev-сервер с hot reload |
| `npm run build` | production-сборка в папку `build` |
| `npm test` | запуск тестов в watch-режиме |
| `npm run deploy` | сборка и публикация на GitHub Pages (ветка `gh-pages`) |

## Маршруты

| Путь | Страница |
| --- | --- |
| `/` | форма добавления и списки задач |
| `/list` | список всех задач ссылками |
| `/list/:id` | страница отдельной задачи |
| `*` | страница 404 |

## Структура проекта

```
src/
├── components/   # Form, Header, ListItem, ToDoList, ToDoListItem
├── feature/      # Redux-слайсы: todoList, themeList
├── helpers/      # работа с localStorage
├── layouts/      # Layout: ThemeProvider, GlobalStyle, Header, Outlet
├── models/       # типы ToDo и Theme
├── pages/        # ToDoListPage, ViewListPage, ViewListItemPage, 404
├── styles/       # GlobalStyle и описание тем
├── router.tsx    # конфигурация маршрутов
├── store.ts      # Redux store + подписка на сохранение в localStorage
└── index.tsx     # точка входа
```

## Как это устроено

- **Состояние.** Два слайса Redux Toolkit: `todoList` (создание, переключение статуса, удаление) и `themeList` (текущая тема). Store подписан на изменения и записывает состояние в `localStorage`, а при старте берёт его оттуда как `preloadedState`.
- **Темы.** Цвета описаны в `styles/themes.ts`, текущая тема из Redux передаётся в `ThemeProvider` из styled-components, поэтому компоненты берут цвета из `props.theme`.
- **Маршрутизация.** `Layout` содержит шапку и `<Outlet />`, вложенные страницы рендерятся внутри него.

## Деплой

Приложение опубликовано на GitHub Pages через пакет `gh-pages`. Так как Pages не знает про клиентские маршруты, для прямых заходов на `/list` и `/list/:id` используется приём [spa-github-pages](https://github.com/rafgraph/spa-github-pages): `public/404.html` перенаправляет на `index.html`, а скрипт в нём восстанавливает путь. У роутера задан `basename` из `homepage`.

## Этапы разработки

История коммитов повторяет программу интенсива:

1. Основы React: компоненты, состояние, формы
2. React Routing (два подхода: старый и новый)
3. Redux (Redux Toolkit)
4. Styled-components
5. Динамические цветовые темы

## Планы

- редактирование текста задачи;
- тесты для слайсов и компонентов.
