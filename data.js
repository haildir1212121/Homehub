// Hub data — Lane Transportation / Oregon Taxi Eugene
 
window.HUB_DATA = {
  applications: [
    { id: 'sms',       num: '01', name: 'SMS Tool',           desc: 'Two-way messaging with drivers and members.',                            icon: 'ph-chat-circle-text', url: '/sms.html',              roles: ['admin','dispatcher','jay'] },
    { id: 'balances',  num: '02', name: 'Account Balances',   desc: 'Member account ledger and account balances.',                            icon: 'ph-wallet',           url: '/balances.html',          roles: ['admin','jay','dispatcher','finance'] },
    { id: 'finance',   num: '03', name: 'Financial Dash',     desc: 'Margins, profits, weekly trend reporting.',                              icon: 'ph-chart-line-up',    url: '/financialdashboard',     roles: ['admin','finance','management','jay'] },
    { id: 'repair',    num: '04', name: 'Repair Tracker',     desc: 'Shop maintenance log, parts orders, vehicle status.',                    icon: 'ph-wrench',           url: '/repair-tracker.html',    roles: ['admin','jay','maintenance','dispatcher'] },
    { id: 'zones',     num: '05', name: 'Zone Map',           desc: 'Zone boundaries and dispatch coverage areas.',                           icon: 'ph-map-trifold',      url: '/zone-map.html',          roles: ['admin','jay','dispatcher','driver','management'] },
    { id: 'drivers',   num: '06', name: 'Driver Directory',   desc: 'Driver roster, onboarding progress, license tracking.',              icon: 'ph-steering-wheel',   url: '/drivers.html',         roles: ['admin','dispatcher','jay','management'] },
    { id: 'documents', num: '07', name: 'Documents',          desc: 'Forms, manuals, broker contracts, training material — central library.', icon: 'ph-folder-open',      url: '#documents',              roles: ['admin','dispatcher','jay','finance','management','driver','maintenance'] },
    { id: 'incidents', num: '08', name: 'Feedback / Incident Log', desc: 'Feedback, driver complaints, accidents — paper trail.',             icon: 'ph-warning-octagon',  url: '#',                       roles: ['admin','dispatcher','jay','management'] },
    { id: 'brokers',   num: '09', name: 'Trip Reconciler',      desc: 'Trip Verification - Find missing trips',                    icon: 'ph-handshake',        url: '/trip-reconciler.html',                       roles: ['admin','dispatcher','jay','finance','management'] },
    { id: 'lytx-map',   num: '10', name: 'Lytx Data',      desc: 'Trip Verification - Find missing trips',                    icon: 'ph-globe',        url: '/lot-map.html',                       roles: ['admin','dispatcher','jay','finance','management'] },
        { id: 'tech-projects',   num: '11', name: 'Tech-Projects',      desc: 'Trip Verification - Find missing trips',                    icon: 'ph-globe',        url: '/kanban.html',                       roles: ['admin','dispatcher','jay','finance','management'] },
  ],

  driverTools: [
    { id: 'documents', num: '01', name: 'Documents',       desc: 'Forms, manuals and required policies for drivers.',     icon: 'ph-folder-open',  url: '#documents' },
    { id: 'zones',     num: '02', name: 'Zone Map',        desc: 'Current region and zone boundaries.',                   icon: 'ph-map-trifold',  url: '/zone-map.html' },
    { id: 'radio',     num: '03', name: 'Radio Guidelines', desc: 'Standard 10-codes, channels, procedures.',             icon: 'ph-broadcast',    url: '/radio-guidelines.html' },
    { id: 'cc',        num: '04', name: 'Card Processing', desc: 'Step-by-step terminal instructions for fares.',         icon: 'ph-credit-card',  url: '/cc.html' },
    { id: 'hr',        num: '05', name: 'HR Notices',      desc: 'Required driver documentation and forms.',              icon: 'ph-file-text',    url: '/hr-notices.html' },
  ],
 
  // ---------------- DOCUMENTS LIBRARY ----------------
  documentFolders: [
   
  ],
 
  documents: [
   
  ],
 
  incidents: [
   
  ],
 
  brokers: [
   
  ],
};
 