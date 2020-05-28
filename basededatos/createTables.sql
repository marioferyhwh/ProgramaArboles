

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
  CONSTRAINT pk_userlevels PRIMARY KEY(id),
  CONSTRAINT uk_userlevels_level UNIQUE(level)
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
  CONSTRAINT pk_loanstates PRIMARY KEY(id),
  CONSTRAINT uk_loanstates_state UNIQUE(state)
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
  CONSTRAINT pk_documenttypes PRIMARY KEY(id),
  CONSTRAINT uk_documenttypes_descrip UNIQUE(descrip)
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
  CONSTRAINT pk_teldescrips PRIMARY KEY(id),
  CONSTRAINT uk_teldescrips_descrip UNIQUE(descrip)
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
  nickname varchar(50)  NOT NULL DEFAULT '',
  email varchar(100) NOT NULL,
  password varchar(256) NOT NULL,
  cod_document_types varchar(3) NOT NULL DEFAULT '',
  document varchar(11) NOT NULL DEFAULT '',
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
  CONSTRAINT pk_businesstypes PRIMARY KEY(id),
  CONSTRAINT uk_businesstypes_descrip UNIQUE(descrip)
);


