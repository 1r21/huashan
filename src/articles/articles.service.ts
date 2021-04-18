import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
  ) {}

  create(createUserDto: CreateArticleDto): Promise<Article> {
    const article = new Article();   
    article.title = createUserDto.title;
    return this.articlesRepository.save(article);
  }

  async findAll(): Promise<Article[]> {
    return this.articlesRepository.find();
  }

  findOne(id: string): Promise<Article> {
    return this.articlesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.articlesRepository.delete(id);
  }
}
