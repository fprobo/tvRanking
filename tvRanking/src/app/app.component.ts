import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tvRanking';

  listTV: string[] = [];
  count: number = 0;

  constructor() {
    this.listTV = [
      "lost",
      "scrubs",
      "mr robot",
      "fringe",
      "breaking bad",
      "mad men",
      "gossip girl",
      "himym",
      "community",
      "got"
    ];

    let ranking = this.mergeSort(this.listTV);
    console.log("ranking: ", ranking, this.count);
  }

  mergeArrays: any = (a: any, b: any) => {
    const c = []

    while (a.length && b.length) { c.push(this.maggiore(a[0], b[0]) ? a.shift() : b.shift()) }

    while (a.length) { c.push(a.shift()) }
    while (b.length) { c.push(b.shift()) }

    return c
  }

  mergeSort: any = (a: any) => {
    if (a.length < 2) return a
    const middle = Math.floor(a.length / 2)
    const a_l = a.slice(0, middle)
    const a_r = a.slice(middle, a.length)
    const sorted_l = this.mergeSort(a_l)
    const sorted_r = this.mergeSort(a_r)
    return this.mergeArrays(sorted_l, sorted_r)
  }

  maggiore(primo: any, secondo: any) {
    this.count = this.count + 1;
    return prompt(`Quale è meglio? ${primo} - ${secondo}`) == "1";
  }
}
