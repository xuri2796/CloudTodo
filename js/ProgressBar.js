function ProgressBar(options) {
  this._init(options);
}

ProgressBar.prototype = {
  _init: function(options) {
    this.x = options.x || 0;
    this.y = options.y || 0;
    this.w = options.w || 0;
    this.h = options.h || 0;
    this.fillStyle = options.fillStyle || '#e3e3e3';
    this.strokeStyle = options.strokeStyle || '#3d3d3d';
    //定义内部的进度条的填充矩形
    let innerRect = new Konva.Rect({
      x:this.x,
      y:this.y,
      width:1/10*this.w,
      height:this.h,
      fill:this.fillStyle,
      cornerRadius:1/2*this.h,
      id:'innerRect'
    });
    // 外边框
    outerRect = new Konva.Rect({
      x:this.x,
      y:this.y,
      width:this.w,
      height:this.h,
      stroke:this.strokeStyle,
      strokeWidth:4,
      cornerRadius:1/2 *this.h,
      id:"outerRect"
    });
    this.group = new Konva.Group({
      x:0,
      y:0
    });
    this.group.add(innerRect);
    this.group.add(outerRect);
  },
  changeValue:function(val){
    if(val>1) {
      val = val /100 
    } 
    // 做动画 val = .3 .7
    let width = this.w * val; //计算内部填充矩形的长度
    let innerRect = this.group.findOne('#innerRect'); // 获取
    innerRect.to({
      width,
      duration:.7,
      easing:Konva.Easings.BackEaseIn
    })
  },
   // 添加到层的方法
  addToroupOrLayer:function(arg){
      arg.add(this.group);
  }
};