//! Sidebar
const menuItem = document.querySelectorAll('.menu-item');
//! messages
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
//! Theme Customization
const theme = document.querySelector('#theme');
const themeModel = document.querySelector('.customize-theme');
const fontSizes =  document.querySelectorAll('.chosse-size  span');
let root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const background = document.querySelectorAll('.choose-bg div');

//! ===================Sidebar=================
// remove active class from all menu item
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = 'none';
        } else {
            document.querySelector('.notifications-popup').style.display = 'block';
            document.querySelector('.notifactions-count').style.display = 'none';
        }
    })
})

//! ===================Messages=================

//search chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    })
}
//search chat
messageSearch.addEventListener('keyup', searchMessage)

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notifactions-count').style.display ='none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})


//! Theme Customization

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
// close model
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModel.style.display = 'none';
    }
}
themeModel.addEventListener('click', closeThemeModel);
theme.addEventListener('click', openThemeModel);



//! ===================Fonts=================
// remove active class from spans or font size selectors
const removeSizeSelectors = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active')
    })
}

fontSizes.forEach(size => {
   

    size.addEventListener('click', () => {
        removeSizeSelectors();
        size.classList.add('active');
        let fontSize;

        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '-2rem');
            root.style.setProperty('--sticky-top-right', '-17rem');
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '-12rem');
            root.style.setProperty('--sticky-top-right', '-35rem');
        }
        // Change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})
//! ===================Colors=================

// remove active class from color
const removeColorSelectors = () => {
    colorPalette.forEach(colorpicker => {
        colorpicker.classList.remove('active');
    })
}
// Change Primary Color
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        removeColorSelectors();
        color.classList.add('active');
        let primaryHue;

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

//! ===================Background=================
// remove active class from bg
const removebgSelectors = () => {
    background.forEach(bgpiker => {
        bgpiker.classList.remove('active');
    })
}
// Change bg 
background.forEach(bg => {
    bg.addEventListener('click', () => {
        bg.classList.add('active');
        removebgSelectors();
        let lightColorLightness;
        let whiteColorLightness;
        let darkColorLightness;

        if(bg.classList.contains('bg-1')) {
            window.location.reload();
        } else if(bg.classList.contains('bg-2')) {
            darkColorLightness = '95%';
            whiteColorLightness = '20%';
            lightColorLightness = '15%';
        } else if(bg.classList.contains('bg-3')) {
            darkColorLightness = '95%';
            whiteColorLightness = '10%';
            lightColorLightness = '0%';        
        }
        root.style.setProperty('--white-color-lightness', whiteColorLightness);
        root.style.setProperty('--dark-color-lightness', darkColorLightness);
        root.style.setProperty('--light-color-lightness', lightColorLightness);
    })
})
