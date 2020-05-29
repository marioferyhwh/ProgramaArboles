

CREATE ROLE arbol WITH SUPERUSER LOGIN ENCRYPTED PASSWORD 'arboles';

CREATE DATABASE forest OWNER arbol;


-- psql -d arboles -U arbol
-- arboles

-- tabla 1
DROP TABLE public.collectiones;

CREATE TABLE public.collectiones
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
DROP TABLE public.userlevels;

CREATE TABLE userlevels
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
DROP TABLE public.loanstates;

CREATE TABLE public.loanstates
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
DROP TABLE public.documenttypes;

CREATE TABLE public.documenttypes
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
DROP TABLE public.teldescrips;

CREATE TABLE public.teldescrips
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
DROP TABLE public.users;

CREATE TABLE public.users
(
  id serial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  active bool DEFAULT TRUE,
  nickname varchar(50) NOT NULL DEFAULT '',
  email varchar(100) NOT NULL,
  password varchar(256) NOT NULL,
  cod_document_type varchar(3) NOT NULL DEFAULT 'CC',
  document NUMERIC(11) NOT NULL ,
  name varchar(50) NOT NULL DEFAULT '',

  CONSTRAINT pk_users PRIMARY KEY(id),
  CONSTRAINT uk_users_nickname UNIQUE(nickname),
  CONSTRAINT uk_users_email UNIQUE(email),
  CONSTRAINT uk_users_cdocumentt_document UNIQUE(cod_document_type,document),
  CONSTRAINT fk_users_document_t FOREIGN key(cod_document_type)
    REFERENCES public.documenttypes (id) 
    ON DELETE RESTRICT ON UPDATE RESTRICT
);


-- tabla 7
DROP TABLE public.businesstypes;

CREATE TABLE public.businesstypes
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
DROP TABLE public.listlocationes;

CREATE TABLE public.listlocationes
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_list_l PRIMARY KEY(id),
  CONSTRAINT fk_list_l_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_list_l_ccollection_descrip UNIQUE(cod_collection,descrip)
);


-- tabla 9
DROP TABLE public.listusers;

CREATE TABLE public.listusers
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  active bool DEFAULT TRUE,
  cod_user integer NOT NULL,
  cod_collection integer NOT NULL,
  cod_user_level SMALLINT NOT NULL DEFAULT 1,
  cash NUMERIC(6,1) NOT NULL DEFAULT 0,
  
  CONSTRAINT pk_list_u PRIMARY KEY(id),
  
  CONSTRAINT fk_list_u_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_list_u_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_list_u_user_l FOREIGN KEY(cod_user_level) 
    REFERENCES public.userlevels(id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  
  CONSTRAINT uk_list_u_cuser_ccollection UNIQUE(cod_user,cod_collection)
);


-- tabla 10
DROP TABLE public.usertels;

CREATE TABLE public.usertels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_user integer NOT NULL,
  phone NUMERIC(12) NOT NULL,
  cod_tel_descrip SMALLINT NOT NULL DEFAULT 0,
  CONSTRAINT pk_user_t PRIMARY KEY(id),

  CONSTRAINT fk_user_t_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_user_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES public.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_user_t_phone UNIQUE(phone),
  CONSTRAINT ck_user_t_phone CHECK(phone > 999999)

);



-- tabla 11
DROP TABLE public.clients;

CREATE TABLE public.clients
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  name varchar(50) NOT NULL,
  email varchar(100),
  cod_document_type varchar(3) DEFAULT 'CC',
  document NUMERIC(11),
  adress varchar(60) NOT NULL,
  loan_number SMALLINT NOT NULL DEFAULT 0,
  cod_collection integer NOT NULL,
  cod_loan_state SMALLINT NOT NULL DEFAULT 0,
  cod_business_type SMALLINT NOT NULL DEFAULT 0,
  cod_list_location BIGINT NOT NULL DEFAULT 0,
  cod_user integer NOT NULL,
  
  CONSTRAINT pk_clients PRIMARY KEY(id),
  
  CONSTRAINT uk_clients_cdocumentt_document UNIQUE(cod_document_type,document),
  CONSTRAINT fk_clients_document_t FOREIGN key(cod_document_type)
    REFERENCES public.documenttypes (id) 
    ON DELETE RESTRICT ON UPDATE RESTRICT,

  CONSTRAINT fk_clients_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_clients_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES public.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_business_t FOREIGN KEY(cod_business_type) 
    REFERENCES public.businesstypes(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_list_l FOREIGN KEY(cod_list_location) 
    REFERENCES public.listlocationes(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  CONSTRAINT ck_clients_loan_number CHECK(loan_number >= 0)

);


-- tabla 12
DROP TABLE public.clienttels;

CREATE TABLE public.clienttels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_client integer NOT NULL,
  phone NUMERIC(12) NOT NULL,
  cod_tel_descrip SMALLINT NOT NULL,
  CONSTRAINT pk_client_t PRIMARY KEY(id),

  CONSTRAINT fk_client_t_clients FOREIGN KEY(cod_client) 
    REFERENCES public.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_client_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES public.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,    
  CONSTRAINT ck_client_t_phone CHECK(phone > 999999)
);

-- tabla 13
DROP TABLE public.loans;

CREATE TABLE public.loans
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  initial_value numeric(6,1) NOT NULL,
  interest numeric(2) NOT NULL DEFAULT 20,
  quota numeric(2) NOT NULL,
  balance numeric(6,1) NOT NULL,
  cod_loan_state SMALLINT NOT NULL,
  cod_client BIGINT NOT NULL,
  cod_collection integer NOT NULL,
  cod_user integer NOT NULL,

  CONSTRAINT pk_loans PRIMARY KEY(id),

  CONSTRAINT fk_loans_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES public.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_clients FOREIGN KEY(cod_client) 
    REFERENCES public.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  
  CONSTRAINT ck_loans_initialv CHECK( initial_value > 0 AND initial_value%5 = 0),  
  CONSTRAINT ck_loans_interest CHECK( interest > 0),
  CONSTRAINT ck_loans_quota CHECK( quota > 0),
  CONSTRAINT ck_loans_balance CHECK( balance >= 0)
);


-- tabla 14
DROP TABLE public.payments;

CREATE TABLE public.payments
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
    REFERENCES public.loans(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_payments_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_payments_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  
  CONSTRAINT ck_payments_cash CHECK(cash > 0)

);



-- tabla 15
DROP TABLE public.cashs;

CREATE TABLE public.cashs
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
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_cashs_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT ck_cashs_cash CHECK(cash != 0)

);



-- tabla 16
DROP TABLE public.expensedescrips;

CREATE TABLE public.expensedescrips
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_expense_d PRIMARY KEY(id),
  CONSTRAINT fk_expense_d_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_expense_d_ccollection_descrip UNIQUE(cod_collection,descrip)
);

-- tabla 17
DROP TABLE public.expense;

CREATE TABLE public.expense
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
    REFERENCES public.expensedescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_expense_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_expense_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES public.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT ck_expense_cash CHECK(cash > 0)

);

