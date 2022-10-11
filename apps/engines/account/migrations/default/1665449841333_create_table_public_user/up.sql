CREATE TABLE "public"."user" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name" text NOT NULL, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."user" IS E'유저 테이블';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
