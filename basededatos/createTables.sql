

CREATE ROLE arbol
WITH SUPERUSER LOGIN ENCRYPTED PASSWORD 'arboles';
CREATE DATABASE arboles
OWNER arbol;

-- psql -d arboles -U arbol
-- arboles

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


DROP TABLE arboles.userlevels;

CREATE TABLE arboles.userlevels
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  level varchar(11) DEFAULT '',
  CONSTRAINT pk_userlevels PRIMARY KEY(id)
);

DROP TABLE arboles.loanstates;

CREATE TABLE arboles.loanstates
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  state varchar(20) DEFAULT '',
  CONSTRAINT pk_loanstates PRIMARY KEY(id)
);

DROP TABLE arboles.documenttypes;

CREATE TABLE arboles.documenttypes
(
  id varchar(3) NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(20) DEFAULT '',
  CONSTRAINT pk_documenttypes PRIMARY KEY(id)
);

