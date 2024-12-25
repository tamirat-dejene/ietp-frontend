
type StatCardProps = {
  title: string;
  icon: JSX.Element;
  total: number | string;
  stat: number;
  change: "positive" | "negative";
  duration: string;
};

type ReportDataModel = {
  driver_name: string;
  driver_licence: string;
  car_plate: string;
  speed: string;
  penalty_count?: number;
  report_date: string;
  city: string;
};

type WebSocketData = {
  message: string;
  speed: number;
  licence_plate: string;
  display_duration: number;
};

type User = {
  email: string;
  password: string;
};

type ReportSortOption = "penalty" | "city" | "date" | "speed";

export type { StatCardProps, ReportDataModel, WebSocketData, User, ReportSortOption };