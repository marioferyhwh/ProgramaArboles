
--
-- CREATE ROLE arbol WITH SUPERUSER LOGIN ENCRYPTED PASSWORD 'arboles';

-- CREATE DATABASE forest OWNER arbol;
-- insert into users(nick_name,email,password,cod_document_type,document) values('forest','forest','forest','CC',11111111111);


-- psql -d arboles -U arbol
-- arboles


-- tabla 1
DROP TABLE public.collections;

CREATE TABLE public.collections
(
  id serial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(256) DEFAULT '',
  active bool NOT NULL DEFAULT TRUE,
  balance_total numeric(7,1) NOT NULL DEFAULT 0,

  CONSTRAINT pk_collections PRIMARY KEY(id)
);





-- tabla 2
DROP TABLE public.user_levels;

CREATE TABLE user_levels
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  level varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_user_l PRIMARY KEY(id)
);





-- tabla 3
DROP TABLE public.loan_states;

CREATE TABLE public.loan_states
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  state varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_loan_s PRIMARY KEY(id)
);





-- tabla 4
DROP TABLE public.document_types;

CREATE TABLE public.document_types
(
  id varchar(3) NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_document_t PRIMARY KEY(id)
);





-- tabla 5
DROP TABLE public.tel_descrips;

CREATE TABLE public.tel_descrips
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(20) NOT NULL DEFAULT '',

  CONSTRAINT pk_tel_d PRIMARY KEY(id)
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
  nick_name varchar(50) NOT NULL DEFAULT '',
  email varchar(100) NOT NULL,
  password varchar(256) NOT NULL,
  cod_document_type varchar(3) NOT NULL DEFAULT 'CC',
  document NUMERIC(11) NOT NULL ,
  name varchar(50) NOT NULL DEFAULT '',

  CONSTRAINT pk_users PRIMARY KEY(id)
);






-- tabla 7
DROP TABLE public.business_types;

CREATE TABLE public.business_types
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(45) NOT NULL DEFAULT '',

  CONSTRAINT pk_business_t PRIMARY KEY(id)
);





-- tabla 8
DROP TABLE public.list_locations;

CREATE TABLE public.list_locations
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_list_l PRIMARY KEY(id)
);






-- tabla 9
DROP TABLE public.list_users;

CREATE TABLE public.list_users
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
  name VARCHAR(20) DEFAULT '',
  
  CONSTRAINT pk_list_u PRIMARY KEY(id)
);






-- tabla 10
DROP TABLE public.user_tels;

CREATE TABLE public.user_tels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_user integer NOT NULL,
  phone NUMERIC(12) NOT NULL,
  cod_tel_descrip SMALLINT NOT NULL DEFAULT 0,
  CONSTRAINT pk_user_t PRIMARY KEY(id)
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
  
  CONSTRAINT pk_clients PRIMARY KEY(id)
);






-- tabla 12
DROP TABLE public.client_tels;

CREATE TABLE public.client_tels
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_client integer NOT NULL,
  phone NUMERIC(12) NOT NULL,
  cod_tel_descrip SMALLINT NOT NULL,

  CONSTRAINT pk_client_t PRIMARY KEY(id)
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

  CONSTRAINT pk_loans PRIMARY KEY(id)
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

  CONSTRAINT pk_payments PRIMARY KEY(id)
);






-- tabla 15
DROP TABLE public.cashes;

CREATE TABLE public.cashes
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  cod_collection integer NOT NULL,
  cod_user integer NOT NULL,
  cash numeric(6,1) NOT NULL,
  
  CONSTRAINT pk_cashes PRIMARY KEY(id)
);





-- tabla 16
DROP TABLE public.expense_descrips;

CREATE TABLE public.expense_descrips
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  cod_collection integer NOT NULL,
  descrip varchar(11) NOT NULL DEFAULT '',

  CONSTRAINT pk_expense_d PRIMARY KEY(id)
);





-- tabla 17
DROP TABLE public.expenses;

CREATE TABLE public.expenses
(
  id bigserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp NOT NULL,
  cash numeric(6,1) NOT NULL,
  cod_expense_descrip BIGINT NOT NULL,
  cod_user integer NOT NULL,
  cod_collection integer NOT NULL,

  CONSTRAINT pk_expense PRIMARY KEY(id)
);


