const darkModeToggle = () => {

    // Get element from DOM
    const body = document.querySelector('body')
    const themeToggleButton = document.querySelector('#theme-toggle-button')
    const themeToggleList = document.querySelector('.theme-toggle__list')
    const themeModeButtons = document.querySelectorAll('.theme-toggle__item .theme-toggle__button')

    // Function to toggle List visible. Göra så att listan syns och inte syns vid klicka på den
    const toggleListVisibility = () => {
        themeToggleButton.classList.toggle('theme-toggle__button--active')
        themeToggleList.classList.toggle('theme-toggle__list--visible')
    }

    // Function to toggle theme mode 
    const toggleThemeMode = (event) => {

        // Get parent of current button
        const buttonParent = event.currentTarget.parentNode

        // Get Value from this buttom data-attribute (data-theme="")
        const theme = event.currentTarget.dataset.theme

        // Get icon element from themeToggleButton
        const themeToggleButtonIcon = themeToggleButton.querySelector('.material-symbols-outlined') 
        
        // Get icon element from clicked Button
        const icon = event.currentTarget.querySelector('.material-symbols-outlined')
        
        // Get text from icon from click Button
        const iconText = icon.innerText;

        // Change text in ThemeToggleButtons icon element to current buttoms icon text
        themeToggleButtonIcon.innerText = iconText

        // Remove all slasses from body
        body.classList = ''

        // Add light class to body if data-attribute value was light
        if ( theme === 'light' ) {
            body.classList.add('light')
        }

         // Add dark class to body if data-attribute value was dark
        if ( theme === 'dark' ) {
            body.classList.add('dark')
        }       

         // Add default value in data-attribute, remove all classes from body
        if ( theme === 'default' ) { 
            body.classList = ''
        }

        // For each parent of all buttons, remove current class
        themeModeButtons.forEach( button => {
            button.parentNode.classList.remove('theme-toggle__item--current')
        })

        // Add current-class on clicked buttons parent
        buttonParent.classList.add('theme-toggle__item--current')

        // Run function to hide list
        toggleListVisibility()

    }

    // Events
    themeToggleButton.addEventListener('click', toggleListVisibility)
    themeModeButtons.forEach(button => button.addEventListener('click', toggleThemeMode))


}

darkModeToggle()