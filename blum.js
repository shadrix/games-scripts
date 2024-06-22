// ==UserScript==
// @name         Blum
// @version      1.1
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://telegram.blum.codes/*
// @grant        none
// @icon         https://cdn.prod.website-files.com/65b6a1a4a0e2af577bccce96/65ba99c1616e21b24009b86c_blum-256.png
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/blum.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/blum.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==

let GAME_SETTINGS = {
    minBombHits: Math.floor(Math.random() * 2),
    minIceHits: Math.floor(Math.random() * 2) + 2,
    flowerSkipPercentage: Math.floor(Math.random() * 11) + 15,
    minDelayMs: 2000,
    maxDelayMs: 5000,
};

let isGamePaused = false;

try {
    console.log('Script started');

    let gameStats = {
        score: 0,
        bombHits: 0,
        iceHits: 0,
        flowersSkipped: 0,
        isGameOver: false,
    };

    const originalPush = Array.prototype.push;
    Array.prototype.push = function (...items) {
        if (!isGamePaused) {
            items.forEach(item => handleGameElement(item));
        }
        return originalPush.apply(this, items);
    };

    function handleGameElement(element) {
        if (!element || !element.item) return;

        const { type } = element.item;
        switch (type) {
            case "CLOVER":
                processFlower(element);
                break;
            case "BOMB":
                processBomb(element);
                break;
            case "FREEZE":
                processIce(element);
                break;
        }
    }

    function processFlower(element) {
        const shouldSkip = Math.random() < (GAME_SETTINGS.flowerSkipPercentage / 100);
        if (shouldSkip) {
            gameStats.flowersSkipped++;
        } else {
            gameStats.score++;
            clickElement(element);
        }
    }

    function processBomb(element) {
        if (gameStats.bombHits < GAME_SETTINGS.minBombHits) {
            gameStats.score = 0;
            clickElement(element);
            gameStats.bombHits++;
        }
    }

    function processIce(element) {
        if (gameStats.iceHits < GAME_SETTINGS.minIceHits) {
            clickElement(element);
            gameStats.iceHits++;
        }
    }

    function clickElement(element) {
        element.onClick(element);
        element.isExplosion = true;
        element.addedAt = performance.now();
    }

    function checkGameCompletion() {
        const rewardElement = document.querySelector('#app > div > div > div.content > div.reward');
        if (rewardElement && !gameStats.isGameOver) {
            gameStats.isGameOver = true;
            logGameStats();
            resetGameStats();
            resetGameSettings();
            if (window.__NUXT__.state.$s$0olocQZxou.playPasses > 0) {
                startNewGame();
            }
        }
    }

    function logGameStats() {
        console.log(`Game Over. Stats: Score: ${gameStats.score}, Bombs: ${gameStats.bombHits}, Ice: ${gameStats.iceHits}, Flowers Skipped: ${gameStats.flowersSkipped}`);
    }

    function resetGameStats() {
        gameStats = {
            score: 0,
            bombHits: 0,
            iceHits: 0,
            flowersSkipped: 0,
            isGameOver: false,
        };
    }

    function resetGameSettings() {
        GAME_SETTINGS = {
            minBombHits: Math.floor(Math.random() * 2),
            minIceHits: Math.floor(Math.random() * 2) + 2,
            flowerSkipPercentage: Math.floor(Math.random() * 11) + 15,
            minDelayMs: 2000,
            maxDelayMs: 5000,
        };

    }

    function getRandomDelay() {
        return Math.random() * (GAME_SETTINGS.maxDelayMs - GAME_SETTINGS.minDelayMs) + GAME_SETTINGS.minDelayMs;
    }

    function startNewGame() {
        setTimeout(() => {
            const newGameButton = document.querySelector("#app > div > div > div.buttons > button:nth-child(2)");
            if (newGameButton) {
                newGameButton.click();
            }
            gameStats.isGameOver = false;
        }, getRandomDelay());
    }

    const observer = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                checkGameCompletion();
            }
        }
    });

    const appElement = document.querySelector('#app');
    if (appElement) {
        observer.observe(appElement, { childList: true, subtree: true });
    }

    const pauseButton = document.createElement('button');

    function toggleGamePause() {
        isGamePaused = !isGamePaused;
        pauseButton.textContent = isGamePaused ? 'Resume' : 'Pause';
    }

    // Function to wait for the element and click it
    function waitForElementAndClick(selector, interval = 1000, maxAttempts = 3) {
        return new Promise((resolve, reject) => {
            let attempts = 0;
            const checkExist = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    element.click();
                    clearInterval(checkExist);
                    resolve(true);
                } else {
                    attempts++;
                    if (attempts >= maxAttempts) {
                        clearInterval(checkExist);
                        resolve(false);
                    }
                }
            }, interval);
        });
    }

    // Selectors for the elements
    const firstSelector = "#app > div > div > div.pages-daily-reward-reward > div.footer > div.continue-button-wrapper > button";
    const secondSelector = "#app > div.index-page.page > div > div.farming-buttons-wrapper > div > button";
    const thiedSelector = "#app > div.layout-tabs.tabs > a:nth-child(3)";
    const fouthSelector = "#app > div.frens-page.page > div > div.pages-frens-list-heading.list-heading > div.claim-zone > button";
    const fifthSelector = "#app > div.layout-tabs.tabs > a:nth-child(1)";
    const sixthSelector = "#app > div.index-page.page > div > div.pages-index-drop.drop-zone > div > a";

    // Function to perform the second task 3 times
    async function performsixhhTask() {
        for (let i = 0; i < 3; i++) {
            try {
                await waitForElementAndClick(sixthSelector);
                console.log(`Task ${i + 1} completed`);
            } catch (error) {
                console.error(`Task ${i + 1} failed:`, error);
                break;
            }
        }
    }
    
    // Function to perform the second task 3 times
    async function performfifthhTask() {
        for (let i = 0; i < 3; i++) {
            try {
                await waitForElementAndClick(fifthSelector);
                console.log(`Task ${i + 1} completed`);
            } catch (error) {
                console.error(`Task ${i + 1} failed:`, error);
                break;
            }
        }
    }
    
    // Function to perform the second task 3 times
    async function performfouthTask() {
        for (let i = 0; i < 3; i++) {
            try {
                await waitForElementAndClick(fouthSelector);
                console.log(`Task ${i + 1} completed`);
            } catch (error) {
                console.error(`Task ${i + 1} failed:`, error);
                break;
            }
        }
    }
    
    // Function to perform the second task 3 times
    async function performThiedTask() {
        for (let i = 0; i < 3; i++) {
            try {
                await waitForElementAndClick(thiedSelector);
                console.log(`Task ${i + 1} completed`);
            } catch (error) {
                console.error(`Task ${i + 1} failed:`, error);
                break;
            }
        }
    }

    // Function to perform the second task 3 times
    async function performSecondTask() {
        for (let i = 0; i < 3; i++) {
            try {
                await waitForElementAndClick(secondSelector);
                console.log(`Task ${i + 1} completed`);
            } catch (error) {
                console.error(`Task ${i + 1} failed:`, error);
                break;
            }
        }
    }

    // Function to perform the entire sequence of tasks
    async function performAllTasks() {
        try {
            // Wait for the first element and click it once, or proceed if it doesn't appear
            const firstTaskCompleted = await waitForElementAndClick(firstSelector);
            if (firstTaskCompleted) {
                console.log('First task completed');
            } else {
                console.log('First element did not appear, proceeding with second task');
            }

            // Perform the second task 3 times
            await performSecondTask();
            await performThiedTask();
            await performfouthTask();
            await performfifthhTask();
            await performsixhhTask();
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // Start the tasks
    performAllTasks();
} catch (e) {
    console.log('Failed to initiate the game script');
}
