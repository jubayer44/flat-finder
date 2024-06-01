export type TFlat = {
    id: string;
    location: string;
    description: string;
    rentAmount: number;
    bedrooms: number;
    amenities?: string[];
    photos: string[];
    postedBy: string;
    createdAt: string;
    updatedAt: string;
};
export type TAddFlat = {
    location: string;
    description: string;
    rentAmount: number;
    bedrooms: number;
    amenities?: string[];
    photos: string[];
};
