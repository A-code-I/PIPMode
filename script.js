const videoElement=document.getElementById('video');
const button=document.getElementById('button');

//prompt to selct the media stream , pass to video element , then play
async function selectMediaStream(){
    try {
        const mediaSream=await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject=mediaSream;
        videoElement.onloadedmetadata=() => {
            videoElement.play();
        }

    } catch (error) {
        //Catch error here
        console.log('whoops , error here :',error);
    }
}

button.addEventListener('click', async () => {
    //Disable Button
    button.diabled=true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled=false;

});
//Onload
selectMediaStream();