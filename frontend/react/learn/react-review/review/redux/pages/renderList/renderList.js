// import { people } from './data.js'
// import { getImageUrl } from './utils.js'

// function ListSection({ title, people }) {
//     return (
//         <>
//             <h2>{title}</h2>
//             <ul>
//                 {people.map((person) => (
//                     <li key={person.id}>
//                         <img src={getImageUrl(person)} alt={person.name} />
//                         <p>
//                             <b>{person.name}:</b>
//                             {' ' + person.profession + ' '}
//                             known for {person.accomplishment}
//                         </p>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }

// export default function List() {
//     const chemists = people.filter((item) => item.profession == 'chemist')
//     const everyoneElse = people.filter((item) => item.profession !== 'chemist')
//     return (
//         <article>
//             <h1>Scientists</h1>
//             <ListSection title={'chemists'} people={chemists} />
//             <ListSection title={'otherPeople'} people={everyoneElse} />
//         </article>
//     )
// }

import { recipes } from './data.js'

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe) => {
                    ;<div key={recipe.id}>
                        <h2>{recipe.name}</h2>
                        <ul>
                            {recipe.ingredients.map((ingredient) => (
                                <li key={ingredient}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                })}
            </ul>
        </div>
    )
}
