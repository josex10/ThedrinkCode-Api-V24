import { ProviderEntity } from 'src/modules/provider/entities/provider.entity';
import { PurchaseLineDetailEntity } from 'src/modules/purchase-line-detail/entities/purchase-line-detail.entity';
import { PurchaseSummaryEntity } from 'src/modules/purchase-summary/entities/purchase-summary.entity';
import { RestaurantEntity } from 'src/modules/restaurant/entities';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity('tbl_purchases')
  export class PurchaseEntity{
    @PrimaryGeneratedColumn()
    clm_id: number;

    @Column()
    clm_id_restaurant: number;

    @Column()
    clm_id_purchase_summary: number;

    @Column()
    clm_id_provider: number;

    @Column()
    clm_key: string;
    
    @Column()
    clm_activity_code: string;
    
    @Column()
    clm_consecutive_number: string;
    
    @Column()
    clm_issue_date: Date;
    
    @Column()
    clm_created_at: Date;

    @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.clm_id)
    @JoinColumn({name: 'clm_id_restaurant'})
    restaurant: RestaurantEntity;

    @ManyToOne(() => ProviderEntity, (provider) => provider.clm_id)
    @JoinColumn({name: 'clm_id_provider'})
    provider: ProviderEntity;


    @OneToOne(() => PurchaseSummaryEntity)
    @JoinColumn({name: 'clm_id_purchase_summary'})
    summary: PurchaseSummaryEntity;

    @OneToMany(() => PurchaseLineDetailEntity, (detail) => detail.purchase)
    details: PurchaseLineDetailEntity[];
  
  }

