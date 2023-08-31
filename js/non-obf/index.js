// const
const sideBlock1 = document.getElementById("side-block1")
const sideBlock2 = document.getElementById("side-block2")
const centerImg1 = document.getElementById("center-img1")
const centerImg2 = document.getElementById("center-img2")
const cardBlock1 = document.getElementById("card-block1")
const cardBlock2 = document.getElementById("card-block2")

// event listener
window.addEventListener('resize', function () {
    resizeSideBlocks()
    resizeCenterImgs()
    animCardBlocks()
})

// functionality
function resizeSideBlocks() {
    size = Math.min(window.innerWidth, window.innerHeight) / 2.5

    sideBlock1.style.top = -size + "px"
    sideBlock1.style.bottom = window.innerHeight - size + "px"
    sideBlock1.style.left = window.innerWidth - size + "px"
    sideBlock1.style.right = -size + "px"

    sideBlock2.style.top = window.innerHeight - size + "px"
    sideBlock2.style.bottom = -size + "px"
    sideBlock2.style.left = -size + "px"
    sideBlock2.style.right = window.innerWidth - size + "px"
}

function resizeCenterImgs() {
    size = Math.min(Math.max(window.innerWidth, window.innerHeight) / 2, window.innerWidth)

    centerImg1.style.width = size + "px"
    centerImg1.style.height = centerImg1.style.height * size / centerImg1.style.width + "px"
    
    centerImg2.style.width = size / 4 + "px"
    centerImg2.style.height = size / 4 + "px"
}

function animCardBlocks() {
    if (window.innerWidth / window.innerHeight >= 2 / 3) {
        cardBlock1.style.top = window.innerHeight / 10 + "px"
        cardBlock2.style.bottom = window.innerHeight / 10 + "px"
    } else {
        cardBlock1.style.top = window.innerHeight / 20 + "px"
        cardBlock2.style.bottom = window.innerHeight / 20 + "px"
    }

    cardBlock1.style.right = window.innerWidth / 15 + "px"
    cardBlock1.style.marginLeft = window.innerWidth / 15 + "px"

    cardBlock2.style.left = window.innerWidth / 15 + "px"
    cardBlock2.style.marginRight = window.innerWidth / 15 + "px"

    if (window.innerWidth / window.innerHeight >= 3 / 2) {
        cardBlock1.style.width = window.innerWidth / 2 + "px"
    } else {
        cardBlock1.style.width = null
    }
    
}

function main() {
    resizeSideBlocks()
    resizeCenterImgs()
    animCardBlocks()
}

main()