<template>
<div id="editProjectModal" class="modal modal-fixed-footer">

</div>

</template>
<script>
	var swal = require('sweetalert');
	var config = require('../../config.js');
	module.exports = {
		name: 'editProject',
		ready: function(){
			$('select').material_select();
			console.log(this.props.project);
		}

		props: {
			project: Object
		}

	}
</script>
<style>
	.modal { width: 80% !important  }  /* increase the width as per you desire */
</style>
