// ==UserScript==
// @name         Catizen 1
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://game.catizen.ai/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/catizen1.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/catizen1.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==

try {
    console.log('Script started');

    // Function to handle and log each game element
    function handleGameElement(element) {
        if (!element || !element.item) return;

        const { type } = element.item;
        console.log(`Element detected: ${type}`);
    }

    // Overriding the push method to intercept added elements
    const originalPush = Array.prototype.push;
    Array.prototype.push = function (...items) {
        items.forEach(item => handleGameElement(item));
        return originalPush.apply(this, items);
    };

    // MutationObserver to observe changes in the DOM
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Ensure the node is an element
                        handleGameElement(node);
                    }
                });
            }
        });
    });

    const appElement = document.querySelector('#app');
    if (appElement) {
        observer.observe(appElement, { childList: true, subtree: true });
    } else {
        console.log('App element not found');
    }
} catch (e) {
    console.log('Failed to initiate the game script:', e);
}
