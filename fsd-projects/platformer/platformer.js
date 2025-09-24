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
    createPlatform(-50, - 50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(- 50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, - 50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(x, y, width, height)
createPlatform(300, 700, 100, 10, "blue")
createPlatform(400, 650, 100, 10, "green")
createPlatform(500, 600, 100, 10, "red")
createPlatform(600, 550, 100, 10, "yellow")
createPlatform(700, 500, 100, 10, "purple")

    // TODO 3 - Create Collectables
//createCollectable("type", xPos, yPos, gravityNum, bounceNum Between 0 and .99)
createCollectable("database", 700, 100, 1, 1)
createCollectable("max", 500, 100, 0, 1)
createCollectable("steve", 600, 100, 1, 1)

    
    // TODO 4 - Create//createCannon(wallLocation%2C%20position%2C%20timeBetweenShots%2C%20width%2C%20height)
//createCannon(wallLocation, position, timeBetweenShots, width, height)
    //Cannon on the top side of the canvas. at position 700, about mid way through.
createCannon("top", 700, 1000);

//Cannon on the right side of the canvas. at position 200, about 1/4 through.
createCannon("right", 200, 1000);

//Cannon on the left side of the canvas. at position 400, about 1/2 through.
createCannon("left", 400, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
