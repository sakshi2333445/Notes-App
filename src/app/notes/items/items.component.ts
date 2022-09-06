import { NgForm } from '@angular/forms';
import { Notes } from './../../models/Notes';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @ViewChild('f')  form :NgForm;
  @Input() notes: Notes[];
  @Output() noteDelete : EventEmitter<Notes> = new EventEmitter();

  title= '';
  description = '';
  index = null;

  
  constructor() {  }

  ngOnInit(): void {
  }

  onDelete(note:Notes){
    this.noteDelete.emit(note);
    console.log(note.title);
  }

  clickedNote(note:Notes){
    this.index = this.notes.indexOf(note);
    this.title = note.title;
    this.description = note.description;
    console.log('clicked');
  }


  onSubmit(f:NgForm){
    this.notes[this.index].title = f.value.title;
    this.notes[this.index].description = f.value.description; 
    console.log('updated!');
    
  }

}
