
const app = Vue.createApp({
    data() {
        return {
            name: "Alex",
            age: 24,
            posX: 0,
            posY: 0,
            books: [
                {title: "Harry Potter", author: "Harry", id: 1, fav: false},
                {title: "Tom & Jerry", author: "Tom", id: 2, fav: false},
                {title: "Titanic", author: "James", id: 3, fav: false},
                {title: "Looper", author: "James", id: 4, fav: false},
            ]
        }
    },
    methods: {
        handleEvent(eve) {
            console.log(eve)
        },
        handleMousemove(axes){
            this.posX = axes.offsetX;
            this.posY = axes.offsetY;
        },
        makeFav(item){
            item.fav = !item.fav;
        }
    },
    computed: {
        favBooks(){
            return this.books.filter((favBooks) => favBooks.fav)
        }
    }
}
)

app.mount("#app")