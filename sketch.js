//방명록
let posts = []
let postInput;
let postBtn;
let ProjectURL = "https://mjsbmdhaqjfozvjtuzhj.supabase.co"
let API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qc2JtZGhhcWpmb3p2anR1emhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTY3OTAsImV4cCI6MjAxODM3Mjc5MH0.JHDHXvFnkHHo_F48bFSPNmdf8M_nCDh__UOLryjJgEY"
let numberDB = 30;
let diary;
let supabase;

//QR

let supabaseQ

//화면 전환 변수(스토리)
let opening = 1; //큰 장면_오프닝을 의미하는 변수입니다.
let cut = 0; //opening에서 사용한 하위 장면 변수입니다.

let ending = 0; // 큰 장면을 의미하는 변수입니다.
let scene = 0; //ending에서 사용한 하위 장면 변수입니다.

//(메인)
let testing = 0; // 큰 장면을 의미하는 변수입니다.

//이미지 변수  
let images = []; // 이미지를 저장할 배열을 선언합니다.
const startImageNumber = 100; // 이미지의 시작 숫자입니다.
const endImageNumber = 164; // 끝 숫자

//(메인)
let images0 = []; // 이미지를 저장할 배열을 선언합니다.
const startImageNumber0 = 0; // 이미지의 시작 숫자입니다.
const endImageNumber0 = 49; // 끝 숫자

//(메인)
let images2 = []; // 이미지를 저장할 배열을 선언합니다.
const startImageNumber2 = 200; // 이미지의 시작 숫자입니다.
const endImageNumber2 = 228; // 끝 숫자

// ml5 (미로)
console.log('ml5 version:', ml5.version);

let handpose;
let video;
let handPoseModelLoaded = false;
let handPosition = { x: 80, y: 240 };
let handPositionCircle = { x: 0, y: 0 };
let gameEnding = false;
let circleRadius = 30;
let rectX3 = 1030;
let rectY3 = 350;
let rectWidth3 = 100;
let rectHeight3 = 200;

let isTouching = false;
let rectX1 = 300;
let rectY1 = 0;
let rectWidth1 = 150;
let rectHeight1 = 500;
let isTouching2 = false;
let rectX2 = 700;
let rectY2 = 400;
let rectWidth2 = 150;
let rectHeight2 = 500;

let diaryX = 80;
let diaryY = 240;
let diaryWidth = 100;
let diaryHeight = 100;

let capturingJY = false;

let handInsideEllipse = false;
let moveCircle = false;
let hmm = true;
let xpos, ypos;

//ml5 혈액형
// let handPoseModelLoaded2 = false;
// let handpose2;
//let video2;
let currentScreen = 0;
let bloodType = "";
let handPositionBlood = { x: 0, y: 0 };
let startTime;
let countdownInitialvalue = 5;
let countdownJY2 = countdownInitialvalue;
let countdownSY1 = countdownInitialvalue;    //T1용 
let countdownSY2 = countdownInitialvalue;    //T4용
let timerInterval;
let capturingJY2 = false;
let capturingSY1 = false; //T1용
let capturingSY2 = false; //T4용

//소리 변수
// let titleMusic;
let bgm;
let endBgm;

//시간 변수
let previousTime0 = 0;
let previousTime = 0 //시간 변수 초기화용 변수
let previousTime2 = 0
let previousTime3 = 0
let previousTime4 = 0
let previousTime5 = 0
let previousTime6 = 0
let previousTime7 = 0
let previousTime8 = 0
let previousTime9 = 0 //마지막 방명록에서
let previousTime10 = 0 //qr안내 배경

//시간 변수 (서연 사진찍는 곳)
let preTime1 = 0;
let preTime2 = 0;
let preTime3 = 0;
let preTime4 = 0;

//사진 변수 (메인)
let capture;
let capturing = false;
let countdown = 3; // countdown 변수 추가 및 초기값 설정
let picT1;
let picT1X = 400;
let picT1Y = 200;
let picT1TargetY = 500; // 목표로 하는 Y 위치
let picT1YSpeed = 5; // Y축 이동 속도

let pola1;
let pola1X = 0;
let pola1Y = -300;
let pola1TargetY = 0;
let pola1YSpeed = 5;

//사진 변수 (T2 미로)
let picT2;
let picT2X = 400;
let picT2Y = 200;
let picT2TargetY = 500; // 목표로 하는 Y 위치
let picT2YSpeed = 5; // Y축 이동 속도

let pola2;
let pola2X = 0;
let pola2Y = -300;
let pola2TargetY = 0;
let pola2YSpeed = 5;

//사진 변수 (T3 혈액형)
let picT3;
let picT3X = 400;
let picT3Y = 200;
let picT3TargetY = 500; // 목표로 하는 Y 위치
let picT3YSpeed = 5; // Y축 이동 속도

let pola3;
let pola3X = 0;
let pola3Y = -300;
let pola3TargetY = 0;
let pola3YSpeed = 5;

let timerOn = false;
let timerOnSY1 = false;
let timerOnSY2 = false;

//사진 변수 (T4)
let capture4;
let capturing4 = false;

let picT4;
let picT4X = 400;
let picT4Y = 200;
let picT4TargetY = 500; // 목표로 하는 Y 위치
let picT4YSpeed = 5; // Y축 이동 속도

let pola4;
let pola4X = 0;
let pola4Y = -300;
let pola4TargetY = 0;
let pola4YSpeed = 5;

//전화번호 (메인)
let fadeValue = 0;
let fadeSpeed = 5;
let inputDigits = '';
let correctCode = '0501';
let displayPositions = [
  { x: 655, y: 216 },
  { x: 702, y: 216 },
  { x: 750, y: 216 },
  { x: 800, y: 216 }
];
let ellipseX = 600;
let ellipseY = 800;
let ellipseSize = 100;


//애니매이팅 변수
let textOpacity = 255;
let transparency = 0; //투명도
let fadeInSpeed = 255 / (2 * 60); // 3초 동안 60프레임으로 나타나게 설정
let yUp = 900
let goUp = false;
let xLeft = 0 
let goLeft = false;

//트랜지션 변수
let transDuration = 3; // Transition duration in seconds
let transInSpeed = 255 / (2 * 60); // Fade-in speed (3 seconds at 60 frames per second)
let transOpacity = 0;

//테두리 변수 //초기화 변수에 넣어야 함 (넣음) //testing 때에만 true로 바꾸기로
let taedori = false; 

//사운드 변수 //초기화 변수에 넣음
let soundPlayed = false;

//QR 코드
let qrcode;
let name

function preload() {
  //img = loadImage('assets/108.png')
  // preload() 함수에서 여러 이미지를 불러옵니다.

  //0번대
  for (let i = startImageNumber0; i <= endImageNumber0; i++) {
    images0.push(loadImage(`assets/${i}.png`));
  }
  //100번대
  for (let i = startImageNumber; i <= endImageNumber; i++) {
  images.push(loadImage(`assets/${i}.png`));
  }

  for (let i = startImageNumber2; i <= endImageNumber2; i++) {
  images2.push(loadImage(`assets/${i}.png`));
  }

  //  soundFormats('mp3');
  //  titleMusic = loadSound('assets/title.mp3');
  bgm = loadSound('assets/title.mp3');
  endBgm = loadSound('assets/ending.mp3');
  paperSound = loadSound('assets/paper.mp3');
  footstepSound = loadSound('assets/footstep.mp3');
  callSound = loadSound('assets/calling.mp3');
  cameraSound = loadSound('assets/polarOut.mp3');

  diary = loadImage('assets/note.png');
  fontLetter = loadFont('assets/나눔손글씨 연지체.ttf');
}

async function setup() {
  createCanvas(1200, 900); // 배경 크기
  noStroke();
  fill(0);
  textFont(fontLetter)
  textAlign(LEFT, CENTER);
  textSize(40);
  previousTime0 = millis(); // 시간 재기

  //메인
  capture = createCapture(VIDEO);
  capture.hide();

  capture = createCapture(VIDEO);
  capture.hide();

  //ml5 관련(미로)
  video = createCapture(VIDEO, () => {
    //video.size(width, height);
    handpose = ml5.handpose(video, modelReady);
    handpose.on('predict', gotPoses);
  });

  //사운드
  //bgm.loop();
  
  //ml5 관련 (혈액형)
  // video2 = createCapture(VIDEO, () => {
  //   //video2.size(width, height);
  //   handpose2 = ml5.handpose(video2, modelReady2);
  //   handpose2.on('predict', poseDetected);
  // });
  startTime = millis(); 

  video.hide(); // 이 부분을 추가하여 웹캠을 숨깁니다.

   //qr
  qrcode = createDiv()
  qrcode.id('qrcode')
  qrcode.position(943, 284)
  qrcode.hide();
  
  supabaseQ = createClient(
    'https://bblfkppqduedmiwygnba.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJibGZrcHBxZHVlZG1pd3lnbmJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI4MTI1MDksImV4cCI6MjAxODM4ODUwOX0.px2t5O1-DEp6DHjKLhJmFLKVSXLK_bY1zh8DNqmAAII'
  );

  //방명록

  if(diary && fontLetter) {
    image(diary, 0, 0);
    textFont(fontLetter);
  }

  supabase = createClient(
    ProjectURL,
    API_KEY
  );
  postInput = createInput()
  postInput.id("postInput") 
  postBtn = createButton("글쓰기")
  postBtn.id("postBtn") 
  postBtn.mousePressed(uploadAndDisplayPost);
  postInput.hide();
  postBtn.hide();
  await fetchAndDisplayPosts();

}

