Веб-приложение для Some Company, состоящее из главной страницы и страницы для обратной связи.

## Содержание

- [Технологический стек](#технологический-стек)
- [Установка проекта](#установка-проекта)
- [Структура проекта](#структура-проекта)
- [Стилизация](#стилизация)
- [Backend](#backend)
- [SEO оптимизация](#seo-оптимизация)

## Технологический стек

- **Framework**: [Next.js](https://nextjs.org/)
- **Сomponent library**: [Material UI](https://mui.com/)
- **CSS-in-JS library**: [TSS-React](https://www.tss-react.dev/)
- **Backend**: [Netlify Functions](https://www.netlify.com/products/functions/)
- **Хостинг**: [Netlify](https://www.netlify.com/)

## Установка проекта

1. Клонируйте репозиторий:
  ```
  git clone https://github.com/DashaList/some-company-app.git
  cd some-company-app
  ```

2. Установите зависимости:
  ```
  npm install

  # или

  yarn install
  ```

3. Запустите проект в режиме разработки:
  ```
  npm run dev

  # или

  yarn dev
  ```

4. Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## Структура проекта

```
  some-company-app/
  ├── netlify/  
  │ └── functions/        # Serverless functions для backend
  ├── src/
  │ ├── app/              # App Router
  │ │ ├── contact-us/     # Страница с формой
  │ │ ├── layout.tsx      # Layout страниц (header и footer)
  │ │ └── page.tsx        # Главная страница
  │ ├── components/       # React компоненты
  │ ├── actions.ts        # Функции для обработки форм
  │ ├── api.ts            # Функции для HTTP-запросов
  │ ├── globalStyles.ts   # Глобальные стили
  │ ├── theme.ts          # Кастомизация темы MUI компонентов
  │ └── types.ts          # Типы
  └── package.json        # Зависимости проекта
```

## Стилизация

В качестве библиотеки UI-компонентов в проекте используется Material UI. Для стилизации используется CSS-in-JS библиотека TSS-React.

## Backend

В качестве бекэнда используется serverless функция, реализованная с помощью Netlify functions.

## SEO оптимизация

Для оптимизации SEO в проекте используются:

1. **Метаданные**: Использование компонента `Metadata` из Next.js для управления заголовками и описаниями страниц.

```typescript
export const metadata: Metadata = {
  title: 'Some Company',
  description: 'Some Company offers professional services with quality results.',
}
```

2. **Семантическая разметка**: Использование правильных HTML5 тегов для улучшения понимания контента поисковыми системами.

3. **Адаптивный дизайн**: Поддержка мобильных устройств для лучшего ранжирования в поисковых системах.

4. **Превью для социальных сетей**: Использование `opengraph-image` в папке `app` для отображения изображения в превью социальных сетей.
