const socket = io();

const myFace = document.getElementById("myFace");
const muteBtn = Document.getElementById("mute");
const cameraBtn = Document.getElementById("camera");

let myStream;
let muted = false;
let cameraOff = false;

async function getMedia() {
  try {
    myStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    myFace.srcObject = myStream;
  } catch (e) {
    console.log(e);
  }
}

getMedia();

function handleCameraBtn() {}

function handleMuteClick() {}

muteBtn.addEventListener("click", handleMuteClick);
cameraBtn.addEventListener("click", handleCameraBtn);
