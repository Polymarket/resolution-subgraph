import { assert, describe, test } from 'matchstick-as/assembly/index';

import { isRevisionUpdate, isApprovalUpdate } from "../src/utils/qualifier";

describe('Qualifier functions', () => {
  test('Revision qualifier', () => {
    assert.assertTrue(isRevisionUpdate("REVISION: This is a revision update"));
    
    // No revision identifier
    assert.assertTrue(!isRevisionUpdate("This is not a revision update"));
    
    // Incorrectly located revision identifier
    assert.assertTrue(!isRevisionUpdate("This is not a REVISION: update"));

    // Attempt to use both qualifiers but only the first will be recognized
    assert.assertTrue(!isRevisionUpdate("APPROVAL:REVISION:This is a malicious update"));
  });

  test('Approval qualifier', () => {
    assert.assertTrue(isApprovalUpdate("APPROVAL: This is an approval update"));
    
    // No approval identifier
    assert.assertTrue(!isRevisionUpdate("This is not a approval update"));
    // Incorrectly located approval identifier
    assert.assertTrue(!isRevisionUpdate("This is not an APPROVAL: update"));
  });
});
