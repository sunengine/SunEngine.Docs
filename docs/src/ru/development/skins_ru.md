## Темы оформления (Skins)

### Темы оформления

Тема оформления (Skins) это "zip" архив содержащий файлы:

    "styles.css" - Основной файл скина. Единственный файл подключаемый на сайт.
    "info.json" - метаинформация о теме оформления (имя темы, автор, контакты автора, версия, ссылка на источник, описание).
    "preview.png" - Превью скина в определённом формате.
    "readme.md" - Информация о скине.
    "styles.[scss|sass], *.[scss|sass]" Исходники стилей scss или sass.
    Файлы изображений [если надо].
    Файлы шрифтов [если надо].

Подчёркнутым шрифтом обозначены обязательные файлы.

### Пример исходника темы Default.

Репозиторий тем - https://github.com/sunengine/SunEngine.Skins.

Для установки темы оформления необходимо заархивировать все файлы директории (без самой директории) в "zip" архив и закачать через админку.

preview.png

Скриншот экрана Demo сайта 
- Разрешение 1200 x 600 px 
- Главная страница demo сайта
- Всё содержимое сайта - стандартно, включая меню
- Залогиненым под Admin.
info.json

{
  "Name": "SkinName",  // имя темы оформления (eng)
  "Author": "AuthorName",  // имя автора
  "Contacts": [  // контакты автора, могут быть любые строки, ссылки или email адреса
    "https://t.me/AuthorName",  
    "skype: AuthorSkype",
    "author@email.com",
  ],
  "Version": 2.2,  // Версия темы
  "SourceUrl": "https://github.com/sunengine/SunEngine.Skins/tree/master/TestSkin",   // Ссылка на репозиторий темы
  "Description": "Description of SkinName"  // Описание темы
}

### Частичные темы оформления

На сайт может быть установлено сколько угодно много частичных тем оформления.
Эти темы стилизуют какие-то отдельные компоненты сайта или набор компонентов.
Например это может быть логотип сайта и другие элементы брендинга.
Частичная тема может содержать селекторы css которые нужны для кастомной стилизации и дизайна сайта.

### Частичная тема оформления (Skins) это "zip" архив содержащий файлы:

Обязательные файлы:

    "styles.css" - Основной файл скина. Единственный файл подключаемый на сайт.
    "info.json" - метаинформация о теме оформления (имя темы, автор, контакты автора, версия, ссылка на источник, описание).
    Другие файлы как в темах оформления могут быть, но не являются обязательными.

Файл "info.json" имеет ту же структуру, обязательным является только поле name. Остальные поля можно не задавать, если в этом нет необходимости.


### Метки:

скины

стили 