// const url = "https://graphql.anilist.co"
// const query = `
//   query ($id: Int) {
//     Media(id: $id){
//       relations {
//         nodes {
//           title { romaji }
//           coverImage{ large }
//         }
//       }
//     }
//   }
// `
// const variables = {
//   id: 603 // futari wa precure
// }

// fetch(url, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     Accept: "application/json"
//   },
//   body: JSON.stringify({ query, variables })
// })
//   .then(resp => resp.json())
//   .then(data => data.data.Media.relations.nodes.slice(0, 10))
//   .then(displayAnime)

// function displayAnime(animeSeries) {
//   console.log(animeSeries)
//   const html = animeSeries
//     .map(
//       anime => `
//         <div class="anime">
//           <h2 class="anime_title">${anime.title.romaji}</h2>
//           <img class="anime_img" src="${anime.coverImage.large}">
//         </div>
//       `
//     )
//     .join("")
//   $(".site").append(html)
// }