///////////////방명록


async function uploadAndDisplayPost() {
  let postInputValue = postInput.value().trim();
  if(postInputValue) {
    postInput.value("")
    let post = new Post(postInputValue)
      posts.push(post)
      for(let p of posts) {
        p.unhighlight()
      }
      post.highlight()
    await uploadPost(postInputValue)
  }
}

// ml5 관련(미로)
function modelReady() {
  handPoseModelLoaded = true;
  console.log("Model Ready!");
}
// ml5 관련(미로)
function gotPoses(poses) {

  if(testing == 7){
  if (poses.length > 0) {

    let fingers = poses[0].annotations.indexFinger[0];
    let handX = float(fingers[0]);
    let handY = float(fingers[1]); 

    //console.log(handX, handY);
    

    handPosition.x = map(handX,0,video.width,width,0);
    handPosition.y = map(handY,0,video.height,0,height);

    handPositionCircle.x = map(handX,0,video.width,width,0);
    handPositionCircle.y = map(handY,0,video.height,0,height);

    // console.log(video.width, video.height);

    // console.log(handPosition);
    // handPosition.x = width - fingers[0];
    // handPosition.y = fingers[1];
  }
}
else if(currentScreen ==1){
  if (poses.length > 0) {

    let fingers = poses[0].annotations.indexFinger[0];
    let handX = float(fingers[0]);
    let handY = float(fingers[1]); 

    handPositionBlood.x = map(handX,0,video.width,width,0);
    handPositionBlood.y = map(handY,0,video.height,0,height);

    let insideRectA = false;
    let insideRectB = false;
    let insideRectAB = false;
    let insideRectO = false;
    
    if (handPositionBlood.x > 150 && handPositionBlood.x < 300 && handPositionBlood.y > 300 && handPositionBlood.y < 600) {
      insideRectA = true;
    } else if (handPositionBlood.x > 400 && handPositionBlood.x < 550 && handPositionBlood.y > 300 && handPositionBlood.y < 600) {
      insideRectB = true;
    } else if (handPositionBlood.x > 650 && handPositionBlood.x < 800 && handPositionBlood.y > 300 && handPositionBlood.y < 600){
      insideRectAB = true;
    } else if (handPositionBlood.x > 900 && handPositionBlood.x < 1050 && handPositionBlood.y > 300 && handPositionBlood.y < 600) {
      insideRectO = true;
    }
    

      
    if (insideRectA) bloodType = "A형";
    else if (insideRectB) bloodType = "B형";
    else if (insideRectAB) bloodType = "AB형";
    else if (insideRectO) bloodType = "O형";
    else bloodType = "";
    
    if (bloodType !== "") {
      // Record the start time if it's the first time fingers are inside the rectangles
      if (!startTime) {
        startTime = millis();
      }

      // Check if 3 seconds have passed since fingers entered the rectangles
      if (millis() - startTime > 3000) {
        currentScreen = 3;
        handPoseModelLoaded2 = false; // Stop further predictions
      }
    } else {
      // Reset the start time if fingers are not inside the rectangles
      startTime = null;
    }
  }
}
}

function modelReady2() {
  handPoseModelLoaded2 = true;
  console.log("Model Ready!");
}

