import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private readonly articlesRepository: Repository<Article>,
  ) { }

  async getArticleTotal() {
    return this.articlesRepository.count();
  }

  // skip => offset, take => limit
  async findAll(take: number, skip: number,) {
    return this.articlesRepository.find({
      order: {
        id: 'DESC',
      },
      skip,
      take
    });
  }

  async findOne(id: number) {
    return this.articlesRepository.findOneBy({ id });
  }

  async remove(id: number) {
    await this.articlesRepository.delete(id);
  }
}
