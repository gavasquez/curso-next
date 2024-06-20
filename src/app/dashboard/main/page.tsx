import { WidgetsGrid } from '@/components/dashboard/WidgetsGrid';


export const metadata = {
  title: 'Admin Dashboard',
  description: 'Seo Title'
}


export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Infomación general</span>
        <WidgetsGrid />
    </div>
  );
}