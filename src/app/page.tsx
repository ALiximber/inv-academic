import { redirect } from 'next/navigation';

// La pantalla de inicio ya no existe — la app arranca directo en el workspace
export default function HomePage() {
  redirect('/workspace');
}
