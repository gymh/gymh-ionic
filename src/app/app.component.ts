import { Component, OnInit } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: "News",
      url: "/views/News",
      icon: "newspaper"
    },
    {
      title: "Vertretungsplan",
      url: "/views/Vertretungsplan",
      icon: "menu"
    },
    {
      title: "Notizen",
      url: "/views/Notizen",
      icon: "list"
    },
    {
      title: "ToDo",
      url: "/views/ToDo",
      icon: "list"
    },
    {
      title: "Termine",
      url: "/views/Termine",
      icon: "calendar"
    },
    {
      title: "Speiseplan",
      url: "/pages/speiseplan",
      icon: "fast-food"
    },
    {
      title: "Stundenplan",
      url: "/views/Stundenplan",
      icon: "time"
    },
    {
      title: "Einstellungen",
      url: "/pages/settings",
      icon: "settings"
    },
    {
      title: "Info",
      url: "/pages/about",
      icon: "information"
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

  ngOnInit() {
    const path = window.location.pathname.split("views/")[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        page => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
