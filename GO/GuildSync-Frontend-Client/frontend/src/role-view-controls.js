export function renderRoleViewControls(user = {}) {
  if ((user.actual_role || user.role) !== 'admin') return '';
  if (user.role !== 'admin') {
    return '<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-spacer" aria-hidden="true"></div><button class="profile-role-view-button profile-role-view-return" type="button" data-role-view="admin">Return to Admin View</button></section>';
  }
  return '<section class="profile-section profile-test-mode-section" aria-label="View Test Mode"><div class="profile-section-header">View Test Mode</div><div class="profile-role-view-actions"><button class="profile-role-view-button profile-role-view-user" type="button" data-role-view="user" aria-label="View As User"><span>View As</span><span>User</span></button><button class="profile-role-view-button profile-role-view-viewer" type="button" data-role-view="viewer" aria-label="View As Viewer"><span>View As</span><span>Viewer</span></button></div></section>';
}
