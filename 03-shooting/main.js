var mainScene = new Phaser.Scene("mainScene");

mainScene.create = function () {
    // 初期設定メソッド呼び出し
    
    
    // 背景色の設定
    
    
    // 背景のタイルスプライトを設定
    
    
    // プレイヤー作成
    
    
    // 敵の作成
    
    
    // ビームの作成
    
    
    // UI
    
    
    // パーティクル作成
    
};

mainScene.update = function() {
    
};

mainScene.config = function () {
    // プレイヤーの速度
    this.speed = 300;
    // スコア
    this.score = 0;
    // 敵タイプの配列
    this.enemyType = ["enemy01"];
    // ゲームオーバーフラグ
    this.isGameOver = false;
};

mainScene.createPlayer = function() {
    // プレイヤースプライトの表示
    this.player = this.physics.add.sprite(400, 550, 'player');
    // プレイヤーのサイズ変更
    this.player.setDisplaySize(50,50);
    // プレイヤーの最初のフレーム設定
    this.player.setFrame(1);
    // プレイヤーがゲーム空間の領域と衝突
    this.player.setCollideWorldBounds(true);
    
    
};

mainScene.movePlayer = function() {
    var cursors = this.input.keyboard.createCursorKeys();
    
};

mainScene.createEnemyGroup = function() {
    // 敵グループの作成
    
};

mainScene.createEnemy = function() {
    // X座標の乱数作成
    var positionX = Phaser.Math.RND.between(100, 700);
    // 敵をランダムに選択
    var enemyType = Phaser.Math.RND.pick(this.enemyType);
    // 敵の作成
    var enemy = this.enemyGroup.create(positionX, 50, enemyType);
    enemy.setDisplaySize(80, 80);
    // 敵の移動方向を乱数で作成
    var speedX = Phaser.Math.RND.between(-200, 200);
    var speedY = Phaser.Math.RND.between( 100, 300);
    // 敵の移動
    enemy.setVelocity(speedX, speedY);
};

mainScene.hitEnemy = function (player, enemy) {
    // プレイヤと敵が衝突
    
};

mainScene.createBeamGroup = function() {
    // ビームグループ作成
    
};

mainScene.shoot = function() {
    // プレイヤーの位置からビーム発射
    
};

mainScene.hitBeam = function( beam, enemy) {
    // ビーム消滅
    
};

mainScene.checkRemove = function() {
    
};

mainScene.createUI = function() {
    // スコアを文字で表示する
    
};

mainScene.createParticle = function() {
    // プレイヤーの爆発パーティクル作成
    
};

mainScene.gameOver = function() {
    // ゲームオーバー画像表示
    
};
