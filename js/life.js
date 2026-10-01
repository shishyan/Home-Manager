(function () {
  const D = HM.data;
  const domains = {
    health: { title: 'Family Health', group: 'People', icon: 'heart-pulse', note: 'Conditions, measurements, preventive care and health cover', noun: 'health record' },
    medicines: { title: 'Medicines & Refills', group: 'Care', icon: 'pill', note: 'Dosage plans, stock, prescriptions and refill dates', noun: 'medicine plan' },
    appointments: { title: 'Appointments & Follow-ups', group: 'Care', icon: 'stethoscope', note: 'Consultations, tests, reports and next actions', noun: 'appointment' },
    elders: { title: 'Elder Care', group: 'Care', icon: 'accessibility', note: 'Daily support, mobility, check-ins and caregiver handoffs', noun: 'care plan' },
    documents: { title: 'Documents & IDs', group: 'Records', icon: 'folders', note: 'Aadhaar, PAN, passports and certificates', noun: 'document' },
    bills: { title: 'Bills & Payments', group: 'Household', icon: 'receipt-indian-rupee', note: 'Utilities, fees, EMIs and recurring dues', noun: 'bill' },
    insurance: { title: 'Family Protection', group: 'Family', icon: 'shield-check', note: 'Life and personal accident cover', noun: 'policy' },
    tax: { title: 'Tax & Compliance', group: 'Family', icon: 'landmark', note: 'ITR and statutory dates', noun: 'tax record' },
    property: { title: 'Property & Utilities', group: 'Household', icon: 'building-2', note: 'Homes, services, taxes and agreements', noun: 'property record' },
    vehicles: { title: 'Vehicles', group: 'Travel', icon: 'car-front', note: 'Service, fuel, insurance, PUC and registration', noun: 'vehicle record' },
    help: { title: 'Domestic Help', group: 'Household', icon: 'hand-helping', note: 'Staff, attendance, salary and contacts', noun: 'help record' },
    subscriptions: { title: 'Online Subscriptions', group: 'Web Life', icon: 'repeat-2', note: 'Streaming, cloud, news, software and memberships', noun: 'subscription' },
    education: { title: 'Education Commitments', group: 'Learning', icon: 'school', note: 'Fees, transport, courses and renewals', noun: 'education commitment' },
    travel: { title: 'Trips', group: 'Travel', icon: 'luggage', note: 'Itineraries, bookings, packing, travellers and trip tasks', noun: 'trip' },
    transport: { title: 'Transportation', group: 'Travel', icon: 'bus-front', note: 'Flights, trains, buses, taxis, rentals, transfers and local transit', noun: 'transport booking' },
    stays: { title: 'Hotels & Stays', group: 'Travel', icon: 'bed-double', note: 'Hotels, homestays, check-in details, accessibility and cancellation dates', noun: 'stay' },
    travelProtection: { title: 'Travel Insurance & Documents', group: 'Travel', icon: 'shield-check', note: 'Travel cover, visas, passports, permits and emergency copies', noun: 'travel protection record' },
    festivals: { title: 'Festivals & Functions', group: 'Plans', icon: 'party-popper', note: 'Puja, guests, gifting and budgets', noun: 'festival plan' },
    emergency: { title: 'Emergency Readiness', group: 'Care', icon: 'siren', note: 'Contacts, blood groups and urgent instructions', noun: 'emergency record' },
    pets: { title: 'Pets & Animals', group: 'Care', icon: 'paw-print', note: 'Vaccines, food, care and appointments', noun: 'pet record' },
    digital: { title: 'Privacy, Devices & Backups', group: 'Web Life', icon: 'shield-check', note: 'Devices, privacy reviews, domains, backups and recovery readiness', noun: 'digital safety record' },
    webAccounts: { title: 'Email & Online Accounts', group: 'Web Life', icon: 'at-sign', note: 'Account ownership, purpose, recovery readiness and closure decisions — never passwords', noun: 'account record' },
    aiServices: { title: 'AI Services', group: 'Web Life', icon: 'sparkles', note: 'AI accounts, plan limits, renewals, data controls and intended use', noun: 'AI service' },
    webHabits: { title: 'Browsing & Screen Habits', group: 'Web Life', icon: 'history', note: 'Attention goals, screen boundaries, distracting sites and intentional routines', noun: 'online habit' },
    games: { title: 'Games & Apps', group: 'Web Life', icon: 'gamepad-2', note: 'Installed games, app purchases, child access, play limits and account ownership', noun: 'game or app' },
    watch: { title: 'Watch', group: 'Entertainment', icon: 'clapperboard', note: 'Films, series, documentaries and family watchlists', noun: 'watch item' },
    listen: { title: 'Listen', group: 'Entertainment', icon: 'headphones', note: 'Music, podcasts, audiobooks and family listening', noun: 'listening item' },
    reading: { title: 'Read', group: 'Entertainment', icon: 'book-open', note: 'Books, magazines, comics and leisure reading', noun: 'reading item' },
    play: { title: 'Play & Games', group: 'Entertainment', icon: 'dice-5', note: 'Board games, video games, hobbies and family play', noun: 'play item' },
    outings: { title: 'Outings & Events', group: 'Entertainment', icon: 'ticket', note: 'Cinema, concerts, sports, attractions, dining and family outings', noun: 'outing' },
    sustainability: { title: 'Sustainability', group: 'Household', icon: 'leaf', note: 'Water, energy, waste and garden goals', noun: 'sustainability record' },
    legacy: { title: 'Nominees & Legacy', group: 'Records', icon: 'scroll-text', note: 'Nominations, wills and succession readiness', noun: 'legacy record' }
  };

  const seedRecords = [
    { id: 'lr1', domain: 'health', title: 'Annual family health checks', category: 'Preventive care', owner: 'Family', provider: 'Family clinic', reference: '', amount: 0, dueDate: '2026-10-15', frequency: 'Yearly', status: 'pending', phone: '', notes: 'CBC, glucose, lipids, dental and eye checks.' },
    { id: 'lr2', domain: 'health', title: 'Blood group and allergy cards', category: 'Emergency health', owner: 'All members', provider: '', reference: '', amount: 0, dueDate: '2026-08-31', frequency: 'One time', status: 'active', phone: '', notes: 'Keep a copy in the emergency folder.' },
    { id: 'lr3', domain: 'documents', title: 'Passport renewal - Father', category: 'Passport', owner: 'Father', provider: 'Passport Seva', reference: 'Stored securely', amount: 1500, dueDate: '2027-02-10', frequency: 'As needed', status: 'active', phone: '', notes: 'Number intentionally masked in this planner.' },
    { id: 'lr4', domain: 'documents', title: 'Aadhaar address review', category: 'Aadhaar', owner: 'Family', provider: 'UIDAI', reference: 'Family document file', amount: 0, dueDate: '2026-12-01', frequency: 'Yearly', status: 'pending', phone: '', notes: 'Verify address and linked mobile numbers.' },
    { id: 'lr5', domain: 'bills', title: 'TANGEDCO Electricity Bill', category: 'Utility', owner: 'Mother', provider: 'TANGEDCO Kovaipudur', reference: 'Cons. No. 03-124-008', amount: 2450, dueDate: '2026-08-15', frequency: 'Bi-monthly', status: 'due', phone: '155333', notes: 'Electricity bill for Kovaipudur home.' },
    { id: 'lr5b', domain: 'bills', title: 'CCMC Water & Sewage Charge', category: 'Utility', owner: 'Mother', provider: 'Coimbatore Corporation', reference: 'Ward 88/89 Connection', amount: 850, dueDate: '2026-08-10', frequency: 'Monthly', status: 'pending', phone: '8190000200', notes: 'Monthly municipal water charges.' },
    { id: 'lr5c', domain: 'bills', title: 'LPG Gas Cylinder Refill', category: 'Utility', owner: 'Mother', provider: 'Indane Kovaipudur Gas', reference: 'Consumer No. 89742', amount: 950, dueDate: '2026-08-20', frequency: 'Monthly', status: 'pending', phone: '0422 2607333', notes: 'Domestic cooking gas refill.' },
    { id: 'lr5d', domain: 'bills', title: 'Airtel Xstream Fiber Internet', category: 'Communication', owner: 'Father', provider: 'Airtel Broadband', reference: 'Acct No. 10458921', amount: 1179, dueDate: '2026-08-05', frequency: 'Monthly', status: 'due', phone: '', notes: '200 Mbps fiber home internet.' },
    { id: 'lr5e', domain: 'bills', title: 'Airtel Family Postpaid Plan', category: 'Communication', owner: 'Father', provider: 'Airtel Mobile', reference: '4 Mobile Lines', amount: 1499, dueDate: '2026-08-12', frequency: 'Monthly', status: 'pending', phone: '', notes: 'Postpaid family plan for Father, Mother, Daughter, Son.' },
    { id: 'lr5f', domain: 'bills', title: 'Jaya Enclave Association Maintenance', category: 'Housing', owner: 'Mother', provider: 'Residents Association', reference: 'Flat / Villa Maintenance', amount: 2000, dueDate: '2026-08-01', frequency: 'Monthly', status: 'active', phone: '', notes: 'Security, street lighting, waste disposal and common upkeep.' },
    { id: 'lr6', domain: 'education', title: 'School & Tuition Term Fee', category: 'Education', owner: 'Father', provider: 'CBSE School & JEE Academy', reference: 'Grade 12 & Grade 7 Term Fee', amount: 38500, dueDate: '2026-09-05', frequency: 'Quarterly', status: 'pending', phone: '', notes: 'Tuition, lab, sports and transport fees.' },
    { id: 'lr7', domain: 'insurance', title: 'Star Health Family Optima Policy', category: 'Health Insurance', owner: 'Father', provider: 'Star Health Insurance', reference: 'Policy No. SH-892104', amount: 28400, dueDate: '2026-11-20', frequency: 'Yearly', status: 'active', phone: '', notes: '₹10 Lakh family floater cover including pre/post hospitalization.' },
    { id: 'lr8', domain: 'tax', title: 'Income Tax Return (ITR)', category: 'ITR', owner: 'Father', provider: 'Income Tax Department', reference: 'AY 2026-27', amount: 0, dueDate: '2027-07-31', frequency: 'Yearly', status: 'pending', phone: '', notes: 'Collect Form 16, AIS and investment proofs.' },
    { id: 'lr9', domain: 'property', title: 'CCMC Corporation Property Tax', category: 'Property Tax', owner: 'Father', provider: 'Coimbatore Corporation', reference: 'Assessment No. KP-8842', amount: 4800, dueDate: '2026-10-15', frequency: 'Half-yearly', status: 'pending', phone: '', notes: 'Bi-annual property tax for Kovaipudur residence.' },
    { id: 'lr10', domain: 'vehicles', title: 'Car & Two-Wheeler Insurance', category: 'Vehicle Insurance', owner: 'Father', provider: 'ICICI Lombard', reference: 'TN-37 Car & Scooter', amount: 14200, dueDate: '2026-09-18', frequency: 'Yearly', status: 'due', phone: '', notes: 'Zero-depreciation motor insurance policies.' },
    { id: 'lr11', domain: 'help', title: 'Housekeeping Staff Monthly Wages', category: 'Domestic Staff', owner: 'Mother', provider: 'Lakshmi', reference: 'Monthly Salary', amount: 8500, dueDate: '2026-08-05', frequency: 'Monthly', status: 'due', phone: '98765 00000', notes: 'House cleaning and kitchen assistance.' },
    { id: 'lr12', domain: 'subscriptions', title: 'OTT & Media Subscriptions', category: 'Entertainment', owner: 'Mother', provider: 'Netflix, Prime, Hotstar', reference: 'Digital subscriptions', amount: 1299, dueDate: '2026-08-28', frequency: 'Monthly', status: 'active', phone: '', notes: 'Family streaming and daily e-paper subscriptions.' }
  ];

  function ensure() {
    if (!Array.isArray(D.state.lifeRecords) || D.state.lifeRecords.length < 5) {
      D.state.lifeRecords = D.clone(seedRecords);
      D.save();
    }
    let migrated = false;
    D.state.lifeRecords.forEach(record => {
      if (!domains[record.domain]) { record.domain = 'documents'; migrated = true; }
      record.status = String(record.status || 'pending');
      record.amount = Math.max(0, +record.amount || 0);
    });
    if (migrated) D.save();
    return D.state.lifeRecords;
  }

  window.HM.life = { domains, seedRecords, ensure };
})();
