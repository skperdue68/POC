export function renderRoleViewControls(user={}) {
  if ((user.actual_role || user.role) !== 'admin') return '';
  if (user.role !== 'admin') return `<div class="profile-role-view-notice">Viewing as ${user.role === 'viewer' ? 'Viewer' : 'User'} · Admin account</div><button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="admin">Return to Admin View</button>`;
  return '<button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="user">View as User</button><button class="discord-secondary-button user-admin-menu-button" type="button" data-role-view="viewer">View as Viewer</button>';
}