function draw(){
  movingTitle();
  
  if (opening == 1){
    //titleMusic.play();

    movingTitle();
    image(images[26],0,0,width,height); //표지 로고
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    image(images[29],0,0,width,height); //소개글
    image(images[7],0,0,width,height); //일기장 버튼

    if(mouseX > 910 && mouseX < 1130 && mouseY > 580 && mouseY < 840){
      image(images[6],0,0,width,height); //일기장 버튼
    }
  }

  if (opening == 2){
    if(cut == 0){
      if (transOpacity < 255) {
      transOpacity += transInSpeed;
      }
      // 흰 배경 표시
      fill(255, transOpacity);
      rect(0, 0, width, height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      
      // 트랜지션 끝나면 cut 값을 바꿔서 다음 화면으로 넘어감
      if (cut == 0 && transOpacity >= 255) {
        transOpacity = 256        
        cut = 1;
      }
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    }
    
    if (cut == 1){
      if (previousTime4 == 0) { // previousTime이 null이면 현재 시간으로 초기화
        previousTime4 = millis();
      }

      fill(0); //텍스트 색 조정
      image(images[1],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[23],0,0,width,height); //말풍선
      noStroke();
      fill(0);
      //textFont(fontLetter)
      textAlign(LEFT, CENTER);
      textSize(40);
      text("아침 9시 반 수업은 너무한 거 아니냐구..", 150,750);
      
      if (millis() - previousTime4 > 2000){
        image(images[1],0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)

        image(images[57],0,0,width,height); //안내 사항 에셋
      }      

      if (transOpacity <= 256) {
        transOpacity -= 10    
        fill(255, transOpacity);
        rect(0, 0, width, height);    
      }
    }

    if (cut == 2){

      //footstepSound.play();
      playFootstepSound();

      if (previousTime5 == 0) { // previousTime이 null이면 현재 시간으로 초기화
        previousTime5 = millis();
      }

      image(images[16],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)

      if (millis() - previousTime5 > 500){
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23],0,0,width,height);
        noStroke();
        fill(0);
        textFont(fontLetter)
        textAlign(LEFT, CENTER);
        textSize(40);
        text("어? 저게 뭐지?", 150,750);
      }
      
      if (millis() - previousTime5 > 1500){
        noStroke();
        fill(0);
        //textFont(fontLetter)
        textAlign(LEFT, CENTER);
        textSize(40);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23],0,0,width,height);
        text("더 앞으로 가보자.", 150,750);
      }

      if (millis() - previousTime5 > 2500){
        image(images[16],0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      } 
    }

    if (cut == 3){
      //footstepSound.play();
      playFootstepSound();
      image(images[17],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    }

    if (cut == 4){

      //footstepSound.play();
      playFootstepSound();
      if (previousTime6 == 0) { // previousTime이 null이면 현재 시간으로 초기화
        previousTime6 = millis();
      }

      image(images[18],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)

      if (millis() - previousTime6 > 500){
        noStroke();
        fill(0);
        //textFont(fontLetter)
        textAlign(LEFT, CENTER);
        textSize(40);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23],0,0,width,height);
        text("이게 뭐지?",150,750);
      }

      if (millis() - previousTime6 > 2000){
        image(images[18],0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      }

      if (mouseX > 440 && mouseX < 630 && mouseY > 400 && mouseY < 540) { //가운데 놓인 카메라와 다이어리 터치
        image(images[19],0,0,width,height); 
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      }
    }

    if (cut == 5){
      //image(images[4],0,0,width,height);

      //if (goUp > 0){
      //  image(images[27],goUp,0,width,height);
      //  goUp -= 5
      //}  

      //if (goUp <= 0){
        if (previousTime7 == 0) { // previousTime이 null이면 현재 시간으로 초기화
          previousTime7 = millis();
        }

        image(images[4],0,0,width,height);
        image(images[27],0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23],0,0,width,height);
        noStroke();
        fill(0);
        //textFont(fontLetter)
        textAlign(LEFT, CENTER);
        textSize(40);
        text("다이어리랑 카메라...?", 150,750);

        if (millis() - previousTime7 > 1000){
          image(images[4],0,0,width,height);
          image(images[27],0,0,width,height);
          image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
          image(images[23],0,0,width,height);
          noStroke();
          fill(0);
          //textFont(fontLetter)
          textAlign(LEFT, CENTER);
          textSize(40);
          text("일기장에 종이가 끼워져있어.", 150,750);
        }

        if (millis() - previousTime7 > 3000){
          image(images[4],0,0,width,height);
          image(images[27],0,0,width,height);
          image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
          
          image(images[58],0,0,width,height); //안내사항 에셋
        }

        if (mouseX > 311 && mouseX < 504 && mouseY > 70 && mouseY < 124){ //쪽지에 마우스를 올리면
          image(images[28],0,0,width,height);
          image(images[58],0,0,width,height); 
          image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        }      
      }

      if (cut == 6){
        if (previousTime8 == 0) { // previousTime이 null이면 현재 시간으로 초기화
          previousTime8 = millis();
        }

        if(millis() - previousTime8 > 0){
          image(images[30],0,0,width,height);
        }

        if(millis() - previousTime8 > 500){
          image(images[31],0,0,width,height);
        }

        if(millis() - previousTime8 > 1000){
          image(images[32],0,0,width,height);
        }

        if(millis() - previousTime8 > 1000 && millis() - previousTime8 < 2000){
          playPaperSound();
        }

        if(millis() - previousTime8 > 1500){
          //paperSound.play();
          image(images[33],0,0,width,height);
          nextPageEffect()
        }

        if(millis() - previousTime8 > 2000){
          soundPlayed = false
        }

        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      }

      if (cut == 7){
        movingTitle()
        image(images[51],0,0,width,height);
        image(images[52],0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        testing = 1;
      }

    }

    //메인
    if (testing == 1) {  // 전반 설명 (다여리 + 설명 문구)
      image(images0[24], 0, 0, width, height);
      image(images0[25], 0, 0, width, height);
      cut = 8;
  

      image(images0[2], 0, 0, width, height);
      mouseIsOn();
      }
      
     else if (testing == 2) { // T1 
      image(images0[24], 0, 0, width, height);
      image(images0[26], 0, 0, width, height);
      // image(images2[5], 0, 0, width, height); // 원래 접힌 의문종이
      image(images0[31], 0, 0, width, height);
  
      
        image(images0[2], 0, 0, width, height);
        mouseIsOn();
      
    } else if (testing == 3) {

      push(); // 현재의 변환 상태를 스택에 저장           ///////////////////
      scale(-1, 1); // 캔버스를 좌우로 뒤집음
      translate(-width, 0); // 다시 원래의 위치로 이동
      image(video, 0, 0, width, height);
      pop(); // 스택에서 이전의 변환 상태를 불러옴

      textSize(400);
      textAlign(CENTER, CENTER);
      fill(255, 255, 255);
      text(countdownSY1, width / 2, height / 3);

      image(images0[7], 0, 0, width, height);
      // image(images2[4], 0, 0, width, height); // 원래 의문종이 펼친
      image(images0[32], 0, 0, width, height); // T1 code


      if (!timerOnSY1) {
      timerTimeout = setTimeout(updateCountdownSY1, 1000);
      timerOnSY1 = true;
      textSize(40);
      }
      

      // if (capturing) {
        
      //   push(); // 현재의 변환 상태를 스택에 저장
      //   scale(-1, 1); // 캔버스를 좌우로 뒤집음
      //   translate(-width, 0); // 다시 원래의 위치로 이동
      //   image(capture, 0, 0, width, height);
      //   pop(); // 스택에서 이전의 변환 상태를 불러옴

      //   image(images0[7], 0, 0, width, height);
      //   image(images2[4], 0, 0, width, height);
      //   if (frameCount % 60 === 0 && countdown > 0) {
      //     countdown--;
      //   }
      //   if (countdown === 0) {
      //     picT1 = capture.get();
      //     capturing = false;
      //     countdown = 3;
      //     testing = 4;
      //   }
      // }
    } else if (testing == 4) {
      //ground(0);
        
      pola1 = images0[41]
      
      if (preTime1 == 0) { // preTime이 null이면 현재 시간으로 초기화
        preTime1 = millis();
        }

      if (millis() - preTime1 > 0 && millis() - preTime1 < 2000) { //카메라 출력 소리
        playCameraSound();
      }
      

      // 부드러운 이동을 위해 lerp 함수 사용
      picT1Y = lerp(picT1Y, picT1TargetY, 0.05);
      pola1Y = lerp(pola1Y, pola1TargetY, 0.05);

      image(pola1, pola1X, pola1Y, width, height);
      push(); // 현재의 변환 상태를 스택에 저장
      scale(-1, 1); // 캔버스를 좌우로 뒤집음
      translate(-width, 0); // 다시 원래의 위치로 이동
      image(picT1, picT1X, picT1Y, 400, 300);
      pop();
      
      image(images0[8], 0, 0, width, height);
    
    //   // 3초 동안의 이동이 완료되면 testing을 5로 변경 
    //   if (frameCount % 60 === 0 && countdown > 0) {
    //   countdown--;
    // }
  
    // if (countdown === 0) {
    //   testing = 5;
    // } 

    if (millis() - preTime1 > 3000) {
      testing = 5;
    }
  } else if (testing == 5) { // T1 결과지
    image(images0[24], 0, 0, width, height);
    image(images0[26], 0, 0, width, height);
    //image(images[56],0,0,width,height); //폴라로이드 배경 //이제 안 씀
    image(images0[10], 0, 20, width, height); //숫자 에셋, 배경까지 합친 걸로 변경
  
    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT1, 150, 270, 400, 300);
    pop(); 

    //image(images0[10], 0, 20, width, height); //숫자 에셋, 배경까지 합친 걸로 변경, 위치 조정
    image(images0[20], 0, 0, width, height);
    image(images0[47], 0, 50, width, height); //이 숫자를 잘 기억해봐, 위치 좀 내려서 수정했어용 
    countdown = 3;

    mouseIsOn();
  } 
  // 아래부터 T2(미로)
  else if (testing == 6) { //T2 설명
    image(images0[24],0,0,width,height);
    image(images0[27],0,0,width,height);
    image(images0[31], 0, 0, width, height);
    
      image(images0[2], 0, 0, width, height);
      mouseIsOn();
    
  } 
  else if (testing == 7) {
    if (handPoseModelLoaded) {

        push(); // 현재의 변환 상태를 스택에 저장
        scale(-1, 1); // 캔버스를 좌우로 뒤집음
        translate(-width, 0); // 다시 원래의 위치로 이동
        image(video, 0, 0, width, height);
        pop(); // 스택에서 이전의 변환 상태를 불러옴

        // image(images2[15], 0, 0, width, height); // 미로 원래 그림
        image(images2[27],0,0,width, height);
        image(images0[30], 0, 0, width, height);

      // Rectangle();
      // endRectengle();
    }

    
  
    isTouching =
      xpos + circleRadius > rectX1 &&
      xpos - circleRadius < rectX1 + rectWidth1 &&
      ypos + circleRadius > rectY1 &&
      ypos - circleRadius < rectY1 + rectHeight1;
  
    isTouching2 =
      xpos + circleRadius > rectX2 &&
      xpos - circleRadius < rectX2 + rectWidth2 &&
      ypos + circleRadius > rectY2 &&
      ypos - circleRadius < rectY2 + rectHeight2;
  
    if (isTouching || isTouching2 ) {
      moveCircle = false;
      hmm = true;
    }

    if (!moveCircle){
      xpos = 80;
      ypos = 240;
    }
  
    if (hmm) {
      // If the hand is inside the ellipse, set moveCircle to true
      handInsideEllipse = 
      handPositionCircle.x + 100 > diaryX &&
      handPositionCircle.x < diaryX + diaryWidth &&
      handPositionCircle.y + 100 > diaryY &&
      handPositionCircle.y < diaryY + diaryHeight;

      if (handInsideEllipse) {
        moveCircle = true;
        hmm = false;
      } 
    }
    gameEnding =
    xpos + 100 > rectX3 &&
    xpos  < rectX3 + rectWidth3 &&
    ypos + 100 > rectY3 &&
    ypos  < rectY3 + rectHeight3;

  if (gameEnding) {
    picT2 = capture.get();
    capturingJY = false;
    
    countdown = 3;
    testing = 8;
  }

  imageMode(CENTER);
  image(images2[17],xpos,ypos,100,100);


  image(images2[16],handPositionCircle.x,handPositionCircle.y,60,60);
  imageMode(CORNER);


  if (moveCircle) {
    xpos = handPosition.x;
    ypos = handPosition.y;
  }
  } else if (testing == 8){ //T2 촬영

    if (preTime2 == 0) { // preTime이 null이면 현재 시간으로 초기화
      preTime2 = millis();
      }


    pola2 = images0[42]

    if (millis() - preTime2 > 0 && millis() - preTime2 < 2000) { //카메라 출력 소리
      playCameraSound();
    }

    // 부드러운 이동을 위해 lerp 함수 사용
    picT2Y = lerp(picT2Y, picT2TargetY, 0.05);
    pola2Y = lerp(pola2Y, pola2TargetY, 0.05);
    
    image(pola2, pola2X, pola2Y, width, height);
    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT2, picT2X, picT2Y, 400, 300);
    pop();

    image(images0[8], 0, 0, width, height);
  
  //   // 3초 동안의 이동이 완료되면 testing을 로 변경 
  //   if (frameCount % 60 === 0 && countdown > 0) {
  //   countdown--;
  // }

  // if (countdown === 0) {
  //   testing = 9;
  // }

  if (millis() - preTime2 > 3000) {
    testing = 9;
  }

  } else if (testing == 9) { //T2 결과
    
    image(images0[24], 0, 0, width, height);
    image(images0[27], 0, 0, width, height);
    //image(images[56],0,0,width,height); //폴라로이드 배경
    image(images2[6], 0, 20, width, height); //폴라+숫자

    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT2, 150, 270, 400, 300);
    pop(); 

    
    image(images0[20], 0, 0, width, height);  
    image(images0[47], 0, 50, width, height); //위치 좀 내려서 수정했어용 

    mouseIsOn();
    
  } else if (testing == 10) { //T3 설명
    //미션3
    image(images0[24],0,0,width,height);
    image(images0[28],0,0,width,height);
    image(images0[31], 0, 0, width, height);
    
    
    image(images0[2], 0, 0, width, height);
    mouseIsOn();
      //currentScreen = 1;
    
  } 
  if (testing ==10 && currentScreen == 1) {
    background(220);

  if (handPoseModelLoaded) {
    // image(video2, 0, 0, width, height);

    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(video, 0, 0, width, height);
    pop(); // 스택에서 이전의 변환 상태를 불러옴

    image(images2[10], 0, 0, width, height);

    //drawRectangles();
    timelapse();
    
    // Draw the circle at the hand position
    fill(255,0,0);
    ellipse(handPositionBlood.x, handPositionBlood.y, 20, 20);

  } else {
    // Display loading message
    fill(0);
    movingTitle()
    textSize(16);
    textAlign(CENTER);
    text("Loading Handpose model...", width / 2, height / 2);
  }
    
  } 
  if (testing==10 && currentScreen == 3) {
      restartCamera();

    image(images0[33], 0, 0, width, height);
    if (!timerOn) {
    timerTimeout = setTimeout(updateCountdown, 1000);
    timerOn = true;
    textSize(40);
    }
    
    

    // if (countdownJY2 == 0 && !capturingJY2  ) {
      
    //   takePicture();
    //   testing = 11;
    // }



  } else if (testing == 11){ //T3 출력

    if (preTime3 == 0) { // preTime이 null이면 현재 시간으로 초기화
      preTime3 = millis();
      }

    pola3 = images0[41]
    
    if (millis() - preTime3 > 0 && millis() - preTime3 < 2000) { //카메라 출력 소리
      playCameraSound();
    }
  
    // 부드러운 이동을 위해 lerp 함수 사용
    picT3Y = lerp(picT3Y, picT3TargetY, 0.05);
    pola3Y = lerp(pola3Y, pola3TargetY, 0.05);
    
    image(pola3, pola3X, pola3Y, width, height);
    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT3, picT3X, picT3Y, 400, 300);
    pop();

    image(images0[8], 0, 0, width, height);
  
  //   // 3초 동안의 이동이 완료되면 testing을 로 변경 
  //   if (frameCount % 60 === 0 && countdown > 0) {
  //   countdown--;
  // }

  // if (countdown === 0) {
  //   testing = 12;
  // }
  if (millis() - preTime3 > 3000) {
    testing = 12;
  }

  } else if (testing == 12) { //T3 결과 출력
    image(images0[24], 0, 0, width, height);
    image(images0[28], 0, 0, width, height);
    //image(images[56],0,0,width,height); //폴라로이드 배경
    image(images0[10], 0, 20, width, height); //폴라+숫자
    
    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT3, 150, 270, 400, 300);
    pop();

    
    image(images0[20], 0, 0, width, height); 
    image(images0[47], 0, 50, width, height); //위치 좀 내려서 수정했어용 

    mouseIsOn();
    countdown = 3; 
    
  } else if (testing == 13) { //T4 설명
    //미션4
    // image(images2[1],0,0,width,height);
    // image(images2[8],0,0,width,height);
    image(images0[24], 0, 0, width, height);
    image(images0[29], 0, 0, width, height);
    image(images0[31], 0, 0, width, height);
  
    
      image(images0[2], 0, 0, width, height);
      mouseIsOn();
      countdown =3 ;
      
    
  } else if (testing == 14) {

    push(); // 현재의 변환 상태를 스택에 저장           ///////////////////
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(video, 0, 0, width, height);
    pop(); // 스택에서 이전의 변환 상태를 불러옴

    textSize(400);
    textAlign(CENTER, CENTER);
    fill(255, 255, 255);
    text(countdownSY2, width / 2, height / 3);
    image(images2[3], 0, 0, width, height);

    image(images0[34], 0, 0, width, height);

    if (!timerOnSY2) {
    timerTimeout = setTimeout(updateCountdownSY2, 1000);
    timerOnSY2 = true;
    textSize(40);
    }

    //console.log(countdown);
    // if (capturing4) {
  
    //   push(); // 현재의 변환 상태를 스택에 저장
    //   scale(-1, 1); // 캔버스를 좌우로 뒤집음
    //   translate(-width, 0); // 다시 원래의 위치로 이동
    //   image(video, 0, 0, width, height);
    //   pop(); // 스택에서 이전의 변환 상태를 불러옴

    //   fill(254, 142, 127,80);
    //   rect(600,0,600,900);
    //   image(images2[3], 0, 0, width, height);
    //   if (frameCount % 60 === 0 && countdown > 0) {
    //     countdown--;
    //     console.log(countdown)
    //   }

    //   if (countdown === 0) {
    //     picT4 = video.get();
    //     capturing4 = false;
    //     countdown = 3;
    //     testing = 15;
    //   }
    // }
  } else if (testing == 15) { //T4 출력

    if (preTime4 == 0) { // preTime이 null이면 현재 시간으로 초기화
      preTime4 = millis();
      }

    pola4 = images0[43]

    if (millis() - preTime4 > 0 && millis() - preTime4 < 2000) { //카메라 출력 소리
      playCameraSound();
    }
    
    // 부드러운 이동을 위해 lerp 함수 사용
    picT4Y = lerp(picT4Y, picT4TargetY, 0.05);
    pola4Y = lerp(pola4Y, pola4TargetY, 0.05);
    
    image(pola4, pola4X, pola4Y, width, height);
    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT4, picT4X, picT4Y, 400, 300);
    pop();

    image(images0[8], 0, 0, width, height);
  
    // 3초 동안의 이동이 완료되면 testing을 5로 변경 
  //   if (frameCount % 60 === 0 && countdown > 0) {
  //   countdown--;
  // }

  // if (countdown === 0) {
  //   testing = 16;
  // }
  if (millis() - preTime4 > 3000) {
    testing = 16;
  }

} else if (testing == 16) { //T4 출력 (이거 결과쥬?)
  image(images0[24],0,0,width,height);
  image(images0[29],0,0,width,height);
  //image(images[56],0,0,width,height); //폴라로이드 배경
  image(images2[7], 0, 20, width, height); //폴라+숫자
  
  push(); // 현재의 변환 상태를 스택에 저장
  scale(-1, 1); // 캔버스를 좌우로 뒤집음
  translate(-width, 0); // 다시 원래의 위치로 이동
  image(picT4, 150, 270, 400, 300);
  pop();

  image(images0[47], 0, 50, width, height); //위치 좀 내려서 수정했어용 
  // image(images0[39], 0, 0, width, height);  //다음으로
  countdown = 3;

  mouseIsOn();
} 
    

  else if (testing == 17)  {
    movingTitle();
    image(images[51], 0, 0, width, height);
    image(images2[22], 0, 0, width, height);
    //image(images2[8], 0, 0, width, height);
    image(images0[37], 0, 0, width, height); //전화걸기 버튼
    image(images0[44], 0, 0, width, height); //사진 다시보기
    mouseIsOn();
  } else if (testing == 18) {
    // 세 장의 이미지 함께 표시(였던...) // 아무튼 핸드폰과 설명
      image(images0[35], 0, 0, width, height);
      image(images0[36], 0, 0, width, height);
      image(images0[44], 210, 500, width, height); //사진 다시보기 /////////////////새로추가
      mouseIsOn();
    
  
    // ellipse 표시
    fill(255, 0, 0, 0);
    noStroke();
    ellipse(ellipseX, ellipseY, ellipseSize, ellipseSize);
    
    // 사용자가 입력한 숫자 표시
    fill(0);
    textSize(32);
    for (let i = 0; i < 4; i++) {
      let digit = inputDigits.charAt(i) || ' '; // 빈 자리일 경우 공백 표시
      let pos = displayPositions[i];
      text(digit, pos.x, pos.y);
    }
  
    // fade out 효과
    if (fadeValue > 0) {
      fadeValue -= fadeSpeed;
    }
    fill(0, fadeValue);
    rect(0, 0, width, height);
  
    // fade out이 완전히 되었을 때
    if (fadeValue === 0) {
    }
  } 
  if(testing == 18 && inputDigits.length >= 4 && inputDigits !== correctCode) {
    image(images0[49], 0, 0, width, height);
  }
  else if(testing == 19) {
    image(images0[46], 0, 0, width, height); // 다이어리+폴라
    image(images0[37], 0, 0, width, height); //전화걸기 버튼
    mouseIsOn();

    push(); // 현재의 변환 상태를 스택에 저장
    scale(-1, 1); // 캔버스를 좌우로 뒤집음
    translate(-width, 0); // 다시 원래의 위치로 이동
    image(picT1, 686, 278, 260, 195);
    image(picT2, 686, 572, 260, 195);
    image(picT3, 251, 278, 260, 195);
    image(picT4, 251, 572, 260, 195);
    pop();

  }

    ///여기서부터는 엔딩 
    

  if (ending == 1) { // 엔딩 10-1 진행 중
    taedori = false 
    // if (previousTime0 == 0) { // previousTime이 null이면 현재 시간으로 초기화
    //   previousTime0 = millis();
    // }
    noStroke();
    fill(0);
    //textFont(fontLetter)
    textAlign(LEFT, CENTER);
    textSize(40);
    image(images[8], 0, 0, width, height);
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    image(images[34], 0, 0, width, height); //교수님 말풍선
    text("올 때가 됐는데...", 150,750);

    if (millis() - previousTime0 > 2000) { //2초가 지나면 선택지가 나옴
      image(images[35],0,0,width,height); //3개 버튼 이미지
      mouseIsOn(); 
    }    

      if (scene == 501){ //전화했을 때 나오는 씬 /////////추가했는데 안 보임
        playCallSound();
        rect(0,0,width,height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[34], 0, 0, width, height); //교수님 말풍선
        text("...드디어 전화해 주었군요. 83동 601호로 오세요.", 150,750);
        nextPageEffect();
        previousTime0 = 0;
        if (previousTime0 == 0) { // previousTime이 null이면 현재 시간으로 초기화
          previousTime0 = millis();
        }
      } 

      if(scene == 998){ ///뒤늦게 추가한 애니메이션
        image(images[41],0,0,width,height); 
        if (transparency < 255) {
          transparency += fadeInSpeed + 5;
        }
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[34], 0, 0, width, height); // 말풍선
        text("설마.. 정보문화학전공필수과목<정보문화기술입문>을담당하시는", 150,740);
        text("오 종 환 교 수 님!?!", 150,780);

        tint(255, transparency);
        image(images[9], 0, 0, width, height);
        noTint();

        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[34], 0, 0, width, height); //말풍선
        text("설마.. 정보문화학전공필수과목<정보문화기술입문>을담당하시는", 150,740);
        text("오 종 환 교 수 님!?!", 150,780);
        nextPageEffect()
      }

      if(scene == 999){ ///뒤늦게 추가한 애니메이션
        image(images[40],0,0,width,height); 
        if (transparency < 255) {
          transparency += fadeInSpeed + 5;
        }
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23], 0, 0, width, height); // 말풍선
        text("헉 설마.. 정보문화학전공필수과목<정보문화기술입문>을담당하시는", 150,740);
        text("오 종 환 교 수 님!?!", 150,780);

        tint(255, transparency);
        image(images[9], 0, 0, width, height);
        noTint();

        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23], 0, 0, width, height); //말풍선
        text("헉 설마.. 정보문화학전공필수과목<정보문화기술입문>을담당하시는", 150,740);
        text("오 종 환 교 수 님!?!", 150,780);
        nextPageEffect()
      }

      if(scene == 9999){ ///뒤늦게 추가한 애니메이션
        image(images[39],0,0,width,height);
        if (transparency < 255) {
          transparency += fadeInSpeed + 5;
        }
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23], 0, 0, width, height); //교수님 말풍선
        text("(당신은 교수님을 모르는 척 자리에 앉았다.)", 150,750);
        
        tint(255, transparency);
        image(images[9], 0, 0, width, height);
        noTint();
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[23], 0, 0, width, height); //교수님 말풍선
        text("(당신은 교수님을 모르는 척 자리에 앉았다.)", 150,750);

        nextPageEffect()
      }
      
      if(scene == 1){ //첫 번째, 두 번째 버튼
        fill(0);
        image(images[10], 0, 0, width, height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[34], 0, 0, width, height); 
        text("잘 찾아왔군요! 미션도 다 성공해내다니 대단해요.", 150,750);
        nextPageEffect()
      }
      if(scene == 2){ //세 번째 버튼
        fill(0);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        if (previousTime == 0) { // previousTime이 null이면 현재 시간으로 초기화
          previousTime = millis();
        }
        image(images[11], 0, 0, width, height);
        image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
        image(images[34], 0, 0, width, height);
        text("설마 정보문화학전공필수과목<정보문화기술입문>을담당하는", 150,740);
        text("저 오.종.환을 무시하는 건가요?", 150,780);
                
        if (millis() - previousTime > 2000) {
          image(images[10], 0, 0, width, height);
          image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
          image(images[34], 0, 0, width, height);
          text("아무튼,, 잘 찾아왔군요! 미션도 다 성공해내다니 대단해요.", 150,750);
          nextPageEffect()
        }
      }
    }  

  if (ending ==2){ //엔딩 10-2 진행 중 
    taedori = false 
    noStroke();
    fill(0);
    //textFont(fontLetter)
    textAlign(LEFT, CENTER);
    textSize(40);
    if(scene == 3){
      image(images[12],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[34], 0, 0, width, height);
      text("이 다이어리를 찾아준 건 학생이 처음이에요.", 150,750);
      nextPageEffect()
    }
    
    
    if(scene == 4){
      image(images[12],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[34], 0, 0, width, height);
      text("궁금한 걸 지나치지 못하는 호기심, 선뜻 주인을 찾아주려는 선량함,", 150,720);
      text("네 가지 미션을 모두 성공해낸 능력..", 150, 760);
      text("학생은 내가 찾던 사람이에요!", 150, 800);
      nextPageEffect()
    }

    if(scene == 5){
      if (previousTime2 == 0) { // previousTime이 null이면 현재 시간으로 초기화
        previousTime2 = millis();
      }

      image(images[13],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[34], 0, 0, width, height);
      text("테스트 결과지를 줄게요. 사실 이건 심.테를 가장한..", 150,750);
      nextPageEffect()     

      // if (millis() - previousTime2 > 2000) {
      //   image(images[53], 0, 0, width, height);
      //   image(images[24], 0, 0, width, height);
      //   image(images[21], 0, 0, width, height);
      //   image(picT1, 205, 232, 237, 177);
      //   image(picT2, 530, 232, 237, 177);
      //   image(picT3, 205, 478, 237, 177);
      //   image(picT4, 530, 478, 237, 177);
      //   nextPageEffect()
      // }
    }

    if(scene == 6){ //결과지 등장

      if (previousTime10 == 0) { // previousTime이 null이면 현재 시간으로 초기화 //QR안내 배경
        previousTime10 = millis();
      }

      image(images[53], 0, 0, width, height); //교수님 배경
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[24], 0, 0, width, height);
      //image(images[21], 0, 0, width, height); //이메일 이제 안 씀
      imageWithFlip(picT1, 205, 232, 237, 177);
      imageWithFlip(picT2, 530, 232, 237, 177);
      imageWithFlip(picT3, 205, 478, 237, 177);
      imageWithFlip(picT4, 530, 478, 237, 177);
      image(images[59], 0, 0, width, height); //결과지 에셋 
      



      //혈액형별 다른 테스트 결과
      if (bloodType == "A형"){
        image(images2[18], 0, -9, width, height);
        image(images2[23],0,0,width, height)

      }

      if (bloodType == "B형"){
        image(images2[20], 0, -9, width, height);
        image(images2[25],0,0,width, height)
      }

      if (bloodType == "O형"){
        image(images2[21], 0, -9, width, height);
        image(images2[26],0,0,width, height)
      }

      if (bloodType == "AB형"){
        image(images2[19], 0, -9, width, height);
        image(images2[24],0,0,width, height)
      }

      
      if (millis() - previousTime10 > 150) {        
        image(images[64],0,0,width,height); //QR안내배경
        nextPageEffect();
      }

      
    }

    if(scene == 7){
      image(images[12],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[34], 0, 0, width, height);
      text("테스트 결과가 좋네요.", 150,750);
      qrcode.hide();
      nextPageEffect()
    }

    if(scene == 8){
      if (previousTime3 == 0) { // previousTime이 null이면 현재 시간으로 초기화
        previousTime3 = millis();
      }
      image(images[14],0,0,width,height);
      image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
      image(images[34], 0, 0, width, height);
      text("혹시.. 랩실 관심 있나요?", 150,750);
      
      if (millis() - previousTime3 > 1500) {        
        image(images[43],0,0,width,height); //두 가지 선택지
        mouseIsOn();
      }
    }
  }

  if(ending == 3){
    scene =9;
    // image(images[1],0,0,width,height);
    // image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    // noStroke();
    // fill(0,255,0);
    // //textFont(fontLetter)
    // textAlign(CENTER, CENTER);
    // textSize(100);
    // text("방명록 만드는 중",width/2, height/2);
    

    // if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
    //   image(images[49],0,0,width,height);
    // }
    
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)

    if(diary && fontLetter) {
      
      image(diary, 0, 0);
      textFont(fontLetter);
      //image(images[48],0,0,width,height);
      nextPageEffect();
    }
    if (posts.length >0) {
      for (let i = posts.length-1 ; i > posts.length-numberDB-1 ; i--) {
        let post = posts[i];
        post.draw();
      }
    }
    postInput.show();
    postBtn.show();
  } else {
    postInput.hide();
    postBtn.hide();
  }

  if(ending == 4){

    scene =9;
    // if (previousTime9 == 0) { // previousTime이 null이면 현재 시간으로 초기화
    //   previousTime9 = millis();
    // }

    noStroke();
    fill(0);
    //textFont(fontLetter)
    textAlign(LEFT, CENTER);
    textSize(40);
    image(images[15],0,0,width,height);
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    image(images[23], 0, 0, width, height); //지문 말풍선
    text("교수님을 화나게 한 것 같다...", 150,750);

    nextPageEffect(); //다음으로 넘어가는 거 추가해야 함

    // if (millis() - previousTime9 > 1500){
    //   image(images[34], 0, 0, width, height); //교수님 말풍선
    //   text("그럼 방명록만이라도 남기고 가요. ㅡㅡ^", 150,750);
    //   image(images[60], 0, 0, width, height); //버튼 두 개 등장
    // }
  }

  if(ending==5){ //방명록이거나 게임 오버이거나
    noStroke();
    fill(0);
    //textFont(fontLetter)
    textAlign(LEFT, CENTER);
    textSize(40);
    image(images[15],0,0,width,height);
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    image(images[23], 0, 0, width, height); //지문 말풍선
    text("그럼 방명록만이라도 남기고 가요. ㅡㅡ^", 150,750);
    image(images[60], 0, 0, width, height); //버튼 두 개 등장

  }

  if(ending==6){
    movingTitle();
    image(images2[28], 0, 0, width, height); //게임 종료 화면
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
  }

  if (testing != 0 && ending < 1){ //testing이 실행될 때는 테두리가 무조건 보이게 설정
    taedori = true
  }
  if (taedori == true){
    image(images[54],0,0,width,height); //테두리, 오프닝 엔딩에는 수동 입력 (겹침 문제 해소)
    if (testing == 16) {
      image(images0[39], 0, 0, width, height);  //다음으로
    }
  }

  reStartButton();
  
}

