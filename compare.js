/**
 * Created by suguiyun on 2016/4/7.
 */



$(function(){
    window.console && console.log('compare.js',getPath('www'));
    var queryArr = location.search.substr(1);
    window.console && console.log('queryArr',queryArr);
    template.helper('helperName', function (name,title) {
        var n = title.split('@');
        if(name == n[0] || '*'+name == n[0]){
            return  n[1];
        }
    });

    initAjax();
    function initAjax(){
        //if(queryArr){
        //    $.ajax({
        //        url: getPath('www')+'/goods/goodsInqueryAction!goodsPropertiesCompareDisplay.do?goodsIds='+queryArr,
        //        type: 'GET',
        //        dataType: 'json',
        //        //jsonp: 'callback',
        //        success: function(data) {
        //            window.console && console.log('success',data);
        //            if(data){
        //                var datalist = {list:data,listLen:[0,1,2,3]};
        //                $('.j_goods').html(template('temp_goods', datalist));
        //                $('.j_zhuti').html(template('temp_zhuti', datalist));
        //                $('.j_xianshi').html(template('temp_xianshi', datalist));
        //                $('.j_cunchu').html(template('temp_cunchu', datalist));
        //                $('.j_ylgl').html(template('temp_ylgl', datalist));
        //                $('.j_sxgl').html(template('temp_sxgl', datalist));
        //                $('.j_csgl').html(template('temp_csgl', datalist));
        //                $('.j_gyq').html(template('temp_gyq', datalist));
        //                $('.j_qt').html(template('temp_qt', datalist));
        //
        //            }else{
        //                alert('后台数据出错');
        //            }
        //        },
        //        error:function(){
        //            alert('后台数据出错');
        //        }
        //    });
        //}else{
        //    location.href = getPath('www');
        //}
        //return;
        var data = [{"goodsId":"4207","price":1299,"saleName":"360奇酷手机青春版（全网通3G内存版）","Paras":[{"goodsId":4207,"propertyId":2207,"name":"流光金","value":"N"},{"goodsId":4207,"propertyId":2206,"name":"智铂银","value":"N"},{"goodsId":4207,"propertyId":2205,"name":"2GB内存+16GB容量","value":"N"},{"goodsId":4207,"propertyId":2187,"name":"3GB内存+16GB容量","value":"N"},{"goodsId":4207,"propertyId":2186,"name":"全网通","value":"N"},{"goodsId":4207,"propertyId":2185,"name":"双网通","value":"N"},{"goodsId":4207,"propertyId":1512,"name":"售后服务","value":" 全国联保，享受三包服务"},{"goodsId":4207,"propertyId":1365,"name":"上市时间","value":" "},{"goodsId":4207,"propertyId":1364,"name":"颜色","value":"流光金"},{"goodsId":4207,"propertyId":369,"name":"质保期","value":" 一年质保"},{"goodsId":4207,"propertyId":356,"name":"最大存储扩展","value":"64GB"},{"goodsId":4207,"propertyId":345,"name":"机身材质","value":"全金属机身"},{"goodsId":4207,"propertyId":343,"name":"机身重量","value":"170g "},{"goodsId":4207,"propertyId":336,"name":"电池容量","value":"3000mAh"},{"goodsId":4207,"propertyId":335,"name":"电池类型","value":"锂聚合物"},{"goodsId":4207,"propertyId":334,"name":"SIM卡尺寸","value":" 卡1：Micro SIM卡；卡2：Nano SIM卡，或者Micro SD卡"},{"goodsId":4207,"propertyId":325,"name":"NFC(近场通讯)","value":" "},{"goodsId":4207,"propertyId":324,"name":"陀螺仪","value":"支持"},{"goodsId":4207,"propertyId":323,"name":"电子罗盘","value":"支持"},{"goodsId":4207,"propertyId":321,"name":"光线传感器","value":"支持"},{"goodsId":4207,"propertyId":320,"name":"重力感应","value":"支持"},{"goodsId":4207,"propertyId":317,"name":"蓝牙","value":"支持"},{"goodsId":4207,"propertyId":316,"name":"Wi-Fi","value":"支持"},{"goodsId":4207,"propertyId":315,"name":"GPS模块（硬件）","value":"支持"},{"goodsId":4207,"propertyId":292,"name":"副摄像头","value":"800万像素"},{"goodsId":4207,"propertyId":291,"name":"摄像头","value":"1300万像素，PDAF快速相位对焦，F2.0，6P镜头"},{"goodsId":4207,"propertyId":286,"name":"音乐播放","value":" "},{"goodsId":4207,"propertyId":284,"name":"分辨率","value":"1920×1080"},{"goodsId":4207,"propertyId":282,"name":"屏幕尺寸","value":"5.5英寸"},{"goodsId":4207,"propertyId":279,"name":"网络制式","value":"移动4G/3G/2G、联通4G/3G/2G、电信4G/3G/2G"},{"goodsId":4207,"propertyId":277,"name":"CPU频率","value":"1.3GHz"},{"goodsId":4207,"propertyId":276,"name":"CPU型号","value":"MT6753   8核64位处理器"},{"goodsId":4207,"propertyId":268,"name":"闪光灯","value":"支持"},{"goodsId":4207,"propertyId":263,"name":"屏幕材质","value":"IPS"},{"goodsId":4207,"propertyId":261,"name":"存储卡类型","value":"Micro SD"},{"goodsId":4207,"propertyId":260,"name":"运行内存","value":"3GB"},{"goodsId":4207,"propertyId":259,"name":"机身内存","value":"16GB"},{"goodsId":4207,"propertyId":256,"name":"输入方式","value":" "},{"goodsId":4207,"propertyId":253,"name":"操作系统","value":"360OS"},{"goodsId":4207,"propertyId":251,"name":"型号","value":"奇酷手机青春版（全网通3G内存版）"}]},{"goodsId":"3427","price":999,"saleName":"大神1S移动4G版","Paras":[{"goodsId":3427,"propertyId":1962,"name":"16GB","value":"Y"},{"goodsId":3427,"propertyId":1961,"name":"联通3G版","value":"N"},{"goodsId":3427,"propertyId":1960,"name":"移动4G版","value":"Y"},{"goodsId":3427,"propertyId":1944,"name":"16GB","value":"N"},{"goodsId":3427,"propertyId":1943,"name":"16GB","value":"Y"},{"goodsId":3427,"propertyId":1942,"name":"汉玉白","value":"Y"},{"goodsId":3427,"propertyId":1645,"name":"汉玉白","value":"Y"},{"goodsId":3427,"propertyId":1642,"name":"移动3G版","value":"N"},{"goodsId":3427,"propertyId":1635,"name":"16GB","value":"N"},{"goodsId":3427,"propertyId":1626,"name":"移动4G版","value":"Y"},{"goodsId":3427,"propertyId":356,"name":"最大存储扩展","value":" 32G"},{"goodsId":3427,"propertyId":345,"name":"机身材质","value":" "},{"goodsId":3427,"propertyId":344,"name":"特性","value":" "},{"goodsId":3427,"propertyId":343,"name":"机身重量","value":" 248g"},{"goodsId":3427,"propertyId":342,"name":"机身尺寸","value":"186.78mm×104.5mm×8.2mm"},{"goodsId":3427,"propertyId":341,"name":"耳机","value":" 3.5mm"},{"goodsId":3427,"propertyId":340,"name":"数据线","value":" micro USB"},{"goodsId":3427,"propertyId":339,"name":"理论待机时间","value":" "},{"goodsId":3427,"propertyId":338,"name":"理论通话时间","value":" "},{"goodsId":3427,"propertyId":337,"name":"电池更换","value":" 不支持"},{"goodsId":3427,"propertyId":336,"name":"电池容量","value":" 4000mAh"},{"goodsId":3427,"propertyId":335,"name":"电池类型","value":" 锂电池"},{"goodsId":3427,"propertyId":334,"name":"SIM卡尺寸","value":" 双小卡"},{"goodsId":3427,"propertyId":333,"name":"后台QQ","value":" 支持"},{"goodsId":3427,"propertyId":332,"name":"后台操作","value":" 支持"},{"goodsId":3427,"propertyId":331,"name":"通话录音","value":" 支持"},{"goodsId":3427,"propertyId":330,"name":"闹钟","value":" 支持"},{"goodsId":3427,"propertyId":329,"name":"计算器","value":" 支持"},{"goodsId":3427,"propertyId":328,"name":"电子邮件","value":" 支持"},{"goodsId":3427,"propertyId":327,"name":"Office","value":" 支持"},{"goodsId":3427,"propertyId":326,"name":"云服务","value":" 支持"},{"goodsId":3427,"propertyId":325,"name":"NFC(近场通讯)","value":" "},{"goodsId":3427,"propertyId":324,"name":"陀螺仪","value":" 支持"},{"goodsId":3427,"propertyId":323,"name":"电子罗盘","value":" 支持"},{"goodsId":3427,"propertyId":322,"name":"距离感应","value":" 支持"},{"goodsId":3427,"propertyId":321,"name":"光线传感器","value":" 支持"},{"goodsId":3427,"propertyId":320,"name":"重力感应","value":" 支持 "},{"goodsId":3427,"propertyId":319,"name":"地图软件","value":" 支持"},{"goodsId":3427,"propertyId":318,"name":"PC数据同步","value":" 支持"},{"goodsId":3427,"propertyId":317,"name":"蓝牙","value":" 支持"},{"goodsId":3427,"propertyId":316,"name":"Wi-Fi","value":" 支持"},{"goodsId":3427,"propertyId":315,"name":"GPS模块（硬件）","value":" 支持"},{"goodsId":3427,"propertyId":314,"name":"其他性能","value":" "},{"goodsId":3427,"propertyId":313,"name":"拍摄场景","value":" 支持"},{"goodsId":3427,"propertyId":312,"name":"拍摄模式","value":" 支持"},{"goodsId":3427,"propertyId":311,"name":"自动对焦","value":" 支持"},{"goodsId":3427,"propertyId":310,"name":"连拍功能","value":"支持"},{"goodsId":3427,"propertyId":292,"name":"副摄像头","value":" 500万"},{"goodsId":3427,"propertyId":291,"name":"摄像头","value":" 1300万"},{"goodsId":3427,"propertyId":290,"name":"内置软件","value":" "},{"goodsId":3427,"propertyId":289,"name":"收音机","value":" "},{"goodsId":3427,"propertyId":288,"name":"电子书","value":" 支持"},{"goodsId":3427,"propertyId":287,"name":"视频播放","value":" 支持"},{"goodsId":3427,"propertyId":286,"name":"音乐播放","value":" 支持"},{"goodsId":3427,"propertyId":285,"name":"触摸屏","value":" 电容屏"},{"goodsId":3427,"propertyId":284,"name":"分辨率","value":" 1920x1200"},{"goodsId":3427,"propertyId":283,"name":"屏幕色彩","value":" 1600万色"},{"goodsId":3427,"propertyId":282,"name":"屏幕尺寸","value":" 7英寸"},{"goodsId":3427,"propertyId":281,"name":"浏览器","value":"支持"},{"goodsId":3427,"propertyId":280,"name":"数据业务","value":" "},{"goodsId":3427,"propertyId":279,"name":"网络制式","value":" TD-LTE/TD-SCDMA/GSM"},{"goodsId":3427,"propertyId":278,"name":"键盘类型","value":" "},{"goodsId":3427,"propertyId":277,"name":"CPU频率","value":" 2.0GHz"},{"goodsId":3427,"propertyId":276,"name":"CPU型号","value":" MTK6592"},{"goodsId":3427,"propertyId":275,"name":"3G视频通话","value":" "},{"goodsId":3427,"propertyId":274,"name":"外观设计","value":" 直板"},{"goodsId":3427,"propertyId":273,"name":"上市时间","value":" 2014.12"},{"goodsId":3427,"propertyId":272,"name":"颜色","value":" 汉玉白"},{"goodsId":3427,"propertyId":271,"name":"品牌","value":"Dazen(大神)"},{"goodsId":3427,"propertyId":269,"name":"视频拍摄","value":" 支持"},{"goodsId":3427,"propertyId":268,"name":"闪光灯","value":" 支持"},{"goodsId":3427,"propertyId":267,"name":"Flash播放","value":" "},{"goodsId":3427,"propertyId":266,"name":"铃音类型","value":" "},{"goodsId":3427,"propertyId":265,"name":"彩信功能","value":" "},{"goodsId":3427,"propertyId":264,"name":"电视播放","value":" "},{"goodsId":3427,"propertyId":263,"name":"屏幕材质","value":"IPS"},{"goodsId":3427,"propertyId":262,"name":"热插拔","value":" "},{"goodsId":3427,"propertyId":261,"name":"存储卡类型","value":" Micro SD"},{"goodsId":3427,"propertyId":260,"name":"运行内存（RAM）","value":" 2G"},{"goodsId":3427,"propertyId":259,"name":"机身内存","value":" 16G"},{"goodsId":3427,"propertyId":258,"name":"网络频率","value":" "},{"goodsId":3427,"propertyId":257,"name":"待机类型","value":"双卡双待单通"},{"goodsId":3427,"propertyId":256,"name":"输入方式","value":"触控"},{"goodsId":3427,"propertyId":255,"name":"CPU核数","value":"八核"},{"goodsId":3427,"propertyId":254,"name":"智能机","value":"是"},{"goodsId":3427,"propertyId":253,"name":"操作系统","value":"Android 4.4 "},{"goodsId":3427,"propertyId":251,"name":"型号","value":" 9976D"}]}];

        var datalist = {list:data,listLen:[0,1,2,3]};
        $('.j_goods').html(template('temp_goods', datalist));
        $('.j_zhuti').html(template('temp_zhuti', datalist));
        $('.j_xianshi').html(template('temp_xianshi', datalist));
        $('.j_cunchu').html(template('temp_cunchu', datalist));
        $('.j_ylgl').html(template('temp_ylgl', datalist));
        $('.j_sxgl').html(template('temp_sxgl', datalist));
        $('.j_csgl').html(template('temp_csgl', datalist));
        $('.j_gyq').html(template('temp_gyq', datalist));
        $('.j_qt').html(template('temp_qt', datalist));
    }





});
