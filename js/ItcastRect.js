function ItcastRect(options) {
  this._init(options);
}
/*
矩形的属性 ： x ,y ,w , h fillStyle strokeStyle scale(x, y); opacity
  方法：render
*/
ItcastRect.prototype = {
  _init: function(options) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.w = options.w || 0;
    this.h = options.h || 0;
    this.rotation = options.rotation || 0;
    this.opacity = options.opacity === 0 ? 0 : options.opacity || 1;
    this.scaleX = options.scaleX || 1;
    this.scaleY = options.scaleY || 1;
    this.strokeStyle = options.strokeStyle || "#99CCCC";
    this.fillStyle = options.fillStyle || "#336699";
  },
  //  开启渲染函数 （即开始绘制）
  render: function(ctx) {
    ctx.save(); 
    // beginPath() 方法开始一条路径，或重置当前的路径。
    ctx.beginPath();
    // translate() 方法重新映射画布上的 (0,0) 位置。
    ctx.translate(this.x, this.y);
    ctx.rotate((Math.PI / 180) * this.rotation);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.globalAlpha = this.opacity;
    ctx.strokeStyle = this.strokeStyle;
    ctx.fillStyle = this.fillStyle;
    ctx.rect(0, 0, this.w, this.h);
    ctx.fill(); // 填充当前所有路径
    ctx.stroke(); // 描边
    ctx.restore();
  }
};
