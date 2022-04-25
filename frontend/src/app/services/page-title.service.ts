import { Injectable } from '@angular/core';

const PREFIX = "Tour Of Heroes";

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  getTitle(page: string): string {
    return `${PREFIX} / ${page}`
  }

}
