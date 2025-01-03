# React App

Этот проект представляет собой базовое React-приложение, созданное для изучения и экспериментов с такими концепциями, как компоненты, состояние и свойства (props).

## Как выгрузить код на GitHub

Следуй этим шагам, чтобы выгрузить код на GitHub со своего локального компьютера:

### 1. Инициализация Git в проекте
Если Git ещё не инициализирован в твоём проекте, открой терминал в директории проекта и выполни команду:
```bash
git init
```
Эта команда создаст новый Git-репозиторий.

### 2. Добавь файлы в Git
Добавь файлы проекта в индекс:
```bash
git add .
```
Точка (`.`) включает все файлы в текущей директории.

### 3. Сделай коммит изменений
Создай коммит с описанием изменений:
```bash
git commit -m "Первый коммит"
```

### 4. Создай репозиторий на GitHub
1. Перейди на [GitHub](https://github.com) и войди в свой аккаунт.
2. Нажми кнопку **New Repository**.
3. Укажи имя репозитория (например, `react-app`).
4. Нажми **Create Repository**.

### 5. Свяжи локальный репозиторий с GitHub
Скопируй URL своего репозитория на GitHub (например, `https://github.com/username/react-app.git`) и выполни команду:
```bash
git remote add origin https://github.com/username/react-app.git
```

Если удалённый репозиторий уже существует, обнови его URL:
```bash
git remote set-url origin https://github.com/username/react-app.git
```

### 6. Выгрузи код на GitHub
Выполни следующие команды:
```bash
git branch -M main
git push -u origin main
```
Первая команда переименовывает текущую ветку в `main` (если она ещё не называется `main`). Вторая команда выгружает код в репозиторий на GitHub.

### 7. Проверь свой код на GitHub
Перейди в свой репозиторий на GitHub и убедись, что файлы проекта выгружены.

## Решение проблем
- **Ошибка: `remote origin already exists`**
  Если появляется такая ошибка, удали существующий удалённый репозиторий:
  ```bash
  git remote remove origin
  ```
  Затем добавь правильный URL удалённого репозитория, как показано выше.

- **Конфликт между локальным и удалённым репозиторием**
  Если возникнут конфликты, подтяни последние изменения из удалённого репозитория:
  ```bash
  git pull origin main --rebase
  ```
  Затем снова выгрузи изменения:
  ```bash
  git push origin main
  ```

---