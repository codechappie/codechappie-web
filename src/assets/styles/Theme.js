const themes = {
    dark: {
        colors: {
            background: '#0d1117',
            navbar: '#161b22',
            colorNavbar: '#ffffff',
            color: '#ffffff',
            primaryText: '#dddddd',
            secondaryText: 'red'
        },
        queries:{
            bigDesktop: '@media screen and (max-width: 2560px)',
            mediumDesktop: '@media screen and (max-width: 1440px)',
            smallDesktop: '@media screen and (max-width: 1200px)'
        }
    },
    light:{
        colors: {
            background: '#ffffff',
            color: '#333',
            colorNavbar: '#333333',
            navbar: '#ffffff',
            primaryText: '#dddddd',
            secondaryText: 'red'
        },
        queries:{
            bigDesktop: '@media screen and (max-width: 2560px)',
            mediumDesktop: '@media screen and (max-width: 1440px)',
            smallDesktop: '@media screen and (max-width: 1200px)'
        }
    }
};

export default themes