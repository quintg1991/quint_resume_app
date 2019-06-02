import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-language-detail',
  templateUrl: './language-detail.page.html',
  styleUrls: ['./language-detail.page.scss'],
})
export class LanguageDetailPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  language = null;

  ngOnInit() {

    let dataRetrieve = this.activatedRoute.snapshot.paramMap.get("language");

    this.language = JSON.parse(dataRetrieve);
    console.log(this.language);

  }

}
