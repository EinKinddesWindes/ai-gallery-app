export const ADMIN_UID = "g448clDRzrctwxsGuk8h13KVMXF3";

export function isAdmin(user) {
  return Boolean(user && user.uid === ADMIN_UID);
}