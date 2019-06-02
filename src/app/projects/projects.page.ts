import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { faThList } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  public projects = [
    {
      id: 1,
      name: "College of Arts and Sciences Funding Form",
      description: "The College of Arts and Sciences approached our department to ask if we could automate the process by which students applied for project funding. We created this app using an angularJs and mongodb back end to provide a fast and responsive application that will be going into production in November 2018.",
      github: "asdf",
      image1: "assets/projects/coas-01.png",
      image2: "assets/projects/coas-02.png",
      image3: "assets/projects/coas-03.png",
      image4: "assets/projects/coas-04.png"
    },
    {
      id: 2,
      name: "UNA Roar Rooms",
      description: "These are a few screenshots of an ongoing application being developed by myself and a group of student developers. The project is a custom designed room scheduling application that utilizes jQuery, PHP, Bootstrap, and fontawesome and will initially be used by the business department to facilitate easy room reservations throughout the building. The future plan for the project is to implement the application throughout the entire university.",
      github: "asdf",
      image1: "assets/projects/roarrooms-01.png",
      image2: "assets/projects/roarrooms-02.png",
      image3: "assets/projects/roarrooms-03.png",
      image4: "assets/projects/roarrooms-04.png"
    },
    {
      id: 3,
      name: "AIS Object Recognition Project",
      description: "",
      github: "asdf",
      image1: "",
      image2: "",
      image3: "",
      image4: ""
    },
    {
      id: 4,
      name: "UNA Annual Report Web Application",
      description: "",
      github: "",
      image1: "",
      image2: "",
      image3: "",
      image4: ""
    },
    {
      id: 5,
      name: "Go-lang",
      description: "",
      github: "",
      image1: "",
      image2: "",
      image3: "",
      image4: ""
    },
    {
      id: 6,
      name: "This App!",
      description: "",
      github: "",
      image1: "",
      image2: "",
      image3: "",
      image4: ""
    }
  ]

  constructor(private nav: NavController, public router: Router) { }

  pushPage(project) {

    console.log(project);

    let dataString = JSON.stringify(project);

    console.log(dataString);

    this.router.navigate(['projects-detail', dataString]);
  }

  ngOnInit() {
  }

}
