// $(document).ready(function(){ 
    //side panel for milestones
      // $(".filter-button").click(function(){
      //       $(".panel").toggleClass("is-visible");
      //   $("main").toggleClass("panel-visible");
      //   $(".filter-button").toggleClass("header-visible");
      //   });
      /*var secondaryHead = $('nav'),
        secondaryHeadTopPosition = secondaryHead.offset().top;*/
      // $(window).on('scroll', function(){
      //       if($(window).scrollTop() > secondaryHeadTopPosition ) {
      //           secondaryHead.addClass("fixed-nav");
      //     $(".filter-button").addClass("fixed-button");
      //     $(".panel").addClass("fixed-panel");
      //       } 
      //   else {
      //           secondaryHead.removeClass('fixed-nav');
      //     $(".filter-button").removeClass("fixed-button");
      //     $(".panel").removeClass("fixed-panel");
      //       }
      //   });
      //brand filter --- Start
      $(".option-one").click(function(){
        // $(".one").removeClass("hidden");
        // $(".two").addClass("hidden");
        // $(".three").addClass("hidden");
        $(".one").show(500);
        $(".two").hide(500);
        $(".three").hide(500);
      });
      $(".option-two").click(function(){
        // $(".two").removeClass("hidden");
        // $(".one").addClass("hidden");
        // $(".three").addClass("hidden");
        $(".two").show(500);
        $(".one").hide(500);
        $(".three").hide(500);
      });
        $(".option-three").click(function(){
        // $(".three").removeClass("hidden");
        // $(".one").addClass("hidden");
        // $(".two").addClass("hidden");
        $(".three").show(500);
        $(".one").hide(500);
        $(".two").hide(500);
      });
      $(".all").click(function(){
        // $(".three").removeClass("hidden");
        // $(".two").removeClass("hidden");
        // $(".one").removeClass("hidden");
        $(".three").show(500);
        $(".two").show(500);
        $(".one").show(500);
      });
        //brand filter --- End
      $(".check").click(function(){
        if(!($("#one").is(":checked")) && !($("#two").is(":checked")) && !($("#three").is(":checked"))){
          // $(".group1").removeClass("hidden");
          // $(".group2").removeClass("hidden");
          // $(".group3").removeClass("hidden");
          $(".group1").show(500);
          $(".group2").show(500);
          $(".group3").show(500);
        }
        else if($("#one").is(":checked")){
          // $(".group2").addClass("hidden");
          // $(".group3").addClass("hidden");
          // $(".group1").removeClass("hidden");
          $(".group2").hide(500);
          $(".group3").hide(500);
          $(".group1").show(500);
          if($("#two").is(":checked")){
            // $(".group2").removeClass("hidden");
            $(".group2").show(500);
          }
          if($("#three").is(":checked")){
            // $(".group3").removeClass("hidden");
            $(".group3").show(500);
          }
        }
        else if($("#two").is(":checked")){
          // $(".group1").addClass("hidden");
          // $(".group3").addClass("hidden");
          // $(".group2").removeClass("hidden");
          $(".group1").hide(500);
          $(".group3").hide(500);
          $(".group2").show(500);
          if($("#three").is(":checked")){
            // $(".group3").removeClass("hidden");
            $(".group3").show(500);
          }
        }
        else if($("#three").is(":checked")){
          // $(".group1").addClass("hidden");
          // $(".group2").addClass("hidden");
          // $(".group3").removeClass("hidden");
          $(".group1").hide(500);
          $(".group2").hide(500);
          $(".group3").show(500);
        }
        });
    // });