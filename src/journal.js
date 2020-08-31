export default function Journal(journalName){
  this.journal = journalName
  this.entries = [];
}


export default function Entry(title, body) {
  this.title = title
  this.body = body
  // this.entries.push(this.Entry());
}

Journal.prototype.addEntry = function(entry) {
  this.entries.push(entry);
}
