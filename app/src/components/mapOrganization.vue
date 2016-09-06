<template>
	<div>{{{ livePreview }}}</div>
	<script>var map;      function initMap() {        map = new google.maps.Map(document.getElementById('map'), {          center: {lat: -34.397, lng: 150.644},          zoom: 8        });      }    </script> <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCX8Zck-0CfJhDPSydYMTcVEIwdmHbQnm8&callback=initMap"     async defer></script></body></html>
</template>

<script>
	module.exports = {
		name: 'mapOrganization',
		data: function (){
			return {
				livePreview: '<html>   <head>     <title>Simple Map</title>    <meta name="viewport" content="initial-scale=1.0">    <meta charset="utf-8">     <style>      html, body {        height: 100%;        margin: 0;        padding: 0;      }      #map {        height: 100%;      }    </style>  </head>  <body>    <div id="map"></div>    '
			}
		}
	}
</script>