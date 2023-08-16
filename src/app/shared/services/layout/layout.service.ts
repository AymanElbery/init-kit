import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // theme layout settings
  public config = {
    settings: {
      sidebar: 'compact-wrapper',
      layout_type: 'rtl',
      layout_version: 'light-only',
      sidebar_type: 'default-sidebar'
    },
    color: {
      primary_color: 'rgb(14, 67, 117)', 
      secondary_color: 'rgb(241, 162, 4)'
    }
  }
 

  constructor() { 
    // layout condition
    if(this.config.settings.layout_type == 'rtl'){
      document.getElementsByTagName('html')[0].setAttribute('dir', this.config.settings.layout_type);
      document.documentElement.style.setProperty('--theme-deafult', this.config.color.primary_color);
      document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);
    }else{
      if(this.config.settings.layout_type == 'box-layout'){
        document.body.classList.add('box-layout')
      }
    }
  }

}
