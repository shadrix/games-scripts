// ==UserScript==
// @name         Blum
// @version      1.0
// @namespace    Violentmonkey Scripts
// @author       shadrix
// @match        https://sexyzbot.pxlvrs.io/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/shadrix/games-scripts/main/pixel.js
// @updateURL    https://raw.githubusercontent.com/shadrix/games-scripts/main/pixel.js
// @homepage     https://github.com/shadrix/games-scripts
// ==/UserScript==
// Function to navigate to the new URL if the current URL is not the target URL
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
 
 
function startProcess() {
    console.log("Starting process, waiting for the site to render...");
    
   	setTimeout(function() {
        clickElementBySelector("#root > div > div > div:nth-child(1) > div > div.earnContent > button", function() {
	          setTimeout(function() {
			        clickElementBySelector("#root > div > div > nav > a:nth-child(5)", function() {
				          setTimeout(function() {
						        clickElementBySelector("#root > div > div > div:nth-child(1) > div > div._tasks__content_brr5m_793 > div._tasks__content__bottom_brr5m_885 > div > div._reward_card_ttkl3_13 > div._footer_ttkl3_84 > button", function() {
							          setTimeout(function() {
									        clickElementBySelector("body > div.wrapper.font-rubik.undefined.MuiModal-root.css-8ndowl > div.modalContainer.show > div > div.claimButtonWrapper > div", function() {
										          setTimeout(function() {
												        clickElementBySelector("body > div.wrapper.font-rubik.undefined.MuiModal-root.css-8ndowl > div.modalContainer.show > button", function() {
													          setTimeout(function() {
			        clickElementBySelector("#root > div > div > nav > a:nth-child(3)", function() {
				          setTimeout(function() {
						        clickElementBySelector("#root > div > div > div:nth-child(1) > div > div > div.swiper.swiper-initialized.swiper-horizontal.swiper-android._swiper_1ymop_1.pet-swiper.swiper-backface-hidden > div.swiper-wrapper._swiperWrapper_1ymop_8 > div.swiper-slide.swiper-slide-active > div > div:nth-child(3) > button", function() {
							          setTimeout(function() {
									        clickElementBySelector("body > div._wrapper_ydsve_1.font-rubik.undefined.MuiModal-root.css-8ndowl > div._modalContainer_ydsve_4._show_ydsve_20.false > div._footerCard_ydsve_154 > button", function() {
										          setTimeout(function() {
												        clickElementBySelector("body > div._wrapper_ydsve_1.font-rubik.undefined.MuiModal-root.css-8ndowl > div._buysuccess_ydsve_223._visible_ydsve_239 > div._buysuccess__footer_ydsve_250 > div._buysuccess__footer__card_ydsve_435 > button", function() {
													          
													        });
												        }, 500);
										        });
									        }, 500);
							        });
						        }, 500); 
				        });
			        }, 500); 
													        });
												        }, 500); 
										        });
									        }, 500); 
							        });
						        }, 500); 
				        });
			        }, 500); 
	        });
        }, 5000); 
}  

// Start the process
startProcess();
