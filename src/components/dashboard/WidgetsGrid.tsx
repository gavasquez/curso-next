'use client'
import { useAppSelector } from '@/store';
import { SimpleWidget } from './SimpleWidget';
import { IoAccessibility, IoCardOutline } from 'react-icons/io5';


export const WidgetsGrid = () => {

  const count = useAppSelector(state => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 justify-center">
        <SimpleWidget 
          title={`${count}`}
          subTitle="Productos Agregados"
          label="Contador"
          icon={<IoCardOutline size={30} color="blue" />}
          href="/dashboard/counter"
        />
    </div>
  )
}