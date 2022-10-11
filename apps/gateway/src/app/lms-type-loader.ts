import {
  DelegateService,
  ExtendedField,
  TypeLoader,
} from '@ddm91/nest-graphql-tools';
import { OperationTypeNode } from 'graphql';

@TypeLoader('lms_session', { extend: true })
export class LmsSessionTypeLoader {
  @ExtendedField('user', { nullable: false })
  teacher(d: DelegateService) {
    d.batchDelegateSingle({
      selectionSet: `{ teacher_id }`,
      keySelector(root) {
        return root.teacher_id;
      },
      argsFromKeys(keys) {
        return { where: { id: { _in: keys } } };
      },
      schemaKey: 'account',
      fieldName: 'user',
      operation: OperationTypeNode.QUERY,
    });
  }

  @ExtendedField('user', { nullable: true })
  student(d: DelegateService) {
    d.batchDelegateSingle({
      selectionSet: `{ student_id }`,
      keySelector(root) {
        return root.student_id;
      },
      argsFromKeys(keys) {
        return { where: { id: { _in: keys } } };
      },
      schemaKey: 'account',
      fieldName: 'user',
      operation: OperationTypeNode.QUERY,
    });
  }
}
