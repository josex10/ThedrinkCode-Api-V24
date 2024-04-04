import { BaseEntity } from '../../base/entities';
import { Entity, Column } from 'typeorm';

@Entity('tbl_users')
export class UserEntity extends BaseEntity {
  @Column()
  clm_id_restaurant: number;

  @Column()
  clm_name: string;

  @Column()
  clm_username: string;

  @Column()
  clm_email: string;

  @Column()
  clm_password: string;

  @Column()
  clm_first_loging: boolean;
}
