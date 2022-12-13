// 2022/12/12
// upanddown.js
// Author: 幼稚园园长
// SoftWare: WebStorm


window.onload = function () {
    let arrow_down = document.getElementById("arrow_down")
    if (arrow_down) {
        let s = function () {
            return setInterval(function () {
                arrow_down.style.opacity = " 0.3"
                setTimeout(function () {
                    arrow_down.style.opacity = "1"
                }, 500)
            }, 1500)
        }
        s()

        let content_box = document.getElementById("content-box")
        arrow_down.addEventListener("click", function () {
            window.scroller(content_box, 1000)
        })


    }
    }

window.onscroll = function() {
    let arrowDown = $("#arrow_down")
    let top = Math.floor(document.documentElement.scrollTop)
    if (top < 100) {
        arrowDown.fadeIn()

    } else if (top > 100) {
        arrowDown.fadeOut()
    }

}

