// ==UserScript==
// @name         Blum
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://tg-app.memefi.club/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/memefi.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/memefi.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==
// Function to navigate to the new URL if the current URL is not the target URL
function navigateIfNotCurrentUrl() {
    // Define the target URL
    const targetUrl = "https://tg-app.memefi.club/";

    // Read the current URL
    const currentUrl = window.location.href;

    // Check if the current URL is not the target URL
    if (currentUrl === "https://tg-app.memefi.club/boosters") {
        // Navigate to the target URL
        window.location.href = targetUrl; // or you can use window.location.assign(targetUrl);
    }
}

// Call the function to perform the navigation if needed
navigateIfNotCurrentUrl();

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
    clickElementBySelector("#root > main > div > div > div.MuiBox-root.css-1o9u4wi > div.MuiBox-root.css-qty7yh > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeDecorativePrimary.MuiButton-containedSizeDecorativePrimary.MuiButton-colorPrimary.MuiButtonGroup-grouped.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedContained.MuiButtonGroup-groupedContainedHorizontal.MuiButtonGroup-groupedContainedPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeDecorativePrimary.MuiButton-containedSizeDecorativePrimary.MuiButton-colorPrimary.MuiButtonGroup-firstButton.css-rqshat", function() {
		    	setTimeout(function() {
		        clickElementBySelector("#root > main > div > div > div.MuiBox-root.css-q4ok0g > div.MuiBox-root.css-rdor31 > div > div:nth-child(2)", function() {
		           setTimeout(function() {
					        clickElementBySelector("body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-1muh5pq > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-dsgero > div.MuiBox-root.css-1ljw0zu > button", function() {
					        });
					    }, 500);
		        });
		    }, 500); 
        setTimeout(function() {
            clickElementBySelector("#root > main > div > div > div.MuiBox-root.css-q4ok0g > div.MuiBox-root.css-rdor31 > div > div.MuiStack-root.css-1jve2kl > div.MuiBox-root.css-1y7urhw > img", function() {
                setTimeout(function() {
                    clickElementBySelector("body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-1muh5pq > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-dsgero > div.MuiBox-root.css-1ljw0zu > button", function() {
                    	setTimeout(function() {
							            clickElementBySelector("#root > main > div > div > div.MuiBox-root.css-q4ok0g > div.MuiBox-root.css-rdor31 > div > div.MuiStack-root.css-1jve2kl > div.MuiBox-root.css-1y7urhw > img", function() {
							                setTimeout(function() {
							                    clickElementBySelector("body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-1muh5pq > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-dsgero > div.MuiBox-root.css-1ljw0zu > button", function() {
							                        if (callback) {
							                            callback();
							                        }
							                    });
							                }, 500);
							            });
							        }, 500);
                    });
                }, 500);
            });
        }, 500);
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
    setTimeout(function() {
        clickElementBySelector("body > div.MuiDrawer-root.MuiDrawer-modal.MuiModal-root.css-1muh5pq > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-dsgero > div.MuiBox-root.css-1ljw0zu > button", function() {
        });
		    clickElementBySelector("#root > main > div > div > div.MuiBox-root.css-1o9u4wi > div.MuiBox-root.css-qty7yh > div > button.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeDecorativePrimary.MuiButton-containedSizeDecorativePrimary.MuiButton-colorPrimary.MuiButtonGroup-grouped.MuiButtonGroup-groupedHorizontal.MuiButtonGroup-groupedContained.MuiButtonGroup-groupedContainedHorizontal.MuiButtonGroup-groupedContainedPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeDecorativePrimary.MuiButton-containedSizeDecorativePrimary.MuiButton-colorPrimary.MuiButtonGroup-firstButton.css-rqshat", function() {
		        executeSequenceWithRepetition();
		    });
    }, 6500);
}

// Start the process
startProcess();
