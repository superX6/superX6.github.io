/**
 * Created by xmg on 2016/12/20.
 */
// 构造函数
function ColorBall(option) {
    this._init(option);
}

// 构造函数的原型库
ColorBall.prototype ={
     constructor:ColorBall, // 获取当前的构造函数
     _init: function (option) {
         var option = option || {};
         // 1.必要的属性
         this.parentId = option.parentId;
         this.x = option.x || 0;
         this.y = option.y || 0;
         this.r = 60;
         this.bgColor = option.bgColor || 'blue';

         // 2.变化的属性
         this.dX = _.random(-5, 5);
         this.dY = _.random(-5, 5);
         this.dR = _.random(1, 3);

         // 3. 把实例化的小球装入数组
         ballArr.push(this);
     },
     
     // 绘制
     render: function () {
         var parentNode = document.getElementById(this.parentId);
         var childNode = document.createElement('div');
         parentNode.appendChild(childNode);
         
         parentNode.style.position = 'relative';
         childNode.style.position = 'absolute';
         
         childNode.style.left = this.x + 'px';
         childNode.style.top = this.y + 'px';
         childNode.style.width = this.r + 'px';
         childNode.style.height = this.r + 'px';
         childNode.style.borderRadius = '50%';
         childNode.style.backgroundColor = this.bgColor;
     },

     // 动画
     update: function () {
           this.x += this.dX;
           this.y += this.dY;
           this.r -= this.dR;

           if(this.r < 0){
               this.r = 0;
               // 把小球干掉
               ballArr = _.without(ballArr, this);
           }
     }
};