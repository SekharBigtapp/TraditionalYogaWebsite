import { Injectable } from '@angular/core';
import { BaseHttpService } from 'app/core/services/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService extends BaseHttpService {

  postTouchUrl = ""

  postTouch(body: any) {
    return this.login(this.postTouchUrl, body)
  }

}
