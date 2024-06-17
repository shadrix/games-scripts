// ==UserScript==
// @name         tap swap
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://app.tapswap.club/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/tap-swap.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/tap-swap.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==
function simulateClick(element, offsetX = 0, offsetY = 0) {
    const rect = element.getBoundingClientRect();
    const clientX = rect.left + rect.width / 2 + offsetX;
    const clientY = rect.top + rect.height / 2 + offsetY;

    const events = ['pointerdown', 'mousedown', 'pointerup', 'mouseup', 'click'];

    events.forEach(eventType => {
        const event = new MouseEvent(eventType, {
            bubbles: true,
            cancelable: true,
            view: window,
            clientX,
            clientY,
            screenX: clientX,
            screenY: clientY,
            pageX: clientX,
            pageY: clientY,
            button: 0,
            buttons: 1,
            pointerId: 1,
            pointerType: 'touch',
            isPrimary: true,
        });

        element.dispatchEvent(event);
    });
}

function clickElementBySelector(selector, callback, offsetX = 0, offsetY = 0) {
    var element = document.querySelector(selector);
    if (element) {
        simulateClick(element, offsetX, offsetY);
        if (callback) {
            callback();
        }
    } else {
        console.log("Element not found for the provided selector:", selector);
        setTimeout(function() {
            clickElementBySelector(selector, callback, offsetX, offsetY);
        }, 1000); // Retry after 1 second
    }
}

function performClickSequence(callback) {
    const clickPromises = [];
    for (let i = 0; i < 10; i++) {
        const offsetX = (Math.random() - 0.5) * 100; // Random offset between -5 and 5
        const offsetY = (Math.random() - 0.5) * 100; // Random offset between -5 and 5
        clickPromises.push(new Promise(resolve => {
            setTimeout(() => {
                clickElementBySelector("#ex1-layer > img", resolve, offsetX, offsetY);
            }, 1000);
        }));
    }

    Promise.all(clickPromises).then(() => {
        if (callback) {
            callback();
        }
    });
}

function executeSequenceWithRepetition() {
    function repeatSteps() {
        performClickSequence(function() {
            repeatSteps();
        });
    }
    repeatSteps();
}

function startProcess() {
    console.log("Starting process, waiting for the site to render...");
     clickElementBySelector("#app > div._drowerContainer_9q941_1 > button", function() {
    });
     clickElementBySelector("#app > div:nth-child(3) > div._droewrHeader_9q941_18 > div > div > img", function() {
    });
     clickElementBySelector("#app > div:nth-child(2) > div._droewrHeader_9q941_18 > div > div > img", function() {
    }); 
     clickElementBySelector("#app > div._container_1om0l_1._main_1om0l_27 > div._bottomContent_1uv7x_1 > div > div._wrapper_1c0ec_1 > button:nth-child(4)", function() {
    });
     clickElementBySelector("#app > div._container_1om0l_1._page_1om0l_46 > div._container_1rd9h_1 > div._stack_sem72_1 > div > button:nth-child(1)", function() {
    });
     clickElementBySelector("#app > div._container_1om0l_1._page_1om0l_46 > div._drowerContainer_9q941_1 > button", function() {
    });
     clickElementBySelector("#app > div._container_1om0l_1._page_1om0l_46 > div._drowerContainer_9q941_1 > div._droewrHeader_9q941_18 > div > div", function() {
    });
     clickElementBySelector("#app > div._container_1om0l_1._page_1om0l_46 > div._container_1rd9h_1 > div._bottomContent_1uv7x_1 > div > button:nth-child(3)", function() {
    }); 
   clickElementBySelector("#ex1-layer > img", function() {
        executeSequenceWithRepetition();
    });
}

// Start the process
startProcess();
