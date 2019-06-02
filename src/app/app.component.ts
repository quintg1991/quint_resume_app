import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    // {
    //   title: 'List',
    //   url: '/list',
    //   icon: 'list'
    // },
    {
      title: 'Education',
      url: '/education',
      icon: 'school'
    },
    {
      title: 'Languages',
      url: '/languages',
      icon: 'code',
    },
    {
      title: 'Experience',
      url: '/experience',
      icon: 'briefcase',
    },
    {
      title: 'Projects',
      url: '/projects',
      icon: 'git-network',
    },
    {
      title: 'Contact Me',
      url: '/contact',
      icon: 'send',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
