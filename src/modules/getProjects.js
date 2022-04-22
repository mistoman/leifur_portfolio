import { ref } from 'vue'

export default function getProjects() {

  let projects = ref([
    {
      projectID: 1,
      projectTitle: "Card One",
      projectDescription: "Lorem ipsum, text is very nice. Much wow",
      projectURL: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80",
      projectCategory: "Photo"
    }, 
     {
      projectID: 2,
      projectTitle: "Card Two",
      projectDescription: "Lorem ipsum, text is very nice. Much wow2",
      projectURL: require("../assets/bali.jpeg"), // require("PATH")
      projectCategory: "Video"
    },
    {
      projectID: 3,  
      projectTitle: "Card Three",
      projectDescription: "Lorem ipsum, text is very nice. Much wow2",
      projectURL: "https://static.posters.cz/image/1300/image/750/fototapeter/waterfall-lake-i78441.jpg",
      projectCategory: "Poster"    },
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
      projectCategory: "buisnesscard"
    }
  ])

    return { projects }
  }