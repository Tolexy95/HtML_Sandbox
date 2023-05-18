class BookLibrary {
  constructor(
    title,
    author,
    copyRightDate,
    ISBN,
    NumOfPages,
    NoOfBookCheckedTime,
    checkBookDiscarded
  ) {
    this.title = title;
    this.author = author;
    this.copyRightDate = copyRightDate;
    this.ISBN = ISBN;
    this.NumOfPages = NumOfPages;
    this.NoOfBookCheckedTime = NoOfBookCheckedTime;
    this.checkBookDiscarded = checkBookDiscarded;
  }

  checkOutFxn(noOfUses = 1) {
    this.NoOfBookCheckedTime += noOfUses;
  }
}
// Define your Manual and Novel classes here:
class Manual extends BookLibrary {
  constructor(
    title,
    author,
    copyRightDate,
    ISBN,
    NumOfPages,
    NoOfBookCheckedTime,
    checkBookDiscarded
  ) {
    super(
      title,
      author,
      copyRightDate,
      ISBN,
      NumOfPages,
      NoOfBookCheckedTime,
      checkBookDiscarded
    );
  }

  manualUpdate() {
    let currentYear = new Date();

    if (currentYear.getFullYear() - this.copyRightDate > 5) {
      this.checkBookDiscarded = "YES";
    } else {
      this.checkBookDiscarded = "NO";
    }
  }
}

class Novel extends BookLibrary {
  constructor(
    title,
    author,
    copyRightDate,
    ISBN,
    NumOfPages,
    NoOfBookCheckedTime,
    checkBookDiscarded
  ) {
    super(
      title,
      author,
      copyRightDate,
      ISBN,
      NumOfPages,
      NoOfBookCheckedTime,
      checkBookDiscarded
    );
  }
  novelUpdate() {
    if (this.NoOfBookCheckedTime > 100) {
      this.checkBookDiscarded = "YES";
    } else {
      this.checkBookDiscarded = "NO";
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let novelObject = new Novel(
  "Pride and Prejudice",
  "Jane Austen",
  1813,
  1111111111111,
  432,
  32,
  "NO"
);

let manualObject = new Manual(
  "Top Secret Shuttle Building Manual",
  "Redacted",
  2013,
  0000000000000,
  1147,
  1,
  "N0"
);

console.log(manualObject);
console.log(novelObject);
// Code exercises 4 & 5 here:

manualObject.manualUpdate();

console.log(manualObject.manualUpdate());
console.log(novelObject.checkOutFxn(5));
