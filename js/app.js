const iconSticky = '<path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h10l6-6V5C21,3.895,20.105,3,19,3z M7,7h10v2H7V7z M12,13H7v-2h5V13z M14,19.5V14h5.5L14,19.5z" fill="currentColor" fill-rule="nonzero"/>'

function run() {
    miro.initialize({
        extensionPoints: {
            bottomBar: {
                title: 'MURAL Picker',
                svgIcon: iconSticky,
                onClick: () => {
                    miro.board.ui.openLibrary('content.html', { title: 'MURAL Picker' })
                }
            }
        }
    })
}

miro.onReady(run)