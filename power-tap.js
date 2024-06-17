// ==UserScript==
// @name         Blum
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://cexp.cex.io/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/power-tap.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/power-tap.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==

function clickElementBySelector(selector, callback) {
    var element = document.querySelector(selector);
    if (element) {
        element.click();
        if (callback) {
            callback();
        }
    } else {
        console.log("Element not found for the provided selector:", selector);
        setTimeout(function() {
            clickElementBySelector(selector, callback);
        }, 1000); // Retry after 1 second
    }
}
function performClickSequence(callback) {
    clickElementBySelector("#root > div > nav > button:nth-child(3)", function() {
        setTimeout(function() {
            clickElementBySelector("#root > div > div > div > div.Farm_startFarmingBtnWrapper__iEYr7 > button", function() {
                setTimeout(function() {
                    clickElementBySelector("#radix-\\:r0\\: > button", function() {
                        setTimeout(function() {
				                    clickElementBySelector("#root > div > div > div > div.Farm_startFarmingBtnWrapper__iEYr7 > button", function() {
				                        if (callback) {
				                            callback();
				                        }
				                    });
				                }, 1000);
                    });
                }, 1000);
            });
        }, 1000);
    });
} 
function executeSequenceWithRepetition() {
    var repetitionCount = 0;
    function repeatSteps() {
        if (repetitionCount < 3) {
            performClickSequence(function() {
                repetitionCount++;
                repeatSteps();
            });
        } 
    }
    repeatSteps();
}
function startProcess() {
    console.log("Starting process, waiting for the site to render...");
    clickElementBySelector("#root > div > nav > button:nth-child(3)", function() {
        executeSequenceWithRepetition();
    });
}

// Start the process
startProcess();

