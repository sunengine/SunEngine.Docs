(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{268:function(_,v,e){"use strict";e.r(v);var t=e(28),a=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"установка-на-сервер"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-на-сервер"}},[_._v("#")]),_._v(" Установка на сервер")]),_._v(" "),e("p",[_._v("Все "),e("code",[_._v(".sh")]),_._v(" скрипты находятся в директории "),e("code",[_._v("Scripts/")]),_._v(".")]),_._v(" "),e("h2",{attrs:{id:"дnя-пубnикации-на-сервере-необходимо-выпоnнить-сnедующие-действия"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#дnя-пубnикации-на-сервере-необходимо-выпоnнить-сnедующие-действия"}},[_._v("#")]),_._v(" Для публикации на сервере необходимо выполнить следующие действия:")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('  Запустить скрипт "build.sh".\n  Подготовить параметры скрипта "publish.sh" переименовав "PUBLISH.template" в "PUBLISH" отредактировать настройки внутри.\n  Запустить скрипт "publish.sh".\n')])])]),e("h2",{attrs:{id:"создание-сборки"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#создание-сборки"}},[_._v("#")]),_._v(" Создание сборки")]),_._v(" "),e("h3",{attrs:{id:"скрипт-build-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#скрипт-build-sh"}},[_._v("#")]),_._v(" Скрипт: build.sh")]),_._v(" "),e("p",[_._v("Скрипт работает из коробки.")]),_._v(" "),e("p",[_._v("После запуска весь проект собирается в директорию "),e("code",[_._v("build")]),_._v(".")]),_._v(" "),e("p",[_._v("Клиентская часть кладётся в "),e("code",[_._v("build/wwwroot")]),_._v(".")]),_._v(" "),e("p",[_._v("Для настройки по умолчанию используется файл "),e("code",[_._v("BUILD")]),_._v(", либо укажите файл с настройками первым аргументом.")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('"build.sh /path/to/BUILD_VARS"\n')])])]),e("h2",{attrs:{id:"настройки-скрипта-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#настройки-скрипта-build"}},[_._v("#")]),_._v(" Настройки скрипта: BUILD")]),_._v(" "),e("ul",[e("li",[e("code",[_._v('PROJECT_NAME="SunEngine"')]),_._v(" - Имя проекта, используется для вывода в консоли")]),_._v(" "),e("li",[e("code",[_._v('PROJECT_ROOT="auto"')]),_._v("      - Путь к корневой папке проекта.\nЗначение "),e("code",[_._v("auto")]),_._v(": текущая папка или папка выше определяется содержанием в папке файла "),e("code",[_._v(".SunEngineRoot")]),_._v(".")]),_._v(" "),e("li",[e("code",[_._v('SERVER_PATH="${PROJECT_ROOT}/Server"')]),_._v(" - Путь к серверной части проекта (DotNet solution)")]),_._v(" "),e("li",[e("code",[_._v('CLIENT_PATH="${PROJECT_ROOT}/Client"')]),_._v(" - Путь к клиентской части проекта (Quasar project)")]),_._v(" "),e("li",[e("code",[_._v('CONFIG_PATH="${PROJECT_ROOT}/Config"')]),_._v(" - Путь к папке с конфигурацией проекта")]),_._v(" "),e("li",[e("code",[_._v('BUILD_PATH="${PROJECT_ROOT}/build"')]),_._v("   - Путь куда будет помещена результирующая сборка проекта")]),_._v(" "),e("li",[e("code",[_._v('NPM_UTIL="yarn"')]),_._v("                      - Установщик npm пакетов (yarn или npm)")])]),_._v(" "),e("h2",{attrs:{id:"установка-на-сервер-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#установка-на-сервер-2"}},[_._v("#")]),_._v(" Установка на сервер")]),_._v(" "),e("h3",{attrs:{id:"скрипт-publish-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#скрипт-publish-sh"}},[_._v("#")]),_._v(" Скрипт: publish.sh")]),_._v(" "),e("p",[_._v("Перед запуском необходимо отредактировать параметры в "),e("code",[_._v('PUBLISH"')]),_._v(" файле настроек скрипта.")]),_._v(" "),e("p",[_._v("Скрипт "),e("code",[_._v("publish.sh")]),_._v(" записывает директорию "),e("code",[_._v("build")]),_._v(" на сервер, перезаписывая все файлы, а директорию "),e("code",[_._v("Config")]),_._v(" записывает только если её ещё нет на сервере.")]),_._v(" "),e("p",[_._v("Для настройки по умолчанию используется файл "),e("code",[_._v("PUBLISH")]),_._v(", либо укажите файл с настройками первым аргументом.")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('"publish.sh /path/to/PUBLISH_VARS"\n')])])]),e("p",[_._v("Для того что бы скрипт смог полностью отработать пользователю "),e("code",[_._v("username")]),_._v(" на сервере (под которым работает скрипт)  надо добавить в группы "),e("code",[_._v("www-data")]),_._v(", "),e("code",[_._v("systemd-journal")]),_._v(", "),e("code",[_._v("systemd-network")]),_._v(", "),e("code",[_._v("systemd-network")]),_._v(", "),e("code",[_._v("systemd-resolve")]),_._v(". Это можно сделать отредактировав файл "),e("code",[_._v("/etc/group")]),_._v(".")]),_._v(" "),e("h2",{attrs:{id:"настройки-скрипта-publish"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#настройки-скрипта-publish"}},[_._v("#")]),_._v(" Настройки скрипта: PUBLISH")]),_._v(" "),e("ul",[e("li",[e("code",[_._v('PROJECT_NAME="SunEngine Demo"')]),_._v("           - Имя проекта, используется для вывода в консоли")]),_._v(" "),e("li",[e("code",[_._v('LOCAL_BUILD_PATH="/path/to/local/build"')]),_._v(" - Путь к папке build проекта, должен соответствовать "),e("code",[_._v("BUILD_PATH")]),_._v(" из файла "),e("code",[_._v("BUILD")])]),_._v(" "),e("li",[e("code",[_._v('REMOTE_USER="username"')]),_._v("                  - Имя пользователя под которым будет производиться коннект к серверу")]),_._v(" "),e("li",[e("code",[_._v('REMOTE_HOST="111.111.111.111"')]),_._v("           - IP или домен хоста сервера")]),_._v(" "),e("li",[e("code",[_._v('REMOTE_DIRECTORY="/remote/dir/path"')]),_._v("     - Путь папки на сервере куда будет осуществляться загрузка")]),_._v(" "),e("li",[e("code",[_._v('REMOTE_DIRECTORY_OWNER="www-data"')]),_._v("       - Пользователь на сервере которому принадлежит папка "),e("code",[_._v("REMOTE_DIRECTORY")])]),_._v(" "),e("li",[e("code",[_._v('REMOTE_DIRECTORY_GROUP="www-data"')]),_._v("       - Группа на сервере которой принадлежит папка - "),e("code",[_._v("REMOTE_DIRECTORY")])]),_._v(" "),e("li",[e("code",[_._v('REMOTE_SYSTEMD_SERVICE_NAME="demo.sunengine.site"')]),_._v("  - Имя сервиса systemd для перезапуска после загрузки")])]),_._v(" "),e("h2",{attrs:{id:"запись-файnов-конфигурации"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#запись-файnов-конфигурации"}},[_._v("#")]),_._v(" Запись файлов конфигурации")]),_._v(" "),e("p",[_._v("После построение "),e("code",[_._v("build.sh")]),_._v(" и публикации "),e("code",[_._v("publish.sh")]),_._v(", необходимо настроить конфигурацию на сервере отредактировать файлы в директории "),e("code",[_._v("Config")]),_._v(" на сервере, это делается один раз.\nНеобходимо прописать правильные настройки базы данных в "),e("code",[_._v("DataBaseConnection.json")])]),_._v(" "),e("p",[_._v("Остальные настройки - по необходимости.")]),_._v(" "),e("p",[_._v("Директория "),e("code",[_._v("Config/Init")]),_._v(" служит для стартовой инициализации базы данных сайта - команда "),e("code",[_._v("dotnet SunEngine.dll init migrate")]),_._v(".")]),_._v(" "),e("h2",{attrs:{id:"обновnение-sunengine-на-сервере-до-посnедней-версии-с-репозитория-github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#обновnение-sunengine-на-сервере-до-посnедней-версии-с-репозитория-github"}},[_._v("#")]),_._v(" Обновление "),e("code",[_._v("SunEngine")]),_._v(" на сервере до последней версии с репозитория "),e("code",[_._v("GitHub")]),_._v(".")]),_._v(" "),e("h3",{attrs:{id:"скрипт-update-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#скрипт-update-sh"}},[_._v("#")]),_._v(" Скрипт: update.sh")]),_._v(" "),e("p",[_._v("Скрипт работает из коробки при условии настроенного "),e("code",[_._v("publish.sh")]),_._v(" скрипта.")]),_._v(" "),e("p",[_._v("Скрипт берёт последнюю версию из мастер ветки репозитория, перезатирая всё что было раньше кроме "),e("code",[_._v("Config")])]),_._v(" "),e("p",[_._v("И последовательно запускает "),e("code",[_._v("build.sh")]),_._v(" и "),e("code",[_._v("publish.sh")]),_._v(" скрипты.")]),_._v(" "),e("h2",{attrs:{id:"настройки-скрипта-update"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#настройки-скрипта-update"}},[_._v("#")]),_._v(" Настройки скрипта: UPDATE")]),_._v(" "),e("ul",[e("li",[e("code",[_._v('PROJECT_NAME="SunEngine Demo"')]),_._v("   - Имя проекта, используется для вывода в консоли")]),_._v(" "),e("li",[e("code",[_._v('PROJECT_ROOT="auto"')]),_._v("             - Путь к корневой папке проекта."),e("br"),_._v("\nЗначение "),e("code",[_._v("auto")]),_._v(": текущая папка или папка выше определяется содержанием в папке файла "),e("code",[_._v(".SunEngineRoot")]),_._v(".")]),_._v(" "),e("li",[e("code",[_._v('BUILD_SCRIPT_PATH="./build.sh"')]),_._v("      - Путь к скрипту сборки")]),_._v(" "),e("li",[e("code",[_._v('PUBLISH_SCRIPT_PATH="./publish.sh"')]),_._v("  - Путь к скрипту публикации")])])])}),[],!1,null,null,null);v.default=a.exports}}]);