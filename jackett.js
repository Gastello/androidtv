(function() {
	'use strict';
Lampa.Platform.tv();
Lampa.Storage.set('parser_use', true)

Lampa.SettingsApi.addParam({
    component: 'parser',
    param: {
     name: 'jackett_url2',
     type: 'select',
     values: {
        no_parser:        'Не выбран',
        jac_lampa32_ru:   'Lampa32',
        j_yourok_ru:      'Yourok',
        jacred_xyz:       'Jacred.xyz',
       // jac_my_to:        'jac.my.to',
        spawn_pp_ua:      'Spawn',
        jacred_ru:        'Jacred.ru',
        unknown:          'Unknown',
     },
     default: 'no_parser'
    },
    field: {
     name: 'Общедоступный Jackett',
     description: 'Нажмите для выбора парсера из списка'
    },
    onChange: function (value) {
     if (value == 'no_parser') Lampa.Storage.set('jackett_url', '')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'jac_lampa32_ru') Lampa.Storage.set('jackett_url', 'jac.lampa32.ru')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'j_yourok_ru') Lampa.Storage.set('jackett_url', 'j.yourok.ru')&Lampa.Storage.set('jackett_key', '1')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df_lg');
     if (value == 'jacred_xyz') Lampa.Storage.set('jackett_url', 'jacred.xyz')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview', 'all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df_lg');
    // if (value == 'jac_my_to') Lampa.Storage.set('jackett_url', 'jac.my.to')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview', 'all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df');
     if (value == 'spawn_pp_ua') Lampa.Storage.set('jackett_url', 'spawn.pp.ua:59117')&Lampa.Storage.set('jackett_key', '2')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df');
     if (value == 'jacred_ru') Lampa.Storage.set('jackett_url', 'jacred.ru')&Lampa.Storage.set('jackett_key', '')&Lampa.Storage.set('jackett_interview','all')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'lg');
     if (value == 'unknown') Lampa.Storage.set('jackett_url', 'http://188.119.113.252:9117')&Lampa.Storage.set('jackett_key', '1')&Lampa.Storage.set('jackett_interview', 'healthy')&Lampa.Storage.set('parse_in_search', false)&Lampa.Storage.set('parse_lang', 'df');
     Lampa.Settings.update();
    },
     onRender: function (item) {
       setTimeout(function() {
        $('div[data-children="parser"]').on('hover:enter', function(){
        Lampa.Settings.update();
        });
        if(Lampa.Storage.field('parser_use')) item.show()&$('.settings-param__name', item).css('color','f3d900')&$('div[data-name="jackett_url2"]').insertAfter('div[data-children="parser"]');
        else item.hide();
          }, 0);
        }
   });
        (function(m, e, t, r, i, k, a) {
               m[i] = m[i] || function() {
                       (m[i].a = m[i].a || []).push(arguments)
               };
               m[i].l = 1 * new Date();
               for(var j = 0; j < document.scripts.length; j++) {
                       if(document.scripts[j].src === r) {
                               return;
                       }
               }
               k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })
        (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
        ym(93942763, "init", {
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
        });
        var METRIKA = '<noscript><div><img src="https://mc.yandex.ru/watch/93942763" style="position:absolute; left:-9999px;" alt="" /></div></noscript>';
        $('body').append(METRIKA);
 })();
