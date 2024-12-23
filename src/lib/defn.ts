
type StatCardProps = {
  title: string;
  icon: JSX.Element;
  total: number | string;
  stat: number;
  change: "positive" | "negative";
  duration: string;
};

type TableDataModel = {
  driver_name: string;
  driver_licence: string;
  car_plate: string;
  speed: string;
  penalty_count: number;
  city: string;
  damage: string;
};

export type { StatCardProps, TableDataModel };