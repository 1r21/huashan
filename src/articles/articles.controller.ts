import { Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { ArticleThumbDto } from './dto/article-thumb.dto';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';
import { ArticleDetailDto } from './dto/article-detail.dto';

@Controller('api')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) { }

  @Get("news")
  async findAll(@Query('page') pageNo = 1, @Query('pageSize') pageSize = 10) {
    const total = await this.articlesService.getArticleTotal();
    const articles: Article[] = await this.articlesService.findAll(pageSize, (pageNo - 1) * pageSize);
    const list = articles.map(article => new ArticleThumbDto(article));
    return {
      page: pageNo,
      pageSize,
      total,
      list,
    }
  }

  @Get('news/detail')
  async findOne(@Query('id') id: number) {
    const article = await this.articlesService.findOne(id);
    return new ArticleDetailDto(article);
  }

  @Delete('news/detail')
  async remove(@Query('id') id: number) {
    return this.articlesService.remove(id);
  }
}
