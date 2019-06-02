import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-detail',
  templateUrl: './projects-detail.page.html',
  styleUrls: ['./projects-detail.page.scss'],
})
export class ProjectsDetailPage implements OnInit {

  constructor(public activatedRoute: ActivatedRoute) { }

  project = null;

  ngOnInit() {

    let dataRetrieve = this.activatedRoute.snapshot.paramMap.get('project');

    this.project = JSON.parse(dataRetrieve);
    console.log(this.project);

  }

}
