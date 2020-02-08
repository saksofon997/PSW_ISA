-- noinspection SqlDialectInspectionForFile

-- noinspection SqlNoDataSourceInspectionForFile

INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'ADMINCC'); /*1*/
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'ADMINC'); /*2*/
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'DOCTOR'); /*3*/
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'NURSE'); /*4*/
INSERT INTO public.authority(
    id, name)
    VALUES (nextval('authority_id_seq'), 'PATIENT'); /*5*/

INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state, version)
	VALUES (nextval('clinic_id_seq'), 'Nikole Pasica/13', 'Novi Sad', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Healty living', 13, 56, 'Srbija', 0);
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state, version)
	VALUES (nextval('clinic_id_seq'), 'Šećer Sokak/25', 'Sremska Mitrovica', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Health city', 16, 45, 'Srbija', 0);
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state, version)
	VALUES (nextval('clinic_id_seq'), 'Bulevar Cara Dušana/1', 'Kraljevo', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Medify', 3, 13, 'Srbija', 0);
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state, version)
	VALUES (nextval('clinic_id_seq'), 'Konstantinova/118', 'Niš', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Niš general hospital', 6, 21, 'Srbija', 0);
INSERT INTO public.clinic(
	id, address, city, description, name, number_of_reviews, number_of_stars, state, version)
	VALUES (nextval('clinic_id_seq'), 'Vladimira Iljiča Lenjina/17', 'Beograd', 'Gloria Lenin.', 'Nomino hospitium Lenin.', 3, 14, 'Srbija', 0);

INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Digitorektalni pregled', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Snimanje rentgenom', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Pregled opsta praksa', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Ultrazvuk', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Laboratorija', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Kardiološki pregled', false);
INSERT INTO public.type_of_examination(
	id, name, operation)
	VALUES (nextval('type_of_examination_id_seq'), 'Operacija debelog creva', true);


INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 1, '2000');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 2, '3000');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 3, '500');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 4, '1000');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 5, '4500');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 6, '1500');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (1, 7, '6000');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (2, 1, '2200');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (3, 2, '3300');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (2, 3, '1500');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (3, 4, '1050');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (2, 5, '4599');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (3, 6, '1500');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (4, 1, '1900');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (5, 2, '3100');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (4, 3, '600');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (5, 4, '1199');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (4, 5, '4800');
INSERT INTO public.clinic_type_of_examination(
    clinic_id, type_of_examination_id, price)
    VALUES (5, 6, '1300');

INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, kikiriki, penicilin, polen', 'A+', '1.50', '187', 'Male', '75');
INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, penicilin, polen, lateks', 'B-', '0.50', '182', 'Male', '75');
INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, kikiriki, polen', 'O-', '0.00', '178', 'Male', '65');
INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, kikiriki, penicilin', 'A+', '1.75', '183', 'Male', '75');
INSERT INTO public.medical_record(
	id, alergies, blood_type, diopter, height, sex, weight)
	VALUES (nextval('medical_record_id_seq'), 'laktoza, kikiriki, golubija pera', 'A+', '0.75', '188', 'Male', '95');

INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged) /*1*/
	VALUES (nextval('users_id_seq'), 'Melhiora Erdujheljija 2', 'Novi Sad', 'adminkc1@kcv.rs', 'Marko', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Perić', '1010990100010', true, true);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged) /*2*/
	VALUES (nextval('users_id_seq'), 'Gundulićeva 5', 'Jajce', 'adminkc2@kcv.rs', 'Ivan', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nikolovski', '1012991100010', true, false);
INSERT INTO public.clinic_center_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged) /*3*/
	VALUES (nextval('users_id_seq'), 'Kneza Miloša 3', 'Kosovska Mitrovica', 'adminkc3@kcv.rs', 'Marijana', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Mitrović', '1009992100010', true, false);

INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*4*/
	VALUES (nextval('users_id_seq'), 'Kolubarska 7', 'Užice', 'adminc1@kcv.rs', 'Jagoda', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Bojović', '1011990100010', '1', true, true);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*5*/
	VALUES (nextval('users_id_seq'), 'Serdara Janka Vukotića 6', 'Vranje', 'adminc2@kcv.rs', 'Nikola', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Rajić', '1110994100010', '1', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*6*/
	VALUES (nextval('users_id_seq'), 'Kralja Petra I 50', 'Kruševac', 'adminc3@kcv.rs', 'Svetislav', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Preradović', '1111992100010', '4', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*7*/
	VALUES (nextval('users_id_seq'), 'Sutjeska', 'Prizren', 'adminc4@kcv.rs', 'Milisav', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Danilović', '0506990100010', '5', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*8*/
	VALUES (nextval('users_id_seq'), 'Vuka Karadžića 37', 'Valjevo', 'adminc5@kcv.rs', 'Jovanka', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Zečević', '1508993100010', '3', true, false);
INSERT INTO public.clinic_administrator(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged) /*9*/
	VALUES (nextval('users_id_seq'), 'Bulevar Glavni 17', 'Užice', 'adminc6@kcv.rs', 'Marijana', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Bojanić', '1507993900210', '2', true, false);

INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*10*/
	VALUES (nextval('users_id_seq'), 'Veljka Petrovića 9', 'Loznica', 'doc1@kcv.rs', 'Rodoljub', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Obilić', '1005990100010', '1', '1', true, true, '12:00', '20:00', 43, 16, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*11*/
	VALUES (nextval('users_id_seq'), 'Njegoševa 16', 'Šabac', 'doc2@kcv.rs', 'Dragica', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Veričić', '1007990100010', '1', '2', true, true, '07:00', '23:00', 9, 2, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*12*/
	VALUES (nextval('users_id_seq'), 'Vuka Karadžića 37', 'Užice', 'doc3@kcv.rs', 'Jovanka', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Danilović', '1005990100010', '2', '1', true, true, '12:00', '20:00', 25, 8, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*13*/
	VALUES (nextval('users_id_seq'), 'Bulevar Glavni 17', 'Niš', 'doc4@kcv.rs', 'Dragana', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Filipović', '1007990100010', '2', '4', true, true, '21:00', '05:00', 37, 9, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*14*/
	VALUES (nextval('users_id_seq'), 'Kralja Petra I 50', 'Gnjilane', 'doc5@kcv.rs', 'Jagoda', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Rajić', '1005990100010', '3', '5', true, true, '06:00', '14:00', 6, 3, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*15*/
	VALUES (nextval('users_id_seq'), 'Njegoševa 22', 'Bor', 'doc6@kcv.rs', 'Nikola', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Ples', '1007990100010', '3', '6', true, true, '15:00', '23:00', 13, 3, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*16*/
	VALUES (nextval('users_id_seq'), 'Kralja Petra I 50', 'Vršac', 'doc7@kcv.rs', 'Jagoda', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Rajić', '1005990100010', '4', '5', true, true, '06:00', '14:00', 37, 10, 0);
INSERT INTO public.doctor(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, specialization, enabled, passwordchanged, shift_start, shift_end, number_of_stars, number_of_reviews, version) /*17*/
	VALUES (nextval('users_id_seq'), 'Njegoševa 12', 'Subotica', 'doc8@kcv.rs', 'Nikola', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Ples', '1007990100010', '1', '1', true, true, '15:00', '23:00', 13, 4, 0);

INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end) /*18*/
	VALUES (nextval('users_id_seq'), 'Petefi Šandora 4', 'Sombor', 'nurse1@kcv.rs', 'Anikó', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Patarica', '1410995100010', '1', true, true, '12:00', '20:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end) /*19*/
	VALUES (nextval('users_id_seq'), 'Karađorđeva 2', 'Mali Iđoš', 'nurse2@kcv.rs', 'Budimir', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Janković', '0110996100010', '2', true, true, '7:00', '15:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end) /*20*/
	VALUES (nextval('users_id_seq'), 'Mikloša Švalba 29', 'Prilika', 'nurse3@kcv.rs', 'Slobodan', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Milanović', '1410995100010', '3', true, true, '16:00', '00:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end) /*21*/
	VALUES (nextval('users_id_seq'), 'Gavrila Principa 14', 'Ivanjica', 'nurse4@kcv.rs', 'Milovan', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Jovanović', '0110996100010', '4', true, true, '01:00', '09:00');
INSERT INTO public.nurse(
	id, address, city, email, name, password, phone_number, state, surname, upin, clinic_id, enabled, passwordchanged, shift_start, shift_end) /*22*/
	VALUES (nextval('users_id_seq'), 'Dioklecijanova 59', 'Sremska Mitrovica', 'nurse5@kcv.rs', 'Anikó', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Milovanović', '1410995100010', '5', true, true, '10:00', '18:00');

INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id) /*23*/
	VALUES (nextval('users_id_seq'), 'Mikloša Švalba 9', 'Subotica', 'patient1@kcv.rs', 'Lajos', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nagy', '1010997100010', true, true, 1);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id) /*24*/
	VALUES (nextval('users_id_seq'), 'Gavrila Principa 14', 'Sarajevo', 'patient2@kcv.rs', 'Franc', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'BIH', 'Ferdinand', '1012996100010', true, true, 2);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id) /*25*/
	VALUES (nextval('users_id_seq'), 'Vuka Karadžića 37', 'Bor', 'patient3@kcv.rs', 'Aleksandar', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nagy', '1010997100010', true, true, 3);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id) /*26*/
	VALUES (nextval('users_id_seq'), 'Kralja Petra I 56', 'Gnjilane', 'patient4@kcv.rs', 'Petar', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Ferdinand', '1012996100010', true, true, 4);
INSERT INTO public.patient(
	id, address, city, email, name, password, phone_number, state, surname, upin, enabled, passwordchanged, medical_record_id) /*27*/
	VALUES (nextval('users_id_seq'), 'Mikloša Švalba 29', 'Priboj', 'patient5@kcv.rs', 'Mihajlo', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Nagy', '1010997100010', true, true, 5);

INSERT INTO public.user_authority( /*ADMINCC*/
    user_id, authority_id)
    VALUES (1, 1);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (2, 1);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (3, 1);
INSERT INTO public.user_authority( /*ADMINC*/
    user_id, authority_id)
    VALUES (4, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (5, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (6, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (7, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (8, 2);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (9, 2);
INSERT INTO public.user_authority( /*DOCTOR*/
    user_id, authority_id)
    VALUES (10, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (11, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (12, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (13, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (14, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (15, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (16, 3);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (17, 3);
INSERT INTO public.user_authority( /*NURSE*/
    user_id, authority_id)
    VALUES (18, 4);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (19, 4);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (20, 4);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (21, 4);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (22, 4);
INSERT INTO public.user_authority( /*PATIENT*/
    user_id, authority_id)
    VALUES (23, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (24, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (25, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (26, 5);
INSERT INTO public.user_authority(
    user_id, authority_id)
    VALUES (27, 5);

INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0001', 'Acetaminophen', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0002', 'Adderall', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0003', 'Alprazolam', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0004', 'Daktanol', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0005', 'Lidokain', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0006', 'Orvagil', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0007', 'Sinacilin', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0008', 'Ibuprofen', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0009', 'Paracetamol', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0010', 'Palitrex', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0011', 'Pantenol', false);
INSERT INTO public.medication_dictionary(
	id, code, name, deleted)
	VALUES (nextval('medication_dictionary_id_seq'), '0012', 'Flogocit', false);

INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'K55.0', 'Akutne vaskularne bolesti creva');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'N28.0', 'Nedovoljna prokrvljenost (ishemija) i izumiranje tkiva bubrega');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'A31.1', 'Infekcija kože uzrokovana mikobakterijama');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'N56.0', 'Typhus abdominalis');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'N28.4', 'Enterocolitis per Clostridium difficile');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'I77.1', 'Botulismus');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'J87.7', 'Tuberculosis pulmonum per culturam solum confirmata');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'L01.0', 'Osteoporosis, non specificata');
INSERT INTO public.diagnosis_dictionary(
	id, code, description)
	VALUES (nextval('diagnosis_dictionary_id_seq'), 'Z30.0', 'Opšte konsultovanje i savet o kontracepiji');

INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576097092, 'Pacijent dosao na pregled, temp 38', 1, 1, 10, 1);
INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576148092, 'Pacijent dosao na pregled, bolovi u predelu stomaka', 1, 1, 11, 2);
INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576168092, 'Pacijent dosao na pregled, unutrasnje krvarenje', 1, 2, 10, 3);
INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576228092, 'Pacijent dosao na pregled, potrebna laboratorija', 1, 3, 11, 4);
INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576238092, 'Pacijent dosao na pregled, potreban ultrazvuk', 1, 4, 10, 5);
INSERT INTO public.examination_report(
	id, date_and_time, report_description, clinic_id, medical_record_id, doctor_id, type_of_examination_id)
	VALUES (nextval('examination_report_id_seq'),1576255092, 'Pacijent dosao na pregled, potreban rentgen', 1, 5, 11, 6);

INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 11', '20', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 12', '30', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 13', '55', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 14', '62', 1);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 21', '23', 2);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 22', '53', 2);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 31', '21', 3);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 41', '88', 4);
INSERT INTO public.ordination(
	id, name, number, clinic_id)
	VALUES (nextval('ordination_id_seq'), 'Ordinacija 51', '67', 5);

INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581336000, 1581337200, 20 * 60 * 1000, 1000, 0, 1, 1, 23, 2, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581339600 , 1581340200, 10 * 60 * 1000, 1000, 0, 1, 1, 23, 1, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581951600 , 1581952200, 10 * 60 * 1000, 3000, 0, 1, 1, 23, 2, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581961800, 1581963600, 20 * 60 * 1000, 2000, 0, 1, 1, 23, 3, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581958800, 1581960000, 20 * 60 * 1000, 1000, 0, 1, 1, 23, 3, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1582027200, 1582027800, 10 * 60 * 1000, 100, 20, 1, 1, null, 2, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1580742000, 1580743200, 20 * 60 * 1000, 1600, 0, 1, 1, 23, 4, true, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1580745600, 1580746200, 10 * 60 * 1000, 2200, 0, 3, 1, 23, 1, true, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581004800, 1581005400, 10 * 60 * 1000, 1000, 0, 2, 1, 23, 5, true, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581462000, 1581548399, 24 * 60 * 60 * 1000, 1000, 0, 1, 1, 24, 5, false, false, true);
INSERT INTO public.appointment(
    id, starting_date_and_time,ending_date_and_time, duration, price, discount, ordination_id, clinic_id, patient_id, type_of_examination_id, completed, deleted, confirmed)
    VALUES (nextval('appointment_id_seq'), 1581602400, 1581603000, 10 * 60 * 1000, 1000, 0, 1, 1, 24, 5, false, false, true);

INSERT INTO public.appointment_request(
    id, starting_date_and_time, ending_date_and_time, duration, price, doctor_id, clinic_id, patient_id, type_of_examination_id, approved)
    VALUES (nextval('appointment_request_id_seq'), 1581292800, 1581293400, 10 * 60 * 1000, 500, 10, 1, 23, 3, false);
INSERT INTO public.appointment_request(
    id, starting_date_and_time, ending_date_and_time, duration, price, doctor_id, clinic_id, patient_id, type_of_examination_id, approved)
    VALUES (nextval('appointment_request_id_seq'), 1581346800, 1581348000, 20 * 60 * 1000, 2000, 10, 1, 23, 2, false);
INSERT INTO public.appointment_request(
    id, starting_date_and_time, ending_date_and_time, duration, price, doctor_id, clinic_id, patient_id, type_of_examination_id, approved)
    VALUES (nextval('appointment_request_id_seq'), 1581346800, 1581348000, 20 * 60 * 1000, 2000, 10, 1, 23, 7, false);
INSERT INTO public.appointment_request(
    id, starting_date_and_time, ending_date_and_time, duration, price, doctor_id, clinic_id, patient_id, type_of_examination_id, approved)
    VALUES (nextval('appointment_request_id_seq'), 1581346800, 0, 0, 2000, 11, 1, 23, 5, false);
INSERT INTO public.appointment_request(
    id, starting_date_and_time, ending_date_and_time, duration, price, doctor_id, clinic_id, patient_id, type_of_examination_id, approved)
    VALUES (nextval('appointment_request_id_seq'), 1581519600, 0, 0, 2000, 10, 1, 23, 2, false);

INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (23, 1);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (23, 2);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (23, 3);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (23, 4);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (24, 10);
INSERT INTO public.patients_pending_appointments(
    patient_id, appointment_id)
    VALUES (24, 11);

INSERT INTO public.patients_finished_appointments(
    patient_id, appointment_id)
    VALUES (23, 7);
INSERT INTO public.patients_finished_appointments(
    patient_id, appointment_id)
    VALUES (23, 8);
INSERT INTO public.patients_finished_appointments(
    patient_id, appointment_id)
    VALUES (23, 9);

INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (1, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (2, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (3, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (4, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (5, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (6, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (7, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (8, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (9, 10);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (10, 11);
INSERT INTO public.appointment_doctors(
    appointment_id, doctor_id)
    VALUES (11, 11);

INSERT INTO public.clinic_patient(
    clinic_id, patient_id, rated, stars)
    VALUES (1, 23, false, 0);
INSERT INTO public.clinic_patient(
    clinic_id, patient_id, rated, stars)
    VALUES (1, 24, false, 0);

INSERT INTO public.doctor_patient(
    doctor_id, patient_id, rated, stars)
    VALUES (10, 23, false, 0);
INSERT INTO public.doctor_patient(
    doctor_id, patient_id, rated, stars)
    VALUES (11, 24, false, 0);

INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 1, 18, 10, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 2, 18, 10, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 3, 19, 11, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 4, 19, 11, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 5, 20, 12, 1, false);
INSERT INTO public.prescription(
	id, medication_id, nurse_id, doctor_id, clinic_id, approved)
	VALUES (nextval('prescription_id_seq'), 6, 20, 12, 1, false);

INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1575385200, 1575731400, 10, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1581465600, 1581807000, 10, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1583020800, 1583362000, 10, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1575731400, 1575385200, 18, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1581465600, 1582070400, 18, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), true, 1583020800, 1583625600, 18, 0);
INSERT INTO public.vacation(
	id, approved, start_date, end_date, medical_staff_id, version)
	VALUES (nextval('vacation_id_seq'), false, 1584745200, 1584918000, 10, 0);

INSERT INTO public.registration_request(
	id, address, city, email, name, password, phone_number, state, surname, upin, approved, version)
	VALUES (nextval('registration_request_id_seq'), 'Bulevar Oslobodjenja 9', 'Novi Sad', 'patienttest@kcv.rs', 'Marko', '$2y$10$ahB446esJK/dBa0AoJlMq.F.i9s7D5/4089gX34SC4fEpvshC3T7S', '067/123',  'Srbija', 'Ivanovic', '1010997100010', false, 0);