// 미로

// function Rectangle() {
//   fill(255);
//   noStroke();
//   rect(300, 0, 150, 500);
//   rect(700, 400, 150, 500);
// }

// function endRectengle() {
//   rect(1100, 350, 100, 200);
// }

// function takePicture() {
//   let img = createImage(width, height);
//   img.copy(video, 0, 0, width, height, 0, 0, width, height);

//   // Save the image
//     picT2 = video.get();
//     capturingJY = false;
        
//     testing = 8;


//}



// 혈액형


function timelapse(){
  if (bloodType != "" ){
    
    let elapsedTime = millis() - startTime;
    fill(254, 142, 127);
    rect(0,800, elapsedTime/3000*1200, 100);
    
  }
  
}


function restartCamera() {
//image(video2, 0, 0, width, height);

  push(); // 현재의 변환 상태를 스택에 저장
  scale(-1, 1); // 캔버스를 좌우로 뒤집음
  translate(-width, 0); // 다시 원래의 위치로 이동
  image(video, 0, 0, width, height);
  pop(); // 스택에서 이전의 변환 상태를 불러옴

textSize(400);
textAlign(CENTER, CENTER);
fill(255, 255, 255);
text(countdownJY2, width / 2, height / 3);
}

function updateCountdown() {


if(countdownJY2>0) {
countdownJY2--;
}
timerOn = false;

if (countdownJY2 == 0 && !capturingJY2  ) {

  picT3 = capture.get();
  capturingJY = false;
  countdown = 3; 
  testing = 11;

}
}

