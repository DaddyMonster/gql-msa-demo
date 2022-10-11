CREATE TABLE "lms"."message" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "sequence_id" serial NOT NULL, "session_id" uuid NOT NULL, "message" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("session_id") REFERENCES "lms"."session"("id") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
