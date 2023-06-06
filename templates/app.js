const videoElement = document.getElementById("videoElement");

// Get user media to access the camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        videoElement.srcObject = stream;
    })
    .catch(function(error) {
        console.log("Error accessing camera:", error);
    });
