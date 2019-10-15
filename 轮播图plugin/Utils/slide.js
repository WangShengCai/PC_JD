(function ($) {
    /**
     * 构造工厂 => 创建轮播图对象
     * @param {*} dom 当前对象
     * @param {*} opt 外界传入的参数
     */
    function Slider(dom, opt) {
        // 当前调用轮播图的dom元素
        this.dom = dom;
        // 当前轮播的索引
        this.nowIndex = 0;
        // 当前动画是否结束
        this.flag = false;
        // 定时器标识
        this.timer = null;
        // 定时器时间间隔
        this.duration = 2500;
        // 图片列表
        this.imgList = opt.imgList;
        // 图片数量
        this.imgNum = this.imgList.length;
        // 图片宽度
        this.width = opt.width || $(dom).width();
        // 图片高度
        this.height = opt.height || $(dom).height();
        // 是否自动轮播
        this.isAuto = opt.isAuto;
        // 轮播方式
        this.animateType = opt.animateType || 'animate';
        // 轮播方向
        this.direction = opt.direction || 'right';

        // 创建dom元素
        this.createDom();
        // 初始化样式
        this.initStyle();
        // 绑定事件
        this.bindEvent();
        // 是否自动轮播
        if (this.isAuto) {
            this.autoMove();
        }
    }

    /**
     * 创建dom元素
     */
    Slider.prototype.createDom = function () {
        // 外层图片容器
        var myUl = $('<ul class="slider"></ul>');
        // 小圆点容器
        var myCircle = $('<div class="circle"></div>');
        // 不确定图片数量，需要遍历决定创建多少个dom元素
        this.imgList.forEach(function (item, index) {
            var myLi = $('<li><a href="#"><img src="' + item + '" /></a></li>');
            var mySpan = $('<span></span>');
            myLi.appendTo(myUl);
            mySpan.appendTo(myCircle);
        })
        // 判断运动方式，如果是animate，在ul后面在创建一个li图片和第一张是一样的
        if (this.animateType == 'animate') {
            $('<li><a href="#"><img src="' + this.imgList[0] + '" /></a></li>').appendTo(myUl);
        }
        // 创建左边的按钮
        var leftBtn = $('<a class="left-btn" href="javascript:void(false)">&lt;</a>');
        // 创建右边的按钮
        var rightBtn = $('<a class="right-btn" href="javascript:void(false)">&gt;</a>');
        // 将ul leftBtn rightBtn circle都插入到当前调用轮播图的dom元素
        $(this.dom).append(myUl).append(leftBtn).append(rightBtn).append(myCircle);

    }

    /**
     * 初始化样式
     */
    Slider.prototype.initStyle = function () {
        // 初始化样式
        $(this.dom).css({
            position: 'relative',
            overflow: 'hidden',
        })
        $('*', this.dom).css({
            listStyle: 'none',
            margin: 0,
            padding: 0
        })
        // 外层ul
        $('.slider', this.dom).css({
            width: this.animateType == 'animate' ? (this.imgNum + 1) * this.width : this.width,
            height: this.height,
            position: 'absolute'
        })
        // ul > li
        if (this.animateType == 'animate') {
            $('.slider li', this.dom).css({
                width: this.width,
                height: this.height,
                float: 'left'
            })
        } else if (this.animateType == 'fade') {
            $('.slider li', this.dom).css({
                width: this.width,
                height: this.height,
                position: 'absolute',
                left: 0,
                top: 0,
                display: 'none'
            }).eq(this.nowIndex).css({
                display: 'block'
            })
        }
        // 图片、a元素大小
        $('.slider li a,.slider li a img', this.dom).css({
            display: 'inline-block',
            width: this.width,
            height: this.height
        })
        // 左右按钮共同样式
        $('.left-btn,.right-btn', this.dom).css({
            textDecoration: 'none',
            display: 'inline-block',
            width: 30,
            height: 50,
            lineHeight: '50px',
            textAlign: 'center',
            fontSize: '18px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: 'hsla(180, 37%, 79%, 0.61)',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'all .3s',
        })
        $('.left-btn', this.dom).css({
            left: 3,
        })
        $('.right-btn', this.dom).css({
            right: 3,
        })
        // 小圆点样式
        $('.circle', this.dom).css({
            width: this.width,
            height: 12,
            lineHeight: '12px',
            textAlign: 'center',
            position: 'absolute',
            left: 0,
            bottom: 4,
        })
        $('.circle span', this.dom).css({
            display: 'inline-block',
            width: 12,
            height: 12,
            backgroundColor: '#fff',
            borderRadius: '50%',
            cursor: 'pointer',
            marginLeft: 3,
            marginRight: 3,
        }).eq(this.nowIndex).css({
            backgroundColor: '#f40',
        })
    }

    /**
     * 绑定事件
     */
    Slider.prototype.bindEvent = function () {
        // 保存当前this指向
        var that = this;
        // left点击和移入移出
        $('.left-btn', this.dom).click(function () {
            that.move('prev');
        }).hover(function () {
            $(this).css({ backgroundColor: 'rgba(114, 196, 196, 0.94)' })
        }, function () {
            $(this).css({ backgroundColor: 'hsla(180, 37%, 79%, 0.61)' })
        })
        // right点击和移入移出
        $('.right-btn', this.dom).click(function () {
            that.move('next');
        }).hover(function () {
            $(this).css({ backgroundColor: 'rgba(114, 196, 196, 0.94)' })
        }, function () {
            $(this).css({ backgroundColor: 'hsla(180, 37%, 79%, 0.61)' })
        })
        // 小圆点点击
        $('.circle span', this.dom).click(function () {
            that.move($(this).index());
        })
        // 鼠标移入
        $(this.dom).mouseenter(function () {
            clearInterval(that.timer);
        })
        // 鼠标移出
        $(this.dom).mouseleave(function () {
            that.autoMove();
        })
    }

    /**
     * 鼠标点击时的样式
     */
    Slider.prototype.move = function (dir) {
        var that = this;
        // 加锁，防止运动不顺畅
        if (this.flag) {
            return;
        }
        this.flag = true;
        switch (dir) {
            // 左按钮
            case 'prev':
                if (this.animateType == 'animate') {
                    if (this.direction == 'left' && this.nowIndex == 0) {
                        $('.slider', this.dom).css({
                            left: -this.imgNum * this.width,
                        })
                        this.nowIndex = this.imgNum - 1;
                    } else {
                        if (this.nowIndex == 0) {
                            this.nowIndex = this.imgNum;
                            $('.slider', this.dom).css({
                                left: -this.imgNum * this.width,
                            })
                        }
                        this.nowIndex--;
                    }
                }
                else if (this.animateType == 'fade') {
                    if (this.nowIndex == 0) {
                        this.nowIndex = this.imgNum - 1;
                    } else {
                        this.nowIndex--;
                    }
                }
                break;
            // 右按钮
            case 'next':
                if (this.animateType == 'animate') {
                    if (this.direction == 'right' && this.nowIndex == this.imgNum) {
                        $('.slider', this.dom).css({
                            left: 0,
                        })
                        this.nowIndex = 1;
                    } else {
                        if (this.nowIndex == this.imgNum) {
                            this.nowIndex = 1;
                            $('.slider', this.dom).css({
                                left: 0,
                            })
                        }
                        this.nowIndex++;
                    }
                }
                else if (this.animateType == 'fade') {
                    if (this.nowIndex == this.imgNum - 1) {
                        this.nowIndex = 0;
                    } else {
                        this.nowIndex++;
                    }
                }
                break;
            // 小圆点 
            default: this.nowIndex = dir;
                break;
        }
        // 如果运动方式是animate
        if (this.animateType == 'animate') {
            $('.slider', this.dom).animate({ left: -this.nowIndex * this.width }, 'swing', function () {
                that.flag = false;
            })
        }
        // 如果运动方式是fade
        else if (this.animateType == 'fade') {
            $('.slider li', this.dom).fadeOut().eq(this.nowIndex).fadeIn(function () {
                that.flag = false;
            })
        }
        // 让小圆点的样式随着当前索引的变化而变化
        $('.circle > span', this.dom).css({
            backgroundColor: '#fff',
        }).eq(this.nowIndex % this.imgNum).css({
            backgroundColor: '#f40',
        })
    }

    /**
     * 自动轮播
     */
    Slider.prototype.autoMove = function () {
        var that = this;
        this.timer = setInterval(function () {
            if (that.direction == 'right') {
                $('.right-btn', that.dom).trigger('click');
            } else {
                $('.left-btn', that.dom).trigger('click');
            }
        }, this.duration)
    }

    /**
     * 扩展一个实例方法
     */
    $.fn.extend({
        slider: function (opations) {
            new Slider(this, opations);
        }
    })
}(jQuery));