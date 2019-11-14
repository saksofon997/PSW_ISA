INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Ulica/broj1', 'Grad1', 'Opis klinike 1', 'Klinika1', 5, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Ulica/broj2', 'Grad2', 'Opis klinike 2', 'Klinika2', 4, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Ulica/broj3', 'Grad3', 'Opis klinike 3', 'Klinika3', 6, 24, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Ulica/broj4', 'Grad4', 'Opis klinike 4', 'Klinika4', 5, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Ulica/broj5', 'Grad5', 'Opis klinike 5', 'Klinika5', 3, 14, 'Srbija');

INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin)
	VALUES (1, 'AdresaKcAdmina1', 'Grad1', 'adminkc1@kcv.rs', 'ImeKcAdmina1', '123456', '067/123', 'ADMINCC', 'Srbija', 'Prezime1', '1');
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin)
	VALUES (2, 'AdresaKcAdmina3', 'Grad2', 'adminkc2@kcv.rs', 'ImeKcAdmina2', '123456', '067/123', 'ADMINCC', 'Srbija', 'Prezime2', '2');
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin)
	VALUES (3, 'AdresaKcAdmina3', 'Grad2', 'adminkc3@kcv.rs', 'ImeKcAdmina3', '123456', '067/123', 'ADMINCC', 'Srbija', 'Prezime3', '3');

INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin, clinic_id)
	VALUES (1, 'Ulica1', 'Grad1', 'adminc1@kcv.rs', 'ImeAdmina1', '123456', '067/123', 'ADMINC', 'Srbija', 'Prezime1', '21', '1');
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin, clinic_id)
	VALUES (2, 'Ulica2', 'Grad2', 'adminc2@kcv.rs', 'ImeAdmina2', '123456', '067/123', 'ADMINC', 'Srbija', 'Prezime2', '22', '1');
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin, clinic_id)
	VALUES (3, 'Ulica3', 'Grad3', 'adminc3@kcv.rs', 'ImeAdmina3', '123456', '067/123', 'ADMINC', 'Srbija', 'Prezime3', '23', '4');
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin, clinic_id)
	VALUES (4, 'Ulica4', 'Grad4', 'adminc4@kcv.rs', 'ImeAdmina4', '123456', '067/123', 'ADMINC', 'Srbija', 'Prezime4', '24', '5');
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, role, state, surname, upin, clinic_id)
	VALUES (5, 'Ulica5', 'Grad5', 'adminc5@kcv.rs', 'ImeAdmina5', '123456', '067/123', 'ADMINC', 'Srbija', 'Prezime5', '25', '3');
