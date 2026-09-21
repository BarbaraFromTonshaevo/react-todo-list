# React ToDo List

Todo-приложение на React + TypeScript с глобальным состоянием на Redux Toolkit, маршрутизацией, переключением светлой/тёмной темы и сохранением данных в `localStorage`.

Учебный проект, выполненный в рамках интенсива по React от GloAcademy. Каждый день интенсива добавлял в приложение новую технологию (см. [Этапы разработки](#этапы-разработки)).

> Демо: пока не опубликовано.

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
git clone <url-репозитория>
cd react-todo-list
npm install
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

### Скрипты

| Команда | Описание |
| --- | --- |
| `npm start` | dev-сервер с hot reload |
| `npm run build` | production-сборка в папку `build` |
| `npm test` | запуск тестов в watch-режиме |

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

## Этапы разработки

История коммитов повторяет программу интенсива:

1. Основы React: компоненты, состояние, формы
2. React Routing (два подхода: старый и новый)
3. Redux (Redux Toolkit)
4. Styled-components
5. Динамические цветовые темы

## Планы

- публикация на GitHub Pages и ссылка на демо;
- скриншоты в README;
- стилизация страницы 404;
- редактирование текста задачи;
- тесты для слайсов и компонентов.
