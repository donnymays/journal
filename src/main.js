import $ from 'jquery';
import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Journal from './journal.js';
import Entry from './journal.js';


let newJournal = new Journal("myJournal");
console.log(newJournal);
let newEntry = new Entry('day 1', "today was super the best i have ever experienced");
console.log(newEntry);
