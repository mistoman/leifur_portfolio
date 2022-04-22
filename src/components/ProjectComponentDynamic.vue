<template>
 <div class="container-md"> <!-- switch to margin x over MD size(fluid and !fluid) -->
  <div class="row">

    <div class="row"> <!-- Searchbar -->
      <div class="row justify-content-center align-items-center">
        <div class="col-md-8 ">
          <div class="search d-flex mb-3">
            <input type="text" v-model="searchQuery" class="form-control" placeholder="Filter projects"> 
            <button class="btn btn-primary">Search</button> 
          </div>
        </div>
      </div>
    </div>
 
    <div class="row mb-2 d-flex col-12" >
      <p>Category filter:</p>
      <button type="button" @click="categoryWeb()" class="btn btn-primary col-3">Web</button>
      <button type="button" @click="categoryVideo()" class="btn btn-secondary col-3">Video</button>
      
      <button type="button" @click="categoryBuisnessCard()" class="btn btn-danger col-3">BuisnessCard</button>

      <button type="button" @click="categoryNone()" class="btn btn-danger col-3">Clear</button>
     
    </div>
    <!-- <div :class="{active: isActive, 'text-color': isActive}">text</div> --> <!-- Adding CSS class based on true/false -->
    <button @click="showMeDaData()">Show me da data</button>

    <div v-if="showData">
      <h2>Loading data...</h2>
    </div>
                  <!-- Switched out project in projects, with searchedProjects, so it changes based on input from search/category -->
    <div v-for="project in searchedProjects" :key="project.projectID" class="col-12 col-sm-6 col-md-4 mb-4" > <!-- Add v-else to see effect -->
      <div class="card">
        <img :src="project.projectURL" class="card-img-top" alt="...">
        <div class="card-body justify-content-start">
          <router-link :to="{ name: 'ProjectDetails', params:{ id : project.projectID }}"> <!-- Router-link connect with router/index.js file. It send the id of the given item(project) in the forLoop, so we can then use it to present only data from that objectItem -->
            <h5 id="cardOne" class="card-title ">{{project.projectTitle}}</h5>
          </router-link>  
          <p class="card-text">{{project.projectDescription}}</p>
          <p>Category: <span :class="project.projectCategory" id="projectCategoryText">{{project.projectCategory}}</span></p>
          <a href="#" class="btn btn-primary">Go somewhere {{project.projectID}}</a>
        </div>
      </div>
    </div>
  </div>
  
</div>
</template>

<script>
import { ref, computed } from 'vue' // Ref for data variables - Computed for when we filter/search 
import getProjects from '../modules/getProjects'    // 1 Make getProject.js in modules folder
// 2 Make router-link + route/index.js setup

export default {
  setup() {
    
    // Variables to show project on button click + add a css Class when its true
    let showData = ref(false) // Hide and show 2 different Div blocks. If statement is true, show v-if="", if statement is false, show v-else
    let isActive = ref(false) // Adding css class: Line 23


    function showMeDaData() { 
      showData.value = !showData.value
      isActive.value = !isActive.value
    }

    const { projects } = getProjects();  // 1 

    // search variable :: empty at start, and will only be populated when we either type in characters or click a "category"
    const searchQuery = ref("")
  
    // Double whooper: Sorting on both category and input fields.  
    const searchedProjects = computed(() => {
      return projects.value.filter((project) => {
        if (searchQuery.value == project.projectCategory.toLowerCase() ){ // If the input is the same as a productCategory from our "database", it will sort based only on categoies, not inputted charaters
          return (
            project.projectCategory
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) != -1
          );
        } else { // If the input is NOT the same as a productCategory from our "database", it will sort based only on input fields data
           return (
            project.projectTitle
              .toLowerCase()
              .indexOf(searchQuery.value.toLowerCase()) != -1
          );
        }
      });
    });

    // Filter on category (must have project category key:value to work)
    let categoryWeb = () => {
      searchQuery.value = "Web".toLowerCase()
    }
    let categoryVideo = () => {
      searchQuery.value = "video"
    }
    let categoryBuisnessCard = () => {
      searchQuery.value = "buisnesscard"
    }
    let categoryNone = () => {
      searchQuery.value = ""
    }

    // Moving data(projects) to a "database" files, that we then import and use. Line 50 + 66
    /* let projects = ref([
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
        projectTitle: "Card Two",
        projectDescription: "Lorem ipsum, text is very nice. Much wow2",
        projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80"
      }
    ]) */

    return {
      searchQuery, // Search 
      searchedProjects,  // Search 

      categoryWeb, // Category btn click filter
      categoryVideo, // Category btn click filter
      categoryBuisnessCard,
      categoryNone, // Category btn click filter


      projects, // Expose our "database" variable, which is an array with objects inside
      showData, // expose variable to Vue view
      showMeDaData, // expose variable to Vue view
      isActive, // expose variable to Vue view
      
      
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

<style lang="scss"> 
#projectCategoryText {
  font-weight: bold;
  font-size: 14px;
  
}

$categoryVideoText: darkviolet;
$categoryPhotoText: darkgreen;
$categoryWebText: darkblue;
$categoryPosterText: darkred;
$categoryBuisnessCard: pink;

.Video {
  color: $categoryVideoText
}
.Web {
  color: $categoryWebText
}
.Photo {
  color: $categoryPhotoText
}
.Poster {
  color: $categoryPosterText
}
.buisnesscard {
  color: $categoryBuisnessCard

}

</style>

