var mainScene = new Phaser.Scene("mainScene");

mainScene.create = function () {
    // 初期設定
    
    
    // 背景色の設定
    
    
    // マップ表示
    
    
    // プレイヤー作成
    
    
    // UI作成
    
    
    // スター作成
    
    
    // 敵作成
    
};

mainScene.update = function() {
    if(this.isGameOver) {
        return false;
    }
    // プレイヤーの操作処理
    
    
};

// 初期設定
mainScene.config = function() {
    // プレイヤーの動く速度
    this.runSpeed = 300;
    // プレイヤーのジャンプパワー
    this.jumpPower = 500;
    // ゲームオーバーフラグ
    this.isGameOver = false;
    // スコアの初期値
    this.score = 0;
    // 敵の配列
    this.enemyData = ['enemy01','enemy02','enemy05','enemy07','enemy08'];
    // 敵のスピードを設定する配列
    this.enemySpeed = [-100,-50,50,100];
    // カーソルを取得する
    this.cursors = this.input.keyboard.createCursorKeys();
};

mainScene.createMap = function() {
    // マップ表示
    
};

mainScene.createPlayer = function() {
    // プレイヤー作成
    this.player = this.physics.add.sprite(50, 850, 'player');
    // 衝突サイズの調整
    // 表示サイズを変更する前に、物理エンジンでの判定サイズの変更
    this.player.body.setSize(20,25);
    // プレイヤーのサイズ変更
    this.player.setDisplaySize(70,70);
    // プレイヤーの最初の向きは右
    this.player.setFrame(7);
    this.player.direction = 'right';
    // プレイヤーの衝突時のバウンス設定
    this.player.setBounce(0);
    // プレイヤーがゲームワールドの外に出ないように衝突させる
    this.player.setCollideWorldBounds(true);
    // プレイヤーが地面レイヤーと衝突する設定
    this.physics.add.collider(this.player, this.groundLayer);
    
    // 左向きのアニメーション
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('player', { start: 3, end: 5 }),
        frameRate: 10,
        repeat: -1
    });
    // 右向きのアニメーション
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('player', { start: 6, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
    
};

mainScene.createUI = function() {
    // UI作成
    
};

mainScene.createStarGroup = function() {
    // スターグループ作成
    
};

mainScene.createStar = function() {
    // スターの作成
    
};

mainScene.hitStar = function(player, star) {
    // プレイヤーとスターの衝突
    
};

mainScene.createEnemyGroup = function() {
    // 敵グループ作成
    
};

mainScene.createEnemy = function() {
    // 敵の作成
    
};

mainScene.hitEnemy = function(enemy, player) {
    // プレイヤーと敵の衝突
    
};

mainScene.gameOver = function() {
    // ゲームオーバー処理
    
};
