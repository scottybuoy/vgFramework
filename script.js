let player = document.getElementById("temp-player");
let playerRect = player.getBoundingClientRect();

document.addEventListener("keydown", jump)

// logic for not repeating jumps when holding jump
function jump() {
    console.log("jump!");
    let playerTop = window.getComputedStyle(player).getPropertyValue('top');
    let topNum = parseInt(playerTop.split('px')[0]);
    player.style.top = `${topNum-100}px`;
    console.log(topNum);
    document.removeEventListener("keydown", jump);
    let handleJump = setTimeout(() => {
        document.addEventListener("keydown", jump);
    }, 1000)
};
