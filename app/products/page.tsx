import { redirect } from 'next/navigation';

// The standalone "Shop Online" catalog page has been retired - the
// per-brand pages (/brands/shashi, /brands/savaal, /brands/shashi-plus)
// now serve as the product catalog. Keep this route alive as a redirect
// so any old links/bookmarks still land somewhere useful.
export default function ProductsPage() {
  redirect('/brands');
}
