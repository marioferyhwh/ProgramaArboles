
--
ALTER TABLE public.user_levels ADD
  CONSTRAINT uk_user_l_level UNIQUE(level);

--
ALTER TABLE public.loan_states ADD
  CONSTRAINT uk_loan_s_state UNIQUE(state);

--
ALTER TABLE public.document_types ADD
  CONSTRAINT uk_document_t_descrip UNIQUE(descrip);

--
ALTER TABLE public.tel_descrips ADD
  CONSTRAINT uk_tel_d_descrip UNIQUE(descrip);

--
ALTER TABLE public.users ADD
  CONSTRAINT uk_users_nickname UNIQUE(nickname);

ALTER TABLE public.users ADD
  CONSTRAINT uk_users_email UNIQUE(email);

ALTER TABLE public.users ADD
  CONSTRAINT uk_users_cdocumentt_document UNIQUE(cod_document_type,document);

ALTER TABLE public.users ADD
  CONSTRAINT fk_users_document_t FOREIGN key(cod_document_type)
    REFERENCES public.document_types (id) 
    ON DELETE RESTRICT ON UPDATE RESTRICT;

--
ALTER TABLE public.business_types ADD
  CONSTRAINT uk_business_t_descrip UNIQUE(descrip);

--
ALTER TABLE public.list_locations ADD
  CONSTRAINT fk_list_l_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.list_locations ADD
  CONSTRAINT uk_list_l_ccollection_descrip UNIQUE(cod_collection,descrip);

--
ALTER TABLE public.list_users ADD
  CONSTRAINT fk_list_u_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;
  
ALTER TABLE public.list_users ADD
  CONSTRAINT fk_list_u_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;
  
ALTER TABLE public.list_users ADD
  CONSTRAINT fk_list_u_user_l FOREIGN KEY(cod_user_level) 
    REFERENCES public.user_levels(id)
    ON UPDATE CASCADE ON DELETE RESTRICT;
  
ALTER TABLE public.list_users ADD
  CONSTRAINT uk_list_u_cuser_ccollection UNIQUE(cod_user,cod_collection);

-- 
ALTER TABLE public.user_tels ADD
  CONSTRAINT fk_user_t_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ;

ALTER TABLE public.user_tels ADD
  CONSTRAINT fk_user_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES public.tel_descrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ;

ALTER TABLE public.user_tels ADD
  CONSTRAINT uk_user_t_phone UNIQUE(phone);

ALTER TABLE public.user_tels ADD
  CONSTRAINT ck_user_t_phone CHECK(phone > 999999);

--11
ALTER TABLE public.clients ADD
  CONSTRAINT uk_clients_cdocumentt_document UNIQUE(cod_document_type,document);

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_document_t FOREIGN key(cod_document_type)
    REFERENCES public.document_types (id) 
    ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES public.loan_states(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_business_t FOREIGN KEY(cod_business_type) 
    REFERENCES public.business_types(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_list_l FOREIGN KEY(cod_list_location) 
    REFERENCES public.list_locations(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT fk_clients_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.clients ADD
  CONSTRAINT ck_clients_loan_number CHECK(loan_number >= 0);


--12
ALTER TABLE public.client_tels ADD
  CONSTRAINT fk_client_t_clients FOREIGN KEY(cod_client) 
    REFERENCES public.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.client_tels ADD
  CONSTRAINT fk_client_t_tel_d FOREIGN KEY(cod_tel_descrip) 
    REFERENCES public.tel_descrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.client_tels ADD
  CONSTRAINT ck_client_t_phone CHECK(phone > 999999);


--13
ALTER TABLE public.loans ADD
  CONSTRAINT fk_loans_loan_s FOREIGN KEY(cod_loan_state) 
    REFERENCES public.loan_states(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.loans ADD
  CONSTRAINT fk_loans_clients FOREIGN KEY(cod_client) 
    REFERENCES public.clients(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.loans ADD
  CONSTRAINT fk_loans_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.loans ADD
  CONSTRAINT fk_loans_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.loans ADD
  CONSTRAINT ck_loans_initialv CHECK( initial_value > 0 AND initial_value%5 = 0);

ALTER TABLE public.loans ADD
  CONSTRAINT ck_loans_interest CHECK( interest > 0);

ALTER TABLE public.loans ADD
  CONSTRAINT ck_loans_quota CHECK( quota > 0);

ALTER TABLE public.loans ADD
  CONSTRAINT ck_loans_balance CHECK( balance >= 0);


--14
ALTER TABLE public.payments ADD
  CONSTRAINT fk_payments_loans FOREIGN KEY(cod_loan) 
    REFERENCES public.loans(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.payments ADD
  CONSTRAINT fk_payments_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE public.payments ADD

  CONSTRAINT fk_payments_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;
  
ALTER TABLE public.payments ADD
  CONSTRAINT ck_payments_cash CHECK(cash > 0);


--15
ALTER TABLE public.cashes ADD
  CONSTRAINT fk_cashes_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.cashes ADD
  CONSTRAINT fk_cashes_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.cashes ADD
  CONSTRAINT ck_cashes_cash CHECK(cash != 0);


--16
ALTER TABLE public.expense_descrips ADD
  CONSTRAINT fk_expense_d_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ;

ALTER TABLE public.expense_descrips ADD
  CONSTRAINT uk_expense_d_ccollection_descrip UNIQUE(cod_collection,descrip);


--17
ALTER TABLE public.expenses ADD
  CONSTRAINT fk_expense_expensed FOREIGN KEY(cod_expense_descrip) 
    REFERENCES public.expense_descrips(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ;

ALTER TABLE public.expenses ADD
  CONSTRAINT fk_expense_users FOREIGN KEY(cod_user) 
    REFERENCES public.users(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT ;

ALTER TABLE public.expenses ADD
  CONSTRAINT fk_expense_collections FOREIGN KEY(cod_collection) 
    REFERENCES public.collections(id)
    ON UPDATE RESTRICT ON DELETE RESTRICT;

ALTER TABLE public.expenses ADD
  CONSTRAINT ck_expense_cash CHECK(cash > 0);








