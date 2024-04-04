import { PurchaseEntity } from "src/modules/purchase/entities/purchase.entity";
import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('tbl_purchases_summary')
export class PurchaseSummaryEntity {
    @PrimaryGeneratedColumn()
    clm_id: number;

    // @Column()
    // clm_id_purchase:number;

    @Column()
    clm_currency_code:number;

    @Column()
    clm_currency_exchange:number;

    @Column()
    clm_total_servGravados:number;

    @Column()
    clm_total_servExentos:number;

    @Column()
    clm_total_servExonerado:number;

    @Column()
    clm_total_mercanciasGravadas:number;

    @Column()
    clm_total_mercanciasExentas:number;

    @Column()
    clm_total_mercExonerada:number;
    
    @Column()
    clm_total_gravado:number;

    @Column()
    clm_total_exento:number;
    
    @Column()
    clm_total_exonerado:number;

    @Column()
    clm_total_venta:number;

    @Column()
    clm_total_descuentos:number;

    @Column()
    clm_total_ventaNeta:number;

    @Column()
    clm_total_impuesto:number;

    @Column()
    clm_total_IVA_devuelto:number;

    @Column()
    clm_total_otros_cargos:number;

    @Column()
    clm_total_comprobante:number;

    @OneToOne(() => PurchaseEntity, (purchase) => purchase.summary)
    // @JoinColumn({name: 'clm_id_purchase'})
    purchase: PurchaseEntity;

}

