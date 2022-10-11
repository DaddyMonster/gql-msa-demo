import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** mutation root */
export type Mutation = {
  __typename?: 'Mutation';
  /** delete data from the table: "lms.message" */
  delete_lms_message?: Maybe<LmsMessageMutationResponse>;
  /** delete single row from the table: "lms.message" */
  delete_lms_message_by_pk?: Maybe<LmsMessage>;
  /** delete data from the table: "lms.session" */
  delete_lms_session?: Maybe<LmsSessionMutationResponse>;
  /** delete single row from the table: "lms.session" */
  delete_lms_session_by_pk?: Maybe<LmsSession>;
  /** delete data from the table: "role" */
  delete_role?: Maybe<RoleMutationResponse>;
  /** delete single row from the table: "role" */
  delete_role_by_pk?: Maybe<Role>;
  /** delete data from the table: "ticket" */
  delete_ticket?: Maybe<TicketMutationResponse>;
  /** delete single row from the table: "ticket" */
  delete_ticket_by_pk?: Maybe<Ticket>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "lms.message" */
  insert_lms_message?: Maybe<LmsMessageMutationResponse>;
  /** insert a single row into the table: "lms.message" */
  insert_lms_message_one?: Maybe<LmsMessage>;
  /** insert data into the table: "lms.session" */
  insert_lms_session?: Maybe<LmsSessionMutationResponse>;
  /** insert a single row into the table: "lms.session" */
  insert_lms_session_one?: Maybe<LmsSession>;
  /** insert data into the table: "role" */
  insert_role?: Maybe<RoleMutationResponse>;
  /** insert a single row into the table: "role" */
  insert_role_one?: Maybe<Role>;
  /** insert data into the table: "ticket" */
  insert_ticket?: Maybe<TicketMutationResponse>;
  /** insert a single row into the table: "ticket" */
  insert_ticket_one?: Maybe<Ticket>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "lms.message" */
  update_lms_message?: Maybe<LmsMessageMutationResponse>;
  /** update single row of the table: "lms.message" */
  update_lms_message_by_pk?: Maybe<LmsMessage>;
  /** update data of the table: "lms.session" */
  update_lms_session?: Maybe<LmsSessionMutationResponse>;
  /** update single row of the table: "lms.session" */
  update_lms_session_by_pk?: Maybe<LmsSession>;
  /** update data of the table: "role" */
  update_role?: Maybe<RoleMutationResponse>;
  /** update single row of the table: "role" */
  update_role_by_pk?: Maybe<Role>;
  /** update data of the table: "ticket" */
  update_ticket?: Maybe<TicketMutationResponse>;
  /** update single row of the table: "ticket" */
  update_ticket_by_pk?: Maybe<Ticket>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
};


/** mutation root */
export type MutationDeleteLmsMessageArgs = {
  where: LmsMessageBoolExp;
};


/** mutation root */
export type MutationDeleteLmsMessageByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationDeleteLmsSessionArgs = {
  where: LmsSessionBoolExp;
};


/** mutation root */
export type MutationDeleteLmsSessionByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationDeleteRoleArgs = {
  where: RoleBoolExp;
};


/** mutation root */
export type MutationDeleteRoleByPkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type MutationDeleteTicketArgs = {
  where: TicketBoolExp;
};


/** mutation root */
export type MutationDeleteTicketByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationDeleteUserByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationInsertLmsMessageArgs = {
  objects: Array<LmsMessageInsertInput>;
  on_conflict?: InputMaybe<LmsMessageOnConflict>;
};


/** mutation root */
export type MutationInsertLmsMessageOneArgs = {
  object: LmsMessageInsertInput;
  on_conflict?: InputMaybe<LmsMessageOnConflict>;
};


/** mutation root */
export type MutationInsertLmsSessionArgs = {
  objects: Array<LmsSessionInsertInput>;
  on_conflict?: InputMaybe<LmsSessionOnConflict>;
};


/** mutation root */
export type MutationInsertLmsSessionOneArgs = {
  object: LmsSessionInsertInput;
  on_conflict?: InputMaybe<LmsSessionOnConflict>;
};


