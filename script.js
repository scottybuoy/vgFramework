let player = document.getElementById("temp-player");
let playerRect = player.getBoundingClientRect();
let gravPlayer = document.getElementById("gravity-test-player");
let platform = document.querySelector('#platform');
let platformRect = platform.getBoundingClientRect();

gravity();

document.addEventListener("keydown", jump)

// logic for not repeating jumps when holding jump
function jump() {
    let playerTop = window.getComputedStyle(player).getPropertyValue('top');
    let topNum = parseInt(playerTop.split('px')[0]);

    let intervalCounter = 0;
    let reducer = .85;

    let intervalTest = setInterval(() => {
        console.log('when?');
        topNum *= reducer;
        player.style.top = `${topNum}px`;
        intervalCounter++;
        if (intervalCounter > 9) {
            clearInterval(intervalTest);
        }
    },50);

    document.removeEventListener("keydown", jump);
    let handleJump = setTimeout(() => {
        document.addEventListener("keydown", jump);
    }, 1000)
};

function gravity() {
    let gravPlayerBottom = window.getComputedStyle(gravPlayer).getPropertyValue('bottom');
    let gravTopNum = parseInt(gravPlayerBottom.split('px')[0]);
    let pos = 0;
    let gravityInterval = setInterval(() => {
        let gravPlayerRect = gravPlayer.getBoundingClientRect();
        pos += 10;
        gravPlayer.style.top = `${pos}px`;
        if (gravPlayerRect.bottom >= platformRect.top) {
            console.log("CONTACT")
            pos = gravPlayer.style.top;
        }
    }, 100);
}

document.addEventListener("keydown", (e) => {
    console.log(e.key);
    if (e.key == "LeftArrow") {
    
    }
})