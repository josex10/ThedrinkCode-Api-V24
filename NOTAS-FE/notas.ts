interface ITableMaintenance{
    createdBy: number;
    editedBy: number;
    createdDate: Date;
    editedDate: Date;
    active: boolean;
}

interface IFacturaElectronica extends ITableMaintenance {

    //INTERNO
    id: number;
    idRestaurant: number;


    //HACIENDA
    Clave: string; // ALWAYS 50
    CodigoActividad: string; // ALWAYS 6
    NumeroConsecutivo: number; // ALWAYS 20
    FechaEmision: Date;
    // Emisor: IEmisor;
    // Receptor: IReceptor; -> ES LA PARTE LEGAL DEL RESTAURANTE

    
    // DetalleServicio?: ILineaDetalle[]; //-> Tabla de Linea Detalle por Compra
    // ResumenFactura: IResumenFactura; // -> Tabla de Resumen de Factura por compra
    
    
    

    // CondicionVenta: string; -> NO NOS INTERESA
    // PlazoCredito?: string; //MAX 10 -> NO NOS INTERESA
    // MedioPago: string[];// -> Tabla de Medios de Pago por compra -> NO NOS INTERESA
    // OtrosCargos?: IOtrosCargos[]; // -> Tabla Linea de Otras Cargos por Compra -> NO NOS INTERESA
    // InformacionReferencia: IInformacionReferencia[]; // -> Tabla de Informacion de Referencia por Compra -> NO NOS INTERESA POR EL MOMENTO
}


// STATIC TABLES:
const tbl_condicionDeVenta = [
    {
        id: null, 
        code: '01', 
        description: 'Contado'
    },
    {
        id: null, 
        code: '02', 
        description: 'Crédito'
    },
    {
        id: null, 
        code: '03', 
        description: 'Consignación'
    },
    {
        id: null, 
        code: '04', 
        description: 'Apartado'
    },
    {
        id: null, 
        code: '05', 
        description: 'Arrendamiento con opción de compra'
    },
    {
        id: null, 
        code: '06', 
        description: 'Arrendamiento en función financiera'
    },
    {
        id: null, 
        code: '07', 
        description: 'Cobro a favor de un tercero'
    },
    {
        id: null, 
        code: '08', 
        description: 'Servicios prestados al Estado a crédito'
    },
    {
        id: null, 
        code: '01', 
        description: 'Contado'
    },
    {
        id: null, 
        code: '01', 
        description: 'Contado'
    },
    {
        id: null, 
        code: '01', 
        description: 'Contado'
    },
    {
        id: null, 
        code: '01', 
        description: 'Contado'
    },
]

interface IInformacionReferencia {
    TipoDoc: string;
    Numero?: string; //MAX 50
    FechaEmision: Date;
    Codigo?: string;
    Razon?: string; // MAX 180
}

interface IResumenFactura{
    CodigoTipoMoneda?: ICodigoDeMoneda;
    TotalServGravados?: number;
    TotalServExentos?: number;
    TotalServExonerado?: number;
    TotalMercanciasGravadas?: number;
    TotalMercanciasExentas?: number;
    TotalMercExonerada?: number;
    TotalGravado?: number;
    TotalExento?: number;
    TotalExonerado?: number;
    TotalVenta: number;
    TotalDescuentos?: number;
    TotalVentaNeta: number;
    TotalImpuesto?: number;
    TotalIVADevuelto?: number;
    TotalOtrosCargos?: number;
    TotalComprobante: number;
}

interface ICodigoDeMoneda {
    CodigoMoneda: string;
    TipoCambio: number;
}

interface IOtrosCargos{
    TipoDocumento: string;
    NumeroIdentidadTercero?: string; //MAX 12
    NombreTercero?: string; //MAX 100
    Detalle: string; //MAX 160
    Porcentaje?: number;
    MontoCargo: number;
}

interface ILineaDetalle {
    NumeroLinea: number;
    Codigo: string; // ALWAYS 13
    // CodigoComercial?: ICodigoComercial[]; -> no nos interesa
    Cantidad: number;
    UnidadMedida: string;
    // UnidadMedidaComercial?:string;//MAX 20 -> no nos interesa
    Detalle: string; //MAX 200
    PrecioUnitario: number;
    MontoTotal: number;
    Descuento?: IDescuento[];
    SubTotal: number;
    // BaseImponible?: number; -> no nos interesa
    Impuesto?: IImpuesto[];
    ImpuestoNeto?: number;
    MontoTotalLinea: number;
}

interface IImpuesto{
    Codigo: string;
    CodigoTarifa: string;
    Tarifa: number;
    FactorIVA: number;
    Monto: number;
    Exoneracion: IExoneracion
}

interface IExoneracion{
    TipoDocumento: string;
    NumeroDocumento: string; //MAX 40
    NombreInstitucion: String; // MAX 160
    FechaEmision: Date;
    PorcentajeExoneracion: number;
    MontoExoneracion: number;
}

interface IDescuento {
    MontoDescuento: number;
    NaturalezaDescuento: string; // MAX 80
}


interface ICodigoComercial {
    Tipo: string; 
    Codigo: string; // MAX 20
}



interface IReceptor{
    Nombre: string; //MAX 100
    Identificacion: IIdentificacion;
    IdentificacionExtranjero?: string; //MAX 20
    NombreComercial?: string; //MAX 80
    Ubicacion?: IUbicacion;
    OtrasSenasExtranjero?: string; //MAX 300
    Telefono?: ITelefono;
    Fax?: ITelefono;
    CorreoElectronico?: string;// MAX 160
}

interface IEmisor{
    Nombre: string; //MAX 100
    Identificacion: IIdentificacion;
    NombreComercial?: string;//MAX 80
    Ubicacion: IUbicacion;
    Telefono?: ITelefono;
    Fax?: ITelefono;
    CorreoElectronico: string;// MAX 160
}

interface IIdentificacion {
    Tipo: string;
    Numero: string; //MAX 12
}


interface IUbicacion {
    Provincia: number;
    Canton: number;
    Distrito: number;
    Barrio?: number;
    OtrasSenas: string; //MAX 250
}

interface ITelefono {
    CodigoPais: number; // MAX 3
    NumTelefono: number; //MAX 20
}