/** mutation root */
export type MutationInsertRoleArgs = {
  objects: Array<RoleInsertInput>;
  on_conflict?: InputMaybe<RoleOnConflict>;
};


/** mutation root */
export type MutationInsertRoleOneArgs = {
  object: RoleInsertInput;
  on_conflict?: InputMaybe<RoleOnConflict>;
};


/** mutation root */
export type MutationInsertTicketArgs = {
  objects: Array<TicketInsertInput>;
  on_conflict?: InputMaybe<TicketOnConflict>;
};


/** mutation root */
export type MutationInsertTicketOneArgs = {
  object: TicketInsertInput;
  on_conflict?: InputMaybe<TicketOnConflict>;
};


/** mutation root */
export type MutationInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationUpdateLmsMessageArgs = {
  _inc?: InputMaybe<LmsMessageIncInput>;
  _set?: InputMaybe<LmsMessageSetInput>;
  where: LmsMessageBoolExp;
};


/** mutation root */
export type MutationUpdateLmsMessageByPkArgs = {
  _inc?: InputMaybe<LmsMessageIncInput>;
  _set?: InputMaybe<LmsMessageSetInput>;
  pk_columns: LmsMessagePkColumnsInput;
};


/** mutation root */
export type MutationUpdateLmsSessionArgs = {
  _set?: InputMaybe<LmsSessionSetInput>;
  where: LmsSessionBoolExp;
};


/** mutation root */
export type MutationUpdateLmsSessionByPkArgs = {
  _set?: InputMaybe<LmsSessionSetInput>;
  pk_columns: LmsSessionPkColumnsInput;
};


/** mutation root */
export type MutationUpdateRoleArgs = {
  _set?: InputMaybe<RoleSetInput>;
  where: RoleBoolExp;
};


/** mutation root */
export type MutationUpdateRoleByPkArgs = {
  _set?: InputMaybe<RoleSetInput>;
  pk_columns: RolePkColumnsInput;
};


/** mutation root */
export type MutationUpdateTicketArgs = {
  _inc?: InputMaybe<TicketIncInput>;
  _set?: InputMaybe<TicketSetInput>;
  where: TicketBoolExp;
};


/** mutation root */
export type MutationUpdateTicketByPkArgs = {
  _inc?: InputMaybe<TicketIncInput>;
  _set?: InputMaybe<TicketSetInput>;
  pk_columns: TicketPkColumnsInput;
};


/** mutation root */
export type MutationUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};

export type Query = {
  __typename?: 'Query';
  /** fetch data from the table: "lms.message" */
  lms_message: Array<LmsMessage>;
  /** fetch aggregated fields from the table: "lms.message" */
  lms_message_aggregate: LmsMessageAggregate;
  /** fetch data from the table: "lms.message" using primary key columns */
  lms_message_by_pk?: Maybe<LmsMessage>;
  /** fetch data from the table: "lms.session" */
  lms_session: Array<LmsSession>;
  /** fetch aggregated fields from the table: "lms.session" */
  lms_session_aggregate: LmsSessionAggregate;
  /** fetch data from the table: "lms.session" using primary key columns */
  lms_session_by_pk?: Maybe<LmsSession>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "ticket" */
  ticket: Array<Ticket>;
  /** fetch aggregated fields from the table: "ticket" */
  ticket_aggregate: TicketAggregate;
  /** fetch data from the table: "ticket" using primary key columns */
  ticket_by_pk?: Maybe<Ticket>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type QueryLmsMessageArgs = {
  distinct_on?: InputMaybe<Array<LmsMessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsMessageOrderBy>>;
  where?: InputMaybe<LmsMessageBoolExp>;
};


export type QueryLmsMessageAggregateArgs = {
  distinct_on?: InputMaybe<Array<LmsMessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsMessageOrderBy>>;
  where?: InputMaybe<LmsMessageBoolExp>;
};


export type QueryLmsMessageByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryLmsSessionArgs = {
  distinct_on?: InputMaybe<Array<LmsSessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsSessionOrderBy>>;
  where?: InputMaybe<LmsSessionBoolExp>;
};


export type QueryLmsSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<LmsSessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsSessionOrderBy>>;
  where?: InputMaybe<LmsSessionBoolExp>;
};


