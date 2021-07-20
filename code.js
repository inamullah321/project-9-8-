var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6ceeb135-525d-410d-b40c-f9b6e95f6b48","067c400d-24c3-4747-a668-d1493d38bca0","2f1a5648-8b93-4cc3-967f-cc79611173f5","2ecc86cd-7ed8-4ae6-b149-d7420eb0b6c6","3d333dcc-267a-4bb6-80cc-66d56bb59642","311bddf9-a5b0-472d-98b7-fd3e821cf94c","d9cd2c8c-58f0-4aec-8833-eef14285e547","d4ae755e-22ab-4c66-b506-74a81fdf653a","52ca3918-506d-4062-94e4-abede3ce8e87","bc7255d3-4df2-42e2-b883-34ee9b852c1b","813ecd0b-df5b-42d2-b9f9-1755960a6724","0ccb1bf7-d0df-471c-be18-fa0b14bf913f","81010c2f-0638-46d8-9e3b-2634933bac69","74ae6e4a-40d7-42ba-9064-7d751960dd49","67045b97-b646-4244-b864-880e4d6357a5","692bd61e-f49b-4047-b668-1ed2794e7812","be8d34d9-d8c4-4c4c-bad6-4c2784a70900","80611988-42e6-4377-92a7-c30a80f19125","8711de69-26ff-4495-a5ee-453ae1d59b78"],"propsByKey":{"6ceeb135-525d-410d-b40c-f9b6e95f6b48":{"name":"car1","sourceUrl":null,"frameSize":{"x":11,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"dWmRQSTBPh4Th4a1EaTPYzU8GY4Wim93","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":20},"rootRelativePath":"assets/6ceeb135-525d-410d-b40c-f9b6e95f6b48.png"},"067c400d-24c3-4747-a668-d1493d38bca0":{"name":"diamond","sourceUrl":null,"frameSize":{"x":32,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"JmYxCMOxhHBm1gcW1XhKFhyoJ45Es_Xd","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":32,"y":30},"rootRelativePath":"assets/067c400d-24c3-4747-a668-d1493d38bca0.png"},"2f1a5648-8b93-4cc3-967f-cc79611173f5":{"name":"lion","sourceUrl":null,"frameSize":{"x":40,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"TON0Mb_nBTHy3kJNBWTMe2k4mD3qOScq","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":30},"rootRelativePath":"assets/2f1a5648-8b93-4cc3-967f-cc79611173f5.png"},"2ecc86cd-7ed8-4ae6-b149-d7420eb0b6c6":{"name":"inam","sourceUrl":null,"frameSize":{"x":16,"y":40},"frameCount":1,"looping":true,"frameDelay":12,"version":"TyJ1T3otbrXLPc5w9zLmgHbi.7X_hvGa","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":40},"rootRelativePath":"assets/2ecc86cd-7ed8-4ae6-b149-d7420eb0b6c6.png"},"3d333dcc-267a-4bb6-80cc-66d56bb59642":{"name":"croco1","sourceUrl":null,"frameSize":{"x":65,"y":25},"frameCount":1,"looping":true,"frameDelay":12,"version":"3fxICKd34kJc9Otydbr7jTdTbVOKA.XN","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":25},"rootRelativePath":"assets/3d333dcc-267a-4bb6-80cc-66d56bb59642.png"},"311bddf9-a5b0-472d-98b7-fd3e821cf94c":{"name":"tree","sourceUrl":null,"frameSize":{"x":39,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":".hUs0aB9Qnl7LCcQN1eVE2r1cgSPIUZ0","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":39,"y":50},"rootRelativePath":"assets/311bddf9-a5b0-472d-98b7-fd3e821cf94c.png"},"d9cd2c8c-58f0-4aec-8833-eef14285e547":{"name":"plants_09","sourceUrl":"assets/api/v1/animation-library/gamelab/u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8/category_video_games/plants_09.png","frameSize":{"x":295,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":295,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u.vkHS.AjLRfsy_qFlUnqnKiA.1vWgq8/category_video_games/plants_09.png"},"d4ae755e-22ab-4c66-b506-74a81fdf653a":{"name":"car2","sourceUrl":null,"frameSize":{"x":11,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"rMfeFVebGjXIsZft37ggb7Ann0f8HRhz","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":11,"y":20},"rootRelativePath":"assets/d4ae755e-22ab-4c66-b506-74a81fdf653a.png"},"52ca3918-506d-4062-94e4-abede3ce8e87":{"name":"river1","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"UM7EIma_k1YHlFnG6f72.Jdo4esinu41","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/52ca3918-506d-4062-94e4-abede3ce8e87.png"},"bc7255d3-4df2-42e2-b883-34ee9b852c1b":{"name":"river2","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"BJAa07zNl2jtqoMEKWxuEQu_FYxUXqT4","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/bc7255d3-4df2-42e2-b883-34ee9b852c1b.png"},"813ecd0b-df5b-42d2-b9f9-1755960a6724":{"name":"river3","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"aXTEyPzvKbSKWjm3Dk5EFMxZyNquwZX5","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/813ecd0b-df5b-42d2-b9f9-1755960a6724.png"},"0ccb1bf7-d0df-471c-be18-fa0b14bf913f":{"name":"river4","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZRSzRjWJqiljHt3hcKqkiR4dXeyGEJSj","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/0ccb1bf7-d0df-471c-be18-fa0b14bf913f.png"},"81010c2f-0638-46d8-9e3b-2634933bac69":{"name":"river5","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"wQTiJnLKcKIivgKE_d3spQ0WVQeew8ol","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/81010c2f-0638-46d8-9e3b-2634933bac69.png"},"74ae6e4a-40d7-42ba-9064-7d751960dd49":{"name":"river6","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"lai6O2JzaL8oPPF43FLQLgrBgJGfz6nI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/74ae6e4a-40d7-42ba-9064-7d751960dd49.png"},"67045b97-b646-4244-b864-880e4d6357a5":{"name":"river7","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"c_4Erez4ufp5YbZHOaJx2mhozzV8.o05","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/67045b97-b646-4244-b864-880e4d6357a5.png"},"692bd61e-f49b-4047-b668-1ed2794e7812":{"name":"water","sourceUrl":"assets/api/v1/animation-library/gamelab/zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY/category_video_games/water.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zDHZm0HfILhTVOXJ9qjuSqFaMPmK0gbY/category_video_games/water.png"},"be8d34d9-d8c4-4c4c-bad6-4c2784a70900":{"name":"croco2","sourceUrl":null,"frameSize":{"x":65,"y":25},"frameCount":1,"looping":true,"frameDelay":5,"version":"w5KaZa.mv7mef66GYUk1SKedN13EIBLo","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":65,"y":25},"rootRelativePath":"assets/be8d34d9-d8c4-4c4c-bad6-4c2784a70900.png"},"80611988-42e6-4377-92a7-c30a80f19125":{"name":"guard","sourceUrl":null,"frameSize":{"x":37,"y":35},"frameCount":1,"looping":true,"frameDelay":12,"version":"T.Hn960ty3UWV5QxDd7A6dXqUO6BCGtC","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":37,"y":35},"rootRelativePath":"assets/80611988-42e6-4377-92a7-c30a80f19125.png"},"8711de69-26ff-4495-a5ee-453ae1d59b78":{"name":"cave","sourceUrl":null,"frameSize":{"x":120,"y":120},"frameCount":1,"looping":true,"frameDelay":12,"version":"a23DESjfbsrybjBO80hXm0b.ew2Tj_xt","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":120,"y":120},"rootRelativePath":"assets/8711de69-26ff-4495-a5ee-453ae1d59b78.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var inam = createSprite(10,20,10,10);
inam.setAnimation("inam");




