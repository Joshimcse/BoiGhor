export const isDashboard = () => {
  return window.location.pathname.split('/')[1] === 'dashboard';
};
