import { Component } from '@angular/core';
import { IonicPage, Toggle} from 'ionic-angular';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingServise:SettingsService){

  }
  onToggle(toggle:Toggle){
    this.settingServise.setBg(toggle.checked);
  }
  checkAltBg(){
    return this.settingServise.isAltBg();
  }

}
