import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.page.html',
  styleUrls: ['./languages.page.scss'],
})
export class LanguagesPage implements OnInit {

  public languages = [
    {
      language: "C#",
      experience: "I have only made a few programs using C#, however, with the very similar syntax to Java, I am more than confident in my skills and personal drive to quickly bring myself up to speed on any project involving the language."
    },
    {
      language: "C++",
      experience: "Before changing my major to Computer Information Systems, I was a Computer Science major. As a CS major, I programmed almost exclusively in C++ and as a result I became extremely proficient in the language."
    },
    {
      language: "Java",
      experience: "The main programming language taught to CIS majors at UNA is Java, one of the most widely used computer languages in the world. I have extensive knowledge of the in’s and out’s of this language and am more than confident that I can tackle any problem using this language."
    },
    {
      language: "Ruby",
      experience: "Ruby is most likely my weakest language. However, with my proficiency in Python, the overlap in similar syntax means that any learning curve would be minimal."
    },
    {
      language: "Python and Sage",
      experience: "Python is the language that I have the most fun with while programming. Although I have not completed any major projects with it, whenever I have a small task that requires a quick and easy fix, I always find myself writing a Python script to solve it. I also have experience with SageMath, a Python derivative that focuses on math-based problems."
    },
    {
      language: "JavaScript",
      experience: "JavaScript is the backbone of many of todays websites and as a result of my love of web development, I use it daily. Although I find it more efficient to use frameworks such as jQuery or Angular, I am still more than capable of writing the appropriate JavaScript file to solve any problem."
    },
    {
      language: "jQuery",
      experience: "jQuery is my go-to framework when I want to create nice, animated web pages. I find that the integration with JavaScript provides a very intuitive syntax that makes including it on any project a joy."
    },
    {
      language: "Angular and AngularJS",
      experience: "Learning Angular and AnularJs and the difference between the different version has been my latest learning challenge and it has quickly become my favorite development tool. The ability to function with both the front and back end of a system. I have tried my best to explore all of what Angular has to offer and have successfully implemented systems using controllers, factories, views, routes, and back-end api’s."
    },
    {
      language: "PHP",
      experience: "My first experience with PHP involved me metaphorically being thrown into the deep end of a project and being told to sink or swim. With it being my first server side language, there was quite a learning curve however, after that I gained the solid foundation and knowledge need to build any database, connect it to my web applications, and present dynamic and responsive web pages for users."
    },
    {
      language: "Sql",
      experience: "MySql was the first database language that I was ever exposed to and what confirmed to me that I wanted to work in web development. I possess extensive experience in creating Sql databases from scratch, putting them into the correct normal form, and making all of the data in the database easily accessible with the correct Sql calls."
    },
    {
      language: "MongoDB",
      experience: "I first started working heavily with MongoDb when I started learnding how to use it in conjunction with Angular. It has quickly become my prefered database structure as it allow for virtually unlimited flexibility when creating new collections and documents as well as the seamless integration that it has with Angular."
    }
  ]

  constructor(private nav: NavController, public router: Router, private modalCtrl: ModalController) { }

  // pushPage(language) {

  //   console.log(language);

  //   let dataString = JSON.stringify(language);

  //   console.log(dataString);

  //   this.router.navigate(['language-detail', dataString]);
  // }

  ngOnInit() {
  }

}
