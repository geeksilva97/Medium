import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(
    private alertCtrl: AlertController,
    private platform: Platform,
    private location: Location
  ) { }

  ngOnDestroy() {
    delete (window as any).simulateBackButton;
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.platform.backButton.subscribe(async (value) => {
      console.log('backbutton!');
      const dialog = await this.alertCtrl.create({
        header: 'Confirmation',
        message: 'Are you sure you want to exit?',
        buttons: [
          {
            text: 'YES',
            handler: () => {
              console.log('pop this page');
              this.location.back();
            }
          },

          {
            text: 'NO',
            role: 'cancel'
          }
        ]
      });
      dialog.present();
    });

    // let event = new Event('ionBackButton'); // it works but an exception is raised
    let event = new CustomEvent('ionBackButton', {
      detail: {
        register: (priority, handler) => {
          console.log({priority, handler});
        }
      }
    });
    (window as any).simulateBackButton = () => {
      document.dispatchEvent(event);
    };
  }

  back() {
    (window as any).simulateBackButton();
  }
}
