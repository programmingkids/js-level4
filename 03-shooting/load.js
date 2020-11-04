// 画像読込のシーン
var loadScene = new Phaser.Scene("loadScene");

loadScene.preload = function() {
    // スタート画像
    this.load.image('gamestart', 'assets/images/gamestart.gif');
    // ゲームオーバー画像
    this.load.image('gameover', 'assets/images/gameover.png');
    // 背景画像
    this.load.image('background01', 'assets/images/background01.jpg');
    this.load.image('background02', 'assets/images/background02.jpg');
    this.load.image('background03', 'assets/images/background03.jpg');
    // プレイヤースプライト
    this.load.spritesheet('player', 'assets/images/jets.png', { frameWidth: 64, frameHeight: 64 });
    // ビーム
    this.load.image('beam01', 'assets/images/beam01.png');
    this.load.image('beam02', 'assets/images/beam02.png');
    // パーティクル用画像
    this.load.image('fire01', 'assets/images/fire01.png');
    this.load.image('fire02', 'assets/images/fire02.png');
    // 敵画像
    this.load.image('enemy01', 'assets/images/enemy01.png');
    this.load.image('enemy02', 'assets/images/enemy02.png');
    this.load.image('enemy03', 'assets/images/enemy03.png');
    this.load.image('enemy04', 'assets/images/enemy04.png');
    this.load.image('enemy05', 'assets/images/enemy05.png');
};

loadScene.create = function() {
    // 読み込み完了後にstartSceneを起動
    this.scene.start("startScene");
};
