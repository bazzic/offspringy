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
	        	  var address1 = '';
	        	  var city = '';
	        	  var country = '';
	        	  var postal_code = '';
	        	  alert(JSON.stringify(result.formatted_phone_number));
	        	  alert(JSON.stringify(result.website));
	        	  result.forEach(function (item) {
	        		  alert(JSON.stringify(item));
	        	  });
	        	  
	        	  result.address_components.forEach(function (item) {
	        		  alert(JSON.stringify(item));
	        		  if (item['types'] == 'street_number') {
	        			  address1 += item['long_name'] + " ";
	        			  alert(JSON.stringify(item));
	        		  } else if (item['types'] == 'route') {
	        			  address1 += item['long_name'];
	        		  } else if (item['types'] == 'postal_town') {
	        			  city += item['long_name'];
	        		  } else if ($.inArray('locality', item['types']) > -1) {
	        			  city += item['long_name'];
	        		  } else if ($.inArray('country', item['types']) > -1) {
	        			  country += item['short_name'].toLowerCase();
	        		  } else if (item['types'] == 'postal_code') {
	        			  postal_code += item['long_name'];
	        		  }
	        	  });
	        	  alert(country);

	        	  $("#edit-title").val(result.name);
	        	  $("#edit-locations-0-name").val(result.name);
	        	  $("#edit-locations-0-street").val(address1);
	        	  $("#edit-locations-0-city").val(city);
	        	  $("#edit-locations-0-postal-code").val(postal_code);
	        	  $("#edit-locations-0-country").val(country);
	        	  $("#edit-locations-0-locpick-user-latitude").val(result.geometry.location.lat());
	        	  $("#edit-locations-0-locpick-user-longitude").val(result.geometry.location.lng());
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
