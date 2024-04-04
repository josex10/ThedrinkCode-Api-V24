import { ProviderEntity } from 'src/modules/provider/entities/provider.entity';
import { PurchaseEntity } from 'src/modules/purchase/entities/purchase.entity';
import { RestaurantLegalInfoEntity } from 'src/modules/restaurant-legal-info/entities/restaurant-legal-info.entity';
import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  @Entity('tbl_restaurants')
  export class RestaurantEntity {
    @PrimaryGeneratedColumn()
    clm_id: number;
  
    @Column({ unique: true })
    clm_name: string;
  
    @Column()
    clm_admin_name: string;
  
    @Column({ unique: true })
    clm_email: string;
  
    @Column()
    clm_phone: string;
  
    @Column()
    clm_active: boolean;
  
    @Column()
    clm_created_at: Date;
  
    @Column()
    clm_updated_at: Date;

    @OneToOne(() => RestaurantLegalInfoEntity, (legalInfo) => legalInfo.restaurant)
    legalInfo: RestaurantLegalInfoEntity;

    // @OneToMany(() => ProviderEntity, (provider) => provider.restaurant)
    // providers: ProviderEntity[];
    
    // @OneToMany(() => PurchaseEntity, (purchase) => purchase.restaurant)
    // purchases: PurchaseEntity[];
  }