export type QueryLmsSessionByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRoleArgs = {
  distinct_on?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type QueryRoleAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type QueryRoleByPkArgs = {
  value: Scalars['String'];
};


export type QueryTicketArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};


export type QueryTicketAggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};


export type QueryTicketByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryUserByPkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** fetch data from the table: "lms.message" */
  lms_message: Array<LmsMessage>;
  /** fetch aggregated fields from the table: "lms.message" */
  lms_message_aggregate: LmsMessageAggregate;
  /** fetch data from the table: "lms.message" using primary key columns */
  lms_message_by_pk?: Maybe<LmsMessage>;
  /** fetch data from the table: "lms.session" */
  lms_session: Array<LmsSession>;
  /** fetch aggregated fields from the table: "lms.session" */
  lms_session_aggregate: LmsSessionAggregate;
  /** fetch data from the table: "lms.session" using primary key columns */
  lms_session_by_pk?: Maybe<LmsSession>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: RoleAggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "ticket" */
  ticket: Array<Ticket>;
  /** fetch aggregated fields from the table: "ticket" */
  ticket_aggregate: TicketAggregate;
  /** fetch data from the table: "ticket" using primary key columns */
  ticket_by_pk?: Maybe<Ticket>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type SubscriptionLmsMessageArgs = {
  distinct_on?: InputMaybe<Array<LmsMessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsMessageOrderBy>>;
  where?: InputMaybe<LmsMessageBoolExp>;
};


export type SubscriptionLmsMessageAggregateArgs = {
  distinct_on?: InputMaybe<Array<LmsMessageSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsMessageOrderBy>>;
  where?: InputMaybe<LmsMessageBoolExp>;
};


export type SubscriptionLmsMessageByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionLmsSessionArgs = {
  distinct_on?: InputMaybe<Array<LmsSessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsSessionOrderBy>>;
  where?: InputMaybe<LmsSessionBoolExp>;
};


export type SubscriptionLmsSessionAggregateArgs = {
  distinct_on?: InputMaybe<Array<LmsSessionSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<LmsSessionOrderBy>>;
  where?: InputMaybe<LmsSessionBoolExp>;
};


export type SubscriptionLmsSessionByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRoleArgs = {
  distinct_on?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type SubscriptionRoleAggregateArgs = {
  distinct_on?: InputMaybe<Array<RoleSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<RoleOrderBy>>;
  where?: InputMaybe<RoleBoolExp>;
};


export type SubscriptionRoleByPkArgs = {
  value: Scalars['String'];
};


export type SubscriptionTicketArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};


export type SubscriptionTicketAggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};


export type SubscriptionTicketByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionUserByPkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "lms.message" */
export type LmsMessage = {
  __typename?: 'lms_message';
  id: Scalars['uuid'];
  message: Scalars['String'];
  sequence_id: Scalars['Int'];
  session_id: Scalars['uuid'];
};

/** aggregated selection of "lms.message" */
export type LmsMessageAggregate = {
  __typename?: 'lms_message_aggregate';
  aggregate?: Maybe<LmsMessageAggregateFields>;
  nodes: Array<LmsMessage>;
};

/** aggregate fields of "lms.message" */
export type LmsMessageAggregateFields = {
  __typename?: 'lms_message_aggregate_fields';
  avg?: Maybe<LmsMessageAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<LmsMessageMaxFields>;
  min?: Maybe<LmsMessageMinFields>;
  stddev?: Maybe<LmsMessageStddevFields>;
  stddev_pop?: Maybe<LmsMessageStddevPopFields>;
  stddev_samp?: Maybe<LmsMessageStddevSampFields>;
  sum?: Maybe<LmsMessageSumFields>;
  var_pop?: Maybe<LmsMessageVarPopFields>;
  var_samp?: Maybe<LmsMessageVarSampFields>;
  variance?: Maybe<LmsMessageVarianceFields>;
};


