// ==UserScript==
// @name         Blum
// @version      1.0
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
    pauseButton.textContent = 'Pause';
    pauseButton.style.position = 'fixed';
    pauseButton.style.bottom = '20px';
    pauseButton.style.right = '20px';
    pauseButton.style.zIndex = '9999';
    pauseButton.style.padding = '4px 8px';
    pauseButton.style.backgroundColor = '#5d5abd';
    pauseButton.style.color = 'white';
    pauseButton.style.border = 'none';
    pauseButton.style.borderRadius = '10px';
    pauseButton.style.cursor = 'pointer';
    pauseButton.onclick = toggleGamePause;
    document.body.appendChild(pauseButton);

    // Delay console.log statement by 5 seconds
    setTimeout(() => {
        console.log("1");
        var element = document.querySelector("#app > div.index-page.page > div > div.pages-index-drop.drop-zone > div > a");
        element.click();
    }, 5000);

    function toggleGamePause() {
        isGamePaused = !isGamePaused;
        pauseButton.textContent = isGamePaused ? 'Resume' : 'Pause';
    }
} catch (e) {
    console.log('Failed to initiate the game script');
}
