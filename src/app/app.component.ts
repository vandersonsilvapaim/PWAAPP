import {Component} from "@angular/core";
import {SwPush} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwa-app';
  readonly VAPID_PUBLIC_KEY = "BAttKawEzJGDRokn2evHkbIuE-WyjxFEefnFbeagbj19F2JfyCsALOoRZ-k3KfOfhKa20nT21sgyj9XnItGAaL0";

  constructor(private swPush: SwPush,) {
  }

  //private newsletterService: NewsletterService;

  subscribeToNotifications() {

    //   this.swPush.requestSubscription({
    //     serverPublicKey: this.VAPID_PUBLIC_KEY
    //   })
    //     .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
    //     .catch(err => console.error("Could not subscribe to notifications", err));
  }
}
