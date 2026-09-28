# React ToDo List

[English](README.md) | **Русский**

ToDo-приложение на React 19 и TypeScript: состояние на Redux Toolkit, страницы на React Router, светлая и тёмная тема на styled-components, сохранение данных в `localStorage`. Интерфейс на русском.

> 🎓 **Training project** · Интенсив по React от GloAcademy · октябрь 2025. Каждый день интенсива добавлял в приложение одну новую технологию; после него я исправила баги, оформила страницу 404 и настроила GitHub Pages (см. [Что изменено позже](#что-изменено-позже)).

**Live demo:** https://barbarafromtonshaevo.github.io/react-todo-list/

<p>
  <img src="./screenshots/desktop.webp" alt="Список задач в светлой теме на десктопе, 1440 px" width="68%">
  <img src="./screenshots/mobile.webp" alt="Список задач в тёмной теме на мобильном, 390 px" width="24%">
</p>

## Возможности

- Добавление и удаление задач, отметка о выполнении.
- Выполненные и невыполненные задачи показаны отдельными списками.
- Страница со всеми задачами и страница отдельной задачи.
- Переключение светлой и тёмной темы.
- Задачи и выбранная тема сохраняются после перезагрузки страницы.
- Страница 404 для несуществующих адресов и удалённых задач.

## Стек

| Область | Инструменты |
| --- | --- |
| UI | React 19, TypeScript |
| Состояние | Redux Toolkit, React Redux |
| Маршрутизация | React Router 7 (`createBrowserRouter`) |
| Стили | styled-components (темы), SCSS / CSS Modules, styled-normalize |
| Сборка | Create React App (react-scripts 5) |
| Хостинг | GitHub Pages (`gh-pages`) |

## Архитектура

```
Form / кнопки ──► слайсы todoList, themeList ──► store ──► localStorage ("appState")
                                                   │
                                                   ▼
                        Layout (ThemeProvider + Header) ──► <Outlet /> ──► страницы
```

1. [src/feature/todoList.ts](src/feature/todoList.ts) создаёт, переключает и удаляет задачи; [src/feature/themeList.ts](src/feature/themeList.ts) хранит текущую тему.
2. [src/store.ts](src/store.ts) подписан на изменения и записывает состояние в `localStorage`, а при старте берёт его оттуда как `preloadedState` ([src/helpers/storage.ts](src/helpers/storage.ts)).
3. [src/layouts/Layout.tsx](src/layouts/Layout.tsx) передаёт тему из Redux в `ThemeProvider` из styled-components, поэтому компоненты берут цвета из `props.theme`. Цвета описаны в [src/styles/themes.ts](src/styles/themes.ts).
4. [src/router.tsx](src/router.tsx) рендерит все страницы внутри `Layout` через `<Outlet />`.

### Маршруты

| Путь | Страница |
| --- | --- |
| `/` | форма добавления и списки задач |
| `/list` | все задачи в виде ссылок |
| `/list/:id` | страница задачи |
| `*` | страница 404 |

### Этапы разработки

История коммитов повторяет программу интенсива, одна технология в день:

1. Основы React: компоненты, состояние, формы.
2. React Router: сначала старый подход, потом `createBrowserRouter`.
3. Redux Toolkit.
4. styled-components.
5. Динамические цветовые темы.

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
├── store.ts      # Redux store + сохранение состояния в localStorage
└── index.tsx     # точка входа
```

## Что изменено позже

- **Форма больше не отправляет страницу:** обработчик submit вызывает `preventDefault()`.
- **Ссылки на задачи открываются внутри приложения:** обычный `<a target="_blank">` в списке задач заменён на `Link` из роутера.
- **Страница задачи показывает саму задачу** (текст и статус), а не её id.
- **Оформленная страница 404**, теперь внутри `Layout`, и заголовки страниц на русском.
- **Настройка GitHub Pages:** `basename` у роутера и редирект для прямых заходов (см. [Деплой](#деплой)), этот README и скриншоты.

## Запуск

Нужны Node.js и npm.

```bash
npm install
npm start            # http://localhost:3000/react-todo-list
```

Другие скрипты:

```bash
npm run build        # production-сборка в build/
npm run deploy       # сборка и публикация на GitHub Pages (ветка gh-pages)
```

## Деплой

Приложение опубликовано на GitHub Pages через пакет `gh-pages`. Pages не знает про клиентские маршруты, поэтому для прямых заходов на `/list` и `/list/:id` используется приём [spa-github-pages](https://github.com/rafgraph/spa-github-pages): [public/404.html](public/404.html) перенаправляет на `index.html`, а скрипт в нём восстанавливает исходный путь. `basename` роутера берётся из `homepage` в `package.json`.

## Известные ограничения

- Шапка не реагирует на тему: её цвет задан жёстко в [Header.module.scss](src/components/Header/Header.module.scss).
- Подписи в шапке (`ToDo`, `List`, `toggle`) на английском, а остальной интерфейс на русском.

## Что бы я улучшила

- **Редактирование текста задачи.** Сейчас задачу можно только отметить или удалить.
- **Тесты для слайсов и компонентов.** Testing Library пришла вместе с Create React App, но тестов так и не написано.
