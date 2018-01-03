export const VERIFICATION_QUEUE_GET = 'VERIFICATION_QUEUE_GET';
export const VERIFICATION_QUEUE_GET_SUCCEEDED = 'VERIFICATION_QUEUE_GET_SUCCESSFUL';
export const VERIFICATION_QUEUE_GET_FAILED = 'VERIFICATION_QUEUE_GET_UNSUCCESSFUL';

export const VERIFICATION_QUEUE_ADD = 'VERIFICATION_QUEUE_ADD';
export const VERIFICATION_QUEUE_ADD_SUCCEEDED = 'VERIFICATION_QUEUE_ADD_SUCCESSFUL';
export const VERIFICATION_QUEUE_ADD_FAILED = 'VERIFICATION_QUEUE_ADD_UNSUCCESSFUL';

export const VERIFICATION_QUEUE_REMOVE = 'VERIFICATION_QUEUE_REMOVE';
export const VERIFICATION_QUEUE_REMOVE_SUCCEEDED = 'VERIFICATION_QUEUE_REMOVE_SUCCEEDED';
export const VERIFICATION_QUEUE_REMOVE_FAILED = 'VERIFICATION_QUEUE_REMOVE_FAILED';

export function getVerificationQueue(node) {
  return {
    type: VERIFICATION_QUEUE_GET,
    node,
  };
}

export function addBlojToVerificationQueue(bloj, node) {
  return {
    type: VERIFICATION_QUEUE_ADD,
    node,
    bloj,
  };
}

export function removeBlojFromVerificationQueue(bloj, node) {
  return {
    type: VERIFICATION_QUEUE_REMOVE,
    node,
    bloj,
  };
}