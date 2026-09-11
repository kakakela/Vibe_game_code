# Эхо Подземелья — vertical slice

Vite + Phaser 3 + TypeScript. См. `CLAUDE.md` в корне репозитория для правил проекта и границ scope.

## Локальный запуск

```bash
npm install
npm run dev
```

Откроется на `http://localhost:5173`, покажет канвас Phaser с надписью «Hello Dungeon».

## Сборка

```bash
npm run build
npm run preview   # проверить прод-сборку локально
```

## Деплой

Репозиторий уже подключён к Netlify/Vercel: любой пуш в основную ветку GitHub триггерит автосборку и деплой. Настройки сборки:

- Build command: `npm run build`
- Publish/output directory: `dist`

Для Netlify это уже прописано в `netlify.toml`. Vercel обычно определяет Vite-проект автоматически (тот же build command и output dir); при необходимости задать вручную в настройках проекта на vercel.com.

## Структура

```
src/
  scenes/     # Phaser-сцены (сейчас: HelloScene)
  entities/   # Player, Enemy, Door — пока пусто
  combat/     # formulas.ts и т.д. — пока пусто
  dungeon/    # генератор уровней, DoorStateMachine — пока пусто
  data/       # enum'ы, константы, типы
  assets/     # спрайты Kenney (заглушки) — пока пусто
```
