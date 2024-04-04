import { PurchaseEntity } from "src/modules/purchase/entities/purchase.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_purchases_line_detail')
export class PurchaseLineDetailEntity {
    @PrimaryGeneratedColumn()
    clm_id: number;

    @Column()
    clm_id_purchase:number;

    @Column()
    clm_line_number: number;
    
    @Column()
    clm_code: string;

    @Column()
    clm_qty: number;

    @Column()
    clm_measure_unit: string;

    @Column()
    clm_detail: string;

    @Column()
    clm_unit_price: number;

    @Column()
    clm_total_amount: number;

    @Column()
    clm_discount_amount: number;

    @Column()
    clm_discount_detail: string;

    @Column()
    clm_subtotal: number;

    @Column()
    clm_tax_code: string;

    @Column()
    clm_tax_fee_code: string;

    @Column()
    clm_tax_fee: number;

    @Column()
    clm_tax_amount: number;

    @Column()
    clm_net_tax: number;

    @Column()
    clm_total_line_amount: number;

    @ManyToOne(() => PurchaseEntity, (purchase) => purchase.clm_id)
    @JoinColumn({name: 'clm_id_purchase'})
    purchase: PurchaseEntity;

}
