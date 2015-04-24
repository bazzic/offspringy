/**
 * @file
 * A JavaScript file for the theme.
 */
(function ($) {
  Drupal.behaviors.google_places = {
    
	attach: function() {	
			$.log = function(message){
			  var $logger = $("#logger");
			  $logger.html($logger.html() + "\n * " + message );
			}
	        var options = {
	          map: ".map_canvas"
	        };
	        
	        $("#edit-geocomplete").geocomplete(options)
	          .bind("geocode:result", function(event, result){
	            $.log("Address: " + result.formatted_address + " Lat: " + result.geometry.location.lat() + " Lon: " + result.geometry.location.lng());
	          })
	          .bind("geocode:error", function(event, status){
	            $.log("ERROR: " + status);
	          })
	          .bind("geocode:multiple", function(event, results){
	            $.log("Multiple: " + results.length + " results found");
	          });
	        
	        $("#edit-find").click(function(){
	          $("#edit-geocomplete").trigger("geocode");
	        });
	        
	        $("#examples a").click(function(){
	          $("#edit-geocomplete").val($(this).text()).trigger("geocode");
	          return false;
	        });

    }
  }
		
})(jQuery);
