/*
	ResponsiveTest v1.0.0
	@author     : Ravigopal Kesari
	Description : A jQuery plugin for resizing the content within one window for popular devices 
*/
;(function ($) {

    $.responsiveTest = function () {
    
        
        var resizer     = '<div class="viewLayouts" style="position:fixed;top:0;left:0;right:0;overflow:auto;z-index:9999;background:#444444;color:#FFFFFF;box-shadow:0 0 3px #222;"><ul class="viewlist"></ul><div style="clear:both;"></div></div>';

        var viewPorts  ='display:inline-block;cursor:pointer;font-size:13px;line-height:12px;text-align:center;width:5%;border-right:1px solid #555;padding:13px 5px;';               
       
        var credit     ='display:inline-block;cursor:pointer;font-size:14px;font-weight: 600;line-height:12px;text-align:center;float:right;width:9%;padding:16px 5px;';

        // Wrap all HTML inside the <body>
        $('body').wrapInner('<div id="resizer" />');

        // Insert our resizing plugin
        $('#resizer').before(resizer);

        // Add list of devices
         $('.viewlist').append($('<li id="lowAndroid" style="'+ viewPorts +'">Low-end Android</li>'));
         $('#lowAndroid').click(function () {
                $('#resizer').animate({
                    width: '240px'
                }, 300);
            });

         $('.viewlist').append($('<li id="iphoneP" style="' + viewPorts + '">iPhone (Portrait)</li>'));
         $('#iphoneP').click(function () {
                $('#resizer').animate({
                    width: '320px'
                }, 300);
            });

         $('.viewlist').append($('<li id="iphoneL" style="' + viewPorts + '">iPhone (Landscape)</li>'));
         $('#iphoneL').click(function () {
                $('#resizer').animate({
                    width: '480px'
                }, 300);
            });

         $('.viewlist').append($('<li id="iphone5L" style="' + viewPorts + '">iPhone5 (Landscape)</li>'));
         $('#iphone5L').click(function () {
                $('#resizer').animate({
                    width: '568px'
                }, 300);
            });
             
         $('.viewlist').append($('<li id="nexus5P" style="' + viewPorts + '">Nexus5 (Portrait)</li>'));
         $('#nexus5P').click(function () {
                $('#resizer').animate({
                    width: '360px'
                }, 300);
            });

         $('.viewlist').append($('<li id="nexus5L" style="' + viewPorts + '">Nexus5 (Landscape)</li>'));
         $('#nexus5L').click(function () {
                $('#resizer').animate({
                    width: '598px'
                }, 300);
            });

         $('.viewlist').append($('<li id="ipadP" style="' + viewPorts + '">iPad  (Portrait)</li>'));
         $('#ipadP').click(function () {
                $('#resizer').animate({
                    width: '768px'
                }, 300);
            });

         $('.viewlist').append($('<li id="ipadL" style="' + viewPorts + '">iPad (Landscape)</li>'));
         $('#ipadL').click(function () {
                $('#resizer').animate({
                    width: '1024px'
                }, 300);
            });

         $('.viewlist').append($('<li id="nexus10P" style="' + viewPorts + '">Nexus10 (Portrait)</li>'));
         $('#nexus10P').click(function () {
                $('#resizer').animate({
                    width: '800px'
                }, 300);
            });

         $('.viewlist').append($('<li id="nexus10L" style="' + viewPorts + '">Nexus10 (Landscape)</li>'));
         $('#nexus10L').click(function () {
                $('#resizer').animate({
                    width: '1280px'
                }, 300);
            });

        
        $('.viewlist').append('<li id="reset" style="' + viewPorts + '">Reset Layout</li>');
        
        //Append Credits
        $('.viewlist').append('<li id="credit" style="' + credit + '">By Ravigopal Kesari</li>');
         $('#credit').click(function () {
            window.open('http://rvgpl.github.io/');
         });
        // Slidedown the viewport navigation and animate the resizer
        var height = $('.viewlist').outerHeight();
        $('.viewLayouts').hide().slideDown('300');
        $('#resizer').css({margin: '0 auto'}).animate({marginTop : height});

        // Allow for Reset
        $('#reset').click(function () {
            $('#resizer').css({
                width: 'auto'
            });
        });
                
    };

})(jQuery);