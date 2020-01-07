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
	VALUES (nextval('clinic_id_seq'), 'Nikole Pašića/13', 'Novi Sad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Healty living', 5, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Šećer sokak/25', 'Sremska Mitrovica', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Health city', 4, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Bulevar Cara Dušana/1', 'Kraljevo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Medify', 6, 24, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Konstantinova/118', 'Niš', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Niš general hospital', 5, 20, 'Srbija');
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state)
	VALUES (nextval('clinic_id_seq'), 'Vladimira Iljiča Lenjina/17', 'Beograd', 'Gloria Lenin.', 'Nomino hospitium Lenin.', 3, 14, 'Srbija');

INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Melhiora Erdujheljija 2', 'Novi Sad', 'adminkc1@kcv.rs', 'Marko', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Perić', '1010990100010', true, true);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Gundulićeva 5', 'Jajce', 'adminkc2@kcv.rs', 'Ivan', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nikolovski', '1012991100010', true, false);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Kneza Miloša 3', 'Kosovska Mitrovica', 'adminkc3@kcv.rs', 'Marijana', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Mitrović', '1009992100010', true, false);

INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Kolubarska 7', 'Užice', 'adminc1@kcv.rs', 'Jagoda', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Bojović', '1011990100010', '1', true, true);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Serdara Janka Vukotića 6', 'Vranje', 'adminc2@kcv.rs', 'Nikola', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Rajić', '1110994100010', '1', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Kralja Petra I 50', 'Kruševac', 'adminc3@kcv.rs', 'Svetislav', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Preradović', '1111992100010', '4', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Sutjeska', 'Prizren', 'adminc4@kcv.rs', 'Milisav', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Danilović', '0506990100010', '5', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Vuka Karadžića 37', 'Valjevo', 'adminc5@kcv.rs', 'Jovanka', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Zečević', '1508993100010', '3', true, false);

INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews)
	VALUES (nextval('users_id_seq'), 'Veljka Petrovića 9', 'Loznica', 'doc1@kcv.rs', 'Rodoljub', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Obilić', '1005990100010', '1', true, true, '12:00', '20:00', 2, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews)
	VALUES (nextval('users_id_seq'), 'Njegoševa 16', 'Šabac', 'doc2@kcv.rs', 'Dragica', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Veričić', '1007990100010', '1', true, true, '7:00', '15:00', 0, 0);

INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0001', 'Acetaminophen', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0002', 'Adderall', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0003', 'Alprazolam', false);

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
	VALUES (nextval('type_of_examination_id_seq'), 'Digitorektalni pregled', '2000', 1);
INSERT INTO public.type_of_examination(
	id, name, price, clinic_id_id)
	VALUES (nextval('type_of_examination_id_seq'), 'Snimanje rentgenom', '3000', 1);
INSERT INTO public.type_of_examination(
	id, name, price, clinic_id_id)
	VALUES (nextval('type_of_examination_id_seq'), 'Pregled opsta praksa', '500', 1);

INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, kikiriki, penicilin, polen', 'A+', '1.50', '182', 'muski', '75');

INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576097092, 'Pacijent dosao na pregled, temp 38', 1, 1, 9, 1);

INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576097092, 'Pacijent dosao na pregled, temp 39', 1, 1, 9, 1);

INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id)
	VALUES (nextval('users_id_seq'), 'Mikloša Švalba 9', 'Subotica', 'patient1@kcv.rs', 'Lajos', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nagy', '1010997100010', true, true,1);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged)
	VALUES (nextval('users_id_seq'), 'Gavrila Principa 14', 'Vršac', 'patient2@kcv.rs', 'Franc', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Ferdinand', '1012996100010', true, false );


INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 1', '20', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 2', '30', 2);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 3', '50', 1);

INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted)
    VALUES (nextval('appointment_id_seq'), 1576097092 , 1576101600, 10 * 60 * 1000, 100, 1, 1, 11, 1, false, false);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted)
    VALUES (nextval('appointment_id_seq'), 1576097092, 1576098292, 20 * 60 * 1000, 100, 1, 1, 11, 2, false, false);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted)
    VALUES (nextval('appointment_id_seq'), 1575730800,1575731400, 10 * 60 * 1000, 100, 1, 1, 11, 3, false, false);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted)
    VALUES (nextval('appointment_id_seq'), 1576612800,1576613400, 10 * 60 * 1000, 100, 1, 1, 11, 3, false, false);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted)
    VALUES (nextval('appointment_id_seq'), 1576854000,1576854600, 10 * 60 * 1000, 100, 1, 1, null, 2, false, false);


INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 1);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 2);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 3);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (11, 4);

INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (1, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (2, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (3, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (4, 9);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (5, 9);

INSERT INTO public.clinics_patients(
    clinic_id, patient_id)
    VALUES (1, 11);
INSERT INTO public.clinics_patients(
    clinic_id, patient_id)
    VALUES (1, 12);

INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end)
	VALUES (nextval('users_id_seq'), 'Petefi Šandora 4', 'Sombor', 'nurse1@kcv.rs', 'Anikó', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Patarica', '1410995100010', '1', true, true, '12:00', '20:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end)
	VALUES (nextval('users_id_seq'), 'Karađorđeva', 'Mali Iđoš', 'nurse2@kcv.rs', 'Budimir', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Janković', '0110996100010', '1', true, true, '7:00', '15:00');

INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 1, 13, 9, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 2, 13, 9, 1, false);

INSERT INTO public.vacation(
	id, approved, end_date, start_date, medical_staff_id)
	VALUES (nextval('vacation_id_seq'), true, 1575731400, 1575385200, 13);
