import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('livros')
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  descricao: string;

  @Column()
  anoPublicacao: number;
}
