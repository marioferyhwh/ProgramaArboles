

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
  CONSTRAINT pk_userl PRIMARY KEY(id),
  CONSTRAINT uk_userl_level UNIQUE(level)
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
  CONSTRAINT pk_loans PRIMARY KEY(id),
  CONSTRAINT uk_loans_state UNIQUE(state)
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
  CONSTRAINT pk_documentt PRIMARY KEY(id),
  CONSTRAINT uk_documentt_descrip UNIQUE(descrip)
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
  CONSTRAINT pk_teld PRIMARY KEY(id),
  CONSTRAINT uk_teld_descrip UNIQUE(descrip)
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
  cod_document_types varchar(3) NOT NULL DEFAULT '',
  document NUMERIC(11) NOT NULL DEFAULT '',
  name varchar(50) NOT NULL DEFAULT '',
  CONSTRAINT pk_users PRIMARY KEY(id),
  CONSTRAINT uk_users_nickname UNIQUE(nickname),
  CONSTRAINT uk_users_email UNIQUE(email),
  CONSTRAINT uk_users_cdt_document UNIQUE(cod_document_types,document),
  CONSTRAINT uk_users_name UNIQUE(name)
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
  CONSTRAINT pk_businesst PRIMARY KEY(id),
  CONSTRAINT uk_businesst_descrip UNIQUE(descrip)
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
  CONSTRAINT pk_listl PRIMARY KEY(id),
  CONSTRAINT fk_listl_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,
  CONSTRAINT uk_listl_cc_descrip UNIQUE(cod_collection,descrip)
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
  
  CONSTRAINT pk_listu PRIMARY KEY(id),
  
  CONSTRAINT fk_listu_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_listu_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_listu_userl FOREIGN KEY(cod_user_level) 
    REFERENCES arboles.userlevels(id)
    ON UPDATE CASCADE ON DELETE RESTRICT,
  
  CONSTRAINT uk_listu_cc_descrip UNIQUE(cod_user,cod_collection)
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
  CONSTRAINT pk_usert PRIMARY KEY(id),

  CONSTRAINT fk_usert_users FOREIGN KEY(cod_user) 
    REFERENCES arboles.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_usert_teld FOREIGN KEY(cod_tel_descrip) 
    REFERENCES arboles.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

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
  cc NUMERIC(11),
  adress varchar(60) NOT NULL,
  loan_number SMALLINT NOT NULL DEFAULT 0,
  cod_collection integer NOT NULL,
  cod_loan_state SMALLINT NOT NULL DEFAULT 0,
  cod_business_type SMALLINT NOT NULL DEFAULT 0,
  cod_list_location BIGINT NOT NULL DEFAULT 0,
  
  CONSTRAINT pk_clients PRIMARY KEY(id),
  
  CONSTRAINT fk_clients_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,
  
  CONSTRAINT fk_clients_loans FOREIGN KEY(cod_loan_state) 
    REFERENCES arboles.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_businesst FOREIGN KEY(cod_business_type) 
    REFERENCES arboles.businesstypes(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT,

  CONSTRAINT fk_clients_listlocationes FOREIGN KEY(cod_location_list) 
    REFERENCES arboles.listlocationes(id)
    ON UPDATE RESTRICT ON DELETE RESTRIC
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
  CONSTRAINT pk_clientt PRIMARY KEY(id),

  CONSTRAINT fk_clientt_clients FOREIGN KEY(cod_client) 
    REFERENCES arboles.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_clientt_teld FOREIGN KEY(cod_tel_descrip) 
    REFERENCES arboles.teldescrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

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
  CONSTRAINT pk_loans PRIMARY KEY(id),

  CONSTRAINT fk_loans_loans FOREIGN KEY(cod_loan_state) 
    REFERENCES arboles.loanstates(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_clients FOREIGN KEY(cod_client) 
    REFERENCES arboles.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

  CONSTRAINT fk_loans_collectiones FOREIGN KEY(cod_collection) 
    REFERENCES arboles.collectiones(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ,

);