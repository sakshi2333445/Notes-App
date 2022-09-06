import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './notes/add-note/add-note.component';
import { ItemsComponent } from './notes/items/items.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    AddNoteComponent,
    ItemsComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
