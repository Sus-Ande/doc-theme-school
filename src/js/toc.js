const tableOfContents = () => {
    
    const headings = document.querySelectorAll('.page h2, .page h3')
    const tocNav = document.querySelector('.toc-nav')

    const tocList = document.createElement('ul')
    tocList.classList.add('toc-nav__list')

    // Add list items and links to toc

    headings.forEach( heading => {

        const linkText = heading.innerText
        const headingLevel = heading.nodeName //Node är något som strukturellt följer strukturellt schema
        const headingId = heading.getAttribute('id')

        // Create Link
        const linkEl = document.createElement('a')
        linkEl.classList.add('toc-nav__link')
        linkEl.setAttribute('href', '#' + headingId)
        linkEl.innerText = linkText
        
        // Create List Item
        const listItem = document.createElement('li')
        listItem.classList.add('toc-nav__item')
        listItem.append(linkEl)

        if ( headingLevel === 'H2' ) {
            tocList.append(listItem)
        } else if ( headingLevel === 'H3' ) {

            let latestElement= tocList.lastChild

            if ( latestElement.lastChild.nodeName === 'A') {
                const tocListChild = document.createElement('ul')
                tocListChild.classList.add('toc-nav__list', 'toc-nav__list--level-2')
                tocListChild.append(listItem)
                latestElement.append(tocListChild)
            } else {
                latestElement.lastChild.append(listItem)
            }         
        }
    })

    tocNav.append(tocList) // append = lägger till i html


}

tableOfContents()