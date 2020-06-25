function CircText(options) {
 this._init(options);
};

CircText.prototype = {
 _init: function(options) {
  this.x = options.x || 0;
  this.y = options.y || 0;
  //内环半径
  this.innerRadius = options.innerRadius || 0;
  //外环半径
  this.outerRadius = options.outerRadius || 0;
  this.text = options.text || 'canvas';
  // 内部填充圆形颜色
  this.innerStyle = options.innerStyle || '#000';
  // 外部圆环的颜色
  this.outerStyle = options.outerStyle || '#blue';
  this.fontSize = options.fontSize || 13;
  // 创建一个组,组的坐标即圆心坐标
  this.group = new Konva.Group({
    x:this.x,
    y:this.y
  })
  // 初始化一个内部圆
  const innerCircle = new Konva.Circle({
    x:0,
    y:0,
    radius:this.innerRadius,
    fill:this.innerStyle,
  });
  
   // 初始化一个外部圆环
   const outerCircle = new Konva.Ring({
    x:0,
    y:0,
    innerRadius:this.innerRadius,
    outerRadius:this.outerRadius,
    fill:this.outerStyle,
    opacity:.7
  });
    // 初始化一个文本
    const text = new Konva.Text({
      x:0-this.innerRadius,
      y:0-this.fontSize/2,
      // 获取/设置文本区域的宽度，包括填充。
      width:this.innerRadius*2,
      // 文本在文本区域的宽度的居中
      align:'center',
      text:this.text,
      fontSize:this.fontSize,
      fontFamily:'微软雅黑',
      fontStyle:'bold',
      fill:"#fff"
    });
    this.group.add(innerCircle)
    this.group.add(outerCircle)
    this.group.add(text)
  },
  addToGroupOrLayer:function(arg) {
    arg.add(this.group)
  }
};