    var jqueryVersion = '1.11.1';

    requirejs.config({
        paths:
        {
            'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/'+jqueryVersion+'/jquery.min',
            'jqueryui': 'https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.1/jquery-ui.min',
            
        },
        shim:
        {
            'jqueryui': ['jquery']
        }
    });

    // Responsive Nav

    require(['responsivenav'], function ()
    {
        responsiveNav('.nav-collapse', {
            transition: 400,
            insert: 'after'
        });
    });

    // Accordion

    require(['jqueryui'], function()
    {
        $('.jquery-ui-accordion').accordion({
            header: 'h3',
            collapsible: true,
            active: false,
            heightStyle: 'content'
        });
            })

    // Detect whether user enabled 'Do No Track' in their browser, and honour it.

    define('track', function ()
    {
        return {
            allow : navigator.doNotTrack !== 'yes' && navigator.doNotTrack !== '1' && navigator.doNotTrack !== 1
        };
    });

    // Google Analytics - remember to amend the user account ID number!

    require(['track'], function(track)
    {
        if (track.allow) {
            window._gaq = window._gaq || [];
            window._gaq.push(['_setAccount', 'UA-xxxxxxxx-x', 'auto']);
            window._gaq.push(['_setDomainName', 'none']);
            window._gaq.push(['_gat._anonymizeIp']);
            window._gaq.push(['_setVisitorCookieTimeout', 0]);
            window._gaq.push(['_setSessionCookieTimeout', 0]);
            window._gaq.push(['_setCampaignCookieTimeout', 0]);
            window._gaq.push(['_trackPageview']);
            require(['https://www.google-analytics.com/ga.js']);
        }
    });
