// ==UserScript==
// @name         iceberg
// @version      1.1
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://0xiceberg.store/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/iceberg.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/iceberg.js
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
    clickElementBySelector("#root > div > div.css-5bbctu > div > div.css-59ho22 > div.chakra-offset-slide > button", function() {
        setTimeout(function() {
            clickElementBySelector("#root > div > div.css-5bbctu > div > div.css-59ho22 > div.chakra-offset-slide > button", function() {
                if (callback) {
                    callback();
                }
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
    clickElementBySelector("#root > div > div.css-5bbctu > div > div.css-59ho22 > div.chakra-offset-slide > button", function() {
        executeSequenceWithRepetition();
    });
}

// Start the process
startProcess();
