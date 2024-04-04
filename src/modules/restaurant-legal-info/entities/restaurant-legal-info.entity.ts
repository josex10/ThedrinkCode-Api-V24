import { RestaurantEntity } from 'src/modules/restaurant/entities';
import {
    Column,
    Entity,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity('tbl_restaurants_legal_info')
  export class RestaurantLegalInfoEntity {
    @PrimaryGeneratedColumn()
    clm_id: number;

    @Column({ unique: true })
    clm_id_restaurant: number;

    @Column()
    clm_identification_type: string;

    @Column()
    clm_identification_number: string;

    @Column()
    clm_fantasy_name: string;

    @Column()
    clm_email: string;

    @Column()
    clm_phone_country_code: string;

    @Column()
    clm_phone_number: string;
  
    @Column()
    clm_active: boolean;
  
    @Column()
    clm_created_at: Date;
  
    @Column()
    clm_updated_at: Date;

    @OneToOne(() => RestaurantEntity, (restaurant) => restaurant.legalInfo)
    restaurant: RestaurantEntity;
  }
