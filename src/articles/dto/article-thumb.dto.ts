import { Article } from "../article.entity"

export class ArticleThumbDto {
  private id: number;
  private title: string;
  private cover: string;
  private date: Date;

  constructor(article: Article) {
    this.id = article.id;
    this.title = article.title;
    this.cover = article.image_url;
    this.date = article.date;
  }
}
