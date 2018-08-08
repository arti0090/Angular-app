import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trip-editor',
  templateUrl: './trip-editor.component.html',
  styleUrls: ['./trip-editor.component.css']
})
export class TripEditorComponent implements OnInit {

  @Input()
  testName = "AWSD";

  constructor() { }

  ngOnInit() {
  }

}