function updateCountdownSY1() {


  if(countdownSY1>0) {
  countdownSY1--;
  }
  timerOnSY1  = false;
  
  if (countdownSY1 == 0 && !capturingSY1  ) {
  
    picT1 = capture.get();
    capturingSY1 = false;
    countdown = 3; 
    testing = 4;
  
  }
  }

function updateCountdownSY2() {


  if(countdownSY2>0) {
  countdownSY2--;
  }
  timerOnSY2  = false;
    
  if (countdownSY2 == 0 && !capturingSY2  ) {
    
    picT4 = capture.get();
    capturingSY2 = false;
    countdown = 3; 
    testing = 15;
    
  }
  }

// function takePicture(){

//   clearInterval (timerInterval);
//   setTimeout(() => {
//     picT3 = capture.get();
//   capturingJY = false;
//   countdown = 3; 
//   }, 1000);
  


// }


// function takePicture() {
// // Stop the countdown timer
// clearInterval(timerInterval);

// // Set a delay before capturing to allow the message to be displayed
// setTimeout(() => {
//   // Capture the current frame as an image
//   picT3 = capture.get();
//   capturingJY2 = false;
//   testing = 11;
//   countdown = 3;
// }, 1000);

// capturingJY2 = true;
// }



async function mousePressed(){
  
  if(opening !== 1) {
    if (mouseX > 50 && mouseX < 200 && mouseY > 15 && mouseY < 165) {
      jjinReStart();
    }

  }
  //여기는 오프닝
  if (opening == 1){
    if (mouseX > 910 && mouseX < 1130 && mouseY > 580 && mouseY < 840){
      opening = 2;
    }
  }

  if (cut == 5){
    if (mouseX > 323 && mouseX < 499 && mouseY > 85 && mouseY < 124){ //쪽지클릭
      cut = 6;
    }
  }

  if (cut == 4){
    if (mouseX > 440 && mouseX < 630 && mouseY > 400 && mouseY < 540) { //가운데 놓인 카메라와 다이어리 터치
      cut = 5 
    }
  }

  if(cut == 6){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      cut = 7;
    }
  }

  //여기는 메인
  if (testing == 1) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      testing = 2;
      countdown = 3;
    }
  } else if (testing == 2) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      testing = 3;
      capturing = true;
      countdown = 3;
    }
  } else if (testing == 3) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      countdown = 3;
    }
  } else if (testing == 5) {
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
      testing = 6;
    }
  } else if (testing ==6) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      testing = 7;
    }
  } else if (testing == 9) {
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
      testing = 10;
    }
  } 
  else if (testing ==10) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      currentScreen = 1;
      startTime = null;
    } 
  } 
  else if (testing ==12) {
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
      testing = 13;
    } 
  } else if (testing ==13) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      testing = 14;
      capturing4 = true;
      countdown = 3; 
    } 
  } else if (testing ==16) {
    if (mouseX > 1000 && mouseX < 1150 && mouseY > 770 && mouseY < 800){
      testing = 17;
    } 
  } else if (testing ==17) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240){
      testing = 18;
    } 
    if (mouseX > 740 && mouseX < 930 && mouseY > 80 && mouseY < 200) {
      testing = 19;
    }
  } else if (testing ==18) {
    if (inputDigits === correctCode &&
      mouseX > ellipseX - ellipseSize / 2 &&
      mouseX < ellipseX + ellipseSize / 2 &&
      mouseY > ellipseY - ellipseSize / 2 &&
      mouseY < ellipseY + ellipseSize / 2) {
      fadeValue = 255;
      ending = 1;
      scene = 501;
      if (endBgm.isPlaying()) {
        endBgm.pause(); // 재생 중이면 일시 정지
        bgm.pause();
      } else {
        endBgm.play(); // 일시 정지 중이면 재생
        endBgm.loop();
        bgm.pause();
      }
      }
      

    if (mouseX > 950 && mouseX < 1150 && mouseY > 540 && mouseY < 740){
      testing = 19;
    } 

} else if (testing == 19) {
  if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240){
    testing = 18;
  } 
}

  //여기서부터는 엔딩

  if (ending === 1) {
    testing = 20;
    if (mouseX > 200 && mouseX < 400 && mouseY > 525 && mouseY < 575) { //1ST button
      scene = 998;
      
    } else if (mouseX > 500 && mouseX < 700 && mouseY > 525 && mouseY < 575) { //2nd button
      scene = 999;
      

    } else if (mouseX > 800 && mouseX < 1000 && mouseY > 525 && mouseY < 575) { //third button
      scene = 9999;
      
    }
  }

  if (ending == 1 && (scene == 1 || scene == 2)){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      ending = 2
      scene = 3
    }
  }
 
    
  if(ending==2 && scene < 8){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      scene += 1
      if(scene == 6){
        setTimeout(async ()=>{

          let currentFrameImage = get();
          let base64Image = currentFrameImage.canvas.toDataURL();
          await uploadImageToSupabase(base64Image);
          document.getElementById("qrcode").innerHTML = ""
          //new QRCode(document.getElementById("qrcode"), `https://bblfkppqduedmiwygnba.supabase.co/storage/v1/object/public/test/public/${name}`);
          new QRCode("qrcode", {
            text: `https://bblfkppqduedmiwygnba.supabase.co/storage/v1/object/public/test/public/${name}`,
            width: 126,
            height: 126,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
          });
          qrcode.show();

        }, 100);

      }else if (scene >= 7 || opening >= 1){ //씬 7 없애버림 -> 다시만듦
        qrcode.hide();
      }
    }
  }

  if(ending==1 && (scene == 999 || scene == 998)){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      scene = 1
    }
  }

    if(ending==1 && scene == 9999){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      scene = 2
    }
  }

  if(scene == 8){
    if (mouseX > 300 && mouseX < 550 && mouseY > 525 && mouseY < 575) { //1st button
      ending = 3; 
    } else if (mouseX > 650 && mouseX < 900 && mouseY > 525 && mouseY < 575) { //2nd button
      ending = 4;
    } 
  }

  if (ending == 3 && scene ==9){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      ending = 6
        scene = 10;
    }
  }

  if (ending == 4 && ending !=5){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      ending = 5
    }
  }

  if (scene == 501){ //전화했을 때 나오는 씬
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      endnig = 1;
      scene = 0;
    } 
  }

  if (ending !=4 && ending == 5){ //방명록이거나 겜 종료
    if (mouseX > 300 && mouseX < 550 && mouseY > 525 && mouseY < 575) { //1st button
      ending = 3; //방명록으로 가기
    } else if (mouseX > 650 && mouseX < 900 && mouseY > 525 && mouseY < 575) { //2nd button
      ending = 6; //겜 종료
    } 
  }
}

