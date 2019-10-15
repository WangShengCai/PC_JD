(function ($) {
    $('#myJD').addDropdown({
        width: 126,
        menuList: [{
            title: "",
            items: [{
                href: '#',
                name: '待处理订单',
            }, {
                href: '#',
                name: '消息',
            }, {
                href: '#',
                name: '返修退换货',
            }, {
                href: '#',
                name: '我的问答',
            }, {
                href: '#',
                name: '降价商品',
            }, {
                href: '#',
                name: '我的关注',
            }
            ],
        }, {
            title: "",
            items: [{
                href: '#',
                name: '我的京豆',
            }, {
                href: '#',
                name: '我的优惠券',
            }, {
                href: '#',
                name: '我的白条',
            }, {
                href: '#',
                name: '我的金条',
            }],
        }]
    });

    $('#procurement').addDropdown({
        width: 56,
        menuList: [{
            title: '',
            items: [{
                href: '',
                name: '企业购'
            }, {
                href: '',
                name: '商用场景馆'
            }, {
                href: '',
                name: '工业品'
            }, {
                href: '',
                name: '礼品卡'
            }]
        }]
    });

    $('#service').addDropdown({
        width: 70,
        menuList: [{
            title: '客户',
            items: [{
                name: '帮助中心',
                href: ''
            }, {
                name: '售后服务',
                href: ''
            }, {
                name: '在线客服',
                href: '',
            }, {
                name: '意见建议',
                href: ''
            }, {
                name: '电话客服',
                href: ''
            }, {
                name: '客服邮箱',
                href: ''
            }, {
                name: '金融咨询',
                href: ''
            }, {
                name: '全球售客服'
            }]
        }, {
            title: '商户',
            items: [{
                name: '合作招商'
            }, {
                name: '学习中心'
            }, {
                name: '商家后台'
            }, {
                name: '京麦工作台'
            }, {
                name: '商家帮助'
            }, {
                name: '规则平台'
            }]
        }]
    });

    $('#bar-navs').addDropdown({
        direction: 'x',
        menuList: [{
            title: '特色主题',
            width: 340,
            itemWidth: 85,
            items: [{
                name: '京东试用'
            }, {
                name: '京东金融'
            }, {
                name: '全球售'
            }, {
                name: '国际站'
            }, {
                name: '京东会员'
            }, {
                name: '京东预售'
            }, {
                name: '买什么'
            }, {
                name: '俄语站'
            }, {
                name: '装机大师'
            }, {
                name: '0元评测'
            }, {
                name: '港澳售'
            }, {
                name: '优惠券'
            }, {
                name: '秒杀闪购'
            }, {
                name: '印尼站'
            }, {
                name: '京东金融科技'
            }, {
                name: '陪伴计划'
            }]
        }, {
            title: '特色主题',
            width: 340,
            itemWidth: 85,
            items: [{
                name: '京东试用'
            }, {
                name: '京东金融'
            }, {
                name: '全球售'
            }, {
                name: '国际站'
            }, {
                name: '京东会员'
            }, {
                name: '京东预售'
            }, {
                name: '买什么'
            }, {
                name: '俄语站'
            }, {
                name: '装机大师'
            }, {
                name: '0元评测'
            }, {
                name: '港澳售'
            }, {
                name: '优惠券'
            }, {
                name: '秒杀闪购'
            }, {
                name: '印尼站'
            }, {
                name: '京东金融科技'
            }, {
                name: '陪伴计划'
            }]
        }, {
            title: '特色主题',
            width: 340,
            itemWidth: 85,
            items: [{
                name: '京东试用'
            }, {
                name: '京东金融'
            }, {
                name: '全球售'
            }, {
                name: '国际站'
            }, {
                name: '京东会员'
            }, {
                name: '京东预售'
            }, {
                name: '买什么'
            }, {
                name: '俄语站'
            }, {
                name: '装机大师'
            }, {
                name: '0元评测'
            }, {
                name: '港澳售'
            }, {
                name: '优惠券'
            }, {
                name: '秒杀闪购'
            }, {
                name: '印尼站'
            }, {
                name: '京东金融科技'
            }, {
                name: '陪伴计划'
            }]
        }]
    });

    /**
     * 头部导航条区域 => 广告区域关闭按钮点击处理事件
     */
    $('.header .ad .ad-inner .close').click(function () {
        $('.header .ad').slideUp();
    })

    /**
     * 城市下拉框移入移出
     */
    $('.city').hover(function () {
        $('.dropDown-provin').show();
    }, function () {
        $('.dropDown-provin').hide();
    });
    /**
     * 城市下拉框省份点击
     */
    $('.dropDown-provin .provices li').each(function (index, ele) {
        $(ele).click(function () {
            $('.dropDown-provin .provices li a').removeClass('active3');
            $(this).find('a').addClass('active3');
            $('.city .area').text($(this).text())
        });
    });

    /**
     * 搜索部分 => 我的购物车鼠标移入
     */
    $('.shopping').hover(function () {
        $('.shopping .noshop').show();
    }, function () {
        $('.shopping .noshop').hide();
    });

    /**
     * 主内容区域 => 左侧menuList鼠标悬停展示内容
     */
    var contentBox = [
        menuList1 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '冰箱',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空厨卫大电调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '生活电器',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '视听音乐',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '健身训练',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '运动服饰',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList2 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '家访',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '生活日用',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '家装软饰',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '灯具',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '厨具',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList3 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '全屋定制',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '建筑材料',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '种子',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '肥料',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '农药',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '地方特产',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '中外名酒',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList4 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '冷冻饮食',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '进口食品',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '清洗保养',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '特色服务',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '化学品',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '仪器仪表',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList5 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '支付',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '白条',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '东家',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '众筹',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '股票',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '保险',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList6 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '理财',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '艺术品',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '礼品',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '鲜花速递',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '酒店',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '企业购',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList7 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '护理护具',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '中药西品',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '彩票',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '游戏',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '海外生活',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList8 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '经管励志',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '人文社科',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '汽车价格',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '房产',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '买车',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList9 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '车载电器',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电子狗',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '汽车美容',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '汽车钣金',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '汽车喷涂',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList10 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '有笔',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '电子书',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '生活',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '生活缴费',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '声活服务',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList11 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList12 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '安全自驾',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '汽车服务',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '维修保养',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '汽车清洗',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '玩具',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList13 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '海天酱油',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '垂钓',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '教育培训',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '粮油调味',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList14 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '妈妈专区',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '爸爸专区',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '户外鞋服',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '奢侈品',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '钟表',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList15 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList16 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList17 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }]
            }
        }],

        menuList18 = [{
            content: {
                tabs: [
                    { title: '家电馆', yjt: '>', href: '#' },
                    { title: '镇乡专卖店', yjt: '>', href: '#' },
                    { title: '家电服务', yjt: '>', href: '#' },
                ],
                subs: [{
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '变频空调', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '烘干机', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '洗烘一体机', href: '#' },
                    ]
                }, {
                    title: '洗衣机',
                    yjt: '>',
                    items: [
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                        { name: '65英寸', href: '#' },
                        { name: '电视配件', href: '#' },
                        { name: '超薄电视', href: '#' },
                        { name: '全面屏电视', href: '#' },
                        { name: '智能电视', href: '#' },
                        { name: 'OLED电视', href: '#' },
                        { name: '曲面电视', href: '#' },
                        { name: '4K超清电视', href: '#' },
                        { name: '55英寸', href: '#' },
                    ]
                }, {
                    title: '空调',
                    yjt: '>',
                    items: [
                        { name: '壁挂式空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '5匹空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '以旧换新', href: '#' },
                        { name: '壁挂式空调', href: '#' },
                        { name: '柜式空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '变频空调', href: '#' },
                        { name: '中央空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                        { name: '一级能效空调', href: '#' },
                    ]
                }, {
                    title: '电视',
                    yjt: '>',
                    items: [
                        { name: '洗烘一体机', href: '#' },
                        { name: '波轮洗衣机', href: '#' },
                        { name: '滚筒洗衣机', href: '#' },
                        { name: '迷你洗衣机', href: '#' },
                        { name: '洗衣机配件', href: '#' },
                        { name: '烘干机', href: '#' },
                    ]
                }]
            }
        }],
    ];

    /**
     * 头部ul>li 最后一个li手机京东鼠标移入移出样式
     */
    $('.header .shortcut .w .nav li.JD').hover(function () {
        $(this).find('.dropEwm').show();
    }, function () {
        $(this).find('.dropEwm').hide();
    });

    /**
     * 左侧列表鼠标悬停右侧内容展示实现
     */
    function bindEvent() {
        $('.content .first .fs1 .menuList li').on('mouseenter', function () {
            showContent($(this).index());
        });
        $('.content .first .fs1').on('mouseleave', function () {
            hideContent();
        });
    }
    bindEvent();
    function showContent(index) {
        $('.content .menuContent').empty();
        $('.content .menuContent').show();
        contentBox[index].forEach(function (ele, index) {
            var tabs = ele.content.tabs;
            var subs = ele.content.subs;
            tabs.forEach(function (item, index) {
                var firstP = $('<p class="first"><a href="' + item.href + '">' + item.title + '<span>' + item.yjt + '</span></a></p>');
                $('.content .menuContent').append(firstP);
            });
            subs.forEach(function (item, index) {
                var nextP = $('<p class="nextP"><a class="weight" href="#">' + item.title + '<span class="yjt">' + item.yjt + '</span></a></p>');
                var data = item.items;
                data.forEach(function (item, index) {
                    nextP.append($('<a class="current" href="' + item.href + '">' + item.name + '</a>'));
                    $('.content .menuContent').append(nextP);
                })
            })
        })
    }
    function hideContent() {
        $('.content .menuContent').empty();
        $('.content .menuContent').hide();
    }

    /**
     * 第一行第二列轮播图展示区域
     */
    $('.slideshow').slider({
        imgList: ['https://m.360buyimg.com/babel/jfs/t1/32101/27/12708/95957/5cb8174dEff60166c/f3ac6ca1bfcb4a51.jpg', 'https://m.360buyimg.com/babel/jfs/t1/37028/4/2827/79268/5cb6dadcE1e626fef/a99f63d2591f63c7.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/37227/37/3167/65663/5cb7dde5E1e55f6ba/237207a2a6e79635.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/36915/15/1688/96801/5cb3f839E1540e358/ffddc39e1d1af4bf.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/14838/33/12699/177264/5c99f086E522fe466/2ee9150320afcd17.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/36915/15/1688/96801/5cb3f839E1540e358/ffddc39e1d1af4bf.jpg',
            'https://imgcps.jd.com/ling/1044732/54ix5a6255Sf5rS7576O5a2m/MeWFg-aKoui0rQ/t-5bda9c4614adb61f75933cd6/527b7743.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/33677/36/4556/79197/5cb7e350E7683216e/41f070db83b4d47b.jpg'
        ],
        isAuto: true,
        animateType: 'animate',
        direction: 'left',
    });

    /**
     * 第一行第四列充值中心处样式
     */
    $('.service .list').on('mouseenter', function () {
        $(this).hide();
        $('.payment').slideDown();
    });
    $('.service .payment').on('mouseleave', function () {
        $(this).slideUp();
        $('.service .list').show();
    });
    /**
     * 充值中心关闭按钮添加点击事件 x
     */
    $('.service .payment .close').click(function () {
        $('.service .payment .content').hide();
    });
    /**
     * 充值列表点击改变下方内容区展示部分样式
     */
    $('.service .payment .pay').on('click', 'li', function () {
        $('.service .payment .pay li a').removeClass('listActive');
        $(this).find('a').addClass('listActive');
        $('.service .payment .content').show();
    })

    /**
     * 第一屏往下拉行为 =>  中间部分
     */
    $('.floors .first .center .wrapper').slider({
        imgList: ['https://m.360buyimg.com/babel/jfs/t1/39435/17/315/80464/5cb939edE70745288/30df54f1d29153a4.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/32101/27/12708/95957/5cb8174dEff60166c/f3ac6ca1bfcb4a51.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/17830/39/15181/82860/5caf1111E1b01c4bb/feb4ee1b76ae1e99.jpg',
            'https://imgcps.jd.com/ling/34693782048/5aW954mp5b-D6YCJ5oyH5Y2X/54iG5qy-5L2O6IezOS455YWD/t-5bd913a1a96f8a032f5bd4e9/c3c80710.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/27026/22/8594/98530/5c789aa3Ef871a320/9dfcd7679101318b.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/37809/28/1529/80758/5cb543adE7d40957f/438141059ae5cc94.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/32533/16/11588/253516/5cb5a95bE5477cb4f/e7834a507878ee71.jpg',
            'http://img1.360buyimg.com/da/jfs/t1/19069/15/6476/98181/5c539ef8E761d1f78/b55e061e816683ad.jpg',
            'http://m.360buyimg.com/babel/jfs/t1/7929/16/14126/98815/5c54180bE41403b92/368b7051671df8aa.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/34441/17/1285/197831/5cb463ebEe81f91c3/4600bf8a8baf704c.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/37133/26/2273/30169/5cb594f2E3b91bb43/822488aa1d7b031e.jpg',
            'https://img1.360buyimg.com/da/jfs/t1/37440/29/1488/102221/5cb52c56E454e4f66/383fac3e1d70d495.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/32341/26/11683/46759/5cb58102E544717ff/5d06d34c2c7b1c34.jpg',
            'http://m.360buyimg.com/babel/jfs/t1/32570/26/1526/78591/5c4ff5f9E24c691f3/29399169307c29f1.jpg',
            'http://img1.360buyimg.com/da/jfs/t1/19069/15/6476/98181/5c539ef8E761d1f78/b55e061e816683ad.jpg',
            'https://img1.360buyimg.com/pop/jfs/t1/14838/33/12699/177264/5c99f086E522fe466/2ee9150320afcd17.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/32101/27/12708/95957/5cb8174dEff60166c/f3ac6ca1bfcb4a51.jpg',
            'https://m.360buyimg.com/babel/jfs/t1/37028/4/2827/79268/5cb6dadcE1e626fef/a99f63d2591f63c7.jpg',
            'https://imgcps.jd.com/ling/1044732/54ix5a6255Sf5rS7576O5a2m/MeWFg-aKoui0rQ/t-5bda9c4614adb61f75933cd6/527b7743.jpg',
            'http://m.360buyimg.com/babel/jfs/t1/7929/16/14126/98815/5c54180bE41403b92/368b7051671df8aa.jpg'
        ],
        isAuto: true,
        animateType: 'animate',
        width: 200,
    });
    /**
     * 右边部分
     */
    $('.floors .first .right .container').slider({
        imgList: ['https://img11.360buyimg.com/mobilecms/s360x520_jfs/t1/32447/6/12750/162415/5cb839d5E61f936ab/58b310b3aeab02cd.jpg!q90!cc_180x260',
            'https://img10.360buyimg.com/mobilecms/s360x520_jfs/t1/34245/7/3207/48625/5cb80f58Eb675dac1/2c2b08f173f1baf5.jpg!q90!cc_180x260',
            'https://img10.360buyimg.com/mobilecms/s180x260_jfs/t1/32935/40/11374/44668/5cb44a54Eb764ca0f/29020ab3d74cbd59.jpg!q90!cc_180x260',
            'https://img30.360buyimg.com/mobilecms/s180x260_jfs/t1/37067/4/2601/77956/5cb6a21dE63a9c262/976ce73ec28a8898.jpg!q90!cc_180x260'],
        isAuto: true,
        animateType: 'fade',
        width: 180,
    })

    /**
     * 首屏固定在最右边的按钮
     */
    $('.fixedRight ul li').hover(function () {
        $(this).find('.square').fadeIn();
    }, function () {
        $(this).find('.square').fadeOut();
    })
}(jQuery));