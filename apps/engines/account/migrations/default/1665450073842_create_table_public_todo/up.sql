CREATE TABLE "public"."todo" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "assigner" uuid NOT NULL, "to" uuid NOT NULL, "done" boolean NOT NULL DEFAULT false, PRIMARY KEY ("id") );COMMENT ON TABLE "public"."todo" IS E'할일';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
