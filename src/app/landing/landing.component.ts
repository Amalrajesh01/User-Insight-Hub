import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
interface UserInfoItem {
  label: string;
  value: any;
}
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  userInfo: any = null;
  geolocation: any = null;
  constructor(private router: Router) { }
  
  goTotnc() {
    this.router.navigate(['/termsandconditions'])
  }

  async getGeolocation() {
    try {
      this.userInfo = {
        isMobile: this.getDeviceType(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        browser: navigator.userAgent,
        operatingSystem: navigator.platform,
        windowSize: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        deviceMemory: (navigator as any).deviceMemory || 'N/A',
        cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
        language: navigator.language || 'N/A',
        onlineStatus: navigator.onLine ? 'Online' : 'Offline',
        doNotTrack: navigator.doNotTrack || 'N/A',
      };
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  }

  private getDeviceType(): string {
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes('mobile')) {
      return 'Mobile';
    } else if (userAgent.includes('tablet')) {
      return 'Tablet';
    } else {
      return 'Desktop';
    }
  }

  getUserInfoItems(): UserInfoItem[] {
    return [
      { label: 'Device Type', value: this.userInfo.isMobile },
      { label: 'Screen Resolution', value: this.userInfo.screenResolution },
      { label: 'Browser', value: this.userInfo.browser },
      { label: 'Operating System', value: this.userInfo.operatingSystem },
      { label: 'Window Size', value: this.userInfo.windowSize },
      { label: 'Timezone', value: this.userInfo.timezone },
      { label: 'Device Memory', value: this.userInfo.deviceMemory },
      { label: 'Cookies Enabled', value: this.userInfo.cookiesEnabled },
      { label: 'Language', value: this.userInfo.language },

    ];
  }
}
