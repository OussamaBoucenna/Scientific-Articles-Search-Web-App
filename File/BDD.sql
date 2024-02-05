--
-- PostgreSQL database cluster dump
--

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Drop databases (except postgres and template1)
--

DROP DATABASE uchiha;




--
-- Drop roles
--

DROP ROLE uchiha;


--
-- Roles
--

CREATE ROLE uchiha;
ALTER ROLE uchiha WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'md548fa8179976426b6cbfe17019a9232ed';






--
-- Databases
--

--
-- Database "template1" dump
--

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

UPDATE pg_catalog.pg_database SET datistemplate = false WHERE datname = 'template1';
DROP DATABASE template1;
--
-- Name: template1; Type: DATABASE; Schema: -; Owner: uchiha
--

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE template1 OWNER TO uchiha;

\connect template1

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

--
-- Name: DATABASE template1; Type: COMMENT; Schema: -; Owner: uchiha
--

COMMENT ON DATABASE template1 IS 'default template for new databases';


--
-- Name: template1; Type: DATABASE PROPERTIES; Schema: -; Owner: uchiha
--

ALTER DATABASE template1 IS_TEMPLATE = true;


\connect template1

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

--
-- Name: DATABASE template1; Type: ACL; Schema: -; Owner: uchiha
--

REVOKE CONNECT,TEMPORARY ON DATABASE template1 FROM PUBLIC;
GRANT CONNECT ON DATABASE template1 TO PUBLIC;


--
-- PostgreSQL database dump complete
--

--
-- Database "postgres" dump
--

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

DROP DATABASE postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: uchiha
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO uchiha;

\connect postgres

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

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: uchiha
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- PostgreSQL database dump complete
--

--
-- Database "uchiha" dump
--

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

--
-- Name: uchiha; Type: DATABASE; Schema: -; Owner: uchiha
--

CREATE DATABASE uchiha WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE uchiha OWNER TO uchiha;

\connect uchiha

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
-- Name: item; Type: TABLE; Schema: public; Owner: uchiha
--

CREATE TABLE public.item (
    id integer NOT NULL,
    title character varying,
    description character varying,
    owner_id integer,
    checked boolean,
    authors character varying[],
    keywords character varying[],
    url character varying,
    text_integral character varying,
    nombre_favoris integer,
    "references" character varying[],
    date_publication date
);


ALTER TABLE public.item OWNER TO uchiha;

--
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: uchiha
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO uchiha;

--
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: uchiha
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- Name: mod; Type: TABLE; Schema: public; Owner: uchiha
--

CREATE TABLE public.mod (
    id integer NOT NULL,
    email character varying NOT NULL,
    hashed_password character varying NOT NULL,
    is_active boolean,
    is_superuser boolean,
    first_name character varying,
    last_name character varying
);


ALTER TABLE public.mod OWNER TO uchiha;

--
-- Name: mod_id_seq; Type: SEQUENCE; Schema: public; Owner: uchiha
--

CREATE SEQUENCE public.mod_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mod_id_seq OWNER TO uchiha;

--
-- Name: mod_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: uchiha
--

ALTER SEQUENCE public.mod_id_seq OWNED BY public.mod.id;


--
-- Name: user; Type: TABLE; Schema: public; Owner: uchiha
--

CREATE TABLE public."user" (
    id integer NOT NULL,
    email character varying NOT NULL,
    hashed_password character varying NOT NULL,
    is_active boolean,
    is_superuser boolean,
    first_name character varying,
    last_name character varying
);


ALTER TABLE public."user" OWNER TO uchiha;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: uchiha
--

CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO uchiha;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: uchiha
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- Name: item id; Type: DEFAULT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- Name: mod id; Type: DEFAULT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public.mod ALTER COLUMN id SET DEFAULT nextval('public.mod_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- Name: mod mod_pkey; Type: CONSTRAINT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public.mod
    ADD CONSTRAINT mod_pkey PRIMARY KEY (id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- Name: ix_item_description; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_description ON public.item USING btree (description);


--
-- Name: ix_item_id; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_id ON public.item USING btree (id);


--
-- Name: ix_item_nombre_favoris; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_nombre_favoris ON public.item USING btree (nombre_favoris);


--
-- Name: ix_item_text_integral; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_text_integral ON public.item USING btree (text_integral);


--
-- Name: ix_item_title; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_title ON public.item USING btree (title);


--
-- Name: ix_item_url; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_item_url ON public.item USING btree (url);


--
-- Name: ix_mod_email; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE UNIQUE INDEX ix_mod_email ON public.mod USING btree (email);


--
-- Name: ix_mod_first_name; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_mod_first_name ON public.mod USING btree (first_name);


--
-- Name: ix_mod_id; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_mod_id ON public.mod USING btree (id);


--
-- Name: ix_mod_last_name; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_mod_last_name ON public.mod USING btree (last_name);


--
-- Name: ix_user_email; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE UNIQUE INDEX ix_user_email ON public."user" USING btree (email);


--
-- Name: ix_user_first_name; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_user_first_name ON public."user" USING btree (first_name);


--
-- Name: ix_user_id; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_user_id ON public."user" USING btree (id);


--
-- Name: ix_user_last_name; Type: INDEX; Schema: public; Owner: uchiha
--

CREATE INDEX ix_user_last_name ON public."user" USING btree (last_name);


--
-- Name: item item_owner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: uchiha
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_owner_id_fkey FOREIGN KEY (owner_id) REFERENCES public."user"(id);


--
-- PostgreSQL database dump complete
--

--
-- PostgreSQL database cluster dump complete
--
