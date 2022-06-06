(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     *
     * GOAL: Add at least 3 cannons to make your level challenging. 
     * 
     * Use the createCannon Function to create cannons for the level. 
     * 
     * createCannon() takes these arguments:
     *      
     *      createCannon(type, position, delay);
     * 
     *      type: "top", "bottom", "left", or "right"
     *      position: The position of the cannon along whichever side the cannon is placed on
     *          - the x coordinate for "top" and "bottom" cannons
     *          - the y coordinate for "left" and "right" cannons
     *      delay: OPTIONAL the number of milliseconds to wait before firing the first projectile
     */ 
    function init(game) {
        let createCannon = cannon.create;
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        // example: 
        createCannon("top", 370, 100);
        createCannon("top", 390, 200);
        createCannon("top", 410, 300);
        createCannon("top", 430, 400);
        createCannon("top", 450, 500);
        createCannon("top", 370, 1000);
        createCannon("top", 390, 900);
        createCannon("top", 410, 800);
        createCannon("top", 430, 700);
        createCannon("top", 450, 600);
        createCannon("top", 370, 1100);
        createCannon("top", 390, 1200);
        createCannon("top", 410, 1300);
        createCannon("top", 430, 1400);
        createCannon("top", 450, 1500);
        createCannon("top", 370, 2000);
        createCannon("top", 390, 1900);
        createCannon("top", 410, 1800);
        createCannon("top", 430, 1700);
        createCannon("top", 370, 2100);
        createCannon("top", 390, 2200);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
    cannon.init = init;
})(window);
