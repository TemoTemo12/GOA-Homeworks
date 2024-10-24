// Object Literal:
// პირველი ეტაპი:

// შექმენით ობიექტი ლითერალი რომლის დასახელებაც იქნება movie, ამ ობიექტს გადაეცით 4 თვისება, ფილმის სახელი, ფილმის ავტორი, ფილმის გამოშვების წელი და  ფილმის შეფასება. ასევე ამ ობიექტში გადაეცით მეთოდი რომელიც კონსოლში გამოიტანს (ფილმის დასახელება)  - ის ავტორია (ფილმის ავტორი), ეს ფილმი გამოიშვა (გამოშვების წელი) და ამ ფილმს აქვს (შეფასება)'


// მეორე ეტაპი: 

// ინდივიდუალურად მიწვდით სახელს, ავტორს და გამოშვების წელს, ეს 3 თვისება გამოიტანეთ კონსოლში, ხოლო თვისება  'შეფასება ' - ს შეუცვალეთ მნიშვნელობა


// მესამე ეტაპი: 


// გამოიძახეთ მეთოდი და დააკონსოლეთ მეთოდში გადაცემული მნიშვნელობა


// პირველი ეტაპი:

// ობიექტი ლითერალი
let movie = {
  title: "idk",
  director: "Myself",
  releaseYear: 2010,
  rating: 8.8,
  printDetails: function() {
    console.log(`${this.title} - ის ავტორია ${this.director}, ეს ფილმი გამოიშვა ${this.releaseYear} და ამ ფილმს აქვს ${this.rating}`);
  }
};

// მეორე ეტაპი:

// ინდივიდუალურად მიწვდენა თვისებებს და console.log
console.log(movie.title);       // ფილმის სახელი
console.log(movie.director);    // ფილმის ავტორი
console.log(movie.releaseYear); // ფილმის გამოშვების წელი

// 'შეფასება' თვისების მნიშვნელობის შეცვლა
movie.rating = 9.2;

// მესამე ეტაპი:

// მეთოდის გამოძახება და შედეგის კონსოლში გამოტანა
movie.printDetails();
