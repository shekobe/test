/**
 * Created by suguiyun on 2016/4/7.
 */

//todo 初始化对比栏时，数据渲染有问题，只渲染出一个

$(function () {
    window.console && console.log('pop-compare.js');

    var $popCompare = $('#pop-compare');
    var cookieName = '_contrast';
    var tpl = '<div id="pop-compare" data-load="false" class="pop-compare"><div class="pop-wrap"><p class="pop-compare-tips"></p><div class="pop-inner"><div class="diff-hd"><ul class="tab-btns clearfix"><li class="current ui-switchable-item"><a href="javascript:;">\u5bf9\u6bd4\u680f</a></li><li class="ui-switchable-item"><a href="javascript:;">\u6700\u8fd1\u6d4f\u89c8</a></li></ul><div class="operate"><a href="javascript:;" class="hide-me">\u9690\u85cf</a></div></div><div class="diff-bd tab-cons"><div class="tab-con ui-switchable-panel"><div id="diff-items" class="diff-items clearfix"><dl class="item-empty"><dt>1</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>2</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>3</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl><dl class="item-empty"><dt>4</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl></div><div class="diff-operate"><a target="_blank" id="goto-contrast" href="#none" class="btn-compare-b">\u5bf9\u6bd4</a><a class="del-items">\u6e05\u7a7a\u5bf9\u6bd4\u680f</a></div></div><div class="tab-con ui-switchable-panel tab-scroll" style="display:none;"><div class="scroll-item ui-switchable-panel-body clearfix"><span id="sc-prev" class="scroll-btn sb-prev">&lt;</span><span id="sc-next" class="scroll-btn sb-next">&gt;</span><div class="scroll-con clearfix"><ul id="scroll-con-inner" class="ui-switchable-panel-main"><p class="scroll-loading ac">\u8f7d\u5165\u4e2d...</p></ul></div></div></div></div></div></div></div>';
    var itemStr = '<dl class="hasItem" id="cmp_item_${sku}" fore="${ind}"><dt><a target="_blank" href="http://item.jd.com/${data.goodsId}.html"><img src="${data.picUrl}" width="50" height="50"></a>  </dt><dd><a target="_blank" class="diff-item-name" href="http://www.360shouji.com/goods/${data.goodsId}.html">${data.saleName}</a><span class="p-price"><strong class="J-p-${data.goodsId}"></strong><a class="del-comp-item" skuid="${data.goodsId}">\u5220\u9664</a></span>  </dd></dl>';
    $(document).on('click', '.tab-btns li', function () {
        window.console && console.log('123');
        var t = $(this);
        t.siblings().removeClass('current');
        t.addClass('current');
        var index = t.index();
        var $div = $('#pop-compare').find('.diff-bd .tab-con').eq(index);
        $div.siblings().hide();
        $div.show();

    });
    init();
    function init() {
        window.console && console.log(readCookie(cookieName + "_status"));
        if (readCookie(cookieName + "_status") == 'side') {
            hidePopWin();
        }
        if (readCookie(cookieName + "_status") == 'show') {
            showPopWin(readCookie(cookieName));
        }
    }

    function loadExistList(a){
        var b = readCookie(cookieName) || "";
        b = b.split(".");
        for (var c = 0; c < b.length; c++)
            setContrastItem(b[c]),
                c + 1 == b.length ? setContrastItem(b[c], a) : setContrastItem(b[c])
    }

    function hasCookie(a){
        return a ? new RegExp(a).test(readCookie(cookieName)) : void 0
    }

    function setContrastItem(a,b){
        window.console && console.log('setContrastItem',a,b);
        var c = $("#pop-compare")
            , d = readCookie(cookieName) || ""
           ;
        if (hasCookie(a) && "true" == c.attr("data-load"))
            1==2 && delContrastItem(a);
        else {
            if (!a)
                return !1;
            //$.ajax({
            //    url: getPath('www')+'/goods/goodsInqueryAction!getGoodsCompareBasePara.do?goodsIds=' + a,
            //    dataType: "json",
            //    type: 'GET',
            //    success: function(d) {
            //        var e = $("#diff-items dl").index($("#diff-items").find(".item-empty").eq(0));
            //        var g = {
            //            data: d,
            //            sku: a,
            //            ind: e
            //        };
            //        ($("#cmp_item_" + a).length < 1 || !hasCookie(a)) && (c.find(".item-empty").eq(0).replaceWith(itemStr.process(g))
            //           ),
            //
            //            setCookie(a);
            //            btnStyle(a, "set"),
            //            createCookie(cookieName + "_status", "show", 30, "/;domain=" + document.domain),
            //        "function" == typeof b && b(),
            //             setContrastBtn("add"),
            //            $("#pop-compare").attr("data-load", "true")
            //    }
            //})
            var dd = [{"goodsId":"3427","price":1299,"picUrl":"//res.360shouji.com/img/4207/9476/9476_220.jpg","saleName":"360奇酷手机青春版（全网通3G内存版）"},{"goodsId":"4207","price":1299,"picUrl":"//res.360shouji.com/img/4207/9476/9476_220.jpg","saleName":"360奇酷手机青春版（全网通3G内存版）"}];
            var e = $("#diff-items dl").index($("#diff-items").find(".item-empty").eq(0));
            var g = {
                data: a == 4207 ? dd[1]: dd[0],
                sku: a,
                ind: e
            };
            window.console && console.log('123456');
            ($("#cmp_item_" + a).length < 1 || !hasCookie(a)) && (c.find(".item-empty").eq(0).replaceWith(itemStr.process(g))
            ),

                setCookie(a);
            btnStyle(a, "set"),
                createCookie(cookieName + "_status", "show", 30, "/;domain=" + document.domain),
            "function" == typeof b && b(),
                setContrastBtn("add"),
                $("#pop-compare").attr("data-load", "true")
        }
    }

    function showPopWin(a) {
        window.console && console.log('showPopWin',a);
        var c = $("#pop-compare");
        $("#pop-compare").length < 1 && $("body").append(tpl);
        $("#diff-items .hasItem").length < 1 && (readCookie(cookieName) ? loadExistList(function() {
               // hasCookie(a) ? delContrastItem(a) : setContrastItem(a)
                //setContrastItem(a)
            }
        ) : console.log(123));
        //    "true" == $("#pop-compare").attr("data-load") ? ($("#pop-compare").show(),
        //        c.attr("data-load", "true"),
        //$("#pop-compare").animate({
        //    bottom: 0
        //}, 100)) : ("side" == readCookie(cookieName + "_status") && ($("#pop-compare").show().attr("data-load", "true"),
        //$("#pop-compare").show().animate({
        //    bottom: 0
        //}),
        createCookie(cookieName + "_status", "show", 30, "/;domain=" + document.domain);
        //var arr = a.split('.');
        //for(var i=0;i<arr.length;i++){
        //    window.console && console.log('arr i',arr[i]);
        //    setContrastItem(arr[i]);
        //}
        //setContrastItem(a);
        $("#pop-compare").show().animate({
            bottom: 0
        });
    }
    function switchTab(a){
        $(".diff-hd li").eq(a).trigger("click");
    }
    function hidePopWin() {
        if ($(".pop-wrap").is(":animated"))
            return !1;
        $("#pop-compare").css("overflow", "hidden").find(".pop-wrap").animate({
                left: "990px"
            }, 100, function () {
                $("#pop-compare").removeAttr("style").css({
                    overflow: "visible",
                    bottom: "-200px"
                }).hide().find(".pop-wrap").removeAttr("style").css("left", 0)
            }
        )
        createCookie(cookieName + "_status", "side", 30, "/;domain=" + document.domain)
    }

    //点击对比显示对比栏
    $(document).on('click', ".J_contrast", function () {
        var a = $(this).attr("data-sku")
            , b = readCookie(cookieName) || ""
            , c = b.split(".").length;
        4 > c ? (showPopWin(a),
        "true" == $(this).attr("data-recent") && switchTab(0)) : hasCookie(a) ? ("true" == $(this).attr("data-recent") && switchTab(0),
            showPopWin(a)) : (showPopWin(null ),
            setMessage("\u5bf9\u6bd4\u680f\u5df2\u6ee1\uff0c\u60a8\u53ef\u4ee5\u5220\u9664\u4e0d\u9700\u8981\u7684\u680f\u5185\u5546\u54c1\u518d\u7ee7\u7eed\u6dfb\u52a0\u54e6\uff01"))

    });

    $(document).on('click', ".del-items", function () {
             delContrastItem(null , !0),
            $("#goto-contrast").attr("href", "#none")
    });

    $(document).on('click', "#goto-contrast", function () {
        var a = readCookie(cookieName) || ""
            , b = a.split(".");
        if (b.length < 2) {
            setMessage("\u81f3\u5c11\u6709\u4e24\u4ef6\u5546\u54c1\u624d\u80fd\u5bf9\u6bd4\u54e6\uff01");
            return false;
        }

        $("#goto-contrast").attr("href", "http://localhost:63342/WebContent/about/compare.html?"+a);
    });

    $(document).on('click', ".hide-me", function () {
        hidePopWin();
        createCookie(cookieName + "_status", "side", 30, "/;domain=" + 'www.360shouji.com');
    });

    $(document).on('mouseenter', ".hasItem", function () {

        $(this).find(".del-comp-item").css("visibility", "visible");
    }).on('mouseleave','.hasItem',function(){

        $(this).find(".del-comp-item").css("visibility", "hidden");
    });

    $(document).on('click', ".hasItem .del-comp-item", function () {
        var a = $(this).attr("skuid");
        delContrastItem(a);
    });

    function createCookie(a, b, c, d) {
        window.console && console.log('createCookie',a,b,c,d);
        var d = d ? d : "/";
        if (c) {
            var e = new Date;
            e.setTime(e.getTime() + 24 * c * 60 * 60 * 1e3);
            var f = "; expires=" + e.toGMTString()
        } else
            var f = "";
        document.cookie = a + "=" + b + f + "; path=" + 'www.360shouji.com';

        //www.360shouji.com   localhost
    }

    function readCookie(a) {
        var b = a + "=";
        var c = document.cookie.split(";");
        for (var d = 0; d < c.length; d++) {
            var e = c[d];
            for (; " " == e.charAt(0);)
                e = e.substring(1, e.length);
            if (0 == e.indexOf(b))
                return e.substring(b.length, e.length)
        }
        return null
    }

    function setCookie(a){
        window.console && console.log('setCookie',a);

        var b = readCookie(cookieName) || "";
        return skuArr = b.split("."),
        !hasCookie(a) && skuArr.length < 4 && (b ? (skuArr.push(a),
            window.console && console.log('skuArr.join(".")',skuArr.join("."),b),
            createCookie(cookieName, skuArr.join("."), 1, "/;domain=" + document.domain)) : createCookie(cookieName, a, 1, "/;domain=" + document.domain));
    }


    function setMessage(a) {
        $(".pop-compare-tips").text(a).fadeIn(),
            setTimeout(function () {
                    $(".pop-compare-tips").fadeOut()
                }
                , 5000);
    }

    function delContrastItem(id, flag) {
        if (flag) {
            $("#diff-items").html("");
            for (var c = 1; 5 > c; c++)
                $("#diff-items").append('<dl class="item-empty"><dt>' + c + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>");
            btnStyle(null, "del"),
                $("#goto-contrast").removeClass("compare-active"),
                $(".btn-compare").removeClass("btn-compare-s-active"),
                //$("#goto-contrast").unbind("click"),
                createCookie(cookieName, "", -1, "/;domain=" + document.domain)
        } else
            $("#cmp_item_" + id).replaceWith('<dl class="item-empty"><dt>' + (parseInt($("#cmp_item_" + id).attr("fore"), 10) + 1) + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>");
                sortList();
                delCookie(id);
                btnStyle(id, "del");
                setContrastBtn("reduce");
    }

    function setContrastBtn(a){
        var b = readCookie(cookieName) || ""
            , c = b.split(".").length;
        "add" == a && c > 1 && $("#goto-contrast").addClass("compare-active"),
        "reduce" == a && 2 > c && $("#goto-contrast").removeClass("compare-active")
    }

    function delCookie(a){
        if (hasCookie(a) && null  !== a) {
            var b = readCookie(cookieName);
            var c = b.replace(new RegExp(a + ".|." + a + "|" + a), "");
            createCookie(cookieName, c, 0, "/;domain=" + document.domain)
        }
    }

    function hasCookie(a){
        return a ? new RegExp(a).test(readCookie(cookieName)) : void 0
    }
    function sortList(){
        var a = $("#diff-items")
            , b = [];
        a.find(".hasItem").each(function() {
                b.push($(this))
            }
        ),
            a.html("");
        for (var c = 0; 4 > c; c++)
            $("#diff-items").append(c > b.length - 1 ? '<dl class="item-empty"><dt>' + (c + 1) + "</dt><dd>\u60a8\u8fd8\u53ef\u4ee5\u7ee7\u7eed\u6dfb\u52a0</dd></dl>" : b[c]);


    }
    function btnStyle(a,b){
        if (a)
            "set" == b && ($(".J_contrast").filter('[data-sku="' + a + '"]').addClass("selected"),
                $("#comp_" + a + ",#recent_" + a).addClass("btn-compare-s-active"),
                $("#cmp_" + a).text("\u53d6\u6d88\u5bf9\u6bd4")),
            "del" == b && ($(".J_contrast").filter('[data-sku="' + a + '"]').removeClass("selected"),
                $("#comp_" + a + ",#recent_" + a).removeClass("btn-compare-s-active"),
                $("#cmp_" + a).text("\u52a0\u5165\u5bf9\u6bd4"));
        else {
            var c = readCookie(cookieName) || "";
            if (c = c.split("."),
                c.length < 5)
                for (var d = 0; d < c.length; d++)
                    "set" == b && ($(".J_contrast").filter('[data-sku="' + c[d] + '"]').addClass("selected"),
                        $("#comp_" + c[d] + ",#recent_" + c[d]).addClass("btn-compare-s-active"),
                        $("#cmp_" + c[d]).text("\u53d6\u6d88\u5bf9\u6bd4")),
                    "del" == b && ($(".J_contrast").filter('[data-sku="' + c[d] + '"]').removeClass("selected"),
                        $("#comp_" + c[d] + ",#recent_" + c[d]).removeClass("btn-compare-s-active"),
                        $("#cmp_" + c[d]).text("\u52a0\u5165\u5bf9\u6bd4"))
        }
    }
});
