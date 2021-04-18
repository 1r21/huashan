import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('news')
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: true,
  })
  title: string;

  @Column({
    nullable: true,
  })
  auido_url: string;

  @Column({ nullable: true })
  image_url: string;

  @Column({ nullable: true })
  audio_from: string;

  @Column({ nullable: true })
  image_from: string;

  @Column({ nullable: true })
  source: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  transcript: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  date: Date;
}
