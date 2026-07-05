import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showLoader = true;

  ngOnInit(): void {

    setTimeout(() => {

      this.showLoader = false;

    }, 3000);

  }

}