import { Component, Input, OnInit } from '@angular/core';

import { Notes } from '../models/Notes';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes : Notes[] ;
  @Input() noteDelete : Notes;


  constructor() {
    this.notes = [
      {
      title: 'Sample Note',
      description : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, assumenda!'
    }
  ]
   }

  ngOnInit(): void {
  }

  noteAdd(note: Notes){
    this.notes.push(note);
    console.log(this.notes);
  }

  deleteNote(note:Notes){
    const index = this.notes.indexOf(note);
    this.notes.splice(index,1);
    console.log(this.notes);
  }

  
}









// updateNote(note:Notes){
//   // const index = this.notes.indexOf(note);
//   // this.notes[index].title = note.title;
//   // this.notes[index].description = note.description; 
  
// }