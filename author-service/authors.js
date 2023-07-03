export let authors = [
    {
        "name": "Simon",
        "email": "sbredeche@outlook.fr",
        "id": 1
    },
    {
        "name": "Arnaud",
        "email": "sbredeche@outlook.fr",
        "id": 2
    }
]

export let deleteAuthors = (id) => {
    authors = authors.filter((entry) => {
        return entry.id != id;
    })
}