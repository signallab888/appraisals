import type regions from '../data/regions.json';

const CENTRAL = ['orlando','tampa','lakeland','kissimmee','sanford','lake-mary',
  'winter-park','ocala','daytona','melbourne','clermont','leesburg'];
const SOUTH = ['miami','fort-lauderdale','west-palm-beach','boca-raton','hialeah',
  'doral','coral-gables','naples','fort-myers','cape-coral'];
const NORTH = ['jacksonville','gainesville','tallahassee','pensacola','st-augustine'];

export type RegionKey = 'central-fl' | 'south-fl' | 'north-fl' | 'florida';

export function detectRegion(url: URL, headers: Headers): RegionKey {
  // Priority 1: explicit URL param ?city=orlando
  const city = url.searchParams.get('city')?.toLowerCase().replace(/\s+/g, '-');
  if (city) {
    if (CENTRAL.includes(city)) return 'central-fl';
    if (SOUTH.includes(city)) return 'south-fl';
    if (NORTH.includes(city)) return 'north-fl';
  }

  // Priority 2: Cloudflare geo header (when deployed)
  const cfCity = headers.get('cf-ipcity')?.toLowerCase().replace(/\s+/g, '-');
  if (cfCity) {
    if (CENTRAL.some(c => cfCity.includes(c))) return 'central-fl';
    if (SOUTH.some(c => cfCity.includes(c))) return 'south-fl';
    if (NORTH.some(c => cfCity.includes(c))) return 'north-fl';
  }

  // Default: generic Florida
  return 'florida';
}