var lion = createSprite(50,302,10,10);
lion.setAnimation("lion");
lion.velocityX=5;
lion.velocityX=-5;



var car1 = createSprite(160,40,10,10);
car1.setAnimation("car1");
car1.velocityY=2;
car1.velocityY=-2;
var car2 = createSprite(250,40,10,10);
car2.setAnimation("car2");
car2.velocityY=2;
car2.velocityY=-2;




var road1 = createSprite(100,80,500,5);
road1.shapeColor="Black";

var road2 = createSprite(250,135,400,5);
road2.shapeColor="Black";

var road3 = createSprite(100,230,500,5);
road3.shapeColor="Black";

var road4 = createSprite(250,320,400,5);
road4.shapeColor="Black";



var tree = createSprite(100,298,10,10);
tree.setAnimation("tree");

var tree = createSprite(150,298,10,10);
tree.setAnimation("tree");

var tree = createSprite(300,298,10,10);
tree.setAnimation("tree");

var tree = createSprite(200,298,10,10);
tree.setAnimation("tree");

var tree = createSprite(250,298,10,10);
tree.setAnimation("tree");

var tree = createSprite(350,298,10,10);
tree.setAnimation("tree");



var cave = createSprite(380,380);
cave.setAnimation("cave");

var diamond = createSprite(380,380,10,10);
diamond.setAnimation("diamond");



