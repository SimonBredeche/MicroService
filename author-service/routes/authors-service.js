import { authors,deleteAuthors } from '../authors.js'

export const authorService = {
    getAuthorById: (id) => {
        return authors.find((entry) => {
            return entry.id == id;
        })
    },
    getAllAuthor: () => {
        return authors;
    },
    getAuthorsByIds: (ids) => {
        return ids.reduce((prev,cur) => {
            let auth = authorService.getAuthorById(cur)
            prev.push(auth);
            return prev;
        },[])
    },

    deleteAuthors: async (id) => {
        //Call event to update author.
        await fetch(`http://book_service:4400/book/eventBook/${id}`);
        deleteAuthors();
        return authors;

    }
}