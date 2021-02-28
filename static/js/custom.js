(function ($) {

  "use strict";
  
    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });


    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });


    // SLIDER
    $('.owl-carousel').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })


    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });  


    // CONTACT FORM
    // $("#contact-form").submit(function (e) {
    //   e.preventDefault();
    //   var name = $("#cf-name").val();
    //   var email = $("#cf-email").val();
    //   var subject = $("#cf-subject").val();
    //   var message = $("#cf-message").val();
    //   var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    //   function isValidEmail(emailAddress) {
    //       var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    //       return pattern.test(emailAddress);
    //   };
    //   if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
    //       $.ajax({
    //           type: "POST",
    //           url: "email.php",
    //           data: dataString,
    //           success: function () {
    //               $('.text-success').fadeIn(1000);
    //               $('.text-danger').fadeOut(500);
    //           }
    //       });
    //   }
    //   else {
    //       $('.text-danger').fadeIn(1000);
    //       $('.text-success').fadeOut(500);
    //   }
    //   return false;
    // });




    // SMOOTHSCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  


    // WOW ANIMATION
    new WOW({ mobile: false }).init();

    

    let arrLang={
      'am':{
          'home':'Գլխավոր',
          'about':'Մեր մասին',
          'service':'Ծառայություններ',
          'work':'Աշխատանքներ',
          'contact':'Կապ',
         
          
          'slide1-1':'Շինարարություն փրփուրների օգտագործում',
          'slide1-2': '{{ first_thi.title }}',
          'slide2-1':'Տերասյան Հատակներ Inginerium-ից',
          'slide2-2':'Ամուր են, պատրաստված են բնական փայտից և պոլիմերից',
          'slide3-1':'Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id. Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.',
          'slide3-2':'Ընկերությունն իրկանցնում է կառուցողական աշխատանքներ',
          'about-title':'Մեր Մասին',
          'about-text':'Մեր մասին',
          'service1-title':'Ջերմամեկուսացում փքվող պոլիուրեթանով',
          'service2-title':'Դրենաժային թաղանթ',
          'service3-title':'Արեւային համակարգեր',
          'service4-title':'Բազալտե հանքաբանբակ',
          'service5-title':'Ցեմենտ տաշեղային սալ',
          'service6-title':'Բիտումային կղմինդր',
          'service7-title':'Ջրամ եկուսացում պոլիուրեաթաղանթով',
          'service8-title':'Փայտ-տաշեղային սալ',
          'service9-title':'Բիտումային տանիքածածկ',
          'service10-title':'Ջրահեռացման համակարգ',
          'service11-title':'Գեոմանվածք (գեոտեքստիլ)',
          'service12-title':'Օդափոխվող ֆասադ',
          'service13-title':'Էքստրուդացված պենոպոլիստիրոլ',
          'service14-title':'Կիսաչոր շաղախով հարթեցում',
          'service15-title':'Տեռաս բնական քարերից',
          'service16-title':'Փայտ-պոլիմերային տախտակ',
          'service1-text':'Ջերմամեկուսացումը փքվող պոլիուրեթանով աշխարհում կիրառվում է ավելի քան 50 տարի: Պոլիուրեթանով ջերմա- մեկուսացումը պահպանում է սառեցնող եւ տաքացնող էներգիայի ավելի քան 70 տոկոսը: Պոլիուրեթանով ջերմամե- կուսացումը կանխարգելում է խոնավության ներթափանցումը եւ ժամանակի ընթացքում չի քայքայվում:',
          'service2-text':'',
          'service3-text':'',
          'service4-text':'',
          'service5-text':'',
          'service6-text':'',
          'service7-text':'',
          'service8-text':'',
          'service9-text':'',
          'service10-text':'',
          'service11-text':'',
          'service12-text':'',
          'service13-text':'',
          'service14-text':'',
          'service15-text':'',
          'service16-text':'',
          'contact-us':'',
          'text-success':'',
          'text-danger':'',
          'name':'',
          'email':'',
          'submit':'',
          'sales-manager':'',
          'sales-manager-name':'',
          'director':'',
          'director-name':'',
          'ingenier':'',
          'ingenier-name':'',
          'finance':'',
          'finance-name':'',
          'external':'',
          'external-name':'',
          'address':'',
          'address1':'',
          'address2':'',
          'work-time':'',
          'work-days1':'',
          'work-days2':'',
      },
      'en':{
        'home':'Գլխավոր',
        'about':'Մեր մասին',
        'service':'Ծառայություններ',
        'work':'Աշխատանքներ',
        'contact':'Կապ',
       
        
        'slide1-1':'Շինարարություն փրփուրների օգտագործում',
        'slide1-2':'Գոլորշիների ցածր թափացելիություն',
        'slide2-1':'Տերասյան Հատակներ Inginerium-ից',
        'slide2-2':'Ամուր են, պատրաստված են բնական փայտից և պոլիմերից',
        'slide3-1':'Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id. Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.',
        'slide3-2':'Ընկերությունն իրկանցնում է կառուցողական աշխատանքներ',
        'about-title':'Մեր Մասին',
        'about-text':'Մեր մասին',
        'service1-title':'Ջերմամեկուսացում փքվող պոլիուրեթանով',
        'service2-title':'Դրենաժային թաղանթ',
        'service3-title':'Արեւային համակարգեր',
        'service4-title':'Բազալտե հանքաբանբակ',
        'service5-title':'Ցեմենտ տաշեղային սալ',
        'service6-title':'Բիտումային կղմինդր',
        'service7-title':'Ջրամ եկուսացում պոլիուրեաթաղանթով',
        'service8-title':'Փայտ-տաշեղային սալ',
        'service9-title':'Բիտումային տանիքածածկ',
        'service10-title':'Ջրահեռացման համակարգ',
        'service11-title':'Գեոմանվածք (գեոտեքստիլ)',
        'service12-title':'Օդափոխվող ֆասադ',
        'service13-title':'Էքստրուդացված պենոպոլիստիրոլ',
        'service14-title':'Կիսաչոր շաղախով հարթեցում',
        'service15-title':'Տեռաս բնական քարերից',
        'service16-title':'Փայտ-պոլիմերային տախտակ',
        'service1-text':'Ջերմամեկուսացումը փքվող պոլիուրեթանով աշխարհում կիրառվում է ավելի քան 50 տարի: Պոլիուրեթանով ջերմա- մեկուսացումը պահպանում է սառեցնող եւ տաքացնող էներգիայի ավելի քան 70 տոկոսը: Պոլիուրեթանով ջերմամե- կուսացումը կանխարգելում է խոնավության ներթափանցումը եւ ժամանակի ընթացքում չի քայքայվում:',
        'service2-text':'',
        'service3-text':'',
        'service4-text':'',
        'service5-text':'',
        'service6-text':'',
        'service7-text':'',
        'service8-text':'',
        'service9-text':'',
        'service10-text':'',
        'service11-text':'',
        'service12-text':'',
        'service13-text':'',
        'service14-text':'',
        'service15-text':'',
        'service16-text':'',
        'contact-us':'',
        'text-success':'',
        'text-danger':'',
        'name':'',
        'email':'',
        'submit':'',
        'sales-manager':'',
        'sales-manager-name':'',
        'director':'',
        'director-name':'',
        'ingenier':'',
        'ingenier-name':'',
        'finance':'',
        'finance-name':'',
        'external':'',
        'external-name':'',
        'address':'',
        'address1':'',
        'address2':'',
        'work-time':'',
        'work-days1':'',
        'work-days2':'',
      },
      'ru':{
        'home':'Գլխավոր',
        'about':'Մեր մասին',
        'service':'Ծառայություններ',
        'work':'Աշխատանքներ',
        'contact':'Կապ',
        'slide1-1':'Շինարարություն փրփուրների օգտագործում',
        'slide1-2':'Գոլորշիների ցածր թափացելիություն',
        'slide2-1':'Տերասյան Հատակներ Inginerium-ից',
        'slide2-2':'Ամուր են, պատրաստված են բնական փայտից և պոլիմերից',
        'slide3-1':'Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id. Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.',
        'slide3-2':'Ընկերությունն իրկանցնում է կառուցողական աշխատանքներ',
        'about-title':'Մեր Մասին',
        'about-text':'Մեր մասին',
        'service1-title':'Ջերմամեկուսացում փքվող պոլիուրեթանով',
        'service2-title':'Դրենաժային թաղանթ',
        'service3-title':'Արեւային համակարգեր',
        'service4-title':'Բազալտե հանքաբանբակ',
        'service5-title':'Ցեմենտ տաշեղային սալ',
        'service6-title':'Բիտումային կղմինդր',
        'service7-title':'Ջրամ եկուսացում պոլիուրեաթաղանթով',
        'service8-title':'Փայտ-տաշեղային սալ',
        'service9-title':'Բիտումային տանիքածածկ',
        'service10-title':'Ջրահեռացման համակարգ',
        'service11-title':'Գեոմանվածք (գեոտեքստիլ)',
        'service12-title':'Օդափոխվող ֆասադ',
        'service13-title':'Էքստրուդացված պենոպոլիստիրոլ',
        'service14-title':'Կիսաչոր շաղախով հարթեցում',
        'service15-title':'Տեռաս բնական քարերից',
        'service16-title':'Փայտ-պոլիմերային տախտակ',
        'service1-text':'Ջերմամեկուսացումը փքվող պոլիուրեթանով աշխարհում կիրառվում է ավելի քան 50 տարի: Պոլիուրեթանով ջերմա- մեկուսացումը պահպանում է սառեցնող եւ տաքացնող էներգիայի ավելի քան 70 տոկոսը: Պոլիուրեթանով ջերմամե- կուսացումը կանխարգելում է խոնավության ներթափանցումը եւ ժամանակի ընթացքում չի քայքայվում:',
        'service2-text':'',
        'service3-text':'',
        'service4-text':'',
        'service5-text':'',
        'service6-text':'',
        'service7-text':'',
        'service8-text':'',
        'service9-text':'',
        'service10-text':'',
        'service11-text':'',
        'service12-text':'',
        'service13-text':'',
        'service14-text':'',
        'service15-text':'',
        'service16-text':'',
        'contact-us':'',
        'text-success':'',
        'text-danger':'',
        'name':'',
        'email':'',
        'submit':'',
        'sales-manager':'',
        'sales-manager-name':'',
        'director':'',
        'director-name':'',
        'ingenier':'',
        'ingenier-name':'',
        'finance':'',
        'finance-name':'',
        'external':'',
        'external-name':'',
        'address':'',
        'address1':'',
        'address2':'',
        'work-time':'',
        'work-days1':'',
        'work-days2':'',
      }
  }
  $('.lang').each(function(index, item){
    $(this).text(arrLang['am'][$(this).attr('key')]);
});
  $(function(){
      $('.translate').click(function(){
          var lang = $(this).attr('id');
  
          $('.lang').each(function(index, item){
              $(this).text(arrLang[lang][$(this).attr('key')]);
          });
      });
  });

})(jQuery);
