# estructura de la base de datos

## backend

el backend se hace en go y se guarda en

[ProgramaArbolesBackend](https://github.com/marioferyhwh/ProgramaArbolesBackend
)
## collectiones 1 Listado de cuentas (árboles)(Cobros)

| Attribute     | Type         | Domain | Constraint | Null | Default | Observation                                                |
| ------------- | ------------ | ------ | ---------- | ---- | ------- | ---------------------------------------------------------- |
| id            | serial       |        | pk         | No   |         |
| created_at    | timestamp    |        |            | No   | now()   |
| updated_at    | timestamp    |        |            | yes  |         |
| delete_at     | timestamp    |        |            | yes  |         |
| descrip       | varchar(256) | 256    |            | no   |         | Descripciòn del cobro                                      |
| active        | bool         |        |            | no   | 1       | Estado del cobro                                           |
| balance_total | numeric(7,1) | 9      |            | no   |         | Saldo que falta por pagar de todos los prestamos del cobro |
