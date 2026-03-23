export type StablePanel =
  | 'investisseurpanel'
  | 'societegestionpanel'
  | 'personnelpanel'
  | 'adminpanel'
  | 'payspanel';

export function resolvePanelFromTypeusersId(typeusersId?: number | null): StablePanel {
  switch (typeusersId) {
    case 2:
      return 'societegestionpanel';
    case 5:
      return 'payspanel';
    case 0:
      return 'adminpanel';
    case 3:
      return 'personnelpanel';
    case 1:
    default:
      return 'investisseurpanel';
  }
}

export function resolveLegacyPanelHref(input: {
  typeusers_id?: number | null;
  denomination?: string | null;
  pays?: string | null;
  id?: number | string | null;
}) {
  const panel = resolvePanelFromTypeusersId(input.typeusers_id);

  if (panel === 'societegestionpanel') {
    return `/panel/societegestionpanel/pagehome?id=${input.denomination || ''}`;
  }

  if (panel === 'payspanel') {
    return `/payspanel/pagehome?id=${input.pays || ''}`;
  }

  if (panel === 'adminpanel') {
    return `/panel/admin/home?id=${input.id || ''}`;
  }

  if (panel === 'personnelpanel') {
    return `/personnelpanel/pagehome?id=${input.id || ''}`;
  }

  return `/panel/portefeuille/home?id=${input.id || ''}`;
}