function keyPressed() {
  //오프닝
  // 'w' 키 누를 때
 
  if ((keyCode == 87) && cut >= 1 && cut <= 3 ) {
    cut += 1 ; // 앞으로 이동하는 연출
  }

  //메인_전화번호
  // 특정 키 0501 눌렀을 때 fade out 시작
  if (key >= '0' && key <= '9') {
    inputDigits += key;
    if (inputDigits.length === 4) {
      // 숫자 "0501" 입력 후 마우스 클릭 시 fade out 시작
    }
  } else if (key === 'Backspace' || key === 'Delete') {
    // Backspace 또는 Delete 키 눌렀을 때 숫자 하나 삭제
    inputDigits = inputDigits.slice(0, -1);
  }
 
  //console.log(currentScreen, keyCode);
// if (currentScreen === 2 && keyCode === 32 ) {
//   currentScreen = 3; 

  
// }

if (keyCode == 83) { //s누르면 노래
  if (bgm.isPlaying()) {
    //bgm.pause(); // 재생 중이면 일시 정지
  } else {
    bgm.stop();
    bgm.loop(); // 일시 정지 중이면 재생
  }

}
}


function mouseIsOn() {

  if(opening !== 1) {
    if (mouseX > 50 && mouseX < 200 && mouseY > 15 && mouseY < 165) {
      image(images0[23], 0, 0, width, height);
    }
  }

  if(ending == 1 && scene != 501 && scene != 998 && scene != 999 && scene != 9999 && scene != 1 && scene != 2){
    if (mouseX > 200 && mouseX < 400 && mouseY > 525 && mouseY < 575) { //1ST button
      image(images[36],0,0,width,height);
    } else if (mouseX > 500 && mouseX < 700 && mouseY > 525 && mouseY < 575) { //2nd button
      image(images[37],0,0,width,height);
    } else if (mouseX > 800 && mouseX < 1000 && mouseY > 525 && mouseY < 575) { //third button
      image(images[38],0,0,width,height);
    }
  }

  if(scene == 8){
    if (mouseX > 300 && mouseX < 550 && mouseY > 525 && mouseY < 575) { //1st button
      image(images[46],0,0,width,height); 
    } else if (mouseX > 650 && mouseX < 900 && mouseY > 525 && mouseY < 575) { //2nd button
      image(images[44],0,0,width,height);
    } 
  }

  if (ending == 5){ //방명록이거나 겜 종료
      if (mouseX > 300 && mouseX < 550 && mouseY > 525 && mouseY < 575) { //1st button
        image(images[61],0,0,width,height); 
      } else if (mouseX > 650 && mouseX < 900 && mouseY > 525 && mouseY < 575) { //2nd button
        image(images[62],0,0,width,height);
      } 
  }

  if (ending == 3 && scene ==9){
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      image(images[49],0,0,width,height);
    }
  }

  if (testing == 1) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[3],0,0,width,height);
    }
  }

  if (testing == 2) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[3],0,0,width,height);
    }
  }

  if (testing == 5 ) {        
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
    image(images0[21], 0, 0, width, height); 
    }
  }

  if (testing == 6) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[3],0,0,width,height);
    }
  }

  if (testing == 9 ) {        
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
    image(images0[21], 0, 0, width, height); 
    }
  }

  if(testing == 10 && currentScreen !== 1 && currentScreen !==3) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[3],0,0,width,height);
    }
  }

  if (testing == 12) {
    if (mouseX > 850 && mouseX < 1100 && mouseY > 800 && mouseY < 850) {
      image(images0[21], 0, 0, width, height); 
    }
  }

  if (testing == 13) {
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[3],0,0,width,height);
    }
  }

  if (testing == 16 ) {        
    if (mouseX > 1000 && mouseX < 1150 && mouseY > 770 && mouseY < 800) {
    image(images0[40], 0, 0, width, height); 
    }
  }

  if (testing == 17) {
    if (mouseX > 740 && mouseX < 930 && mouseY > 80 && mouseY < 200) {
      image(images0[45],0,0,width,height);
    }
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[38],0,0,width,height);
    }
  }

  if (testing == 18) {
    if(mouseX > ellipseX - ellipseSize / 2 &&
    mouseX < ellipseX + ellipseSize / 2 &&
    mouseY > ellipseY - ellipseSize / 2 &&
    mouseY < ellipseY + ellipseSize / 2) {
      image(images0[48], 0, 0, width, height); 
    }
    if (mouseX > 950 && mouseX < 1150 && mouseY > 540 && mouseY < 740) {
      image(images0[45],210,500,width,height);
    }
  }

  if(testing == 19 ){
    if (mouseX > 950 && mouseX < 1150 && mouseY > 40 && mouseY < 240) {
      image(images0[38],0,0,width,height);
    }
  }
  

}

