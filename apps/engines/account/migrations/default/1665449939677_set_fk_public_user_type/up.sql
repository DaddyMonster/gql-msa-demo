alter table "public"."user"
  add constraint "user_type_fkey"
  foreign key ("type")
  references "public"."role"
  ("value") on update restrict on delete restrict;
