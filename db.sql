--
-- PostgreSQL database dump
--

-- Dumped from database version 13.0
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: cart_products; Type: TABLE; Schema: public; Owner: dzerinoleg1
--

CREATE TABLE public.cart_products (
    id integer NOT NULL,
    cart_id integer NOT NULL,
    product_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.cart_products OWNER TO dzerinoleg1;

--
-- Name: cart_products_id_seq; Type: SEQUENCE; Schema: public; Owner: dzerinoleg1
--

CREATE SEQUENCE public.cart_products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cart_products_id_seq OWNER TO dzerinoleg1;

--
-- Name: cart_products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dzerinoleg1
--

ALTER SEQUENCE public.cart_products_id_seq OWNED BY public.cart_products.id;


--
-- Name: carts; Type: TABLE; Schema: public; Owner: dzerinoleg1
--

CREATE TABLE public.carts (
    id integer NOT NULL,
    customer_id integer NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.carts OWNER TO dzerinoleg1;

--
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: dzerinoleg1
--

CREATE SEQUENCE public.carts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.carts_id_seq OWNER TO dzerinoleg1;

--
-- Name: carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dzerinoleg1
--

ALTER SEQUENCE public.carts_id_seq OWNED BY public.carts.id;


--
-- Name: products; Type: TABLE; Schema: public; Owner: dzerinoleg1
--

CREATE TABLE public.products (
    id integer NOT NULL,
    category text NOT NULL,
    gender text NOT NULL,
    price double precision NOT NULL,
    "photoUrl" character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    photo character varying(225)
);


ALTER TABLE public.products OWNER TO dzerinoleg1;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: dzerinoleg1
--

CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_id_seq OWNER TO dzerinoleg1;

--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dzerinoleg1
--

ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: dzerinoleg1
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text,
    email text NOT NULL,
    password character varying(64),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public.users OWNER TO dzerinoleg1;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: dzerinoleg1
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO dzerinoleg1;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: dzerinoleg1
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: cart_products id; Type: DEFAULT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.cart_products ALTER COLUMN id SET DEFAULT nextval('public.cart_products_id_seq'::regclass);


--
-- Name: carts id; Type: DEFAULT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.carts_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: cart_products; Type: TABLE DATA; Schema: public; Owner: dzerinoleg1
--

COPY public.cart_products (id, cart_id, product_id, "createdAt", "updatedAt") FROM stdin;
4	7	8	2020-10-14 16:00:30.838+03	2020-10-14 16:00:30.838+03
\.


--
-- Data for Name: carts; Type: TABLE DATA; Schema: public; Owner: dzerinoleg1
--

COPY public.carts (id, customer_id, "createdAt", "updatedAt") FROM stdin;
6	8	2020-10-14 15:57:00.891+03	2020-10-14 15:57:00.891+03
7	9	2020-10-14 16:00:18.839+03	2020-10-14 16:00:18.839+03
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: dzerinoleg1
--

COPY public.products (id, category, gender, price, "photoUrl", description, "createdAt", "updatedAt", photo) FROM stdin;
8	куртка	жіноча	677	a.lmcdn.ru/img236x341/M/A/MA002EWKCIJ3_11644544_1_v1.jpg	куртка літня,джинсова	2020-10-07 23:04:42.385+03	2020-10-07 23:04:42.385+03	http://a.lmcdn.ru/img236x341/M/A/MA002EWKCIJ3_11644544_1_v1.jpg
7	куртка	чоловіча	700	a.lmcdn.ru/img236x341/H/E/HE002EMIWVD3_10654831_1_v1.jpg	куртка літня	2020-10-07 23:03:08.126+03	2020-10-07 23:03:08.126+03	http://a.lmcdn.ru/img236x341/H/E/HE002EMIWVD3_10654831_1_v1.jpg
6	куртка	жіноча	1100	a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ1_11867726_1_v1_2x.jpg	Куртка утеплена	2020-10-07 23:01:46.605+03	2020-10-07 23:01:46.605+03	http://a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ1_11867726_1_v1_2x.jpg
5	куртка	жіноча	850	a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873490_1_v1_2x.jpg	Куртка утеплена	2020-10-07 22:59:06.209+03	2020-10-07 22:59:06.209+03	http://a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873490_1_v1_2x.jpg
4	куртка	чоловіча	1020	src="//a.lmcdn.ru/img236x341/J/A/JA391EMJQKO2_11689727_1_v1.jpg	куртка літня	2020-10-07 22:54:03.975+03	2020-10-07 22:54:03.975+03	http://a.lmcdn.ru/img236x341/J/A/JA391EMJQKO2_11689727_1_v1.jpg
19	штани	жіноча	1322	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg	Брюки спортивные	2020-10-08 18:02:01.47+03	2020-10-08 18:02:01.47+03	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg
2	куртка	жіноча	800	a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873491_2_v1_2x.jpg 	жіноча	2020-10-07 22:50:01.73+03	2020-10-07 22:50:01.73+03	http://a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873491_2_v1_2x.jpg
3	куртка	чоловіча	900	a.lmcdn.ru/img236x341/B/R/BR019EMJXDF6_11686091_2_v2_2x.jpg 	чоловіча	2020-10-07 22:52:17.218+03	2020-10-07 22:52:17.218+03	http://a.lmcdn.ru/img236x341/B/R/BR019EMJXDF6_11686091_2_v2_2x.jpg
1	куртка	жіноча	677	a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873491_2_v1_2x.jpg 	жіноча	2020-10-07 22:11:10.543+03	2020-10-07 22:11:10.543+03	http://a.lmcdn.ru/img236x341/Z/O/ZO011EWKEKQ2_11873491_2_v1_2x.jpg
20	штани	жіноча	850	http://a.lmcdn.ru/img236x341/P/U/PU053EWCJMS0_7065098_1_v1.jpg	PUMA, цвет: черный	2020-10-08 18:06:53.433+03	2020-10-08 18:06:53.433+03	http://a.lmcdn.ru/img236x341/P/U/PU053EWCJMS0_7065098_1_v1.jpg
9	штани	чоловіча	850	http://a.lmcdn.ru/img236x341/M/P/MP002XM1K6JJ_10832623_1_v1.jpeg	Arber, цвет: серый	2020-10-08 17:35:17.712+03	2020-10-08 17:35:17.712+03	http://a.lmcdn.ru/img236x341/M/P/MP002XM1K6JJ_10832623_1_v1.jpeg
10	штани	чоловіча	1100	http://a.lmcdn.ru/img236x341/P/U/PU053EMJZOV2_12010635_1_v1_2x.jpg" 	PUMA, цвет: черный. 	2020-10-08 17:37:23.461+03	2020-10-08 17:37:23.461+03	http://a.lmcdn.ru/img236x341/P/U/PU053EMJZOV2_12010635_1_v1_2x.jpg
11	штани	чоловіча	850	http://a.lmcdn.ru/img236x341/H/E/HE002EMKKEB5_11799999_1_v1.jpg	Брюки, Mango Man, цвет: черный. 	2020-10-08 17:39:12.358+03	2020-10-08 17:39:12.358+03	http://a.lmcdn.ru/img236x341/H/E/HE002EMKKEB5_11799999_1_v1.jpg
12	штани	чоловіча	890	http://a.lmcdn.ru/img236x341/B/U/BU014EMIWBP7_10639317_1_v1.jpg	Menswear London, цвет: синий	2020-10-08 17:40:32.901+03	2020-10-08 17:40:32.901+03	http://a.lmcdn.ru/img236x341/B/U/BU014EMIWBP7_10639317_1_v1.jpg
21	штани	жіноча	860	http://a.lmcdn.ru/img236x341/M/A/MA178EWHKGZ4_9927962_1_v1_2x.jpg	Брюки спортивные, Marks &amp; Spencer, цвет: черный. 	2020-10-08 18:08:38.757+03	2020-10-08 18:08:38.757+03	http://a.lmcdn.ru/img236x341/M/A/MA178EWHKGZ4_9927962_1_v1_2x.jpg
13	штани	чоловіча	1100	http://a.lmcdn.ru/img236x341/B/U/BU014EMIWBP7_10639317_1_v1.jpg	Menswear London, цвет: синий. 	2020-10-08 17:43:11.461+03	2020-10-08 17:43:11.461+03	http://a.lmcdn.ru/img236x341/B/U/BU014EMIWBP7_10639317_1_v1.jpg
14	штани	чоловіча	1222	http://a.lmcdn.ru/img236x341/H/E/HE002EMJYRJ2_11572357_1_v1.jpg	                Mango Man	2020-10-08 17:44:22.52+03	2020-10-08 17:44:22.52+03	http://a.lmcdn.ru/img236x341/H/E/HE002EMJYRJ2_11572357_1_v1.jpg
15	штани	чоловіча	900	http://a.lmcdn.ru/img236x341/M/P/MP002XM20NIH_11403634_1_v1.jpeg" 	Брюки спортивные 	2020-10-08 17:45:27.83+03	2020-10-08 17:45:27.83+03	http://a.lmcdn.ru/img236x341/M/P/MP002XM20NIH_11403634_1_v1.jpeg
16	штани	жіноча	1322	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg	Брюки спортивные	2020-10-08 17:57:42.318+03	2020-10-08 17:57:42.318+03	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg
17	штани	жіноча	1322	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg	Брюки спортивные	2020-10-08 17:59:37.855+03	2020-10-08 17:59:37.855+03	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg
18	штани	жіноча	1322	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg	Брюки спортивные	2020-10-08 18:01:50.97+03	2020-10-08 18:01:50.97+03	http://a.lmcdn.ru/img236x341/G/A/GA020EWTDX29_4840875_1_v3.jpg
22	штани	жіноча	900	http://a.lmcdn.ru/img389x562/A/D/AD093EWJLZS0_11640096_1_v1_2x.jpg" 	цвет: мультиколор. 	2020-10-08 18:10:33.242+03	2020-10-08 18:10:33.242+03	http://a.lmcdn.ru/img389x562/A/D/AD093EWJLZS0_11640096_1_v1_2x.jpg
23	штани	жіноча	1020	http://a.lmcdn.ru/img389x562/M/P/MP002XW1AOHM_5495441_1_v2.jpeg	Брюки, Zubrytskaya, цвет: красный	2020-10-08 18:11:29.606+03	2020-10-08 18:11:29.606+03	http://a.lmcdn.ru/img389x562/M/P/MP002XW1AOHM_5495441_1_v2.jpeg
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: dzerinoleg1
--

COPY public.users (id, name, email, password, "createdAt", "updatedAt") FROM stdin;
9	oleg	oleg.dz2171@gmail.com	123456	2020-10-14 16:00:18.596+03	2020-10-14 16:00:18.596+03
\.


--
-- Name: cart_products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dzerinoleg1
--

SELECT pg_catalog.setval('public.cart_products_id_seq', 4, true);


--
-- Name: carts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dzerinoleg1
--

SELECT pg_catalog.setval('public.carts_id_seq', 7, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dzerinoleg1
--

SELECT pg_catalog.setval('public.products_id_seq', 23, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: dzerinoleg1
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- Name: cart_products cart_products_pkey; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.cart_products
    ADD CONSTRAINT cart_products_pkey PRIMARY KEY (id);


--
-- Name: carts carts_customer_id_key; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_customer_id_key UNIQUE (customer_id);


--
-- Name: carts carts_pkey; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: dzerinoleg1
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

