type IRootProps = {
  menu: number;
  doctorsNearby: IDoctorNearby[];
  doctors: IDoctor[];
  clinics: IClinic[];
};

type IDoctorNearby = {
  id: number;
  imageUrl: string;
  doctor: {
    name: string;
    role: string;
  };
  openingDate: string;
  openingHour: string;
  distance: number;
};

type IDoctor = {
  id: number;
  imageUrl: string;
  doctor: {
    name: string;
    role: string;
  };
  openingDate: string;
  openingHour: string;
  availableDates: [];
  availableHours: [];
};
type IClinic = {
  id: number;
  imageUrl: string;
  name: string;
  specialty: string;
  openingDate: string;
  openingHour: string;
  doctors: number[];
};
export type { IRootProps, IDoctorNearby, IDoctor, IClinic };
