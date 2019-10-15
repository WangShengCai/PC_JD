// 封装网站导航区域下拉框
(function ($) {
    // 构造工厂，构造出多个不同的对象
    function DropDown(dom, opt) {
        // 保存当前dom元素是哪一个
        this.father = dom;
        // 每一列的展示宽度
        this.width = opt.width;
        // 保存当前dom元素下的每一项内容 dl>dt>dd
        this.menuList = opt.menuList;
        // 判断当前展示是横向还是纵向
        this.direction = opt.direction || 'y';

        // 创建dom元素盛放下拉框
        this.createDom();
        // 初始化下拉框样式，
        this.initStyle();
        // 绑定事件
        this.bindEvent();
    }

    /**
     * 创建dom元素
     */
    DropDown.prototype.createDom = function () {
        var myDropDown = $('<div class="dropDown"></div>');
        this.menuList.forEach(function (item, index) {
            var myDl = $('<dl></dl>');
            if (item.title) {
                myDl.append($('<dt>' + item.title + '</dt>'))
            }
            var items = item.items;
            items.forEach(function (data, index) {
                myDl.append($('<dd><a href="' + data.href + '">' + data.name + '</a></dd>'));
            });
            $(myDropDown).append(myDl);
        });
        $(this.father).append(myDropDown);
    }

    /**
     * 初始化样式
     */
    DropDown.prototype.initStyle = function () {
        var width = (this.width + 14) * 2;
        var self = this;
        if (this.direction == 'x') {
            $('.dropDown', this.father).css({
                position: 'absolute',
                width: 1170,
                backgroundColor: '#fff',
                right: -101,
                padding: '15px 10px',
                border: '1px solid #ccc',
                borderTopColor: 'transparent',
                display: 'none',
                'z-index': 10,
            });
            $('.dropDown > dl', $(this.father)).each(function (i) {
                $(this).css({
                    width: self.menuList[i].width,
                    float: 'left',
                    borderRight: '1px solid #eee',
                    margin: 10,
                }).find('dd').css({
                    width: self.menuList[i].itemWidth,
                });
            })
            $('.dropDown > dl:last', this.father).css({
                borderRight: 'none'
            })
        } else if (this.direction == 'y') {
            $('.dropDown', this.father).css({
                position: 'absolute',
                width: width,
                backgroundColor: '#fff',
                left: 0,
                right: 0,
                display: 'none',
                'z-index': 10,
            });
            $('.dropDown dl', this.father).css({
                overflow: 'hidden',
                padding: '10px 0 10px 10px',
                borderBottom: '1px solid  #f0f3ef',
            });
        }
        $('.dropDown dl dt', this.father).css({
            fontWeight: 'bold',
            color: '#666',
        });
        $('.dropDown dl dd', this.father).css({
            float: 'left',
            width: this.width,
            whiteSpace: 'nowrap',
        });
    }

    /**
     * 绑定事件
     */
    DropDown.prototype.bindEvent = function () {
        var self = this;
        $(this.father).hover(function () {
            $(this).css('background-color', '#fff');
            $('.dropDown', self.father).show();
        }, function () {
            $(this).css('background-color', 'transparent');
            $('.dropDown', self.father).hide();
        })
    }

    /**
     * 扩展一个实例方法
     */
    $.fn.extend({
        addDropdown: function (opations) {
            new DropDown(this, opations);
        }
    })
}(jQuery));