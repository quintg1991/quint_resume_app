import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.page.html',
  styleUrls: ['./experience.page.scss'],
})
export class ExperiencePage implements OnInit {

  public jobs = [
    {
      position: "Contract Web Developer",
      location: "LimeGroup LLC, Muscle Shoals, AL. November 2018 - Present",
      duty1: "Maintain communications with given pool of clients",
      duty2: "Develop apps to client specifications",
      duty3: "Create and maintain mobile friendly websites",
      duty4: "Utilize Google SEO practices to increase website searchability"
    },
    {
      position: "Student Web Developer",
      location: "University of North Alabama, Florence, AL. August 2017 - Present",
      duty1: "Train staff members throughout the university in the use of UNA's content management system",
      duty2: "Create and maintain web pages and databases for the university",
      duty3: "design and implement web-based applications",
      duty4: ""
    },
    {
      position: "Student Project Developer",
      location: "University of North Alabama, Florence, AL. August 2018 - January 2019",
      duty1: "Work within a team environment to develop and implement the required application",
      duty2: "Create and adhere to a set workflow using project management software",
      duty3: "",
      duty4: ""
    },
    {
      position: "Contractor",
      location: "Bonds & Botes Arrorney's Office, Birmingham, AL. June 2018 - November 2018",
      duty1: "Evaluate website and provide feedback on potential improvements to the firms's website",
      duty2: "",
      duty3: "",
      duty4: ""
    }]

  constructor(private nav: NavController, public router: Router) { }

  pushPage(job) {

    let dataString = JSON.stringify(job);

    this.router.navigate(["experience-detail", dataString]);
  }

  ngOnInit() {
  }

}
