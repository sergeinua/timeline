import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  start: string;

  @Input()
  end: string;

  constructor() { }

  ngOnInit() {
  }

}
