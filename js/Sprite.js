function Sprite(option) {
  this._init(option);
}
Sprite.prototype = {
  _init: function (option) {
    // 坐标可能取0
    this.x = option.x === 0 ? 0 : (option.x || 10);
    this.y = option.y === 0 ? 0 : (option.y || 10);
    this.w = option.w || 32;
    this.h = option.h || 48; // 画布绘制截取的图片的大小 -- 只对截取的图片进行大小改变
    // this.sx = option.h || 40;
    // this.sy = option.h || 40;
    this.sw = option.sw || 32;
    this.sh = option.sh || 48; // 图片截取的大小
    this.imgSrc = option.imgSrc || '';
    this.fps = option.fps || 10;
    this._dirIndex = 0;
  },
  // 开启动画渲染
  render: function (ctx) { 
    // 第一步：加载图片
    let img = new Image();
    img.src = this.imgSrc;
    const self = this;
    img.onload = function () {
      let frameIndex = 0;
      // 第二部： 加载完图片，启动时钟，渲染动画
      setInterval(() => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.drawImage(
          img,
          self.sw * frameIndex,
          self.sh * self._dirIndex,
          self.sw,
          self.sh,
          self.x,
          self.y,
          self.w,
          self.h
        );
        frameIndex++;
        frameIndex %= 4;
      }, 1000 / self.fps);
    }
  },
  // 改变人物方向的函数/方法
  changeDir: function (direction) {
    switch (direction) {
      case 'left':
        this._dirIndex = 1
        return;
      case 'right':
        this._dirIndex = 2
        return;
      case 'up':
        this._dirIndex = 3
        return;
      case 'down':
        this._dirIndex = 0
        return;
    }
  }
}