import { Article } from "../article.entity";
import { ArticleThumbDto } from "./article-thumb.dto";

export class ArticleDetailDto extends ArticleThumbDto {
    private src: string;
    private transcript: string;
    private source: string;

    constructor(article: Article) {
        super(article);
        this.src = article.auido_url;
        this.source = article.source
        this.transcript = article.transcript;
    }
}