<template>
 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">



    
    <div :class="{active: isActive}">
      Text
    </div>
 

    <button @click="showMeDaData()">Show me da data</button>

    <div v-if="showData">
      <h2>Loading data...</h2>
    </div>

    <div v-else v-for="project in projects" :key="project" class="col-12 col-sm-6 col-md-4 mb-4" >
      <div class="card" style="">
        <img :src="project.projectURL" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
          <p class="card-text">{{project.projectDescription}}</p>
          <a href="#" class="btn btn-primary">Go somewhere {{project.projectID}}</a>
        </div>
      </div>
    </div>


  </div>
  
</div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    
    let showData = ref(true)
    let isActive = ref(false)

    function showMeDaData() {
      showData.value = !showData.value
      isActive.value = !isActive.value
    }


    let projects = ref([
      {
        projectID: 1,
        projectTitle: "Card One",
        projectDescription: "Lorem ipsum, text is very nice. Much wow",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
        projectCategory: "Video"
      }, 
       {
        projectID: 2,
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: "https://static.posters.cz/image/1300/image/750/fototapeter/waterfall-lake-i78441.jpg"
      },
      {
        projectID: 3,  
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      },
      {
        projectID: 4,
        projectTitle: "Card Four",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: "https://static.posters.cz/image/1300/image/750/fototapeter/waterfall-lake-i78441.jpg",
        projectCategory: "Web"    },

      {
        projectID: 5,
        projectTitle: "Card Five",
        projectDescription: "Lorem ipsum, text is very nice. Much wow5",
        projectURL: require("../assets/COLOURBOX20652064.jpg"), // require("PATH")
        projectCategory: "businesscards"
      }
    ])

    return {
      projects,
      showData,
      showMeDaData,
      isActive
      
    }
  }
}
</script>

<style scoped>
#cardOne{
  color:red
}
.active {
  background-color: khaki;
  
}
.text-color {
  color:darkviolet;
}
</style>
