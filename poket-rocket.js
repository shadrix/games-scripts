

function clickElementBySelector(selector, callback) {
    var element = document.querySelector(selector);
    if (element) {
        console.log("Clicking element:", selector);
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
    setTimeout(function() {
        clickElementBySelector("#root > div > div > div.pointer-events-auto.flex.items-center.justify-around.absolute.bottom-0.left-0.w-full.border-t.border-border.bg-black.pb-5.pt-3.backdrop-blur-sm.supports-\\[backdrop-filter\\]\\:bg-black\\/50 > a:nth-child(1)", function() {
        	
        	setTimeout(function() {
              clickElementBySelector("#root > div > div.px-4 > div.mx-auto.space-y-4 > div:nth-child(1) > div.relative.z-10.flex.items-center.justify-between.gap-2 > button", function() {
              });
          }, 500);
        	setTimeout(function() {
              clickElementBySelector("#radix-\\:rf\\: > div.flex.flex-col.items-center.justify-center.text-center > button", function() {
              });
          }, 500);
        	
        	setTimeout(function() {
              clickElementBySelector("#root > div > div.px-4 > div.mx-auto.space-y-4 > div:nth-child(2) > div.relative.z-10.flex.items-center.justify-between.gap-2 > button", function() {
              });
          }, 500);
        	setTimeout(function() {
              clickElementBySelector("#radix-\\:rf\\: > div.flex.flex-col.items-center.justify-center.text-center > button", function() {
              });
          }, 500);
          
        	setTimeout(function() {
              clickElementBySelector("#root > div > div.px-4 > div.mx-auto.space-y-4 > div:nth-child(3) > div.relative.z-10.flex.items-center.justify-between.gap-2 > button", function() {
              });
          }, 500);
        	setTimeout(function() {
              clickElementBySelector("#radix-\\:rf\\: > div.flex.flex-col.items-center.justify-center.text-center > button", function() {
              });
          }, 500);
          
        	setTimeout(function() {
              clickElementBySelector("#root > div > div.px-4 > div.mx-auto.space-y-4 > div:nth-child(4) > div.relative.z-10.flex.items-center.justify-between.gap-2 > button", function() {
              });
          }, 500);
        	setTimeout(function() {
              clickElementBySelector("#radix-\\:rf\\: > div.flex.flex-col.items-center.justify-center.text-center > button", function() {
              });
          }, 500);
          
          
          setTimeout(function() {
              clickElementBySelector("#root > div > div.px-4 > button > img", function() {
              	setTimeout(function() {
			              clickElementBySelector("#radix-\\:ra\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
			              	
			              	setTimeout(function() {
						              clickElementBySelector("#root > div > div.relative.h-12.w-full.grow.border-t.border-\\[\\#0A4E7B\\].bg-\\[\\#0D0D15\\] > button", function() {
						              	setTimeout(function() {
									              clickElementBySelector("#radix-\\:ru\\: > button", function() {
									              });
									          }, 500); 
						              });
						          }, 500);  
						            
			              });
			          }, 500);  
              });
          }, 500);   
            setTimeout(function() {
                clickElementBySelector("#root > div > div.px-4 > div.pointer-events-auto.grid.h-\\[52px\\].grid-cols-2.items-center.gap-2.mb-6 > button:nth-child(1)", function() {
                    setTimeout(function() {
                        clickElementBySelector("#radix-\\:r1\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
                        });
                    }, 500);
                  	setTimeout(function() {
                      clickElementBySelector("#radix-\\:r7\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
                      });
		                 }, 500);
                     setTimeout(function() {
	                        clickElementBySelector("#radix-\\:r4\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
	                        });
	                    }, 500);
                     setTimeout(function() {
	                        clickElementBySelector("#radix-\\:ru\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
	                        });
	                    }, 500);
                     setTimeout(function() {
	                        clickElementBySelector("#radix-\\:ro\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
	                        });
	                    }, 500);
                     setTimeout(function() {
	                        clickElementBySelector("#radix-\\:r1o\\: > div.flex.flex-col.items-center.justify-center.p-4.pb-12.text-center > button", function() {
	                    
	                    	 setTimeout(function() {
		                       window.location.href = "https://rocketf.whitechain.io/";
		                     
			                    }, 500);
	                        });
	                    }, 500);
                });
            }, 500);
        });
    }, 500);
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

function waitForElementAndStartProcess(selector, callback) {
    function attemptStartProcess() {
        var element = document.querySelector(selector);
        if (element) {
            console.log("Element found, starting process.");
            callback();
        } else {
            console.log("Element not found, retrying...");
            setTimeout(attemptStartProcess, 1000); // Retry after 1 second
        }
    }
    attemptStartProcess();
}

function startProcess() {
    console.log("Starting process, waiting for the site to render...");
    clickElementBySelector("#radix-\\:r3\\: > button", function() {
         setTimeout(function() {
            clickElementBySelector("#radix-\\:r3\\: > button", function() {
            });
        }, 500);
    });
    clickElementBySelector("#radix-\\:r0\\: > button", function() {
         setTimeout(function() {
            clickElementBySelector("#radix-\\:r0\\: > button", function() {
            });
        }, 500);
    });
    clickElementBySelector("#root > div > div > div.pointer-events-auto.flex.items-center.justify-around.absolute.bottom-0.left-0.w-full.border-t.border-border.bg-black.pb-5.pt-3.backdrop-blur-sm.supports-\\[backdrop-filter\\]\\:bg-black\\/50 > a:nth-child(1)", function() {
        executeSequenceWithRepetition();
    });
}

// Wait for the specified element and then start the process
waitForElementAndStartProcess("#root > div > div > div.pointer-events-auto.flex.items-center.justify-around.absolute.bottom-0.left-0.w-full.border-t.border-border.bg-black.pb-5.pt-3.backdrop-blur-sm.supports-\\[backdrop-filter\\]\\:bg-black\\/50 > a:nth-child(1)", startProcess);
