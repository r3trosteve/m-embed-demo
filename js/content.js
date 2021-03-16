const embeds = [
    {img: 'https://assets-global.website-files.com/5e4319072e6fb910d3a508a6/5e706fd52e38715ba19f2927_service%20blueprint.jpeg', width: 320, height: 240, url: "https://app.mural.co/embed/9d3d9d06-df22-4740-b7fa-b52d3760a1f6"}
]

function getEmbed(embed) {
    return `<div class="draggable-item image-box">
        <img src="${embed.img}" data-image-url="${embed.img}" data-embed-url="${embed.url}" 
    </div>`
}

function addEmbeds(container) {
    container.innerHTML += embeds.map((i) => getEmbed(i)).join('')
}

function createEmbed(canvasX, canvasY, embedUrl) {
    return miro.board.widget.create({
        type: 'EMBED',
        x: canvasX,
        y: canvasY,
        html: `<iframe src='${embedUrl}'
                width='100%'
                height='100%'
                style='min-width: 640px; min-height: 480px; background-color: #f4f4f4; border: 1px solid #efefef'
                sandbox='allow-same-origin allow-scripts allow-modals allow-popups allow-popups-to-escape-sandbox'>
        </iframe>`,
        scale: 2
    })
}

function bootstrap() {
    const container = document.getElementById('container')
    addEmbeds(container)

    let currentImageURL
    let currentEmbedUrl

    const embedOptions = {
        draggableItemSelector: 'img',
        onClick: async (targetElement) => {
            currentEmbedUrl = targetElement.getAttribute('data-embed-url')
            const widget = (await createEmbed(0,0,currentEmbedUrl))[0]
            miro.board.viewport.zoomToObject(widget)
        },
        onDrop: (canvasX, canvasY, url) => {
            currentEmbedUrl = targetElement.getAttribute('data-embed-url')
            createEmbed(canvasX, canvasY, currentEmbedUrl)
        }
    }
    miro.board.ui.initDraggableItemsContainer(container, embedOptions)
}

miro.onReady(bootstrap);