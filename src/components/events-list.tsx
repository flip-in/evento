import { EventoEvent } from '@/lib/types';
import EventCard from './event-card';

type EventsListProps = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventsListProps) {
  return (
    <section className='max-w-[1100] flex flex-wrap gap-10 justify-center px-20'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
