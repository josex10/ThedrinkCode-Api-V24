import { BaseEntity as TypeOrmBaseEntity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';

export abstract class BaseEntity extends TypeOrmBaseEntity {
  @PrimaryGeneratedColumn()
  clm_id: number;

  @Column()
  clm_active: boolean;

  @CreateDateColumn()
  clm_created_at: Date;

  @UpdateDateColumn()
  clm_updated_at: Date;
}
