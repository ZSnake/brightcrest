<template>
	<div id="map"></div>

</template>

<script>


	module.exports = {
		name: 'mapOrganization',
		ready: function(){
			var L = require('../../../node_modules/vue-leaflet/leaflet.js')
			this.initMap();
		},
		data: function () {
			return {

			}

		},
		methods: {
			initMap: function() {

				var map = L.map('map').setView([14.10, -87.20], 13);
				L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}').addTo(map);
				


			}
		},
		data: function(){
			return {
				L : {}
			}
		}
	}

</script>

<style>
	#map{ height: 80% }
</style>