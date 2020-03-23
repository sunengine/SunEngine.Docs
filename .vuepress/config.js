module.exports = {
  title:'SunEngineDOCs',
  descriptions:'SunEngine documentation project',
  base: '/SunEngine.Docs/',
  dest: 'docs',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/' },
      {text: 'EN', link: '/src/en/' },
      {text: 'RU', link: '/src/ru/' }
    ],
//      sidebar: 'auto'
    sidebar:
      [ 
//    { title: 'Russian', collapsable: false, children: [ '/src/ru/' ] },
//    { title: 'English', collapsable: false, children: [ '/src/en/' ] },
      { title: 'О проекте', collapsable: false, children: [ '/src/ru/' ] },
      { title: 'Администрирование',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/configuration_files_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/site_structure_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/administration/systemDmounting_ru.html' ] },
        ]
      },
      { title: 'Разработка',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/development/directory_structure_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/development/run_development_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/development/skins_ru.html' ] },
        ]
      },
      { title: 'Инсталляция',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/installation/arguments_for_run_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/installation/deploy_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/installation/nginx_configuration_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/installation/prerequisites_ru.html' ] },
          { collapsable: false,
            sidebarDepth: 2,
            children: [ '/src/ru/installation/step_by_step_server_installation_ru.html' ] }
        ]
      }
    ]
  }
}
