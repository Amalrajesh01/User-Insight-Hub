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
      const response = await axios.get('http://ip-api.com/json');
      this.geolocation = response.data;
      console.warn(response.data);
      this.userInfo = {
        Ip: response.data.query,
        Country: response.data.country,
        Region: response.data.regionName,
        city: response.data.city,
        isp: response.data.isp,
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
        geolocationCoordslat: response.data.lat,
        geolocationCoordslon: response.data.lon,
        ispOrg: response.data.org,
        AutonomousSystemNumber: response.data.as,


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
      { label: 'IP Address', value: this.userInfo.Ip },
      { label: 'Country', value: this.userInfo.Country },
      { label: 'Region', value: this.userInfo.Region },
      { label: 'City', value: this.userInfo.city },
      { label: 'Internet Service Provider', value: this.userInfo.isp },
      { label: 'Internet Service Provider Company', value: this.userInfo.ispOrg },
      { label: 'Autonomous System Number (ASN)', value: this.userInfo.AutonomousSystemNumber },
      { label: 'Device Type', value: this.userInfo.isMobile },
      { label: 'Screen Resolution', value: this.userInfo.screenResolution },
      { label: 'Browser', value: this.userInfo.browser },
      { label: 'Operating System', value: this.userInfo.operatingSystem },
      { label: 'Window Size', value: this.userInfo.windowSize },
      { label: 'Timezone', value: this.userInfo.timezone },
      { label: 'Device Memory', value: this.userInfo.deviceMemory },
      { label: 'Cookies Enabled', value: this.userInfo.cookiesEnabled },
      { label: 'Language', value: this.userInfo.language },
      { label: 'Online Status', value: this.userInfo.onlineStatus },
      { label: 'Do Not Track', value: this.userInfo.doNotTrack },
      { label: 'Geolocation Coordinates Latitude', value: this.userInfo.geolocationCoordslat },
      { label: 'Geolocation Coordinates longitude', value: this.userInfo.geolocationCoordslon },

    ];
  }
}
