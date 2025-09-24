$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(250, 630, 111, 10, "darkgreen");
     createPlatform(100, 529, 99, 10, "purple");
     createPlatform(215, 410, 99, 10, "red");
     createPlatform(89, 300, 97, 10, "yellow");
     createPlatform(227, 180, 210, 9, "lightpink");
     createPlatform(400,189, 20, 1000, "orange");



    // TODO 3 - Create Collectables
    createCollectable("diamond", 500, 645, 0.3);
    createCollectable("max", 300, 414);
    createCollectable("steve", 350, 520);

    
    // TODO 4 - Create Cannons
    createCannon("right", 560, 1000);
    createCannon("right", 373, 1990);
    createCannon("right", 190, 1000);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
