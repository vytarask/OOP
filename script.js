// Susikurkite objektų konstruktorių naudojant pavadinimu Book, kuris galės kurti objektus, kurie turės šias savybes (properties): name, author, year ir metodus, kurių vienas parašys pavadinima ir autorių, o kitas parodys knygos amžių (senumą).

class book {
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    }
    nameAndAuthor(){
        console.log(this.name + ", " + this.author);
    }
    ageOfBook(){
        console.log(new Date().getFullYear() - this.year);
    }
}

const book1 = new book ("A Game of Thrones", "George R. R. Martin", 1996);
book1.nameAndAuthor();
book1.ageOfBook();