var river1 = createSprite(10,197);
river1.setAnimation("river1");

var river2 = createSprite(150,197);
river2.setAnimation("river2");

var river3 = createSprite(100,197);
river3.setAnimation("river3");

var river4 = createSprite(50,197);
river4.setAnimation("river4");

var river5 = createSprite(200,197);
river5.setAnimation("river5");

var river6= createSprite(250,197);
river6.setAnimation("river6");

var river7= createSprite(300,197);
river7.setAnimation("river7");




var croco1 = createSprite(50,215,10,10);
croco1.setAnimation("croco1");
croco1.velocityX=4;
croco1.velocityX=-4;

var croco2 = createSprite(200,215,10,10);
croco2.setAnimation("croco2");
croco2.velocityX=4;
croco2.velocityX=-4;



var guard = createSprite(300,380,10,10);
guard.setAnimation("guard");
guard.velocityX=-2;
guard.velocityX=2;





function draw() {
background("yellow");



{inam.velocityX=0;
inam.velocityY=0;}

if (keyDown("UP_ARROW")) {
inam.velocityX=0;
inam.velocityY=-4;
}

if (keyDown("DOWN_ARROW")) {
inam.velocityX=0;
inam.velocityY=4;
}

if (keyDown("RIGHT_ARROW")) {
inam.velocityX=4;
inam.velocityY=0;
}


if (keyDown("LEFT_ARROW")) {
inam.velocityX=-4;
inam.velocityY=0;
}


if (inam.isTouching(diamond)) {
  textSize(20);
fill("green");
playSpeech("Oh i win !", "male", "English");
  text("You win!",100,100);
}





















createEdgeSprites();
inam.bounceOff(edges);
inam.bounceOff(road1);
inam.bounceOff(road2);
inam.bounceOff(road3);
inam.bounceOff(road4);

lion.bounceOff(edges);
car1.bounceOff(edges);
car1.bounceOff(road1);
car2.bounceOff(edges);
car2.bounceOff(road1);
croco1.bounceOff(edges);
croco2.bounceOff(edges);
guard.bounceOff(edges);



if 
  (inam.isTouching(car1)||
  inam.isTouching(car2)||
  inam.isTouching(croco1)||
  inam.isTouching(croco2)||
  inam.isTouching(guard)||
  inam.isTouching(lion))
  { 
 inam.x = 10;  
 inam.y = 20;
 
textSize(20);
fill("red");
playSpeech("ooch!", "male", "English");
text("Game Over!",200,100);
}
















drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
