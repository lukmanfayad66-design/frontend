export type EquipmentCategory =
  | 'Excavators'
  | 'Dump Trucks'
  | 'Bulldozers'
  | 'Wheel Loaders'
  | 'Cranes'
  | 'Forklifts'
  | 'Skid Steers'
  | 'Telehandlers'
  | 'Concrete Mixers'
  | 'Logistics Trucks'
  | 'Other';

export type EquipmentStatus = 'available' | 'rented' | 'maintenance';

export type Listing = {
  id: string;
  title: string;
  category: EquipmentCategory;
  manufacturer: string;
  model: string;
  year: number;
  hourlyRate: number;
  dailyRate: number;
  weeklyRate: number;
  location: string;
  distanceMiles?: number;
  status: EquipmentStatus;
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  ownerName: string;
  ownerId: string;
  description: string;
  specs: Record<string, string>;
};

export type SearchResult = {
  query: string;
  location: string;
  category: EquipmentCategory | 'All';
};
