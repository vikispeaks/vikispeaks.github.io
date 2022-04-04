var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

var loadImage = (src, callback) => {
  var img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src;
};

var imagePath = (frameNum, animation) => {
  if (animation === "background") {
    return "images/background.jpg";
  }
  return "images/" + animation + "/" + frameNum + ".png";
};

let position = 0;
let frames = {
  idle: [1, 2, 3, 4, 5, 6, 7, 8],
  kick: [1, 2, 3, 4, 5, 6, 7],
  punch: [1, 2, 3, 4, 5, 6, 7],
  backward: [1, 2, 3, 4, 5, 6],
  block: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  forward: [1, 2, 3, 4, 5, 6],
  background: [1],
};

let loadImages = (callback) => {
  let images = {
    idle: [],
    kick: [],
    punch: [],
    backward: [],
    block: [],
    forward: [],
    background: [],
  };
  let imagesToLoad = 0;

  ["idle","kick","punch","backward","block","forward","background"].forEach((animation) => {
    let animateFrames = frames[animation];
    imagesToLoad += animateFrames.length;

    animateFrames.forEach((frameNum) => {
      let path = imagePath(frameNum, animation);
      loadImage(path, (image) => {
        images[animation][frameNum - 1] = image;
        imagesToLoad -= 1;
        if (imagesToLoad === 0) {
          callback(images);
        }
      });
    });
  });
};

let animate = (ctx, images, animation, callback) => {
  let backgroundImage = images["background"][0];
  images[animation].forEach((image, index) => {
    setTimeout(() => {
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(backgroundImage, 0, 0, 500, 500);
      ctx.drawImage(image, position, 0, 500, 500);
    }, index * 100);
  });

  setTimeout(callback, images[animation].length * 100);
};

loadImages((images) => {
  let quedAnimation = [];

  let aux = () => {
    let selectedAnimation;

    if (quedAnimation.length === 0) {
      selectedAnimation = "idle";
    } else {
      selectedAnimation = quedAnimation.shift();
    }

    animate(ctx, images, selectedAnimation, aux);
  };

  aux();

  const doKick = () => {
    quedAnimation.push("kick");
  };
  document.getElementById("kick").onclick = () => {
    doKick();
  };

  const doPunch = () => {
    quedAnimation.push("punch");
  };

  document.getElementById("punch").onclick = () => {
    doPunch();
  };

  const doBlock = () => {
    quedAnimation.push("block");
  };
  document.getElementById("block").onclick = () => {
    doBlock();
  };

  const doMoveBack = () => {
    position -= 100;
    if (position < -100) {
      position = -100;
    }
    quedAnimation.push("backward");
  };

  document.getElementById("backward").onclick = () => {
    doMoveBack();
  };

  const doMoveForward = () => {
    position += 100;
    if (position > 200) {
      position = 200;
    }
    quedAnimation.push("forward");
  };

  document.getElementById("forward").onclick = () => {
    doMoveForward();
  };

  document.addEventListener("keyup", (event) => {
    const key = event.key;
    switch (key) {
      case "ArrowLeft":
        doMoveBack();
        break;
      case "ArrowRight":
        doMoveForward();
        break;
      case "ArrowUp":
        doKick();
        break;
      case "ArrowDown":
        doPunch();
        break;
      default:
        doBlock();
    }
  });
});