function nextPageEffect(){
  image(images[48],0,0,width,height);
  
    if (mouseX > 1055 && mouseX < 1105 && mouseY > 765 && mouseY < 815){
      image(images[49],0,0,width,height);
    }
}

function movingTitle(){
  if (xLeft <= width) { //표지 배경 애니메이팅, 챗지피티 사용
    image(images[25], xLeft, 0, width - xLeft, height, 0, 0, width - xLeft, height); // 이미지 일부분만 그림
  }

  xLeft -= 1;
  if (xLeft <= -width) {
    xLeft = 0;
  }
}

function reStartButton() {
  if(opening !== 1) {
    image(images0[22], 0, 0, width, height);
  }
  mouseIsOn();
}

function imageWithFlip(img, x, y, w, h) { //결과지 좌우반전 함수
  push(); // 현재 변환 상태를 저장
  translate(x + w, y + h / 2); // 이미지의 우측 중앙을 기준으로 이동
  scale(-1, 1); // X축을 기준으로 좌우 반전
  image(img, 0, -h / 2, w, h); // 이미지 위치와 크기를 조절하여 반전 적용
  pop(); // 이전 변환 상태로 복원
}

function playFootstepSound() {
  // 발소리 효과음 재생
  if (!footstepSound.isPlaying()) {
    footstepSound.play();
  }
}

