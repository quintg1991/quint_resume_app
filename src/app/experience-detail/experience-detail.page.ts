import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.page.html',
  styleUrls: ['./experience-detail.page.scss'],
})
export class ExperienceDetailPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  job = null;

  ngOnInit() {
    let dataRetrieve = this.activatedRoute.snapshot.paramMap.get("job");

    this.job = JSON.parse(dataRetrieve);
    console.log(this.job);
  }

}
