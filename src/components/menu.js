export const menu_data = [
    {
        'name': 'Main Navigation',
        'options': [
            {
                'name': 'Dashboard',
                'icon': 'space_dashboard',
                'open': false,
                'submenu': [
                    {
                        'name': 'Overview',
                        'route': '/overview',
                    }
                ]
            },
            {
                'name': 'Pages',
                'icon': 'layers',
                'open': false,
                'submenu': [
                    {
                        'name': 'Login',
                        'route': '/login',
                    },
                    {
                        'name': 'Register',
                        'route': '/register',
                    },
                    {
                        'name': '404',
                        'route': '/404',
                    },
                ]
            },
        ]
    },
    {
        'name': 'UI Components',
        'options': [
            {
                'name': 'Elements',
                'icon': 'smart_button',
                'open': false,
                'submenu': [
                    {
                        'name': 'Alerts',
                        'route': '/alerts',
                    },
                    {
                        'name': 'Buttons',
                        'route': '/buttons',
                    },
                    {
                        'name': 'Modals',
                        'route': '/modals',
                    },
                    {
                        'name': 'Notifications',
                        'route': '/notifications',
                    },
                    {
                        'name': 'Progress',
                        'route': '/progress',
                    },

                ]
            },
            {
                'name': 'Components',
                'icon': 'vertical_split',
                'open': false,
                'submenu': [
                    {
                        'name': 'Accordions',
                        'route': '/accordions',
                    },
                    {
                        'name': 'Cards',
                        'route': '/cards',
                    },
                    {
                        'name': 'Carousel',
                        'route': '/carousel',
                    },
                    {
                        'name': 'Template Editor',
                        'route': '/templates',
                    },
                    {
                        'name': 'Tabs',
                        'route': '/tabs',
                    },
                ]
            },
        ]
    },
    {
        'name': 'Data Visualization',
        'options': [
            {
                'name': 'Charts',
                'icon': 'show_chart',
                'open': false,
                'submenu': [
                    {
                        'name': 'Chart JS',
                        'route': '/chartjs',
                    },
                    {
                        'name': 'VisX',
                        'route': '/visx',
                    },
                    {
                        'name': 'Recharts',
                        'route': '/recharts',
                    },
                ]
            },

            {
                'name': 'Tables',
                'icon': 'table_chart',
                'open': false,
                'submenu': [
                    {
                        'name': 'Regular Tables',
                        'route': '/tables',
                    },
                ]
            },
        ]
    },
    {
        'name': 'Forms',
        'options': [
            {
                'name': 'Forms',
                'icon': 'border_color',
                'open': false,
                'submenu': [
                    {
                        'name': 'General',
                        'route': '/forms'
                    },
                    {
                        'name': 'Wizard / Stepper',
                        'route': '/stepper'
                    },
                    {
                        'name': 'Dropzone',
                        'route': '/dropzone'
                    },
                    {
                        'name': 'Rich Text',
                        'route': '/wysiwyg'
                    },
                ]
            },
        ]
    },
]
