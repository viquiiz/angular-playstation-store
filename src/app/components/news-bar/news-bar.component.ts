import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.css']
})
export class NewsBarComponent implements OnInit {
  
  @Input()
  newsBarPhoto:string = ""
  @Input()
  newsBarTitle:string = ""
  @Input()
  newsBarDescription:string = ""
  
  constructor(){}

  ngOnInit(): void {}
}