/** aggregate fields of "lms.message" */
export type LmsMessageAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LmsMessageSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type LmsMessageAvgFields = {
  __typename?: 'lms_message_avg_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "lms.message". All fields are combined with a logical 'AND'. */
export type LmsMessageBoolExp = {
  _and?: InputMaybe<Array<LmsMessageBoolExp>>;
  _not?: InputMaybe<LmsMessageBoolExp>;
  _or?: InputMaybe<Array<LmsMessageBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  message?: InputMaybe<StringComparisonExp>;
  sequence_id?: InputMaybe<IntComparisonExp>;
  session_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "lms.message" */
export enum LmsMessageConstraint {
  /** unique or primary key constraint */
  MESSAGE_PKEY = 'message_pkey'
}

/** input type for incrementing numeric columns in table "lms.message" */
export type LmsMessageIncInput = {
  sequence_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "lms.message" */
export type LmsMessageInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  sequence_id?: InputMaybe<Scalars['Int']>;
  session_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type LmsMessageMaxFields = {
  __typename?: 'lms_message_max_fields';
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sequence_id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type LmsMessageMinFields = {
  __typename?: 'lms_message_min_fields';
  id?: Maybe<Scalars['uuid']>;
  message?: Maybe<Scalars['String']>;
  sequence_id?: Maybe<Scalars['Int']>;
  session_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "lms.message" */
export type LmsMessageMutationResponse = {
  __typename?: 'lms_message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<LmsMessage>;
};

/** on_conflict condition type for table "lms.message" */
export type LmsMessageOnConflict = {
  constraint: LmsMessageConstraint;
  update_columns?: Array<LmsMessageUpdateColumn>;
  where?: InputMaybe<LmsMessageBoolExp>;
};

/** Ordering options when selecting data from "lms.message". */
export type LmsMessageOrderBy = {
  id?: InputMaybe<OrderBy>;
  message?: InputMaybe<OrderBy>;
  sequence_id?: InputMaybe<OrderBy>;
  session_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: lms_message */
export type LmsMessagePkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "lms.message" */
export enum LmsMessageSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  MESSAGE = 'message',
  /** column name */
  SEQUENCE_ID = 'sequence_id',
  /** column name */
  SESSION_ID = 'session_id'
}

/** input type for updating data in table "lms.message" */
export type LmsMessageSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  message?: InputMaybe<Scalars['String']>;
  sequence_id?: InputMaybe<Scalars['Int']>;
  session_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type LmsMessageStddevFields = {
  __typename?: 'lms_message_stddev_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type LmsMessageStddevPopFields = {
  __typename?: 'lms_message_stddev_pop_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type LmsMessageStddevSampFields = {
  __typename?: 'lms_message_stddev_samp_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type LmsMessageSumFields = {
  __typename?: 'lms_message_sum_fields';
  sequence_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "lms.message" */
export enum LmsMessageUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  MESSAGE = 'message',
  /** column name */
  SEQUENCE_ID = 'sequence_id',
  /** column name */
  SESSION_ID = 'session_id'
}

/** aggregate var_pop on columns */
export type LmsMessageVarPopFields = {
  __typename?: 'lms_message_var_pop_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type LmsMessageVarSampFields = {
  __typename?: 'lms_message_var_samp_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type LmsMessageVarianceFields = {
  __typename?: 'lms_message_variance_fields';
  sequence_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "lms.session" */
export type LmsSession = {
  __typename?: 'lms_session';
  done: Scalars['Boolean'];
  id: Scalars['uuid'];
  student?: Maybe<User>;
  student_id?: Maybe<Scalars['uuid']>;
  teacher: User;
  teacher_id: Scalars['uuid'];
};

/** aggregated selection of "lms.session" */
export type LmsSessionAggregate = {
  __typename?: 'lms_session_aggregate';
  aggregate?: Maybe<LmsSessionAggregateFields>;
  nodes: Array<LmsSession>;
};

/** aggregate fields of "lms.session" */
export type LmsSessionAggregateFields = {
  __typename?: 'lms_session_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<LmsSessionMaxFields>;
  min?: Maybe<LmsSessionMinFields>;
};


/** aggregate fields of "lms.session" */
export type LmsSessionAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<LmsSessionSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "lms.session". All fields are combined with a logical 'AND'. */
export type LmsSessionBoolExp = {
  _and?: InputMaybe<Array<LmsSessionBoolExp>>;
  _not?: InputMaybe<LmsSessionBoolExp>;
  _or?: InputMaybe<Array<LmsSessionBoolExp>>;
  done?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  student_id?: InputMaybe<UuidComparisonExp>;
  teacher_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "lms.session" */
export enum LmsSessionConstraint {
  /** unique or primary key constraint */
  SESSION_PKEY = 'session_pkey'
}

/** input type for inserting data into table "lms.session" */
export type LmsSessionInsertInput = {
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  student_id?: InputMaybe<Scalars['uuid']>;
  teacher_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type LmsSessionMaxFields = {
  __typename?: 'lms_session_max_fields';
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  teacher_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type LmsSessionMinFields = {
  __typename?: 'lms_session_min_fields';
  id?: Maybe<Scalars['uuid']>;
  student_id?: Maybe<Scalars['uuid']>;
  teacher_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "lms.session" */
export type LmsSessionMutationResponse = {
  __typename?: 'lms_session_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<LmsSession>;
};

/** on_conflict condition type for table "lms.session" */
export type LmsSessionOnConflict = {
  constraint: LmsSessionConstraint;
  update_columns?: Array<LmsSessionUpdateColumn>;
  where?: InputMaybe<LmsSessionBoolExp>;
};

/** Ordering options when selecting data from "lms.session". */
export type LmsSessionOrderBy = {
  done?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  student_id?: InputMaybe<OrderBy>;
  teacher_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: lms_session */
export type LmsSessionPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "lms.session" */
export enum LmsSessionSelectColumn {
  /** column name */
  DONE = 'done',
  /** column name */
  ID = 'id',
  /** column name */
  STUDENT_ID = 'student_id',
  /** column name */
  TEACHER_ID = 'teacher_id'
}

/** input type for updating data in table "lms.session" */
export type LmsSessionSetInput = {
  done?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  student_id?: InputMaybe<Scalars['uuid']>;
  teacher_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "lms.session" */
export enum LmsSessionUpdateColumn {
  /** column name */
  DONE = 'done',
  /** column name */
  ID = 'id',
  /** column name */
  STUDENT_ID = 'student_id',
  /** column name */
  TEACHER_ID = 'teacher_id'
}

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** 권한 */
export type Role = {
  __typename?: 'role';
  value: Scalars['String'];
};

/** aggregated selection of "role" */
export type RoleAggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<RoleAggregateFields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type RoleAggregateFields = {
  __typename?: 'role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<RoleMaxFields>;
  min?: Maybe<RoleMinFields>;
};


/** aggregate fields of "role" */
export type RoleAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<RoleSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type RoleBoolExp = {
  _and?: InputMaybe<Array<RoleBoolExp>>;
  _not?: InputMaybe<RoleBoolExp>;
  _or?: InputMaybe<Array<RoleBoolExp>>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "role" */
export enum RoleConstraint {
  /** unique or primary key constraint */
  ROLE_PKEY = 'role_pkey'
}

export enum RoleEnum {
  ADMIN = 'ADMIN',
  STUDENT = 'STUDENT',
  TEACHER = 'TEACHER'
}

/** Boolean expression to compare columns of type "role_enum". All fields are combined with logical 'AND'. */
export type RoleEnumComparisonExp = {
  _eq?: InputMaybe<RoleEnum>;
  _in?: InputMaybe<Array<RoleEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<RoleEnum>;
  _nin?: InputMaybe<Array<RoleEnum>>;
};

/** input type for inserting data into table "role" */
export type RoleInsertInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type RoleMaxFields = {
  __typename?: 'role_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type RoleMinFields = {
  __typename?: 'role_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "role" */
export type RoleMutationResponse = {
  __typename?: 'role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Role>;
};

/** on_conflict condition type for table "role" */
export type RoleOnConflict = {
  constraint: RoleConstraint;
  update_columns?: Array<RoleUpdateColumn>;
  where?: InputMaybe<RoleBoolExp>;
};

/** Ordering options when selecting data from "role". */
export type RoleOrderBy = {
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: role */
export type RolePkColumnsInput = {
  value: Scalars['String'];
};

/** select columns of table "role" */
export enum RoleSelectColumn {
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "role" */
export type RoleSetInput = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "role" */
export enum RoleUpdateColumn {
  /** column name */
  VALUE = 'value'
}

/** columns and relationships of "ticket" */
export type Ticket = {
  __typename?: 'ticket';
  id: Scalars['uuid'];
  point: Scalars['Int'];
  used: Scalars['Boolean'];
  /** An object relationship */
  user: User;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "ticket" */
export type TicketAggregate = {
  __typename?: 'ticket_aggregate';
  aggregate?: Maybe<TicketAggregateFields>;
  nodes: Array<Ticket>;
};

/** aggregate fields of "ticket" */
export type TicketAggregateFields = {
  __typename?: 'ticket_aggregate_fields';
  avg?: Maybe<TicketAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<TicketMaxFields>;
  min?: Maybe<TicketMinFields>;
  stddev?: Maybe<TicketStddevFields>;
  stddev_pop?: Maybe<TicketStddevPopFields>;
  stddev_samp?: Maybe<TicketStddevSampFields>;
  sum?: Maybe<TicketSumFields>;
  var_pop?: Maybe<TicketVarPopFields>;
  var_samp?: Maybe<TicketVarSampFields>;
  variance?: Maybe<TicketVarianceFields>;
};


/** aggregate fields of "ticket" */
export type TicketAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<TicketSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ticket" */
export type TicketAggregateOrderBy = {
  avg?: InputMaybe<TicketAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<TicketMaxOrderBy>;
  min?: InputMaybe<TicketMinOrderBy>;
  stddev?: InputMaybe<TicketStddevOrderBy>;
  stddev_pop?: InputMaybe<TicketStddevPopOrderBy>;
  stddev_samp?: InputMaybe<TicketStddevSampOrderBy>;
  sum?: InputMaybe<TicketSumOrderBy>;
  var_pop?: InputMaybe<TicketVarPopOrderBy>;
  var_samp?: InputMaybe<TicketVarSampOrderBy>;
  variance?: InputMaybe<TicketVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "ticket" */
export type TicketArrRelInsertInput = {
  data: Array<TicketInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<TicketOnConflict>;
};

/** aggregate avg on columns */
export type TicketAvgFields = {
  __typename?: 'ticket_avg_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ticket" */
export type TicketAvgOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "ticket". All fields are combined with a logical 'AND'. */
export type TicketBoolExp = {
  _and?: InputMaybe<Array<TicketBoolExp>>;
  _not?: InputMaybe<TicketBoolExp>;
  _or?: InputMaybe<Array<TicketBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  point?: InputMaybe<IntComparisonExp>;
  used?: InputMaybe<BooleanComparisonExp>;
  user?: InputMaybe<UserBoolExp>;
  user_id?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "ticket" */
export enum TicketConstraint {
  /** unique or primary key constraint */
  TICKET_PKEY = 'ticket_pkey'
}

/** input type for incrementing numeric columns in table "ticket" */
export type TicketIncInput = {
  point?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ticket" */
export type TicketInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  point?: InputMaybe<Scalars['Int']>;
  used?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<UserObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type TicketMaxFields = {
  __typename?: 'ticket_max_fields';
  id?: Maybe<Scalars['uuid']>;
  point?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "ticket" */
export type TicketMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type TicketMinFields = {
  __typename?: 'ticket_min_fields';
  id?: Maybe<Scalars['uuid']>;
  point?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "ticket" */
export type TicketMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "ticket" */
export type TicketMutationResponse = {
  __typename?: 'ticket_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ticket>;
};

/** on_conflict condition type for table "ticket" */
export type TicketOnConflict = {
  constraint: TicketConstraint;
  update_columns?: Array<TicketUpdateColumn>;
  where?: InputMaybe<TicketBoolExp>;
};

/** Ordering options when selecting data from "ticket". */
export type TicketOrderBy = {
  id?: InputMaybe<OrderBy>;
  point?: InputMaybe<OrderBy>;
  used?: InputMaybe<OrderBy>;
  user?: InputMaybe<UserOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: ticket */
export type TicketPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "ticket" */
export enum TicketSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POINT = 'point',
  /** column name */
  USED = 'used',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "ticket" */
export type TicketSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  point?: InputMaybe<Scalars['Int']>;
  used?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type TicketStddevFields = {
  __typename?: 'ticket_stddev_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ticket" */
export type TicketStddevOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type TicketStddevPopFields = {
  __typename?: 'ticket_stddev_pop_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ticket" */
export type TicketStddevPopOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type TicketStddevSampFields = {
  __typename?: 'ticket_stddev_samp_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ticket" */
export type TicketStddevSampOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type TicketSumFields = {
  __typename?: 'ticket_sum_fields';
  point?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ticket" */
export type TicketSumOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** update columns of table "ticket" */
export enum TicketUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  POINT = 'point',
  /** column name */
  USED = 'used',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type TicketVarPopFields = {
  __typename?: 'ticket_var_pop_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ticket" */
export type TicketVarPopOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type TicketVarSampFields = {
  __typename?: 'ticket_var_samp_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ticket" */
export type TicketVarSampOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type TicketVarianceFields = {
  __typename?: 'ticket_variance_fields';
  point?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ticket" */
export type TicketVarianceOrderBy = {
  point?: InputMaybe<OrderBy>;
};

/** 유저 테이블 */
export type User = {
  __typename?: 'user';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  tickets: Array<Ticket>;
  /** An aggregate relationship */
  tickets_aggregate: TicketAggregate;
  type: RoleEnum;
};


/** 유저 테이블 */
export type UserTicketsArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};


/** 유저 테이블 */
export type UserTicketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<TicketSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<TicketOrderBy>>;
  where?: InputMaybe<TicketBoolExp>;
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  tickets?: InputMaybe<TicketBoolExp>;
  type?: InputMaybe<RoleEnumComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint */
  USER_PKEY = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  tickets?: InputMaybe<TicketArrRelInsertInput>;
  type?: InputMaybe<RoleEnum>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type UserObjRelInsertInput = {
  data: UserInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UserOnConflict>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  tickets_aggregate?: InputMaybe<TicketAggregateOrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPE = 'type'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<RoleEnum>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  TYPE = 'type'
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UsersQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
}>;


export type UsersQuery = { __typename?: 'Query', user: Array<{ __typename?: 'user', id: any, name: string, type: RoleEnum, tickets: Array<{ __typename?: 'ticket', id: any, point: number, user_id: any, used: boolean }> }> };

export type UserFragment = { __typename?: 'user', id: any, name: string, type: RoleEnum, tickets: Array<{ __typename?: 'ticket', id: any, point: number, user_id: any, used: boolean }> };

export type TicketsByUserQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type TicketsByUserQuery = { __typename?: 'Query', ticket: Array<{ __typename?: 'ticket', id: any, point: number, user_id: any, used: boolean }> };

export type TicketFragment = { __typename?: 'ticket', id: any, point: number, user_id: any, used: boolean };

export const TicketFragmentDoc = gql`
    fragment TicketFragment on ticket {
  id
  point
  user_id
  used
}
    `;
export const UserFragmentDoc = gql`
    fragment UserFragment on user {
  id
  name
  type
  tickets {
    ...TicketFragment
  }
}
    `;
export const UsersDocument = gql`
    query Users($limit: Int!, $offset: Int!) {
  user(limit: $limit, offset: $offset) {
    ...UserFragment
  }
}
    ${UserFragmentDoc}
${TicketFragmentDoc}`;

export function useUsersQuery(options: Omit<Urql.UseQueryArgs<UsersQueryVariables>, 'query'>) {
  return Urql.useQuery<UsersQuery, UsersQueryVariables>({ query: UsersDocument, ...options });
};
export const TicketsByUserDocument = gql`
    query TicketsByUser($user_id: uuid!) {
  ticket(where: {user_id: {_eq: $user_id}}) {
    ...TicketFragment
  }
}
    ${TicketFragmentDoc}`;

export function useTicketsByUserQuery(options: Omit<Urql.UseQueryArgs<TicketsByUserQueryVariables>, 'query'>) {
  return Urql.useQuery<TicketsByUserQuery, TicketsByUserQueryVariables>({ query: TicketsByUserDocument, ...options });
};