<template>
	<div class="row">
		<div class="card-content">
			<table> 
				<thead>
					<tr>
						<th data-field="projectNumber">Número de proyecto</th>
						<th data-field="name">Nombre del proyecto</th>
						<th data-field="duration">Duración (años)</th>
						<th data-field="department">Departamento</th>
						<th data-field="action">Acción</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="project in projects">
						<td>{{project.projectNumber}}</td>
						<td>{{project.name}}</td>
						<td>{{project.duration}}</td>
						<td>{{project.department}}</td>
						<td><a class="waves-effect waves-light btn red darken-4" v-on:click="editProject(index)"><i class="material-icons">edit</i></a></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	
</script>
<style>
	.modal { width: 80% !important  }  /* increase the width as per you desire */
</style>
