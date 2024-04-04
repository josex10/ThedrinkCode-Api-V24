import { PurchaseEntity } from 'src/modules/purchase/entities/purchase.entity';
import { RestaurantEntity } from 'src/modules/restaurant/entities';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity('tbl_providers')
  export class ProviderEntity{
    @PrimaryGeneratedColumn()
    clm_id: number;

    @Column()
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

    @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.clm_id)
    @JoinColumn({name: 'clm_id_restaurant'})
    restaurant: RestaurantEntity;

    // @OneToMany(() => PurchaseEntity, (purchase) => purchase.clm_id)
    // @JoinColumn({name: 'clm_id_restaurant'})
    // purchase: PurchaseEntity;
  
  }
