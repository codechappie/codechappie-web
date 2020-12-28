const themes = {
    dark: {
        colors: {
            background: '#121212',
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
        background: '#ffffff',
        color: '#333'
    }
};

export default themes