CREATE TABLE "lms"."session" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "teacher_id" uuid NOT NULL, "student_id" uuid NOT NULL, "done" boolean NOT NULL, PRIMARY KEY ("id") );
CREATE EXTENSION IF NOT EXISTS pgcrypto;
