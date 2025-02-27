import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import LoginMessage from "@/app/_components/LoginMessage";
import { auth } from "@/app/_lib/auth";

async function Reservation({ cabin }) {
  const session = await auth();
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid min-h-[400px] grid-cols-2 border border-primary-800">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? <ReservationForm cabin={cabin} /> : <LoginMessage />}
    </div>
  );
}

export default Reservation;
