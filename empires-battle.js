// ==UserScript==
// @name         Blum
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://app.empiresbattle.com/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/empires-battle.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/empires-battle.js
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
                clickElementBySelector("#root > div > main > div._card_1sxgz_323 > img", resolve, offsetX, offsetY);
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
    clickElementBySelector("#root > div > main > div._card_1sxgz_323 > img", function() {
        executeSequenceWithRepetition();
    });
}

// Start the process
startProcess();
