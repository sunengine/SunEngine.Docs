## Пропись в systemd

Сервис systemd в Linux позволяет постоянно держать необходимые процессы запущенными, и перезапускать, если они вынужденно выключаются.

### Создание и пропись процесса my_site.com в systemd

Создаём файл "my_site.com.service" в папке "/etc/systemd/system"

  [Unit]
  Description=SunEngine my_site.com
  [Service]
  WorkingDirectory=/site/my_site.com
  ExecStart=/usr/bin/dotnet /site/my_site.com/Server/SunEngine.dll server
  SyslogIdentifier=my_site.com
  User=www-data
  Restart=always
  RestartSec=10
  KillSignal=SIGINT
  Environment=ASPNETCORE_ENVIRONMENT=Production
  [Install]
  WantedBy=multi-user.target

Включаем и запускаем сервис:

  systemctl enable my_site.com
  systemctl start my_site.com

Теперь "SunEngine.dll server" будет работать в постоянном режиме.

### Команды работы с systemd

Включить запуск "my_site.com"  процесса при загрузке системы

  systemctl enable my_site.com

Посмотреть логи:

  journalctl -fxeu my_site.com

Запуск процесса:

  systemctl start my_site.com

Остановка процесса:

  systemctl stop my_site.com

Перезапуск процесса:

  systemctl restart my_site.com

Отключить запуск "my_site.com" при загрузке системы:

  systemctl disable my_site.com

### Метки:

kestrel

systemd