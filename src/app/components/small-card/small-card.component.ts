import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css'],
})
export class SmallCardComponent implements OnInit {
  @Input()
  id: string = '0';
  @Input()
  photoCover: string = '';
  @Input()
  cardDate: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardAutor: string = '';
  constructor() {}

  ngOnInit(): void {}
}
