<template>
  <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
    <h2>Details</h2>     
    <p>test: {{route.params.id}} </p> 
    <div class="row"> 
      <div v-for="project in filteredProjectOnId" :key="project.projectID" class="col-12 col-sm-6 col-md-4 mb-4" >
        <div class="card" style="">
          <img :src="project.projectURL" class="card-img-top" alt="...">
          <div class="card-body justify-content-start">
            <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
            <p class="card-text">{{project.projectDescription}}</p>
            <p>Category: {{project.projectCategory}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import getProjects from '../modules/getProjects'


export default {
  setup() {
    const route = useRoute()
    const routeId = ref(route.params.id)

    const { projects } = getProjects();  // 1 
 
    let filteredProjectOnId = computed(() => {
      return projects.value.filter(i => i.projectID == routeId.value)
    })

    return {
      route,
      projects,
      filteredProjectOnId    
    }
  }
}
</script>

<style lang="scss" scoped>

</style>