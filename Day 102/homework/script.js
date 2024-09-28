// 1


function* infiniteNumbers() {
    let num = 0;
    while (true) {
      yield num++;
    }
  }
  
  const generator = infiniteNumbers();
  console.log(generator.next().value); // 0
  console.log(generator.next().value); // 1
  console.log(generator.next().value); // 2

  


//   2




function* evenNumbers() {
    let num = 0;
    while (true) {
      yield num;
      num += 2;
    }
  }
  
  const evenGen = evenNumbers();
  console.log(evenGen.next().value); // 0
  console.log(evenGen.next().value); // 2
  console.log(evenGen.next().value); // 4

  


//   3




function* randomNumbers() {
    while (true) {
      yield Math.random();
    }
  }
  
  const randomGen = randomNumbers();
  console.log(randomGen.next().value); // random number
  console.log(randomGen.next().value); // random number
  console.log(randomGen.next().value); // random number

  


//   4




function* letterByLetter(word) {
    for (let letter of word) {
      yield letter;
    }
  }
  
  const wordGen = letterByLetter("მალადოი");
  console.log(wordGen.next().value); // მ
  console.log(wordGen.next().value); // ა
  console.log(wordGen.next().value); // ლ

  

//   5




function* randomPassword() {
    const digits = Array.from({ length: 10 }, (_, i) => i); // [0-9]
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += digits[Math.floor(Math.random() * digits.length)];
      }
      yield password;
    }
  }
  
  const passwordGen = randomPassword();
  console.log(passwordGen.next().value); // 8-digit random password

  

//   6




function* improvedPassword() {
    const characters = [
      ...'0123456789', // ციფრები
      ...'abcdefghijklmnopqrstuvwxyz', // ინგლისური
      ...'აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ', // ქართული
      ...'!@#$%^&*()_-+=<>?' // სიმბოლოები
    ];
  
    while (true) {
      let password = '';
      for (let i = 0; i < 8; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
      }
      yield password;
    }
  }
  
  const improvedPassGen = improvedPassword();
  console.log(improvedPassGen.next().value); // 8-character random password
  