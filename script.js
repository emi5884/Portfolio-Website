const clip = document.querySelectorAll('.clip');
const playButton = document.querySelectorAll('.play-button') 
const $app = document.querySelector('.app')
const $appContainer = document.querySelector('.app-container')
const $enText = document.querySelectorAll('.en')
const $jaText = document.querySelectorAll('.ja')
const $playButton = document.querySelector('.play-button') 
const $aboutButton = document.querySelector('.about-button')
const $worksButton = document.querySelector('.works-button')
const $langButton = document.querySelector('.lang-button')
const $japanese = document.querySelector('.resume-ja')
const $english = document.querySelector('.resume-en')
const $langButtonTitle = document.getElementById('lang-button');
let $isJapanesHidden = false
let $isResumeHidden = false
let windowWidth = window.innerWidth;
let windowSm = 1024;

for (let i = 0; i < clip.length; i++) {
    clip[i].pause()
}

for (let i = 0; i < clip.length; i++) {
    clip[i].addEventListener('mouseenter', 
    function(e) {
        clip[i].play()
    })
    clip[i].addEventListener('mouseout', 
    function(e) {
        clip[i].pause()
    })
}

for (let i = 0; i < playButton.length; i++) {
    playButton[i].addEventListener('click', 
    function(e) {
        clip[i].play()
        playButton[i].style.display = "none"
    })
}

$langButton.addEventListener('click', 
function(){
    if ($isResumeHidden) {
        if ($isJapanesHidden) {
            for (let i = 0; i < $jaText.length; i++) {
                $jaText[i].style.display = "block"
                $enText[i].style.display = "none"
            }

            $isJapanesHidden = false
            $langButtonTitle.innerHTML = "English"
            $langButtonTitle.style.fontFamily = "Josefin Sans, sans-serif"
            
        } else {
            for (let i = 0; i < $jaText.length; i++) {
                $jaText[i].style.display = "none"
                $enText[i].style.display = "block"
            }

            $isJapanesHidden = true
            $langButtonTitle.innerHTML = "日本語"
            $langButtonTitle.style.fontFamily = "Zen Maru Gothic, sans-serif"
            $langButtonTitle.style.fontWeight = "500"
        }
    } else {
        if ($isJapanesHidden) {
            if (windowWidth <= windowSm) {
                $japanese.style.display = "block"
            } else {
                $japanese.style.display = "flex"
            }
        
            $english.style.display = "none"
            $isJapanesHidden = false

            $langButtonTitle.innerHTML = "English"
            $langButtonTitle.style.fontFamily = "Josefin Sans, sans-serif"

        } else {
            $japanese.style.display = "none"
            $english.style.display = "block"
            $isJapanesHidden = true
            $langButtonTitle.innerHTML = "日本語"
            $langButtonTitle.style.fontFamily = "Zen Maru Gothic, sans-serif"
            $langButtonTitle.style.fontWeight = "500"
        }
    }
})

$aboutButton.addEventListener('click', 
function(){
    if ($isJapanesHidden) {
        $english.style.display = "block";
    } else {
        if (windowWidth <= windowSm) {
            $japanese.style.display = "block"
        } else {
            $japanese.style.display = "flex"
        }
    }

    $app.style.display = "none";
    $aboutButton.style.color = "#f9004d";
    $worksButton.style.color = "white";
    $isResumeHidden = false
})

$worksButton.addEventListener('click', 
function(){
    if ($isJapanesHidden) {
        $english.style.display = "none";

        for (let i = 0; i < $jaText.length; i++) {
            $jaText[i].style.display = "none"
            $enText[i].style.display = "block"
        }
        
    } else {
        $japanese.style.display = "none";

        for (let i = 0; i < $jaText.length; i++) {
            $jaText[i].style.display = "block"
            $enText[i].style.display = "none"
        }
    }

    $app.style.display = "block";
    $appContainer.style.display = "flex";
    $aboutButton.style.color = "white";
    $worksButton.style.color = "#f9004d";
    $isResumeHidden = true
})