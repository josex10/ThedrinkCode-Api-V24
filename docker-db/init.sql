CREATE TABLE IF NOT EXISTS tbl_restaurants (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_name VARCHAR(80) NOT NULL UNIQUE,
    clm_admin_name VARCHAR(80) NOT NULL,
    clm_email VARCHAR(160) NOT NULL UNIQUE,
    clm_phone VARCHAR(20), 
    clm_active TINYINT DEFAULT 1,
    clm_created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    clm_updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (clm_id)
);

INSERT INTO tbl_restaurants (clm_name, clm_admin_name, clm_email, clm_phone) 
    VALUES('La Soga', 'Carlos Chuck', 'cchuck@lasoga.com', '78907745');

CREATE TABLE IF NOT EXISTS tbl_users (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_id_restaurant BIGINT NOT NULL,
    clm_name VARCHAR(80) NOT NULL,
    clm_username VARCHAR(80) NOT NULL UNIQUE,
    clm_email VARCHAR(160) NOT NULL,
    clm_password VARCHAR(255),
    clm_first_loging TINYINT DEFAULT 1,
    clm_active TINYINT DEFAULT 1,
    clm_created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    clm_updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (clm_id),
    FOREIGN KEY (clm_id_restaurant)
        REFERENCES tbl_restaurants(clm_id)
        ON DELETE CASCADE
);

INSERT INTO tbl_users (clm_id_restaurant, clm_name, clm_username, clm_email) 
    VALUES(1, 'Carlos Chuck', 'cchunk', 'cchuck@lasoga.com');


CREATE TABLE IF NOT EXISTS tbl_restaurants_legal_info (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_id_restaurant BIGINT NOT NULL UNIQUE,
    clm_identification_type VARCHAR(10) NOT NULL,
    clm_identification_number VARCHAR(12) NOT NULL,
    clm_fantasy_name VARCHAR(80) NOT NULL,
    clm_email VARCHAR(160) NOT NULL,
    clm_phone_country_code VARCHAR(3),
    clm_phone_number VARCHAR(20),
    clm_active TINYINT DEFAULT 1,
    clm_created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    clm_updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (clm_id),
    FOREIGN KEY (clm_id_restaurant)
        REFERENCES tbl_restaurants(clm_id)
        ON DELETE CASCADE
);

INSERT INTO tbl_restaurants_legal_info (clm_id_restaurant, clm_identification_type, clm_identification_number, clm_fantasy_name, clm_email) 
    VALUES(1, '01', '114350445','Wings 66 CR - Guacima', 'guacima@wings66cr.com');

CREATE TABLE IF NOT EXISTS tbl_providers (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_id_restaurant BIGINT NOT NULL,
    clm_identification_type VARCHAR(10) NOT NULL,
    clm_identification_number VARCHAR(12) NOT NULL,
    clm_fantasy_name VARCHAR(80) NOT NULL,
    clm_email VARCHAR(160) NOT NULL,
    clm_phone_country_code VARCHAR(3),
    clm_phone_number VARCHAR(20),
    clm_active TINYINT DEFAULT 1,
    clm_created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    clm_updated_at TIMESTAMP DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY (clm_id),
    FOREIGN KEY (clm_id_restaurant)
        REFERENCES tbl_restaurants(clm_id)
        ON DELETE CASCADE
);

INSERT INTO tbl_providers (clm_id_restaurant, clm_identification_type, clm_identification_number, clm_fantasy_name, clm_email) 
    VALUES(1, '01', '114657890','Aceite los Patitos', 'aceite@lospatitos.com');


CREATE TABLE IF NOT EXISTS tbl_purchases_summary (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_currency_code VARCHAR(3),
    clm_currency_exchange DECIMAL(13, 5),
    clm_total_servGravados  DECIMAL(13, 5),
    clm_total_servExentos DECIMAL(13, 5),
    clm_total_servExonerado DECIMAL(13, 5),
    clm_total_mercanciasGravadas DECIMAL(13, 5),
    clm_total_mercanciasExentas DECIMAL(13, 5),
    clm_total_mercExonerada DECIMAL(13, 5),
    clm_total_gravado DECIMAL(13, 5),
    clm_total_exento DECIMAL(13, 5),
    clm_total_exonerado DECIMAL(13, 5),
    clm_total_venta DECIMAL(13, 5),
    clm_total_descuentos DECIMAL(13, 5),
    clm_total_ventaNeta DECIMAL(13, 5),
    clm_total_impuesto DECIMAL(13, 5),
    clm_total_IVA_devuelto DECIMAL(13, 5),
    clm_total_otros_cargos DECIMAL(13, 5),
    clm_total_comprobante DECIMAL(13, 5),
    PRIMARY KEY (clm_id)
);

CREATE TABLE IF NOT EXISTS tbl_purchases (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_id_purchase_summary BIGINT NOT NULL,
    clm_id_restaurant BIGINT NOT NULL,
    clm_id_provider BIGINT NOT NULL,
    clm_key VARCHAR(50) NOT NULL,
    clm_activity_code VARCHAR(6) NOT NULL,
    clm_consecutive_number VARCHAR(20) NOT NULL,
    clm_issue_date TIMESTAMP NOT NULL,
    clm_created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (clm_id),
    FOREIGN KEY (clm_id_restaurant)
        REFERENCES tbl_restaurants(clm_id)
        ON DELETE CASCADE,
    FOREIGN KEY (clm_id_provider)
        REFERENCES tbl_providers(clm_id)
        ON DELETE CASCADE,
    FOREIGN KEY (clm_id_purchase_summary)
        REFERENCES tbl_purchases_summary(clm_id)
        ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tbl_purchases_line_detail (
    clm_id BIGINT NOT NULL AUTO_INCREMENT, 
    clm_id_purchase BIGINT NOT NULL,
    clm_line_number INT,
    clm_code VARCHAR(13),
    clm_qty INT,
    clm_measure_unit VARCHAR(12),
    clm_detail VARCHAR(200),
    clm_unit_price DECIMAL(13, 5),
    clm_total_amount DECIMAL(13, 5),
    clm_discount_amount DECIMAL(13, 5),
    clm_discount_detail VARCHAR(200),
    clm_subtotal DECIMAL(13, 5),
    clm_tax_code VARCHAR(4),
    clm_tax_fee_code VARCHAR(4),
    clm_tax_fee INT,
    clm_tax_amount DECIMAL(13, 5),
    clm_net_tax DECIMAL(13, 5),
    clm_total_line_amount DECIMAL(13, 5),
    PRIMARY KEY (clm_id),
    FOREIGN KEY (clm_id_purchase)
        REFERENCES tbl_purchases(clm_id)
        ON DELETE CASCADE
);

