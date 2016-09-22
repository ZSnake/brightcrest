<template>
	<div class="addOrganization">
		<div class="row">
			<div class="card blue lighten-5 col m10 s12 offset-m1">
				<div class="card-content">
					<div class="row">
						<form class="col s12">

							<div class="row">
								<div class="input-field col s6">
									<label for="searchInput">Message is: {{ message }}</label>
									
									<br>
									<input id="searchInput" type="text" v-model="message" placeholder="edit me">
									<a class="waves-effect waves-light btn blue darken-4"  v-on:click="search(message)">Buscar</a>
								</div>

							</div>
						</form>
					</div>
				</div>
				<div id="map" class="map"></div>
			</div>

		</div>

	</div>



</template>

<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');
	var L = require('../../lib/leaflet/leaflet-src.js');

	L.Icon.Default.imagePath = '/lib/leaflet/images';
	var Vue = require('vue');
	var gps = [];
	var map = {};
	module.exports = {
		name: 'mapOrganization',
		data: function(){
			return {
				L : {},
				organizations: [],
				message: {},

			}
		},

		props: ['msg'],
		ready: function(){


			this.message = "";
			this.getOrganizations();




		},
		methods: {
			search: function () {				
				
				console.log()

				for (var i = 0; i < gps.length; i++) {

					map.removeLayer(gps[i][0]);
				}
				for (var i = 0; i < gps.length; i++) {
					for (var j = 0; j < gps[i].length; j++) {
						console.log(gps[i][j]);
						if (this.message == gps[i][j]) {
							/*
							var LamMarker = L.marker([gps[i][0].getLatLng().lat, gps[i][0].getLatLng().lng],{draggable:true}).bindPopup($('<a href="#/organization/view/'+this.organizations[j]._id+'" class="speciallink">Ver Informacion de la Organizacion</a>')[0]).addTo(map);
							*/
							console.log(gps[i][11]);
							var LamMarker = L.marker([gps[i][0].getLatLng().lat, gps[i][0].getLatLng().lng],{draggable:true}).bindPopup($('<a href="#/organization/view/'+gps[i][11]+'" class="speciallink">Ver Informacion de la Organizacion</a>')[0]).addTo(map);
							gps[i][0] = LamMarker;
							
						}
					}
					console.log("termina arreglo")
				}




			},

			initMap: function(organizations) {
				map = L.map('map').setView([14.70, -86.20], 8);
				L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
					maxZoom: 18,
					attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
					'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
					'Imagery © <a href="http://mapbox.com">Mapbox</a>',
					id: 'mapbox.streets'
				}).addTo(map);
				for (var i = 0; i < this.organizations.length; i++) {
					var lat = this.strtoGps(this.organizations[i].latitude);
					var longi = this.strtoGps(this.organizations[i].longitude);
					if(!isNaN(lat) && !isNaN(longi)){

						/*
						var LamMarker = L.marker([lat, -1*longi],{draggable:true}).bindPopup($('<a href="#/organization/view/'+this.organizations[i]._id+'" class="speciallink">Ver Informacion de la Organizacion</a>')[0]).addTo(map);
						*/
						var LamMarker = L.marker([lat, -1*longi],{draggable:true}).bindPopup($('<a href="#/organization/view/'+this.organizations[i]._id+'" class="speciallink">Ver Informacion de la Organizacion</a>')[0]).addTo(map);


						gps.push([LamMarker, this.organizations[i].orgName, this.organizations[i].orgNumber, this.organizations[i].acronym, this.organizations[i].postal , this.organizations[i].department, this.organizations[i].municipality, this.organizations[i].village, this.organizations[i].community, this.organizations[i].sector, this.organizations[i].market,this.organizations[i]._id]);
						console.log(this.organizations[i]._id);
						console.log("lat "+ lat);
						console.log("longi " + -1*longi);
					}
				};


			},

			strtoGps: function(argument) {

				var str = argument;

				var patt = /[^\.|\d]/g
				var res = str.split(patt);

				var newArray = new Array();
				for (var i = 0; i < res.length; i++) {
					if (res[i]) {
						newArray.push(res[i]);
					}
				}

				var gps = Number(newArray[0]) + Number((newArray[1]/60)) + Number((newArray[2]/3600));

				return gps;
			},

			getOrganizations: function(){
				this.k = 1;

				this.$http.get(config.baseUrl() + '/v1/organizations').then(function(response){

					this.organizations = response.json();
					this.initMap();


				}, function(error){
					swal('Error', 'Error obteniendo las organizaciones del servidor', 'error');
				});


			},

		},

	}

</script>

<style>
	.map{ 
		height: 100% 
	}
</style>