function playPaperSound() {
  // 종이 효과음 재생
  if (!paperSound.isPlaying()) {
    paperSound.play();
    soundPlayed = true;
  }
}

function playCameraSound(){
  if (!cameraSound.isPlaying()) {
    cameraSound.play();
    soundPlayed = true;
  }
}

function playCallSound(){
  if (!callSound.isPlaying()) {
    callSound.play();
    soundPlayed = true;
  }
}

const dataURLtoFile = (dataurl, fileName) => {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
};

async function uploadImageToSupabase(imageData) {
  // 현재 시간을 기반으로 고유한 파일 이름 생성
  const timestamp = Date.now();
  const filename = `test_${timestamp}.jpg`;
  name = filename

  const imageFile = dataURLtoFile(imageData, filename);

  const { data, error } = await supabaseQ.storage
    .from("test")
    .upload(`public/${filename}`, imageFile, {
      contentType: "image/jpg",
      cacheControl: "3600",
      upsert: false,
    });

  if (error) {
    console.error("Error uploading image:", error);
  } else {
    console.log("Image uploaded successfully:", data);
  }
}

////////////방명록
async function uploadPost(content){
  const { error } = await supabase
  .from('note_DB')
  .insert({ content: content })
  if (error) {
    console.error("Error uploading post:", error);
  } else {
    console.log("post uploaded successfully:");
  }
}

async function fetchAndDisplayPosts() {
  const { data, error } = await supabase
  .from('note_DB')
  .select()
  .order('created_at', { ascending: false }) //내림차순으로 정렬

  if (error) {
    console.error("Error fetching posts:", error);
  } else {
    console.log("Posts fetched successfully:");

    if (data && data.length > 0) {
      for (let i = 0; i < numberDB; i++) {
        const content = data[i].content;
        let post = new Post(content);
        posts.push(post);
      }
    }

    if (posts.length > numberDB) {
      const excess = posts.length - numberDB;
      posts.splice(0, excess); // 최신 데이터를 유지하도록 초과된 부분을 제거
    }
  reverse(posts);
  }
}


function jjinReStart() {

  endBgm.stop(); // 재생 중이면 정지
  bgm.stop();
  bgm.loop();
  

  //방명록

  ProjectURL = "https://mjsbmdhaqjfozvjtuzhj.supabase.co"
  API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qc2JtZGhhcWpmb3p2anR1emhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3OTY3OTAsImV4cCI6MjAxODM3Mjc5MH0.JHDHXvFnkHHo_F48bFSPNmdf8M_nCDh__UOLryjJgEY"
  numberDB = 30;

textSize(40);

  //화면 전환 변수(스토리)
opening = 1; //큰 장면_오프닝을 의미하는 변수입니다.
cut = 0; //opening에서 사용한 하위 장면 변수입니다.

ending = 0; // 큰 장면을 의미하는 변수입니다.
scene = 0; //ending에서 사용한 하위 장면 변수입니다.

//(메인)
testing = 0; // 큰 장면을 의미하는 변수입니다.

//이미지 변수 
// let images = []; // 이미지를 저장할 배열을 선언합니다.
// const startImageNumber = 100; // 이미지의 시작 숫자입니다.
// const endImageNumber = 156; // 끝 숫자

//(메인)
// let images0 = []; // 이미지를 저장할 배열을 선언합니다.
// const startImageNumber0 = 0; // 이미지의 시작 숫자입니다.
// const endImageNumber0 = 23; // 끝 숫자

//(메인)
// let images2 = []; // 이미지를 저장할 배열을 선언합니다.
// const startImageNumber2 = 200; // 이미지의 시작 숫자입니다.
// const endImageNumber2 = 215; // 끝 숫자

// // ml5 (미로)
// console.log('ml5 version:', ml5.version);

// let handpose;
// let video;
//handPoseModelLoaded = false;
handPosition = { x: 80, y: 240 };
handPositionCircle = { x: 0, y: 0 };
gameEnding = false;
circleRadius = 30;
rectX3 = 1030;
rectY3 = 350;
rectWidth3 = 100;
rectHeight3 = 200;

isTouching = false;
rectX1 = 300;
rectY1 = 0;
rectWidth1 = 150;
rectHeight1 = 500;
isTouching2 = false;
rectX2 = 700;
rectY2 = 400;
rectWidth2 = 150;
rectHeight2 = 500;

diaryX = 80;  /// 여기서부터, let diaryHeight까지 재연이 확인 필요. 찐에 넣는 거 빼먹었던 거 맞는지!!
diaryY = 240;
diaryWidth = 100;
diaryHeight = 100;

capturingJY = false;

handInsideEllipse = false; /// 여기도 재연이 확인 필요
moveCircle = false;
hmm = true;
// let xpos, ypos;


//ml5 혈액형
// handPoseModelLoaded = false;
// let handpose2;
//let video2;
currentScreen = 0;
bloodType = "";
handPositionBlood = { x: 0, y: 0 };
startTime;
countdownInitialvalue = 5;
countdownJY2 = countdownInitialvalue;
countdownSY1 = countdownInitialvalue;    //T1용 
countdownSY2 = countdownInitialvalue;    //T4용
timerInterval;
capturingJY2 = false;
capturingSY1 = false; //T1용
capturingSY2 = false; //T4용

//소리 변수
// let titleMusic;
// let bgm;

//시간 변수
previousTime0 = 0;
previousTime  = 0//시간 변수 초기화용 변수
previousTime2 = 0
previousTime3 = 0
previousTime4 = 0
previousTime5 = 0
previousTime6 = 0
previousTime7 = 0
previousTime8 = 0
previousTime9 = 0 //마지막 방명록에서
previousTime10 = 0 //qr안내 배경

//시간 변수 (서연 사진찍는 곳)
preTime1 = 0;
preTime2 = 0;
preTime3 = 0;
preTime4 = 0;

//사진 변수 (메인)
// let capture;
capturing = false;
countdown = 3; // countdown 변수 추가 및 초기값 설정
// let picT1;
picT1X = 400;
picT1Y = 200;
picT1TargetY = 500; // 목표로 하는 Y 위치
picT1YSpeed = 5; // Y축 이동 속도

// pola1;
pola1X = 0;
pola1Y = -300;
pola1TargetY = 0;
pola1YSpeed = 5;

//사진 변수 (T2 미로)
// let picT2;
picT2X = 400;
picT2Y = 200;
picT2TargetY = 500; // 목표로 하는 Y 위치
picT2YSpeed = 5; // Y축 이동 속도

// pola2;
pola2X = 0;
pola2Y = -300;
pola2TargetY = 0;
pola2YSpeed = 5;

//사진 변수 (T3 혈액형)
// let picT3;
picT3X = 400;
picT3Y = 200;
picT3TargetY = 500; // 목표로 하는 Y 위치
picT3YSpeed = 5; // Y축 이동 속도

// pola3;
pola3X = 0;
pola3Y = -300;
pola3TargetY = 0;
pola3YSpeed = 5;

timerOn = false;
timerOnSY1 = false;
timerOnSY2 = false;

//사진 변수 (T4)
// let capture4;
capturing4 = false;

// let picT4;
picT4X = 400;
picT4Y = 200;
picT4TargetY = 500; // 목표로 하는 Y 위치
picT4YSpeed = 5; // Y축 이동 속도

// pola4;
pola4X = 0;
pola4Y = -300;
pola4TargetY = 0;
pola4YSpeed = 5;

//전화번호 (메인)
fadeValue = 0;
fadeSpeed = 5;
inputDigits = '';
correctCode = '0501';
displayPositions = [
  { x: 655, y: 216 },
  { x: 702, y: 216 },
  { x: 750, y: 216 },
  { x: 800, y: 216 }
];
ellipseX = 600;
ellipseY = 800;
ellipseSize = 100;


//애니매이팅 변수
textOpacity = 255;
transparency = 0; //투명도
fadeInSpeed = 255 / (2 * 60); // 3초 동안 60프레임으로 나타나게 설정
yUp = 900
goUp = false;
xLeft = 0 
goLeft = false;

//트랜지션 변수
transDuration = 3; // Transition duration in seconds
transInSpeed = 255 / (2 * 60); // Fade-in speed (3 seconds at 60 frames per second)
transOpacity = 0;

//테두리 변수
let taedori = false; 

//사운드 변수 //초기화 변수에 넣음
let soundPlayed = false;

//QR 없애기
qrcode.hide();

//정인아 이 메시지가 보이면 말해줭
}
