import { Component, OnInit } from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  article: Article = {};
  articles: Article[] = [
    {
      title: 'bongda.com.vn',
      url: 'http://bongda.com.vn'
    },
    {
      title: 'truyenqq',
      url: 'https://truyenqq.net'
    },
    {
      title: 'dantri',
      url: 'https://dantri.vn'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  addNewArticle() {
    this.articles.push(this.article);
  }
}
