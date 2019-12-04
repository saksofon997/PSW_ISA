INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'ADMINCC');
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'ADMINC');
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'DOCTOR');
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'NURSE');
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'PATIENT');

INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (1, 1);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (2, 1);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (4, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (11, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (12, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (9, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (10, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (13, 4);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (14, 4);

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
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'AdresaKcAdmina1', 'Grad1', 'adminkc1@kcv.rs', 'ImeKcAdmina1', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime1', '1', true, true);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'AdresaKcAdmina2', 'Grad2', 'adminkc2@kcv.rs', 'ImeKcAdmina2', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime2', '2', true, false);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'AdresaKcAdmina3', 'Grad3', 'adminkc3@kcv.rs', 'ImeKcAdmina3', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime3', '3', true, false);

INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica1', 'Grad1', 'adminc1@kcv.rs', 'ImeAdmina1', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime1', '21', '1', true, true);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica2', 'Grad2', 'adminc2@kcv.rs', 'ImeAdmina2', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime2', '22', '1', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica3', 'Grad3', 'adminc3@kcv.rs', 'ImeAdmina3', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime3', '23', '4', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica4', 'Grad4', 'adminc4@kcv.rs', 'ImeAdmina4', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime4', '24', '5', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica5', 'Grad5', 'adminc5@kcv.rs', 'ImeAdmina5', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime5', '25', '3', true, false);

INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews)
	VALUES (nextval('users_id_seq'), 'DocAddress1', 'Grad1', 'doc1@kcv.rs', 'ImeDoc1', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime1', '1', '1', true, true, '12:00', '20:00', 2, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews)
	VALUES (nextval('users_id_seq'), 'DocAddress2', 'Grad2', 'doc2@kcv.rs', 'ImeDoc2', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime2', '1', '1', true, true, '7:00', '15:00', 0, 0);

INSERT INTO public.medication_dictionary(
	id, code, name)
	VALUES (nextval('medication_dictionary_id_seq'), '0001', 'Acetaminophen');
INSERT INTO public.medication_dictionary(
	id, code, name)
	VALUES (nextval('medication_dictionary_id_seq'), '0002', 'Adderall');
INSERT INTO public.medication_dictionary(
	id, code, name)
	VALUES (nextval('medication_dictionary_id_seq'), '0003', 'Alprazolam');

INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'K55.0', 'Akutne vaskularne bolesti creva');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'N28.0', 'Nedovoljna prokrvljenost (ishemija) i izumiranje tkiva bubrega');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'A31.1', 'Infekcija kože uzrokovana mikobakterijama');

INSERT INTO public.type_of_examination(
	id, name, price, clinic_id_id)
	VALUES (nextval('type_of_examination_id_seq'), 'Pregled prostate', '2000', 1);
INSERT INTO public.type_of_examination(
	id, name, price, clinic_id_id)
	VALUES (nextval('type_of_examination_id_seq'), 'Snimanje rentgenom', '3000', 2);
INSERT INTO public.type_of_examination(
	id, name, price, clinic_id_id)
	VALUES (nextval('type_of_examination_id_seq'), 'Pregled opsta praksa', '500', 1);

INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica1', 'Grad1', 'patient1@kcv.rs', 'ImePacijenta1', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime1', '21', true, true);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Ulica2', 'Grad2', 'patient2@kcv.rs', 'ImePacijenta2', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime2', '22', true, false);


INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija1', '20', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija2', '30', 2);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija3', '50', 1);

INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, appointment_type)
    VALUES (nextval('appointment_id_seq'), 1575385200, 1575385800, 5 * 60 * 1000, 100, 1, 1, 11, 1, false, 'EX');
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, appointment_type)
    VALUES (nextval('appointment_id_seq'), 1575558000, 1575558600, 5 * 60 * 1000, 100, 1, 1, 11, 2, false, 'EX');
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, appointment_type)
    VALUES (nextval('appointment_id_seq'), 1575730800,1575731400, 5 * 60 * 1000, 100, 1, 1, 11, 3, false, 'EX');

INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 1);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 2);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 3);

INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (1, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (2, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (3, 9);

INSERT INTO public.clinics_patients(
    clinic_id, patient_id)
    VALUES (1, 11);
INSERT INTO public.clinics_patients(
    clinic_id, patient_id)
    VALUES (1, 12);

INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end)
	VALUES (nextval('users_id_seq'), 'NurseA1', 'Grad1', 'nurse1@kcv.rs', 'Nurse1', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime1', '1', '1', true, true, '12:00', '20:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end)
	VALUES (nextval('users_id_seq'), 'NurseA2', 'Grad2', 'nurse2@kcv.rs', 'Nurse2', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Prezime2', '1', '1', true, true, '7:00', '15:00');
