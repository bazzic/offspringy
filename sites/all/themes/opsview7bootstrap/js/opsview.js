(function ($) {
  Drupal.behaviors.opsview = {
    attach: function (context, settings) {

      var $window = $(window);
      var added = false;

      function checkWidth() {

        var windowsize = $window.width();
        if (windowsize < 768) {
          add_btn_to_top();
          move_actions_menu('mobile');
        }
        else {
          //$('#link_to_top').remove();
          move_actions_menu('desktop');
        }
      }
      // Execute on load
      checkWidth();
      // Bind event listener
      $(window).resize(checkWidth);

      function add_btn_to_top() {
        $top_link = $('<a id="link_to_top" class="btn btn-warning" href="#">Back to top</a>');
        if (added == false) {
          $('.footer .container').prepend($top_link);
          $('#link_to_top').click(function () {
            $('html,body').animate({scrollTop: 0}, 500, function () {
              $('.navbar-toggle').trigger('click');
            });
            return false;
          });
          added = true;
        }
      }

      function move_actions_menu($layout) {
        $actions_menu = $('#block-menu-menu-actions-menu');
        if ($layout == 'mobile') {
          $actions_menu.appendTo('.navbar-header');
          $('.region-navigation #block-menu-menu-actions-menu').hide();
        }
        else {
          $('.region-navigation #block-menu-menu-actions-menu').show();
          $('.navbar-header #block-menu-menu-actions-menu').show();
        }

      }

    }
  }
})(jQuery);