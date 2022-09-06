import { Notes } from './../../models/Notes';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})

export class AddNoteComponent implements OnInit {
  @ViewChild('f')  form :NgForm;
  title: string;
  description: string;
  @Output() addNote : EventEmitter<Notes> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    const note = {
      title: this.form.value.title,
      description: this.form.value.description
    }
    console.log(this.form.valid);
    this.addNote.emit(note);
    this.form.reset();
  }
}
