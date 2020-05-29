

CREATE ROLE arbol
WITH SUPERUSER LOGIN ENCRYPTED PASSWORD 'arboles';
CREATE DATABASE arboles
OWNER arbol;

-- psql -d arboles -U arbol
-- arboles

-- tabla 1
DROP TABLE arboles.collectiones;

CREATE TABLE arboles.collectiones
(
  id serial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(256) DEFAULT '',
  active bool NOT NULL DEFAULT TRUE,
  balance_total numeric(7,1) NOT NULL DEFAULT 0,
  
  CONSTRAINT pk_collectiones PRIMARY KEY(id)
);


-- tabla 2
DROP TABLE arboles.userlevels;

CREATE TABLE arboles.userlevels
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  level varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_user_l PRIMARY KEY(id),
  CONSTRAINT uk_user_l_level UNIQUE(level)
);

-- tabla 3
DROP TABLE arboles.loanstates;

CREATE TABLE arboles.loanstates
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  state varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_loan_s PRIMARY KEY(id),
  CONSTRAINT uk_loan_s_state UNIQUE(state)
);

-- tabla 4
DROP TABLE arboles.documenttypes;

CREATE TABLE arboles.documenttypes
(
  id varchar(3) NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_document_t PRIMARY KEY(id),
  CONSTRAINT uk_document_t_descrip UNIQUE(descrip)
);


-- tabla 5
DROP TABLE arboles.teldescrips;

CREATE TABLE arboles.teldescrips
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_tel_d PRIMARY KEY(id),
  CONSTRAINT uk_tel_d_descrip UNIQUE(descrip)
);


-- tabla 6
DROP TABLE arboles.users;

CREATE TABLE arboles.users
(
  id serial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  active bool DEFAULT TRUE,
  nickname varchar(50) NOT NULL DEFAULT '',
  email varchar(100) NOT NULL,
  password varchar(256) NOT NULL,
  cod_document_type varchar(3) NOT NULL DEFAULT '',
  document NUMERIC(11) NOT NULL DEFAULT '',
  name varchar(50) NOT NULL DEFAULT '',

  CONSTRAINT pk_users PRIMARY KEY(id),
  CONSTRAINT uk_users_nickname UNIQUE(nickname),
  CONSTRAINT uk_users_email UNIQUE(email),
  CONSTRAINT uk_users_cdocumentt_document UNIQUE(cod_document_types,document),
  CONSTRAINT fk_users_document_t FOREIGN key(cod_document_type)
    REFERENCES arboles.documenttypes (id) 
    ON DELETE RESTRIC ON UPDATE RESTRIC
);


-- tabla 7
DROP TABLE arboles.businesstypes;

CREATE TABLE arboles.businesstypes
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(45) NOT NULL DEFAULT '',

  CONSTRAINT pk_business_t PRIMARY KEY(id),
  CONSTRAINT uk_business_t_descrip UNIQUE(descrip)
);


-- tabla 8
DROP TABLE arboles.listlocationes;

CREATE TABLE arboles.listlocationes
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_list_l PRIMARY KEY(id),
  CONSTRAINT fk_list_l_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_list_l_ccollection_descrip UNIQUE(cod_collection,descrip)
);


-- tabla 9
DROP TABLE arboles.listusers;

CREATE TABLE arboles.listusers
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_user integer NOT NULL,
  cod_collection integer NOT NULL,
  cod_user_level SMALLINT NOT NULL DEFAULT 1,
  cash NUMERIC(6,1) NOT NULL DEFAULT 0,
  
  CONSTRAINT pk_list_u PRIMARY KEY(id),
  
  CONSTRAINT fk_list_u_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_list_u_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_list_u_user_l FOREIGN KEY(cod_user_level) 
    REFERENCES arboles.userlevels(id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  
  CONSTRAINT uk_list_u_cuser_ccollection UNIQUE(cod_user,cod_collection)
);


-- tabla 10
DROP TABLE arboles.usertels;

CREATE TABLE arboles.usertels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_user integer NOT NULL,
  phone NUMERIC(12) NOT NULL DEFAULT '',
  cod_tel_descrip SMALLINT NOT NULL DEFAULT '',
  CONSTRAINT pk_user_t PRIMARY KEY(id),

  CONSTRAINT fk_user_t_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_user_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES arboles.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_user_phone UNIQUE(phone)

);



-- tabla 11
DROP TABLE arboles.clients;

