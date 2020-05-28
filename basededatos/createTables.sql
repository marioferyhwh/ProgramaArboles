

CREATE ROLE arbol
WITH SUPERUSER LOGIN ENCRYPTED PASSWORD 'arboles';
CREATE DATABASE arboles
OWNER arbol;

-- psql -d arboles -U arbol
-- arboles

DROP TABLE arboles.Collectiones;

CREATE TABLE arboles.Collectiones
(
  id serial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  descrip varchar(256) DEFAULT '',
  active bool NOT NULL DEFAULT TRUE,
  balance_total numeric(7,1) NOT NULL DEFAULT 0,
  CONSTRAINT pk_Collectiones PRIMARY KEY(id)
);


DROP TABLE arboles.UserLevels;

CREATE TABLE arboles.UserLevels
(
  id smallserial NOT NULL ,
  created_at timestamp NOT NULL DEFAULT now(),
  updated_at timestamp,
  delete_at timestamp,
  level varchar(11) DEFAULT '',
  CONSTRAINT pk_UserLevels PRIMARY KEY(id)
);
