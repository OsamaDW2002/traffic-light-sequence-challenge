const redLight = document.querySelector(".red");
const yellowLight = document.querySelector(".yellow");
const greenLight = document.querySelector(".green");

function activateLight(light, duration) {
    // Set opacity for inactive lights
    redLight.style.opacity = 0.3;
    yellowLight.style.opacity = 0.3;
    greenLight.style.opacity = 0.3;

    // Activate the selected light
    light.style.opacity = 1;
    setTimeout(() => {
        light.style.opacity = 0.3;
    }, duration);
}

function sequenceLights() {
    setInterval(() => {
        activateLight(redLight, 1000);
        setTimeout(() => {
            activateLight(yellowLight, 1000);
            setTimeout(() => {
                activateLight(greenLight, 1000);
            }, 1000);
        }, 1000);
    }, 3000); // 3000ms total cycle time (1s red + 1s yellow + 1s green)
}


sequenceLights(); // Start the sequence immediately