CREATE TABLE arboles.clients
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  name varchar(50) NOT NULL,
  email varchar(100),
  cod_document_type varchar(3) NOT NULL DEFAULT '',
  document NUMERIC(11) NOT NULL DEFAULT '',
  adress varchar(60) NOT NULL,
  loan_number SMALLINT NOT NULL DEFAULT 0,
  cod_collection integer NOT NULL,
  cod_loan_state SMALLINT NOT NULL DEFAULT 0,
  cod_business_type SMALLINT NOT NULL DEFAULT 0,
  cod_list_location BIGINT NOT NULL DEFAULT 0,
  cod_user integer NOT NULL,
  
  CONSTRAINT pk_clients PRIMARY KEY(id),
  
  CONSTRAINT uk_clients_cdocumentt_document UNIQUE(cod_document_types,document),
  CONSTRAINT fk_clients_document_t FOREIGN key(cod_document_type),
    REFERENCES arboles.documenttypes (id) 
    ON DELETE RESTRIC ON UPDATE RESTRIC

  CONSTRAINT fk_clients_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_clients_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES arboles.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_business_t FOREIGN KEY(cod_business_type) 
    REFERENCES arboles.businesstypes(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_list_l FOREIGN KEY(cod_list_location) 
    REFERENCES arboles.listlocationes(id)
    ON UPDATE RESTRICT ON DELETE RESTRIC,

  CONSTRAINT fk_clients_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT    

);


-- tabla 12
DROP TABLE arboles.clienttels;

CREATE TABLE arboles.clienttels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_client integer NOT NULL,
  phone NUMERIC(12) NOT NULL DEFAULT '',
  cod_tel_descrip SMALLINT NOT NULL DEFAULT '',
  CONSTRAINT pk_client_t PRIMARY KEY(id),

  CONSTRAINT fk_client_t_clients FOREIGN KEY(cod_client) 
    REFERENCES arboles.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_client_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES arboles.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT 
);

-- tabla 13
DROP TABLE arboles.loans;

CREATE TABLE arboles.loans
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  initial_value numeric(6,1) NOT NULL,
  interest numeric(3) NOT NULL,
  quota numeric(2) NOT NULL,
  balance numeric(6,1) NOT NULL,
  cod_loan_state SMALLINT NOT NULL,
  cod_client BIGINT NOT NULL,
  cod_collection integer NOT NULL,
  cod_user integer NOT NULL,

  CONSTRAINT pk_loans PRIMARY KEY(id),

  CONSTRAINT fk_loans_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES arboles.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_clients FOREIGN KEY(cod_client) 
    REFERENCES arboles.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_collectiones FOREIGN KEY(cod_user) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  
  CONSTRAINT ck_loans_initialv CHECK( initial_value > 0 AND initial_value%5 = 0) 
);


-- tabla 14
DROP TABLE arboles.payments;

CREATE TABLE arboles.payments
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  cod_loan BIGINT NOT NULL,
  cash numeric(6,1) NOT NULL,
  cod_user integer NOT NULL,
  cod_collection integer NOT NULL,

  CONSTRAINT pk_payments PRIMARY KEY(id),

  CONSTRAINT fk_payments_loans FOREIGN KEY(cod_loan) 
    REFERENCES arboles.loans(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_payments_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_payments_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  
  CONSTRAINT ck_payments_cash CHECK(cash != 0)

);



-- tabla 15
DROP TABLE arboles.cashs;

CREATE TABLE arboles.cashs
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  cod_collection integer NOT NULL,
  cod_user integer NOT NULL,
  cash numeric(6,1) NOT NULL,
  
  CONSTRAINT pk_cashs PRIMARY KEY(id),

  CONSTRAINT fk_cashs_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_cashs_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT ck_cashs_cash CHECK(cash != 0)

);



-- tabla 16
DROP TABLE arboles.expensedescrips;

CREATE TABLE arboles.expensedescrips
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_expense_d PRIMARY KEY(id),
  CONSTRAINT fk_expense_d_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_expense_d_ccollection_descrip UNIQUE(cod_collection,descrip)
);

-- tabla 17
DROP TABLE arboles.expense;

CREATE TABLE arboles.expense
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  cash numeric(6,1) NOT NULL,
  cod_expense_descrip BIGINT NOT NULL,
  cod_user integer NOT NULL,
  cod_collection integer NOT NULL,
  CONSTRAINT pk_expense PRIMARY KEY(id),

  CONSTRAINT fk_expense_expensed FOREIGN KEY(cod_expense_descrip) 
    REFERENCES arboles.expensedescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_expense_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_expense_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT ck_expense_cash CHECK(cash != 0)

);

